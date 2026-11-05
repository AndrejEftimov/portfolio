import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { scrollToHash } from '../utils/scroll.js'

const SCROLL_STORAGE_PREFIX = 'portfolio:scroll:'

function createRouteScrollKey(location) {
  return `${location.pathname}${location.search}`
}

function storageKey(routeKey) {
  return `${SCROLL_STORAGE_PREFIX}${routeKey}`
}

function readStoredPosition(routeKey) {
  try {
    const value = window.sessionStorage.getItem(storageKey(routeKey))
    if (value === null) return 0

    const position = Number(value)
    return Number.isFinite(position) && position >= 0 ? position : 0
  } catch {
    return 0
  }
}

function writeStoredPosition(routeKey, position) {
  try {
    window.sessionStorage.setItem(storageKey(routeKey), String(Math.max(0, position)))
  } catch {
    // Scroll restoration should remain non-blocking if storage is unavailable.
  }
}

function ScrollManager() {
  const location = useLocation()
  const routeKey = createRouteScrollKey(location)
  const activeRouteKeyRef = useRef(routeKey)
  const isRestoringRef = useRef(false)

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    const saveActiveRoutePosition = () => {
      if (isRestoringRef.current) return
      writeStoredPosition(activeRouteKeyRef.current, window.scrollY)
    }

    window.addEventListener('scroll', saveActiveRoutePosition, { passive: true })
    window.addEventListener('pagehide', saveActiveRoutePosition)

    return () => {
      saveActiveRoutePosition()
      window.removeEventListener('scroll', saveActiveRoutePosition)
      window.removeEventListener('pagehide', saveActiveRoutePosition)
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const previousRouteKey = activeRouteKeyRef.current

    if (previousRouteKey !== routeKey) {
      writeStoredPosition(previousRouteKey, window.scrollY)
    }

    const savedPosition = readStoredPosition(routeKey)

    isRestoringRef.current = true
    activeRouteKeyRef.current = routeKey

    if (location.hash) {
      scrollToHash(location.hash)
    } else {
      window.scrollTo({ top: savedPosition, left: 0, behavior: 'auto' })
    }

    const frame = window.requestAnimationFrame(() => {
      isRestoringRef.current = false
    })

    return () => {
      window.cancelAnimationFrame(frame)
      isRestoringRef.current = false
    }
  }, [location.hash, routeKey])

  return null
}

export default ScrollManager

import { SCROLL } from '../constants/scroll.js'

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3)
}

export function scrollToPosition(targetY, { duration = SCROLL.anchorDurationMs } = {}) {
  const startY = window.scrollY
  const distance = targetY - startY

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || duration <= 0) {
    window.scrollTo({ top: targetY, behavior: 'auto' })
    return
  }

  const startTime = performance.now()

  function step(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutCubic(progress)

    window.scrollTo(0, startY + distance * easedProgress)

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

export function scrollToHash(hash, options = {}) {
  if (!hash) {
    return false
  }

  const id = decodeURIComponent(hash.replace(/^#/, ''))
  const target = document.getElementById(id)

  if (!target) {
    return false
  }

  const offset = options.offset ?? SCROLL.anchorOffsetPx
  const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset)

  scrollToPosition(targetY, options)
  return true
}

export function handleSamePageAnchor(event, hash, options = {}) {
  event.preventDefault()

  if (scrollToHash(hash, options)) {
    window.history.replaceState(window.history.state, '', hash)
  }
}

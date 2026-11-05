import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import ThemeToggle from '../shared/components/ThemeToggle.jsx'
import ScrollManager from '../shared/routing/ScrollManager.jsx'
import { APP } from '../shared/constants/app.js'
import { NAV_ITEMS } from '../shared/constants/navigation.js'
import { ROUTES } from '../shared/routing/routes.js'

function AppShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const mobileNavRef = useRef(null)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    mobileNavRef.current?.querySelector('a')?.focus()

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return

      setIsMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <div className="app-shell">
      <ScrollManager />
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="topbar">
        <div className="page-container topbar__inner">
          <NavLink className="brand" to={ROUTES.home} onClick={closeMenu}>
            <span className="brand__name"><span className="brand__mark" aria-hidden="true" />{APP.name}</span>
            <span className="brand__role">{APP.navRole}</span>
          </NavLink>

          <div className="topbar__actions">
            <nav className="topbar__nav" aria-label="Primary navigation">
              {NAV_ITEMS.map(({ label, to, end }) => (
                <NavLink
                  key={to}
                  className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
                  to={to}
                  end={end}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <ThemeToggle />

            <button
              ref={menuButtonRef}
              className="icon-button topbar__menu-toggle"
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={`${isMenuOpen ? 'Close' : 'Open'} navigation menu`}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            ref={mobileNavRef}
            id="mobile-navigation"
            className="mobile-nav page-container"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map(({ label, to, end }) => (
              <NavLink
                key={to}
                className={({ isActive }) => `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`}
                to={to}
                end={end}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main id="main-content" className="page-container page-content" tabIndex="-1">
        <Outlet />
      </main>
    </div>
  )
}

export default AppShell

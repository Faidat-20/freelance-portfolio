import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@constants'
import { getPlatformLinks } from '../../utils/platform'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const platform = getPlatformLinks()

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    desktopQuery.addEventListener('change', closeOnDesktop)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      desktopQuery.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  const externalProps = platform.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <header className="portfolio-nav">
      <nav className="portfolio-shell portfolio-nav-inner" aria-label="Main navigation">
        <a
          href="#hero"
          className="portfolio-brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Faidat — home"
        >
          <img
            src="/brand/faidat-symbol.svg"
            alt=""
            className="portfolio-logo"
          />
          <span className="portfolio-brand-name">Faidat.</span>
        </a>

        <ul className="portfolio-desktop-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <a
          href={platform.href}
          {...externalProps}
          className="portfolio-nav-cta"
        >
          {platform.navLabel}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="portfolio-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="portfolio-mobile-menu"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        id="portfolio-mobile-menu"
        className="portfolio-mobile-menu"
        hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}

        <a
          href={platform.href}
          {...externalProps}
          onClick={() => setMenuOpen(false)}
        >
          {platform.navLabel} ↗
        </a>
      </div>
    </header>
  )
}
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work together', href: '#cta' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const query = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => {
      if (query.matches) setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    query.addEventListener('change', closeOnDesktop)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      query.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[#9A8C98]/50 bg-[#F2E9E4] text-[#22223B]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-18 max-w-300 items-center justify-between gap-6 px-5 md:px-8 xl:px-0"
      >
        <a
          href="#hero"
          aria-label="Faidat — home"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-2.5"
        >
          <svg
            viewBox="0 0 80 100"
            className="h-8 w-6 shrink-0"
            aria-hidden="true"
          >
            <path fill="#4A4E69" d="M0 26 22 2H78L60 26Z" />
            <path fill="#4A4E69" d="M0 32H23V76L0 98Z" />
            <path fill="#9A8C98" d="M29 32H60V52H29Z" />
          </svg>

          <span className="font-editorial text-[30px] font-bold tracking-[-0.04em]">
            Faidat<span className="text-[#4A4E69]">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-editorial text-base font-bold underline-offset-8 hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-[#9A8C98] md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-[#9A8C98]/40 px-5 py-3 md:hidden"
      >
        <div className="flex flex-col">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm hover:bg-[#C9ADA7]/30"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, UPWORK_URL } from '@constants'
import { scrollToSection } from '@utils/helpers'
import { gsap } from '@utils/gsap'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const progressRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0
      if (progressRef.current) {
        progressRef.current.style.width = progress + '%'
      }
      setScrolled(scrollY > 20)
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -60, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.2,
    })
  }, [])

  const handleNav = (href) => {
    scrollToSection(href)
    setMenuOpen(false)
  }

  return (
    <>
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-[2px] bg-indigo-500 z-[60]"
        style={{ width: '0%' }}
        aria-hidden="true"
      />
      <header
        ref={navRef}
        className={scrolled ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/10' : 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1a1f35] border-b border-white/[0.08]'}
      >
        <nav className="container-custom flex items-center justify-between h-16 md:h-[72px]">
          <button
            onClick={() => handleNav('#hero')}
            className="font-display font-extrabold text-lg text-white tracking-tight focus-visible:outline-none"
            aria-label="Back to top"
          >
            Faidat E<span className="text-indigo-400">.</span>
          </button>
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className={active === id ? 'text-sm text-white font-medium' : 'text-sm text-slate-400 hover:text-white transition-colors'}
                  >
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-3">
            
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm hidden sm:inline-flex"
            >
              Hire on Upwork
            </a>
            <button
              onClick={() => setMenuOpen(menuOpen ? false : true)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-[#0F172A] border-t border-white/[0.06] px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="text-left text-base text-slate-300 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
            
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit mt-2"
            >
              Hire on Upwork
            </a>
          </div>
        )}
      </header>
    </>
  )
}

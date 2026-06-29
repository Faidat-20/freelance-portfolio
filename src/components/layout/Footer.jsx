import { NAV_LINKS, UPWORK_URL } from '@constants'
import { scrollToSection } from '@utils/helpers'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/[0.06]">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <button
            onClick={() => scrollToSection('#hero')}
            className="font-display font-extrabold text-xl text-white tracking-tight"
          >
            Faidat E<span className="text-indigo-400">.</span>
          </button>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Faidat Egberinde. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Available for freelance projects worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
import { ArrowUp } from 'lucide-react'

const LINKS = [
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F2E9E4] px-5 text-[#22223B] md:px-8">
      <div className="mx-auto max-w-300 border-t border-[#9A8C98]/70 py-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="#hero"
              aria-label="Faidat — back to top"
              className="inline-flex items-center gap-2.5"
            >
              <svg
                viewBox="0 0 80 100"
                className="h-7 w-5 shrink-0"
                aria-hidden="true"
              >
                <path fill="#4A4E69" d="M0 26 22 2H78L60 26Z" />
                <path fill="#4A4E69" d="M0 32H23V76L0 98Z" />
                <path fill="#9A8C98" d="M29 32H60V52H29Z" />
              </svg>

              <span className="font-editorial text-2xl font-bold tracking-[-0.04em]">
                Faidat.
              </span>
            </a>

            <p className="text-xs leading-6 text-[#4A4E69]">
              Full-stack developer · Building useful web applications
            </p>
          </div>

          <a
            href="#hero"
            className="inline-flex min-h-11 items-center gap-2 self-start text-xs font-semibold underline-offset-4 hover:underline md:self-auto"
          >
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-[#C9ADA7]/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-6 text-[#4A4E69]">
            © {new Date().getFullYear()} Faidat Egberinde.
            All rights reserved.
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-9 items-center text-[11px] text-[#4A4E69] underline-offset-4 hover:text-[#22223B] hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
import { useLayoutEffect, useRef } from 'react'
import { Database } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
} from 'react-icons/si'
import { gsap } from '@utils/gsap'

const PRIMARY_TOOLS = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'SQL', icon: Database },
]

const OTHER_TOOLS = [
  'JavaScript',
  'PHP',
  'FastAPI',
  'MongoDB',
  'MySQL',
  'Tailwind CSS',
  'GSAP',
  'Git',
  'GitHub',
  'Postman',
  'REST APIs',
  'API Integration',
  'React Query',
  'SWR',
  'GitHub Actions',
  'AWS',
  'Vercel',
  'Render',
  'Flutterwave',
  'Paystack',
]

export default function Skills() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.utils.toArray('[data-skill-reveal]').forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 18,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 92%',
              once: true,
            },
          })
        })
      }, sectionRef)

      return () => context.revert()
    })

    return () => media.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="min-w-0 text-[#22223B]"
    >
      <div data-skill-reveal className="mb-5 flex items-center gap-4">
        <h2
          id="skills-heading"
          className="font-editorial text-3xl font-bold tracking-[-0.04em]"
        >
          Tech I work with
        </h2>

        <span
          aria-hidden="true"
          className="h-px flex-1 bg-[#9A8C98]"
        />
      </div>

      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
        {PRIMARY_TOOLS.map((tool) => (
          <li
            key={tool.name}
            data-skill-reveal
            className="flex min-h-23 flex-col items-center justify-center gap-3 rounded-lg border border-[#C9ADA7] px-2 py-4 transition-colors hover:border-[#4A4E69] hover:bg-[#C9ADA7]/20"
          >
            <span
              aria-hidden="true"
              className="flex h-8 items-center justify-center text-[#4A4E69]"
            >
              <tool.icon size={30} />
            </span>

            <span className="text-center text-[10px] font-medium">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>

      <details className="group mt-5 border-t border-[#C9ADA7] pt-3">
        <summary className="cursor-pointer py-2 text-xs font-semibold text-[#4A4E69] underline-offset-4 hover:underline">
          More tools & integrations
        </summary>

        <ul className="mt-3 flex flex-wrap gap-2">
          {OTHER_TOOLS.map((tool) => (
            <li
              key={tool}
              className="rounded-md bg-[#C9ADA7]/30 px-2.5 py-1.5 text-[11px] text-[#22223B]"
            >
              {tool}
            </li>
          ))}
        </ul>
      </details>
    </section>
  )
}
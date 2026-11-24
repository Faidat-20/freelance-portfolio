import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from '@utils/gsap'

const VALUES = [
  {
    title: 'Code you can build on',
    description:
      'Organised, maintainable code that makes future updates easier.',
  },
  {
    title: 'Your business comes first',
    description:
      'We start with what your users need and what the software needs to achieve.',
  },
  {
    title: 'You stay in the loop',
    description:
      'Clear updates on progress, decisions and anything that affects delivery.',
  },
  {
    title: 'Care through to launch',
    description:
      'Testing, deployment and a clear handover are part of the work.',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.from('[data-about-intro]', {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-about-heading]',
            start: 'top 88%',
            once: true,
          },
        })

        gsap.utils.toArray('[data-about-value]').forEach((row) => {
          gsap.from(row, {
            opacity: 0,
            y: 20,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
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
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="bg-[#C9ADA7] py-16 text-[#22223B] md:py-20 lg:py-24"
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1200px] md:w-[calc(100%-64px)] min-[1001px]:w-[calc(100%-96px)]">
        <div className="mb-10 flex items-center gap-4 md:mb-14">
          <span className="text-[11px] font-semibold tracking-[0.16em] text-[#4A4E69]">
            01 / ABOUT
          </span>
          <span className="h-px flex-1 bg-[#9A8C98]" aria-hidden="true" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p
              data-about-intro
              className="mb-4 text-sm font-medium text-[#22223B]"
            >
              The developer behind the work
            </p>

            <h2
              id="about-heading"
              data-about-heading
              data-about-intro
              className="max-w-xl text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-[-0.05em]"
            >
              I care about how it looks.
              <span className="block text-[#4A4E69]">
                And how it works.
              </span>
            </h2>

            <div className="mt-7 max-w-lg space-y-5 text-[15px] leading-8 text-[#22223B]">
              <p data-about-intro>
                I’m Faidat, a full-stack developer. I build the parts your
                customers see and the systems that keep everything running —
                from responsive interfaces to databases, APIs and payments.
              </p>

              <p data-about-intro>
                My work includes e-commerce platforms, dashboards and custom
                web applications. I enjoy turning a complicated requirement
                into something straightforward to use and easy to maintain.
              </p>
            </div>

            <a
              data-about-intro
              href="#work"
              className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#4A4E69] pb-1 text-sm font-semibold text-[#22223B] transition-colors hover:text-[#4A4E69]"
            >
              Take a look at my work
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#22223B]">
              What working together looks like
            </h3>

            <ol className="border-t border-[#9A8C98]">
              {VALUES.map(({ title, description }, index) => (
                <li
                  key={title}
                  data-about-value
                  className="group grid grid-cols-[28px_1fr] gap-4 border-b border-[#9A8C98] py-6"
                >
                  <span className="pt-1 font-mono text-xs text-[#4A4E69]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h4 className="mb-2 text-base font-bold tracking-[-0.02em] transition-colors group-hover:text-[#4A4E69]">
                      {title}
                    </h4>

                    <p className="max-w-sm text-sm leading-7 text-[#22223B]">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
import { useLayoutEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from '@utils/gsap'
import { getPlatformLinks } from '../../utils/platform'
import HeroShowcase from './HeroShowcase'

export default function Hero() {
  const sectionRef = useRef(null)
  const platform = getPlatformLinks()

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.from('[data-hero-reveal]', {
          opacity: 0,
          y: 22,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
        })
      }, sectionRef)

      return () => context.revert()
    })

    return () => media.revert()
  }, [])

  const externalProps = platform.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="overflow-hidden bg-[#F2E9E4] text-[#22223B]"
    >
      <div className="mx-auto grid max-w-300 items-center gap-10 px-5 py-10 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-12 lg:gap-14 xl:px-0">
        <div>
          <div
            data-hero-reveal
            className="mb-5 flex items-center gap-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">
              Full-stack developer
            </p>
            <span
              aria-hidden="true"
              className="h-px w-12 bg-[#9A8C98]"
            />
          </div>

          <h1
            id="hero-heading"
            className="font-editorial text-[clamp(2.5rem,4.8vw,4.3rem)] font-bold leading-[1.06] tracking-[-0.045em]"
          >
            <span data-hero-reveal className="block">
              Your next idea,
            </span>
            <span data-hero-reveal className="block">
              brought to life.
            </span>
          </h1>

          <p
            data-hero-reveal
            className="mt-6 max-w-117.5 text-base leading-8 text-[#4A4E69]"
          >
            I’m Faidat Egberinde, a full-stack developer building websites,
            online stores and custom web applications. I can handle the
            complete build or help improve an existing project.
          </p>

          <div
            data-hero-reveal
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-md bg-[#22223B] px-6 text-sm font-semibold text-[#F2E9E4] transition-colors hover:bg-[#4A4E69]"
            >
              Explore my work
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:translate-x-1"
              />
            </a>

            <a
              href={platform.external ? platform.href : '#cta'}
              {...externalProps}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#22223B] px-6 text-sm font-semibold transition-colors hover:bg-[#C9ADA7]/35"
            >
              {platform.external ? platform.navLabel : 'Let’s work together'}
            </a>
          </div>
        </div>

        <HeroShowcase />
      </div>
    </section>
  )
}
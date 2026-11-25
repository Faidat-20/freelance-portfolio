import { useLayoutEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from '@utils/gsap'
import { getPlatformLinks } from '../../utils/platform'

export default function CTA() {
  const sectionRef = useRef(null)
  const platform = getPlatformLinks()

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.from('[data-cta-reveal]', {
          opacity: 0,
          y: 22,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            once: true,
          },
        })
      }, sectionRef)

      return () => context.revert()
    })

    return () => media.revert()
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className="bg-[#F2E9E4] px-5 pb-12 pt-3 text-[#22223B] md:px-8 md:pb-16"
    >
      <div
        data-cta-reveal
        className="mx-auto flex max-w-300 flex-col items-start justify-between gap-6 rounded-2xl bg-[#C9ADA7] px-6 py-8 md:flex-row md:items-center md:gap-10 md:px-10 md:py-10"
      >
        <div className="max-w-2xl">
          <h2
            id="cta-heading"
            className="font-editorial text-3xl font-bold leading-tight tracking-[-0.04em] md:text-4xl"
          >
            Have a project in mind?
          </h2>

          <p className="mt-3 text-sm leading-7">
            Let’s discuss what you need and how I can help build it.
          </p>

          {!platform.external && (
            <p className="mt-2 max-w-lg text-sm leading-7">
              Send me a message on the platform where you found
              my portfolio, with a brief outline of your project.
            </p>
          )}
        </div>

        {platform.external ? (
          <a
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 rounded-md bg-[#22223B] px-6 text-sm font-semibold text-[#F2E9E4] transition-colors hover:bg-[#4A4E69]"
          >
            {platform.navLabel}
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover:translate-x-1"
            />
          </a>
        ) : (
          <a
            href="#services"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 rounded-md bg-[#22223B] px-6 text-sm font-semibold text-[#F2E9E4] transition-colors hover:bg-[#4A4E69]"
          >
            Explore my services
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover:translate-x-1"
            />
          </a>
        )}
      </div>
    </section>
  )
}
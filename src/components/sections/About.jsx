import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'

export default function About() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.from('[data-about-reveal]', {
          opacity: 0,
          y: 20,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
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
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="min-w-0 text-[#22223B]"
    >
      <div data-about-reveal className="mb-5 flex items-center gap-4">
        <h2
          id="about-heading"
          className="font-editorial text-3xl font-bold tracking-[-0.04em]"
        >
          About me
        </h2>

        <span
          aria-hidden="true"
          className="h-px flex-1 bg-[#9A8C98]"
        />
      </div>

      <div className="space-y-4 text-sm leading-7 text-[#4A4E69]">
        <p data-about-reveal>
          I enjoy taking a complicated requirement and turning it into
          something straightforward to use. My work covers frontend
          interfaces, backend systems, databases and API integrations.
        </p>

        <p data-about-reveal>
          I’ve worked on learning platforms, online stores and data
          dashboards. Whether I’m building a frontend or handling the
          complete application, I focus on maintainable code, practical
          solutions and clear updates throughout the project.
        </p>
      </div>

      <p
        data-about-reveal
        className="mt-5 border-l-2 border-[#C9ADA7] pl-4 font-editorial text-lg italic leading-7"
      >
        Thoughtful interfaces. Reliable systems.
      </p>
    </section>
  )
}
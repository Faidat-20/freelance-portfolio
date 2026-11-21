import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { gsap } from '@utils/gsap'
import { getPlatformLinks } from '../../utils/platform'

const TECHNOLOGIES = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python']

export default function Hero() {
  const sectionRef = useRef(null)
  const platform = getPlatformLinks()

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.from('[data-hero-reveal]', {
          opacity: 0,
          y: 24,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
        })

        gsap.from('.portfolio-photo-frame', {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 1.15,
          delay: 0.15,
          ease: 'power3.inOut',
        })

        gsap.from('.portfolio-photo', {
          scale: 1.06,
          duration: 1.4,
          ease: 'power3.out',
        })

        gsap.from('.portfolio-photo-caption', {
          opacity: 0,
          y: 12,
          duration: 0.7,
          delay: 0.8,
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
    <section id="hero" ref={sectionRef} className="portfolio-hero">
      <div className="portfolio-shell">
        <div className="portfolio-hero-grid">
          <div className="portfolio-hero-copy">
            <p className="portfolio-eyebrow" data-hero-reveal>
              <span aria-hidden="true" />
              Independent full-stack developer
            </p>

            <p className="portfolio-intro" data-hero-reveal>
              Hi, I’m Faidat Egberinde.
            </p>

            <h1 className="portfolio-headline">
              <span data-hero-reveal>Websites with</span>
              <span data-hero-reveal>purpose.</span>
              <span className="portfolio-accent" data-hero-reveal>
                Apps that work.
              </span>
            </h1>

            <p className="portfolio-description" data-hero-reveal>
              I turn business ideas into websites and web applications —
              building everything from the interface to the systems behind it.
            </p>

            <div className="portfolio-hero-actions" data-hero-reveal>
              <a href="#work" className="portfolio-button portfolio-button-primary">
                Explore my work
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>

              <a
                href={platform.href}
                {...externalProps}
                className="portfolio-button portfolio-button-text"
              >
                {platform.heroLabel}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="portfolio-portrait">
            <div className="portfolio-photo-frame">
              <img
                src="/images/faidat.png"
                alt="Faidat Egberinde"
                fetchPriority="high"
                className="portfolio-photo"
              />
            </div>

            <figcaption className="portfolio-photo-caption">
              <span>Faidat Egberinde</span>
              <span>Developer & problem solver</span>
            </figcaption>
          </figure>
        </div>

        <div className="portfolio-hero-bottom" data-hero-reveal>
          <div className="portfolio-tech">
            <span className="portfolio-tech-label">My toolkit</span>
            <ul aria-label="Technologies I use">
              {TECHNOLOGIES.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <a href="#work" className="portfolio-scroll-link">
            Discover my work
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
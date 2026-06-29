import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@utils/gsap'

const VALUES = [
  {
    title: 'Clean Architecture',
    description:
      'Maintainable, scalable code that is easy to understand and extend.',
  },
  {
    title: 'Business Focus',
    description:
      'Every feature is built to solve a real business problem and deliver measurable value.',
  },
  {
    title: 'Clear Communication',
    description:
      'Regular updates, transparent timelines, and proactive communication throughout the project.',
  },
  {
    title: 'Reliable Delivery',
    description:
      'I deliver what I commit to and communicate early whenever priorities change.',
  },
]

export default function About() {
  const tagRef     = useRef(null)
  const headingRef = useRef(null)
  const bioRef     = useRef(null)
  const cardsRef   = useRef(null)

  useEffect(() => {
    gsap.set([tagRef.current, headingRef.current, bioRef.current], { opacity: 1, y: 0 })
    gsap.set(cardsRef.current.children, { opacity: 1, y: 0 })

    gsap.from(tagRef.current, {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: tagRef.current, start: 'top 85%', once: true },
    })
    gsap.from(headingRef.current, {
      opacity: 0, y: 30, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
    })
    gsap.from(bioRef.current, {
      opacity: 0, y: 24, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: bioRef.current, start: 'top 85%', once: true },
    })
    gsap.from(cardsRef.current.children, {
      opacity: 0, y: 30, duration: 0.6, ease: 'power2.out', stagger: 0.12,
      scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true },
    })
  }, [])

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — About */}
          <div>
            <span ref={tagRef} className="section-label">
              About
            </span>

            <h2
              ref={headingRef}
              className="font-display font-extrabold text-[#0F172A] mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Building software that solves real business problems.
            </h2>

            <div
              ref={bioRef}
              className="space-y-5 text-slate-600"
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
              }}
            >
              <p>
                I'm a Full-Stack Developer who builds scalable web applications from
                backend architecture and APIs to responsive, intuitive user interfaces.
                My focus is creating software that's reliable, maintainable, and built
                to support real business growth.
              </p>

              <p>
                I've developed e-commerce platforms, SaaS dashboards, admin systems, and
                custom web applications while integrating payment gateways such as
                Flutterwave and Paystack. I value clean code, clear communication, and
                delivering solutions that continue to perform long after launch.
              </p>
            </div>

            {/* Mini Workflow */}
            <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-5">
                How I work
              </p>

              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div>✓ Discovery & Planning</div>
                <div>✓ UI/UX Design</div>
                <div>✓ Full-Stack Development</div>
                <div>✓ Testing & Deployment</div>
                <div>✓ Ongoing Support</div>
              </div>
            </div>
          </div>

          {/* Right — What you can expect */}
          <div>

            <div className="mb-8">
              <h3
                className="font-display font-bold text-[#0F172A] mb-2"
                style={{
                  fontSize: '1.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                What you can expect
              </h3>

              <p className="text-slate-500">
                Here's what it's like working with me on every project.
              </p>
            </div>

            <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
              {VALUES.map((value) => (
                <div key={value.title} className="card p-6">
                  <h3
                    className="font-display font-bold text-[#0F172A] mb-3"
                    style={{
                      fontSize: '1rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="text-sm text-slate-500"
                    style={{ lineHeight: 1.7 }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

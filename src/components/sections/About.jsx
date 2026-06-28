import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@utils/gsap'

const VALUES = [
  {
    title: 'Clean Architecture',
    description: 'I write code that the next developer — or future me — can read, understand, and extend without frustration.',
  },
  {
    title: 'Business Thinking',
    description: 'I build features that solve real problems, not just features that look good in a spec. Every decision is weighed against business value.',
  },
  {
    title: 'Clear Communication',
    description: 'I give regular updates, ask the right questions early, and flag issues before they become problems.',
  },
  {
    title: 'Reliability',
    description: 'I deliver what I commit to. If something changes, I communicate it immediately — not on the deadline.',
  },
]

export default function About() {
  const tagRef     = useRef(null)
  const headingRef = useRef(null)
  const bioRef     = useRef(null)
  const cardsRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — bio */}
          <div>
            <span ref={tagRef} className="section-label">About</span>
            <h2
              ref={headingRef}
              className="font-display font-extrabold text-[#0F172A] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              I build software that works — not just software that ships.
            </h2>
            <div
              ref={bioRef}
              className="space-y-4 text-slate-600"
              style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              <p>
                I'm a full-stack developer with 3–4 years of experience designing and
                building complete web applications — from the database schema to the
                interface your users actually interact with.
              </p>
              <p>
                My background spans e-commerce platforms, SaaS dashboards, REST APIs,
                and admin systems. I've worked with Nigerian businesses integrating
                local payment gateways like Flutterwave and Paystack, and I understand
                the unique challenges of building for emerging markets.
              </p>
              <p>
                I care deeply about writing maintainable code, communicating clearly,
                and delivering software that solves real business problems — not just
                ticking feature boxes.
              </p>
            </div>

            {/* Currently learning */}
            <div className="mt-8 p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl">
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">
                Currently levelling up
              </p>
              <p className="text-sm text-slate-600">
                Docker · AWS fundamentals
              </p>
            </div>
          </div>

          {/* Right — values */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {VALUES.map((value) => (
              <div key={value.title} className="card p-6">
                <h3
                  className="font-display font-bold text-[#0F172A] mb-3"
                  style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500" style={{ lineHeight: 1.7 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
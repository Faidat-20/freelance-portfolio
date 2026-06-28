import { useEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'
import { PROCESS_STEPS } from '@data/process'

export default function Process() {
  const tagRef     = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const stepsRef   = useRef(null)

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
      gsap.from(subRef.current, {
        opacity: 0, y: 20, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: subRef.current, start: 'top 85%', once: true },
      })
      gsap.from(stepsRef.current.children, {
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: stepsRef.current, start: 'top 80%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="process" className="section-padding bg-[#0F172A]">
      <div className="container-custom">

        <div className="max-w-2xl mb-16">
          <span ref={tagRef} className="section-label">How I work</span>
          <h2
            ref={headingRef}
            className="font-display font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            A process built to eliminate surprises.
          </h2>
          <p
            ref={subRef}
            className="text-slate-400"
            style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
          >
            Every project follows a structured workflow — so you always know
            what's happening, what's next, and what to expect.
          </p>
        </div>

        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="card-dark p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-display font-extrabold text-indigo-400"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}
                >
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>
              <h3
                className="font-display font-bold text-white mb-2"
                style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4" style={{ lineHeight: 1.7 }}>
                {step.description}
              </p>
              <div className="pt-3 border-t border-white/[0.06]">
                <span className="text-xs text-indigo-400 font-medium">
                  Deliverable: {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
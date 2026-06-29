import { useEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'
import { UPWORK_URL } from '@constants'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const btnRef     = useRef(null)
  const noteRef    = useRef(null)

  useEffect(() => {
    gsap.set([headingRef.current, subRef.current, btnRef.current, noteRef.current], { opacity: 1, y: 0 })
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
      })
      gsap.from(subRef.current, {
        opacity: 0, y: 24, duration: 0.7, ease: 'power2.out', delay: 0.1,
        scrollTrigger: { trigger: subRef.current, start: 'top 85%', once: true },
      })
      gsap.from(btnRef.current, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', delay: 0.2,
        scrollTrigger: { trigger: btnRef.current, start: 'top 90%', once: true },
      })
      gsap.from(noteRef.current, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', delay: 0.3,
        scrollTrigger: { trigger: noteRef.current, start: 'top 90%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="section-padding bg-[#0F172A] relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 text-center">

        <h2
          ref={headingRef}
          className="font-display font-extrabold text-white mx-auto mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            maxWidth: '14ch',
          }}
        >
          Ready to build your next product?
        </h2>

        <p
          ref={subRef}
          className="text-slate-400 mx-auto mb-10"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            lineHeight: 1.75,
            maxWidth: '42ch',
          }}
        >
          Let's discuss your project and turn your idea into a production-ready application.
        </p>

        <div ref={btnRef} className="flex flex-wrap items-center justify-center gap-4 mb-10">
          
          <a
            href='https://www.upwork.com/freelancers/~01e4f8c78897674cc0?viewMode=1'
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            Hire me on Upwork
            <ArrowRight size={18} />
          </a>
        </div>

        <p
          ref={noteRef}
          className="text-sm text-slate-600"
        >
          Usually replies within 24 hours.
        </p>

      </div>
    </section>
  )
}
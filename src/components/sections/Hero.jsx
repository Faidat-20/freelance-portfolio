import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

import { gsap } from '@utils/gsap'
import { scrollToSection } from '@utils/helpers'

const STATS = [
  { value: 15, suffix: '+', label: 'Projects Built' },
  { value: 3,  suffix: ' yrs', label: 'Experience' },
  { value: 10,  suffix: '+', label: ' clients' },
]

export default function Hero() {
  const sectionRef  = useRef(null)
  const badgeRef    = useRef(null)
  const headingRef  = useRef(null)
  const subRef      = useRef(null)
  const btnsRef     = useRef(null)
  const statsRef    = useRef(null)
  const marqueeRef  = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    gsap.set([badgeRef.current, headingRef.current, subRef.current, btnsRef.current, statsRef.current], { opacity: 1 })
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.from(badgeRef.current, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power2.out',
      })
      .from(headingRef.current.children, {
        opacity: 0, y: 50, duration: 0.9, ease: 'power2.out', stagger: 0.12,
      }, '-=0.2')
      .from(subRef.current, {
        opacity: 0, y: 24, duration: 0.7, ease: 'power2.out',
      }, '-=0.4')
      .from(btnsRef.current.children, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', stagger: 0.1,
      }, '-=0.3')
      .from(statsRef.current.children, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', stagger: 0.1,
      }, '-=0.2')

      counterRefs.current.forEach((el, i) => {
        if (!el) return
        const stat = STATS[i]
        const obj  = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 1.5,
          ease: 'power2.out',
          delay: 1.2 + i * 0.1,
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0F172A] flex flex-col justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#818CF8 1px, transparent 1px), linear-gradient(90deg, #818CF8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 pt-28 pb-16">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Availability badge */}
            <div ref={badgeRef} className="mb-8">
              <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] text-slate-300 text-xs font-medium px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance Work
              </span>
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              className="font-display font-extrabold text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1.12 }}
            >
              <span className="block text-lg md:text-xl font-normal text-slate-400 mb-2" style={{ letterSpacing: '-0.01em' }}>
                Hi, I'm Faidat
              </span>
              <span className="block">Full-Stack Developer</span>
              <span className="block">
                building <span className="text-indigo-400">complete</span> web
              </span>
              <span className="block">applications.</span>
            </h1>

            {/* Subheading */}
            <p
              ref={subRef}
              className="text-slate-400 mb-10 max-w-xl"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.75 }}
            >
              I build scalable full-stack web applications from database architecture to polished user interfaces helping businesses launch faster with software built to grow.
            </p>

            {/* CTA buttons */}
            <div ref={btnsRef} className="flex flex-row flex-nowrap items-center gap-4 mb-16">
              <button
                onClick={() => scrollToSection('#work')}
                className="btn-ghost"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-ghost"
              >
                My Services
              </button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-16"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label}>
                  <div
                    ref={(el) => (counterRefs.current[i] = el)}
                    className="font-display font-extrabold text-white mb-1"
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', letterSpacing: '-0.03em' }}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center lg:self-start">
            <img
              src="/images/faidat.png"
              alt="Faidat Egberinde"
              className="w-[420px] rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { UPWORK_URL } from '@constants'
import { gsap, ScrollTrigger } from '@utils/gsap'
import { scrollToSection } from '@utils/helpers'

const TECH_STACK = [
  'React', 'Node.js', 'PHP', 'MySQL',
  'MongoDB', 'REST APIs', 'JWT Auth', 'Tailwind CSS',
  'Flutterwave', 'GSAP', 'Git', 'Vercel', 'Express.js',
]

const STATS = [
  { value: 15, suffix: '+', label: 'Projects shipped' },
  { value: 4,  suffix: ' yrs', label: 'Building full-stack' },
  { value: 3,  suffix: '+', label: 'Happy clients' },
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

      gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 25,
        ease: 'none',
        repeat: -1,
      })
    }, sectionRef)

    return () => {}
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

        {/* Availability badge */}
        <div ref={badgeRef} className="mb-8">
          <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] text-slate-300 text-xs font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-display font-extrabold text-white mb-6 overflow-hidden"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
        >
          <span className="block">Full-Stack Engineer</span>
          <span className="block">who builds <span className="text-indigo-400">complete</span></span>
          <span className="block">products.</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="text-slate-400 mb-10 max-w-xl"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.75 }}
        >
          I design, architect, and ship scalable web applications end-to-end —
          from database schema to polished UI — so your product reaches users
          faster and grows without breaking.
        </p>

        {/* CTA buttons */}
        <div ref={btnsRef} className="flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => scrollToSection('#work')}
            className="btn-primary"
          >
            View case studies
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollToSection('#process')}
            className="btn-ghost"
          >
            See my process
          </button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-8 pb-16 border-b border-white/[0.06]"
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

      {/* Tech marquee */}
      <div className="relative z-10 overflow-hidden py-6 border-t border-white/[0.04]">
        <div
          ref={marqueeRef}
          className="flex gap-12 whitespace-nowrap"
          style={{ width: 'max-content' }}
          aria-hidden="true"
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span
              key={i}
              className="text-sm font-medium text-slate-600 tracking-wide uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
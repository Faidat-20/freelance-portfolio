import { useEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'
import { SERVICES, FLAGSHIP_SERVICE } from '@data/services'
import {
  LayoutDashboard, ShoppingCart, Code2, BarChart2,
  Server, Plug, Lock, Database, Smartphone, Globe, Zap, Bug, CheckCircle2,
} from 'lucide-react'

const ICON_MAP = {
  LayoutDashboard, ShoppingCart, Code2, BarChart2,
  Server, Plug, Lock, Database, Smartphone, Globe, Zap, Bug,
}

export default function Services() {
  const tagRef      = useRef(null)
  const headingRef  = useRef(null)
  const subRef      = useRef(null)
  const gridRef     = useRef(null)
  const flagshipRef = useRef(null)

  useEffect(() => {
    gsap.set([tagRef.current, headingRef.current, subRef.current, gridRef.current, flagshipRef.current], { opacity: 1, y: 0 })
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
      gsap.from(gridRef.current.children, {
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out', stagger: 0.08,
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
      })
      gsap.from(flagshipRef.current, {
        opacity: 0, y: 30, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: flagshipRef.current, start: 'top 85%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span ref={tagRef} className="section-label">What I build</span>
          <h2
            ref={headingRef}
            className="font-display font-extrabold text-[#0F172A] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            End-to-end engineering, one developer.
          </h2>
          <p
            ref={subRef}
            className="text-slate-500"
            style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
          >
            No handoffs. No coordination gaps. I own the full stack; backend
            architecture, REST APIs, databases, auth, and the frontend your
            users actually see.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <div key={service.title} className="card p-6 group">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                  {Icon && <Icon size={20} className="text-indigo-600" strokeWidth={1.8} />}
                </div>
                <h3
                  className="font-display font-bold text-[#0F172A] mb-2"
                  style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500" style={{ lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Flagship service */}
        <div
          ref={flagshipRef}
          className="rounded-2xl bg-[#0F172A] p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="tag-dark mb-4 inline-block">Flagship service</span>
              <h3
                className="font-display font-extrabold text-white mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
              >
                {FLAGSHIP_SERVICE.title}
              </h3>
              <p className="text-slate-400" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
                {FLAGSHIP_SERVICE.description}
              </p>
            </div>
            <ul className="space-y-3">
              {FLAGSHIP_SERVICE.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-300" style={{ lineHeight: 1.6 }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
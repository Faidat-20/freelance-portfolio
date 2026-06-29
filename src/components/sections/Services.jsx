import { useEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'
import { SERVICES } from '@data/services'
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

  useEffect(() => {
    gsap.set([tagRef.current, headingRef.current, subRef.current, gridRef.current], { opacity: 1, y: 0 })
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
            Services I provide.
          </h2>
          <p
            ref={subRef}
            className="text-slate-500"
            style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
          >
            I build complete web solutions from planning and UI development to backend systems, APIs, database design, deployment, and ongoing support.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <div key={service.title} className="card p-6 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                  {Icon && <Icon size={24} className="text-indigo-600" strokeWidth={1.8} />}
                </div>
                <h3
                  className="font-display font-bold text-[#0F172A] mb-2"
                  style={{ fontSize: '1.05rem', letterSpacing: '-0.02em' }}
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

      </div>
    </section>
  )
}
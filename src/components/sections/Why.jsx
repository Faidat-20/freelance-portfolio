import { useEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'
import {
  Code2, TrendingUp, MessageSquare, Zap,
  Shield, Lightbulb, Clock, Search,
} from 'lucide-react'

const REASONS = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Every project is structured for maintainability — modular components, clear separation of concerns, and code the next developer can actually read.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable by Default',
    description: 'I build with growth in mind. The database schema, API design, and frontend architecture are planned to scale — not refactored later.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular updates, honest timelines, and no surprises. I flag issues early and keep you informed at every stage of the project.',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Fast load times, optimised queries, and efficient rendering are not afterthoughts — they are part of how I build from day one.',
  },
  {
    icon: Shield,
    title: 'Security Aware',
    description: 'Input validation, proper auth implementation, SQL injection prevention, and secure API design are built in — not bolted on.',
  },
  {
    icon: Lightbulb,
    title: 'Business Understanding',
    description: 'I think about your users and your business goals — not just the feature spec. Good engineering serves the product, not the other way around.',
  },
  {
    icon: Clock,
    title: 'Reliable Delivery',
    description: 'I deliver what I commit to. If scope or timeline changes, I communicate it immediately — not on the day of the deadline.',
  },
  {
    icon: Search,
    title: 'Attention to Detail',
    description: 'Pixel-perfect UI, consistent spacing, edge case handling, and thorough testing. The small things are what separate good software from great software.',
  },
]

export default function Why() {
  const tagRef     = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const gridRef    = useRef(null)

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
      gsap.from(gridRef.current.children, {
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out', stagger: 0.08,
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="why" className="section-padding bg-white">
      <div className="container-custom">

        <div className="max-w-2xl mb-16">
          <span ref={tagRef} className="section-label">Why work with me</span>
          <h2
            ref={headingRef}
            className="font-display font-extrabold text-[#0F172A] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            What you actually get when you hire me.
          </h2>
          <p
            ref={subRef}
            className="text-slate-500"
            style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
          >
            Beyond the tech stack — the working principles that make
            every project run smoothly.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REASONS.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-indigo-600" strokeWidth={1.8} />
                </div>
                <h3
                  className="font-display font-bold text-[#0F172A] mb-2"
                  style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-500" style={{ lineHeight: 1.7 }}>
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
import { useEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'

const TECH_STACK = [
  'PHP',
  'JavaScript',
  'Typescript',
  'React',
  'Node.js',
  'MySQL',
  'MongoDB',
  'Tailwind CSS',
  'GSAP',
  'REST API',
  'API Integration',
  'Git',
  'GitHub',
  'Postman',
  'Flutterwave',
  'Paystack',
]

export default function Skills() {
  const tagRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const stackRef = useRef(null)

  useEffect(() => {
    gsap.set(
      [tagRef.current, headingRef.current, subRef.current, stackRef.current],
      { opacity: 1, y: 0 }
    )

    const ctx = gsap.context(() => {
      gsap.from(tagRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tagRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from(subRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from(stackRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stackRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <span ref={tagRef} className="section-label">
            Tech Stack
          </span>

          <h2
            ref={headingRef}
            className="font-display font-extrabold text-[#0F172A] mb-4"
            style={{
              fontSize: 'clamp(2rem,4vw,3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Technologies I work with.
          </h2>

          <p
            ref={subRef}
            className="text-slate-500"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
            Modern tools and technologies I use to build fast, scalable web applications.
          </p>
        </div>

        <div
          ref={stackRef}
          className="flex flex-wrap gap-3"
        >
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="tag px-4 py-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
import { useEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'
import { SKILL_GROUPS } from '@data/skills'

function SkillBar({ name, level }) {
  const barRef = useRef(null)

  useEffect(() => {
    gsap.from(barRef.current, {
      width: '0%',
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: barRef.current,
        start: 'top 90%',
        once: true,
      },
    })
  }, [])

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-[#0F172A]">{name}</span>
        <span className="text-xs text-slate-400">{['', 'Beginner', 'Basic', 'Intermediate', 'Proficient', 'Expert'][level]}</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-indigo-500"
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
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
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">

        <div className="max-w-2xl mb-16">
          <span ref={tagRef} className="section-label">Technical Skills</span>
          <h2
            ref={headingRef}
            className="font-display font-extrabold text-[#0F172A] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            The stack I build with.
          </h2>
          <p
            ref={subRef}
            className="text-slate-500"
            style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
          >
            Honest proficiency levels, no "100% React" bars here. I know what
            I'm strong in and what I'm still growing in.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="card p-6">
              <h3
                className="font-display font-bold text-[#0F172A] mb-6 pb-3 border-b border-[#E2E8F0]"
                style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
              >
                {group.category}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
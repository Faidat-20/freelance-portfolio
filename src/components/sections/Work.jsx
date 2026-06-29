import { useEffect, useRef, useState } from 'react'
import { gsap } from '@utils/gsap'
import { FEATURED_PROJECTS, MINI_PROJECTS } from '@data/projects'
import { ExternalLink, GitBranch, ChevronDown, ChevronUp } from 'lucide-react'

const TAG_STYLES = {
  active:  'bg-emerald-50 text-emerald-700 border border-emerald-200',
  shipped: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
  concept: 'bg-amber-50 text-amber-700 border border-amber-200',
}

function ProjectCard({ project, index }) {
  const isFlagship = index === 0
  const [expanded, setExpanded] = useState(false)
  const cardRef                 = useRef(null)

  return (
    <article ref={cardRef} className={isFlagship ? "card overflow-hidden border-indigo-200 shadow-lg shadow-indigo-50 relative" : "card overflow-hidden relative"}>

      {/* Card header */}
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          {isFlagship && (
            <span className="absolute top-4 right-4 text-xs font-semibold bg-indigo-600 text-white px-3 py-1 rounded-full">
              Featured Project
            </span>
          )}
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${TAG_STYLES[project.tagType]}`}>
            {project.tag}
          </span>
          <div className="flex items-center gap-3">
            {project.github && (
              
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="GitHub repository"
              >
                <GitBranch size={18} />
              </a>
            )}
            {project.live && (
              
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <h3
          className="font-display font-extrabold text-[#0F172A] mb-1"
          style={{ fontSize: isFlagship ? 'clamp(1.75rem, 3vw, 2.25rem)' : 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.03em' }}
        >
          {project.title}
        </h3>
        <p className="text-indigo-600 font-medium text-sm mb-4">
          {project.subtitle}
        </p>
        <p className="text-slate-600 mb-6" style={{ lineHeight: 1.75 }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-8 md:px-10 py-4 border-t border-[#E2E8F0] text-sm font-medium text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
      >
        <span>{expanded ? 'Hide case study details' : 'View full case study'}</span>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Expanded case study */}
      {expanded && (
        <div
          className="px-8 md:px-10 pb-10 border-t border-[#E2E8F0] bg-[#FAFAFA]"
          style={{ animation: 'fadeDown 0.3s ease forwards' }}
        >

          <div className="grid md:grid-cols-2 gap-10 pt-8">

            {/* Problem & Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-[#0F172A] mb-3 text-sm uppercase tracking-widest text-indigo-600">
                  The Problem
                </h4>
                <p className="text-slate-600 text-sm" style={{ lineHeight: 1.75 }}>
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-[#0F172A] mb-3 text-sm uppercase tracking-widest text-indigo-600">
                  My Solution
                </h4>
                <p className="text-slate-600 text-sm" style={{ lineHeight: 1.75 }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Highlights & Architecture */}
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-[#0F172A] mb-3 text-sm uppercase tracking-widest text-indigo-600">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-indigo-400 mt-1 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-[#0F172A] mb-3 text-sm uppercase tracking-widest text-indigo-600">
                  Architecture
                </h4>
                <ul className="space-y-2">
                  {project.architecture.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-indigo-400 mt-1 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}
    </article>
  )
}

export default function Work() {
  const tagRef     = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const listRef    = useRef(null)
  const miniRef    = useRef(null)

  useEffect(() => {
    gsap.set([tagRef.current, headingRef.current, subRef.current, listRef.current, miniRef.current], { opacity: 1, y: 0 })
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
      gsap.from(listRef.current.children, {
        opacity: 0, y: 40, duration: 0.7, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: listRef.current, start: 'top 80%', once: true },
      })
      gsap.from(miniRef.current.children, {
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: miniRef.current, start: 'top 85%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="work" className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span ref={tagRef} className="section-label">Case Studies</span>
          <h2
            ref={headingRef}
            className="font-display font-extrabold text-[#0F172A] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Real problems. Real solutions. Real code.
          </h2>
          <p
            ref={subRef}
            className="text-slate-500"
            style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
          >
            Every project below is presented as an engineering case study,
            the problem, the decisions made, the architecture, and the outcome.
          </p>
        </div>

        {/* Featured projects */}
        <div ref={listRef} className="space-y-6 mb-16">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mini projects */}
        <div>
          <h3
            className="font-display font-bold text-[#0F172A] mb-6"
            style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}
          >
            Other projects
          </h3>
          <div ref={miniRef} className="grid sm:grid-cols-2 gap-4">
            {MINI_PROJECTS.map((project) => (
              <div key={project.id} className="card p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4
                    className="font-display font-bold text-[#0F172A]"
                    style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
                  >
                    {project.title}
                  </h4>
                  {project.github && (
                    
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-700 transition-colors flex-shrink-0"
                      aria-label="GitHub repository"
                    >
                      <GitBranch size={16} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-slate-500 mb-4" style={{ lineHeight: 1.7 }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
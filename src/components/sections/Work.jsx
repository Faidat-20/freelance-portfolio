import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { gsap } from '@utils/gsap'
import { FEATURED_PROJECTS, MINI_PROJECTS } from '@data/projects'

const SELECTED_PROJECTS = [
  {
    id: 'learnloop',
    title: 'LearnLoop',
    category: 'Learning platform',
    role: 'Frontend Developer',
    image: '/images/projects/learnloop.png',
    link: 'https://learnloopapp-frontend-web.vercel.app/',
    linkLabel: 'View live site',
    description:
      'Frontend development for a learning platform designed to help students prepare for WAEC, NECO and JAMB.',
  },
  {
    id: 'jikes-cosmetics',
    title: 'Jikes Cosmetics',
    category: 'E-commerce',
    role: 'Full-Stack Developer',
    image: '/images/projects/jikes-cosmetics.png',
    link: 'https://github.com/Faidat-20/JC-Website',
    linkLabel: 'View source code',
    description:
      'An online store for a Nigerian beauty brand, bringing product browsing, customer accounts and shopping features into one experience.',
  },
  {
    id: 'jomi-global',
    title: 'Jomi Global',
    category: 'Luxury e-commerce',
    role: 'Full-Stack Developer',
    status: 'Paused',
    image: '/images/projects/jomi-global.png',
    link: 'https://github.com/Faidat-20/JomiGlobal',
    linkLabel: 'View source code',
    description:
      'Development work on a luxury e-commerce platform. The project was paused before completion.',
  },
]

const MORE_PROJECTS = [
  ...MINI_PROJECTS,
  ...FEATURED_PROJECTS.filter((project) => project.tagType === 'concept'),
]

function ProjectCard({ project }) {
  return (
    <article
      data-work-reveal
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#C9ADA7] bg-[#F2E9E4] p-3 transition-colors hover:border-[#4A4E69]"
    >
      <div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-[#9A8C98]/30 bg-[#22223B]">
        <img
          src={project.image}
          alt={`${project.title} website screenshot`}
          loading="lazy"
          className="block h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4A4E69]">
            {project.category}
          </p>

          {project.status && (
            <span className="rounded-full border border-[#9A8C98] px-2.5 py-1 text-[10px] font-medium">
              {project.status}
            </span>
          )}
        </div>

        <h3 className="font-editorial text-xl font-bold leading-tight tracking-[-0.035em]">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#4A4E69]">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
          <span className="inline-block rounded-md bg-[#C9ADA7]/40 px-3 py-1.5 text-[11px] font-semibold">
            {project.role}
          </span>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.linkLabel}: ${project.title}`}
              className="flex min-h-11 w-fit items-center gap-2 text-xs font-semibold underline underline-offset-4 transition-colors hover:text-[#4A4E69]"
            >
              {project.linkLabel}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.utils.toArray('[data-work-reveal]').forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 24,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 92%',
              once: true,
            },
          })
        })
      }, sectionRef)

      return () => context.revert()
    })

    return () => media.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-labelledby="work-heading"
      className="bg-[#FAF8F6] pb-14 pt-6 text-[#22223B] md:pb-20"
    >
      <div className="mx-auto max-w-300 px-5 md:px-8 xl:px-0">
        <div className="mb-7 flex flex-wrap items-center gap-4 md:mb-9">
          <h2
            id="work-heading"
            className="font-editorial text-3xl font-bold tracking-[-0.04em] md:text-4xl"
          >
            Selected projects
          </h2>

          <span
            aria-hidden="true"
            className="hidden h-px flex-1 bg-[#9A8C98] sm:block"
          />

          <a
            href="#more-work"
            className="ml-auto inline-flex min-h-11 items-center gap-2 text-xs font-semibold underline-offset-4 hover:underline"
          >
            More work
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SELECTED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div id="more-work" className="scroll-mt-24 pt-10 md:pt-12">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="font-editorial text-2xl font-bold tracking-[-0.035em]">
              More work & concepts
            </h3>

            <span
              aria-hidden="true"
              className="h-px flex-1 bg-[#9A8C98]/60"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_PROJECTS.map((project) => (
              <article
                key={project.id}
                data-work-reveal
                className="rounded-xl border border-[#C9ADA7] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-editorial text-xl font-bold">
                    {project.title}
                  </h4>

                  {project.tagType === 'concept' && (
                    <span className="shrink-0 rounded-full bg-[#C9ADA7]/40 px-2.5 py-1 text-[10px] font-medium">
                      Concept
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-7 text-[#4A4E69]">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md bg-[#C9ADA7]/40 px-2.5 py-1 text-[11px]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
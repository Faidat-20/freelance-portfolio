import { useLayoutEffect, useRef } from 'react'
import {
  Bug,
  Code2,
  Database,
  LayoutDashboard,
  Server,
  ShoppingCart,
} from 'lucide-react'
import { gsap } from '@utils/gsap'
import { SERVICES } from '@data/services'

const ICON_MAP = {
  Bug,
  Code2,
  Database,
  LayoutDashboard,
  Server,
  ShoppingCart,
}

export default function Services() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.utils.toArray('[data-service-reveal]').forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 22,
            duration: 0.7,
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
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="bg-[#FAF8F6] py-12 text-[#22223B] md:py-16"
    >
      <div className="mx-auto max-w-300 px-5 md:px-8 xl:px-0">
        <div data-service-reveal className="mb-8 md:mb-10">
          <div className="flex items-center gap-4">
            <h2
              id="services-heading"
              className="font-editorial text-3xl font-bold tracking-[-0.04em] md:text-4xl"
            >
              What I can help you build
            </h2>

            <span
              aria-hidden="true"
              className="hidden h-px flex-1 bg-[#9A8C98]/70 sm:block"
            />
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4A4E69]">
            From a new website to the systems behind your business,
            I can help with the complete build or a specific part
            of your application.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Code2

            return (
              <article
                key={service.title}
                data-service-reveal
                className="group rounded-xl border border-[#C9ADA7]/80 bg-[#F2E9E4]/50 p-5 transition-colors hover:border-[#4A4E69] hover:bg-[#F2E9E4]"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-[#C9ADA7]/40 text-[#4A4E69] transition-colors group-hover:bg-[#22223B] group-hover:text-[#F2E9E4]">
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                </div>

                <h3 className="font-editorial text-xl font-bold leading-tight tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#4A4E69]">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
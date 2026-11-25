import { useId, useLayoutEffect, useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { gsap } from '@utils/gsap'
import { FAQ_ITEMS } from '@data/faq'

function FAQItem({ item, isOpen, onToggle }) {
  const id = useId()

  return (
    <div className="border-b border-[#C9ADA7]">
      <h3>
        <button
          id={`${id}-question`}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-answer`}
          className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left"
        >
          <span className="text-sm font-semibold leading-6 text-[#22223B]">
            {item.question}
          </span>

          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C9ADA7]/40 text-[#22223B]">
            {isOpen ? (
              <Minus size={15} aria-hidden="true" />
            ) : (
              <Plus size={15} aria-hidden="true" />
            )}
          </span>
        </button>
      </h3>

      <div
        id={`${id}-answer`}
        aria-labelledby={`${id}-question`}
        hidden={!isOpen}
        className="pb-5 pr-10"
      >
        <p className="text-sm leading-7 text-[#4A4E69]">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.utils.toArray('[data-faq-reveal]').forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 20,
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
      id="faq"
      ref={sectionRef}
      aria-labelledby="faq-heading"
      className="border-t border-[#C9ADA7]/50 bg-[#F2E9E4] py-12 text-[#22223B] md:py-16"
    >
      <div className="mx-auto grid max-w-300 items-start gap-8 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:px-0">
        <div data-faq-reveal>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4A4E69]">
            Before we work together
          </p>

          <h2
            id="faq-heading"
            className="max-w-sm font-editorial text-3xl font-bold leading-tight tracking-[-0.04em] md:text-4xl"
          >
            A few questions,
            <br />
            answered.
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-[#4A4E69]">
            A little more about the work, the process and
            getting your project started.
          </p>

          <div className="mt-6 max-w-sm rounded-xl border border-[#C9ADA7] bg-[#C9ADA7]/20 p-5">
            <p className="text-sm font-semibold">
              Have something else in mind?
            </p>
            <p className="mt-2 text-sm leading-7 text-[#4A4E69]">
              Message me on the platform where you found my
              portfolio. We can discuss what you need.
            </p>
          </div>
        </div>

        <div data-faq-reveal className="border-t border-[#C9ADA7]">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
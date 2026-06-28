import { useEffect, useRef, useState } from 'react'
import { gsap } from '@utils/gsap'
import { FAQ_ITEMS } from '@data/faq'
import { Plus, Minus } from 'lucide-react'

function FAQItem({ item, isOpen, onToggle }) {
  const answerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      gsap.from(answerRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [isOpen])

  return (
    <div className="border-b border-[#E2E8F0]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="font-display font-bold text-[#0F172A]"
          style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
        >
          {item.question}
        </span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
          {isOpen
            ? <Minus size={14} className="text-indigo-600" />
            : <Plus size={14} className="text-indigo-600" />
          }
        </span>
      </button>
      {isOpen && (
        <div ref={answerRef} className="pb-5">
          <p className="text-slate-500 text-sm" style={{ lineHeight: 1.8 }}>
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const tagRef                    = useRef(null)
  const headingRef                = useRef(null)
  const subRef                    = useRef(null)
  const listRef                   = useRef(null)

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
      gsap.from(listRef.current.children, {
        opacity: 0, y: 20, duration: 0.5, ease: 'power2.out', stagger: 0.08,
        scrollTrigger: { trigger: listRef.current, start: 'top 85%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="faq" className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <span ref={tagRef} className="section-label">FAQ</span>
            <h2
              ref={headingRef}
              className="font-display font-extrabold text-[#0F172A] mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Questions clients usually ask.
            </h2>
            <p
              ref={subRef}
              className="text-slate-500 mb-8"
              style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Everything you need to know before reaching out
              answered honestly.
            </p>
            <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-2xl">
              <p className="text-sm font-medium text-indigo-900 mb-1">
                Still have questions?
              </p>
              <p className="text-sm text-indigo-700">
                Send me a message on Upwork and I'll respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Right */}
          <div ref={listRef}>
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
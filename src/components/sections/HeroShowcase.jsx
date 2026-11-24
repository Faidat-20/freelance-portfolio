import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@utils/gsap'

const CARDS = [
  {
    title: 'Faidat Egberinde',
    image: '/images/faidat.png',
    portrait: true,
  },
  {
    title: 'LearnLoop',
    image: '/images/projects/learnloop.png',
  },
  {
    title: 'Jikes Cosmetics',
    image: '/images/projects/jikes-cosmetics.png',
  },
  {
    title: 'Stock Analysis Dashboard',
    image: '/images/projects/stock-dashboard.png',
  },
  {
    title: 'Jomi Global',
    image: '/images/projects/jomi-global.png',
  },
]

// Positions run from the front card to the back card.
const POSITIONS = [
  { x: 0, y: 0, rotation: -1, scale: 1 },
  { x: 12, y: -10, rotation: 4, scale: 0.99 },
  { x: -13, y: -6, rotation: -5, scale: 0.98 },
  { x: 14, y: 10, rotation: 6, scale: 0.97 },
  { x: -9, y: 14, rotation: -4, scale: 0.96 },
]

export default function HeroShowcase() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add(
      '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
      () => {
        const context = gsap.context(() => {
          const cards = gsap.utils.toArray('[data-stack-card]')
          const order = cards.map((_, index) => index)

          cards.forEach((card, index) => {
            gsap.set(card, {
              ...POSITIONS[index],
              zIndex: cards.length - index,
            })
          })

          const timeline = gsap.timeline({ repeat: -1 })

          // Five shuffles return every card to its initial position.
          for (let step = 0; step < cards.length; step += 1) {
            const front = cards[order[0]]
            const incoming = cards[order[1]]

            timeline.to({}, { duration: 3 })

            // Lift the incoming card toward the upper right.
            timeline.to(incoming, {
              x: 42,
              y: -42,
              rotation: 7,
              duration: 0.55,
              ease: 'power3.inOut',
            })

            // Move the front card down-left before tucking it behind.
            timeline.to(
              front,
              {
                x: -20,
                y: 76,
                rotation: -6,
                duration: 0.55,
                ease: 'power3.inOut',
              },
              '<'
            )

            // Move the outgoing front card to the back.
            order.push(order.shift())

            // Apply the new stacking order.
            order.forEach((cardIndex, slot) => {
              timeline.set(cards[cardIndex], {
                zIndex: cards.length - slot,
              })
            })

            // Change the stacking order while the outgoing card is down.
            order.forEach((cardIndex, slot) => {
              timeline.set(cards[cardIndex], {
                zIndex: cards.length - slot,
              })
            })

            // Settle the whole pile into its compact resting positions.
            const settleAt = timeline.duration()

            order.forEach((cardIndex, slot) => {
              timeline.to(
                cards[cardIndex],
                {
                  ...POSITIONS[slot],
                  duration: 0.7,
                  ease: 'power3.inOut',
                },
                settleAt
              )
            })
          }
        }, rootRef)

        return () => context.revert()
      }
    )

    return () => media.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Automatically shuffling stack featuring Faidat Egberinde and four projects: Jomi Global, LearnLoop, Jikes Cosmetics and Stock Analysis Dashboard"
      className="relative isolate mx-auto hidden h-102.5 w-full max-w-107.5 md:block lg:h-110"
    >
      {CARDS.map((card, index) => {
        const position = POSITIONS[index]

        return (
          <div
            key={card.title}
            data-stack-card
            aria-hidden="true"
            className="absolute inset-x-8 top-8 flex h-77.5 flex-col overflow-hidden rounded-xl border border-[#9A8C98]/50 bg-[#F2E9E4] p-2 shadow-[0_8px_22px_rgba(34,34,59,0.14)] lg:h-83.75"
            style={{
              zIndex: CARDS.length - index,
              transform: `translate(${position.x}px, ${position.y}px) rotate(${position.rotation}deg) scale(${position.scale})`,
            }}
          >
            <div
              className={
                card.portrait
                  ? 'flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg bg-[#C9ADA7]/25'
                  : 'flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg bg-[#22223B]'
              }
            >
              <img
                src={card.image}
                alt=""
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className="block h-full w-full object-contain"
              />
            </div>

            <div className="flex h-9 shrink-0 items-center justify-between gap-2 px-2 text-[#22223B]">
              <span className="truncate text-[11px] font-semibold">
                {card.title}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
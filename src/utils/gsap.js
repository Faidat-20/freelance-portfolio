import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const fadeInUp = (targets, options = {}) => {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0 })
    return
  }
  return gsap.from(targets, {
    opacity: 0,
    y: options.y ?? 40,
    duration: options.duration ?? 0.8,
    ease: options.ease ?? 'power2.out',
    stagger: options.stagger ?? 0,
    delay: options.delay ?? 0,
    ...options,
  })
}

export const fadeIn = (targets, options = {}) => {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1 })
    return
  }
  return gsap.from(targets, {
    opacity: 0,
    duration: options.duration ?? 0.6,
    ease: options.ease ?? 'power2.out',
    ...options,
  })
}

export const scrollReveal = (targets, options = {}) => {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0 })
    return
  }
  return gsap.from(targets, {
    opacity: 0,
    y: options.y ?? 40,
    duration: options.duration ?? 0.8,
    ease: options.ease ?? 'power2.out',
    stagger: options.stagger ?? 0.1,
    scrollTrigger: {
      trigger: options.trigger ?? targets,
      start: options.start ?? 'top 85%',
      once: true,
      ...options.scrollTrigger,
    },
  })
}

export const counterAnimation = (target, endValue, options = {}) => {
  const obj = { value: 0 }
  return gsap.to(obj, {
    value: endValue,
    duration: options.duration ?? 1.5,
    ease: 'power2.out',
    onUpdate: () => {
      target.textContent = Math.round(obj.value) + (options.suffix ?? '')
    },
    scrollTrigger: {
      trigger: target,
      start: 'top 85%',
      once: true,
    },
  })
}

export { gsap, ScrollTrigger }
export const cn = (...classes) => classes.filter(Boolean).join(' ')

export const scrollToSection = (href) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
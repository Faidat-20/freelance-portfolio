import { UPWORK_URL } from '@constants'

const FIVERR_URL = ''

export function getPlatformLinks() {
  const source = new URLSearchParams(window.location.search)
    .get('source')
    ?.toLowerCase()

  if (source === 'upwork') {
    return {
      external: true,
      href: UPWORK_URL,
      navLabel: 'Hire on Upwork',
      heroLabel: 'View Upwork profile',
    }
  }

  if (source === 'fiverr' && FIVERR_URL) {
    return {
      external: true,
      href: FIVERR_URL,
      navLabel: 'Work with me',
      heroLabel: 'View Fiverr profile',
    }
  }

  return {
    external: false,
    href: '#services',
    navLabel: 'Explore my services',
    heroLabel: 'What I can build',
  }
}
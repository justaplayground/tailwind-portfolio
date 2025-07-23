import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const scrollToTop = () => {
  return scrollTo({ top: 0, behavior: 'smooth' })
}

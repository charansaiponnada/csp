export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function readingTime(text: string): string {
  const wpm = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wpm)
  return `${minutes} min read`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trimEnd() + '...'
}

export function generatePagination(currentPage: number, totalPages: number) {
  const delta = 2
  const range: number[] = []
  const rangeWithEllipsis: (number | 'ellipsis')[] = []

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i)
    }
  }

  for (let idx = 0; idx < range.length; idx++) {
    if (idx > 0) {
      const prev = range[idx - 1]
      const curr = range[idx]
      if (curr - prev !== 1) {
        rangeWithEllipsis.push('ellipsis')
      }
    }
    rangeWithEllipsis.push(range[idx])
  }

  return rangeWithEllipsis
}

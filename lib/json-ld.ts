import { SITE } from './constants'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: 'Charan Sai Ponnada',
    givenName: 'Charan Sai',
    familyName: 'Ponnada',
    alternateName: 'Charan Sai',
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}${SITE.logo}`,
    sameAs: SITE.sameAs,
    jobTitle: 'AI Engineer & Machine Learning Researcher',
    worksFor: {
      '@type': 'Organization',
      name: 'Aynstyn Technologies',
      url: 'https://aynstyn.com',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Velagapudi Ramakrishna Siddhartha Engineering College (VRSEC)',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'RAG Systems',
      'Large Language Models',
      'Genomic Foundation Models',
      'Python',
      'PyTorch',
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.shortTitle,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#person` },
    inLanguage: 'en-US',
  }
}

export function webPageJsonLd(title: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}${path}#webpage`,
    url: `${SITE.url}${path}`,
    name: title,
    description: description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#person` },
    author: { '@id': `${SITE.url}/#person` },
    inLanguage: 'en-US',
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE.url}${items[items.length - 1].path}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}

export function articleJsonLd(article: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  category?: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE.url}${article.url}#article`,
    headline: article.title,
    description: article.description,
    image: article.image || `${SITE.url}${SITE.logo}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#person` },
    mainEntityOfPage: { '@id': `${SITE.url}${article.url}#webpage` },
    articleSection: article.category,
    keywords: article.tags?.join(', '),
    wordCount: article.description.split(/\s+/).length,
  }
}

export function scholarlyArticleJsonLd(paper: {
  title: string
  description: string
  url: string
  datePublished: string
  venue: string
  doi?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    '@id': `${SITE.url}${paper.url}#article`,
    headline: paper.title,
    description: paper.description,
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@type': 'Organization', name: paper.venue },
    datePublished: paper.datePublished,
    mainEntityOfPage: { '@id': `${SITE.url}${paper.url}#webpage` },
    ...(paper.doi && { sameAs: `https://doi.org/${paper.doi}` }),
  }
}

export function researchProjectJsonLd(project: {
  name: string
  description: string
  url: string
  status?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ResearchProject',
    '@id': `${SITE.url}${project.url}#project`,
    name: project.name,
    description: project.description,
    url: `${SITE.url}${project.url}`,
    foundingDate: '2025',
    ...(project.status && { status: project.status }),
  }
}

export function faqJsonLd(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    url: SITE.url,
    name: SITE.shortTitle,
    logo: `${SITE.url}${SITE.logo}`,
    founder: { '@id': `${SITE.url}/#person` },
  }
}

export function creativeWorkJsonLd(work: {
  name: string
  description: string
  url: string
  dateCreated?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE.url}${work.url}#work`,
    name: work.name,
    description: work.description,
    url: `${SITE.url}${work.url}`,
    author: { '@id': `${SITE.url}/#person` },
    ...(work.dateCreated && { dateCreated: work.dateCreated }),
    ...(work.image && { image: work.image }),
  }
}

export function blogPostingJsonLd(post: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
  category?: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE.url}${post.url}#blogposting`,
    headline: post.title,
    description: post.description,
    image: post.image || `${SITE.url}${SITE.logo}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#person` },
    mainEntityOfPage: { '@id': `${SITE.url}${post.url}#webpage` },
    articleSection: post.category,
    keywords: post.tags?.join(', '),
  }
}

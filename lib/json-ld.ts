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

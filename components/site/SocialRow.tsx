'use client'

import { useState } from 'react'
import { SITE } from '@/lib/constants'
import {
  XIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  YoutubeIcon,
  EmailIcon,
} from './Icons'

// rot13, the same spambot dodge karpathy.ai uses — the plain address
// never appears in the served HTML.
const rot13 = (message: string) => {
  const alpha =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
  return message.replace(/[a-z]/gi, (letter) => alpha[alpha.indexOf(letter) + 13])
}

const ENCODED = 'punenafnvcbaanqn06' + '@' + 'tznvy.pbz'

export default function SocialRow() {
  const [shown, setShown] = useState(false)

  return (
    <>
      <div id="dico">
        <a href={SITE.social.twitter} aria-label="X / Twitter">
          <XIcon title="X / Twitter" />
        </a>
        <a href={SITE.social.github} aria-label="GitHub">
          <GithubIcon title="GitHub" />
        </a>
        <a href={SITE.social.linkedin} aria-label="LinkedIn">
          <LinkedinIcon title="LinkedIn" />
        </a>
        <a href={SITE.social.medium} aria-label="Medium">
          <MediumIcon title="Medium" />
        </a>
        <a href={SITE.social.youtube} aria-label="YouTube">
          <YoutubeIcon title="YouTube" />
        </a>
        <span
          onClick={() => setShown((s) => !s)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setShown((s) => !s)
          }}
          style={{ cursor: 'pointer' }}
          title="click to reveal"
          role="button"
          tabIndex={0}
        >
          <EmailIcon title="email" />
        </span>
      </div>
      <div id="demail" className={shown ? 'shown' : undefined}>
        {shown ? rot13(ENCODED) : ' '}
      </div>
    </>
  )
}

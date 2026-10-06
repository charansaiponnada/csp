import Link from 'next/link'
import SocialRow from '@/components/site/SocialRow'
import EntryIcon from '@/components/site/EntryIcon'
import { Mascot } from '@/components/site/Mascot'
import JsonLd from '@/components/seo/JsonLd'
import { SITE } from '@/lib/constants'
import { projects } from '@/lib/content/projects'
import { publications } from '@/lib/content/publications'
import { mediumArticles } from '@/lib/content/medium'

// Timeline logos. Drop the files into public/assets/ and point these at them —
// each entry falls back to a monogram tile until its file exists.
const LOGOS: Record<string, string | undefined> = {
  aynstyn: '/assets/aynstyn.png',
  genomics: undefined, // a Hi-C contact map or training curve from the model would fit here
  iith: '/assets/iith.png',
  ieee: '/assets/ieee.png',
  writing: undefined, // the YouTube channel avatar would fit here
  vrsec: '/assets/vrsec.jpg',
}

const monthYear = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

export default function Home() {
  return (
    <>
      <div id="dhead" className="container">
        <div className="row">
          <div id="dpic">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/csp_pixel.png" className="ppic" alt="Charan Sai Ponnada" />
          </div>
          <div id="ddesc">
            <h1>Charan Sai Ponnada</h1>
            <h2>I build LLM systems and train genomic foundation models from scratch 🧬🤖⚡</h2>
            <SocialRow />
          </div>
          <div id="dmascot">
            <Mascot
              directions="/mascots/csp-directions.webp"
              reactions="/mascots/csp-reactions.webp"
              size={120}
              label="Charan's mascot"
            />
          </div>
        </div>
      </div>

      <hr />

      <div id="history" className="container">
        <div className="entry row">
          <div className="timespan">2026 -</div>
          <div className="ico">
            <EntryIcon logo={LOGOS.aynstyn} mono="A" alt="Aynstyn Technologies" />
          </div>
          <div className="desc">
            I joined <a href="https://aynstyn.com">Aynstyn Technologies</a> as an AI Engineer intern
            and converted to full-time Software Engineer on a PPO. I built{' '}
            <Link href="/projects/labsoft">LabSoft</Link> (Next.js, PostgreSQL) end-to-end as the
            sole developer, shipping the Patient Management and Reporting modules from schema design
            through deployment, and architected{' '}
            <Link href="/projects/aynstyn-intel">Aynstyn Intel</Link>, an internal analytics platform
            with Bloom&apos;s Taxonomy distribution tracking and knowledge-gap heatmaps. On the AI
            side I improved LLM response reliability across 3+ production workflows with systematic
            black-box test suites, and do prompt tuning and evaluation on our in-house agent built on
            Amazon&apos;s open-source Strands Agents SDK. I also own development and CI/CD for the
            React Native mobile app.
          </div>
        </div>

        <div className="entry row">
          <div className="timespan">2026 -</div>
          <div className="ico">
            <EntryIcon logo={LOGOS.genomics} mono="G" alt="Genomic foundation model research" />
          </div>
          <div className="desc">
            I am building a{' '}
            <Link href="/projects/genomic-foundation-model">genomic foundation model</Link> from
            scratch on a 2× NVIDIA L40S cluster — a HopField-Mamba hybrid that conditions pretraining
            directly on 3D chromatin (Hi-C) structure instead of adding it post-hoc. The structural
            bias lives inside the SSM recurrence at +0.43% parameter overhead, under a matched-compute
            constraint. Along the way I found a memory-horizon collapse in Mamba&apos;s default
            timestep initialization; fixing it raised median effective memory span ~30× with
            validation loss unchanged within seed noise, which is being written up on its own. I also
            have a sole-author paper under review at IEEE InCODE 2026 on{' '}
            <Link href="/research/semantic-consistency-hallucination-detection">
              semantic consistency as an unsupervised hallucination signal
            </Link>{' '}
            in LLMs.
          </div>
        </div>

        <div className="entry row">
          <div className="timespan">2026</div>
          <div className="ico">
            <EntryIcon logo={LOGOS.iith} mono="Y" alt="IIT Hyderabad" />
          </div>
          <div className="desc">
            2nd place among the Top 10 finalists at the IIT Hyderabad AI/ML hackathon (YUVAAN 2026),
            out of 7,600+ registrants, with{' '}
            <Link href="/projects/vivirity-intelli-credit">VIVIRITY Intelli-Credit</Link>. It reads
            500+ page annual reports and turns them into loan risk assessments in under 5 minutes
            instead of days, on a non-embedding RAG pipeline that costs 98% less in API overhead than
            vector-based retrieval. Earlier that year I built a{' '}
            <Link href="/projects/dtm-drainage-pipeline">drone LiDAR to drainage network pipeline</Link>{' '}
            for the MoPR Geospatial Hackathon at IIT Tirupati.
          </div>
        </div>

        <div className="entry row">
          <div className="timespan">2025</div>
          <div className="ico">
            <EntryIcon logo={LOGOS.ieee} mono="I" alt="IEEE ISAECT 2025" />
          </div>
          <div className="desc">
            My first IEEE paper, as primary author —{' '}
            <Link href="/research/vision-language-assistive-navigation">
              Vision-Language Based Real-Time Assistive System for Outdoor Navigation of the Visually
              Impaired in Indian Urban Environments
            </Link>{' '}
            — was published at ISAECT 2025 in Mohali. I fine-tuned BLIP with a 3-stage LoRA strategy
            on a custom 427-scene dataset built from Google Street View imagery, for +15.6% across
            BLEU, METEOR, ROUGE and semantic similarity, and deployed it on a Raspberry Pi through an
            edge-cloud hybrid architecture. The model is on HuggingFace and the code is open-sourced.
          </div>
        </div>

        <div className="entry row">
          <div className="timespan">2024 -</div>
          <div className="ico">
            <EntryIcon logo={LOGOS.writing} mono="W" alt="Writing and video" />
          </div>
          <div className="desc">
            I write about AI on <a href={SITE.social.medium}>Medium</a> and post explainers on my{' '}
            <a href={SITE.social.youtube}>YouTube channel</a>. Mostly notes from things I actually
            built and broke: fine-tuning vision-language models on almost no compute, retrieval that
            survives contact with production, loop engineering. For all the latest I am usually on{' '}
            <a href={SITE.social.twitter}>𝕏/Twitter</a> or <a href={SITE.social.github}>GitHub</a>.
          </div>
        </div>

        <div className="entry row">
          <div className="timespan">2023 - 2027</div>
          <div className="ico">
            <EntryIcon logo={LOGOS.vrsec} mono="V" alt="VRSEC" />
          </div>
          <div className="desc">
            B.Tech in Artificial Intelligence and Data Science at Velagapudi Ramakrishna Siddhartha
            Engineering College (VRSEC), Vijayawada, at a CGPA of 8.69/10. Deep learning, computer
            vision and NLP, plus whatever I could teach myself in the gaps — which is where the
            papers, the hackathons and most of the projects below came from.
          </div>
        </div>
      </div>

      <div className="container">
        <div className="ctitle">bio</div>
        <div>
          Charan Sai Ponnada is an AI engineer and researcher in India. He ships LLM-powered features
          and full-stack platform modules in production at Aynstyn Technologies, and independently
          researches genomic foundation models and label-free evaluation of LLM hallucination. He is
          the primary author of an IEEE ISAECT 2025 paper on vision-language assistive navigation,
          and is finishing his B.Tech in AI and Data Science at VRSEC.
        </div>
        <br />
      </div>

      <div className="band">
        <div className="container">
          <div className="ctitle">featured writing</div>
          <div>
            I keep notes on the things I build, over on{' '}
            <a href={SITE.social.medium}>Medium</a>. Here is the collection of the ones people seem
            to like:
          </div>
          <ul className="nodot">
            {mediumArticles.map((a) => (
              <li key={a.slug}>
                <span className="dim">{monthYear(a.date)}</span> <a href={a.url}>{a.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="pet-projects" className="container">
        <div className="ctitle">projects</div>

        {projects.map((p) => (
          <div className="project" key={p.slug}>
            <div className="pico">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.title} />
              ) : (
                <div className="pmono">{p.title.charAt(0)}</div>
              )}
            </div>
            <div className="pdesc">
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
              {p.status === 'in-progress' && <span className="dim"> (in progress)</span>}{' '}
              {p.longDescription} {p.status !== 'in-progress' && p.results}
              {p.github ? (
                <>
                  {' '}
                  <a href={p.github}>Code on GitHub</a>.
                </>
              ) : null}
            </div>
            <div className="pend"></div>
          </div>
        ))}

        <div style={{ marginTop: '10px' }}>
          More of these, and whatever I am building this week, on{' '}
          <a href={SITE.social.github}>GitHub</a>.
        </div>
      </div>

      <div className="container">
        <div className="ctitle">publications</div>

        {publications.map((pub) => (
          <div className="pub" key={pub.slug}>
            <div className="pub-title">
              <Link href={`/research/${pub.slug}`}>{pub.title}</Link>
            </div>{' '}
            <div className="pub-venue">
              {pub.venueShort}
              {pub.status === 'in-review' ? ' (under review)' : ''}
            </div>
            <div className="pub-authors">{pub.authors.join(', ')}</div>
          </div>
        ))}

        <div>
          <br />
          Abstracts and BibTeX are on the <Link href="/publications">publications page</Link>.
        </div>
      </div>

      <div className="container">
        <div className="ctitle">misc unsorted</div>
        <ul style={{ paddingLeft: '10px' }}>
          <li>
            My <a href="/resume.pdf">resume</a> (PDF), if you are hiring or just curious.
          </li>
          <li>
            Everything I have built is under <Link href="/projects">projects</Link>, everything I
            have published is under <Link href="/research">research</Link>.
          </li>
          <li>
            Two things currently in progress that are not AI at all: a collaborative text editor
            built on a{' '}
            <Link href="/projects/collaborative-sync-engine">CRDT instead of operational transforms</Link>
            , and a{' '}
            <Link href="/projects/payment-processing-engine">
              payment engine backed by a double-entry ledger
            </Link>{' '}
            rather than a balance field. Both are exercises in making correctness structural.
          </li>
          <li>
            I post AI explainers on <a href={SITE.social.youtube}>YouTube</a> as charansimplifies.
          </li>
          <li>
            Code and released models: <a href={SITE.social.github}>GitHub</a>,{' '}
            <a href={SITE.social.huggingface}>HuggingFace</a>.
          </li>
          <li>
            I also cross-post to <a href={SITE.social.devto}>dev.to</a>, and put the occasional
            photograph on <a href={SITE.social.instagram}>Instagram</a>.
          </li>
          <li>Oracle Agentic AI Foundations Associate (1Z0-1157-26), 2026.</li>
          <li>
            0 frameworks were used to style this website. It is plain HTML and one stylesheet,
            deliberately, in the spirit of <a href="https://karpathy.ai/">karpathy.ai</a>.
          </li>
        </ul>
      </div>

      <div className="footspace"></div>

      <JsonLd
        type="WebPage"
        data={{
          title: 'Charan Sai Ponnada',
          description: SITE.description,
          path: '/',
        }}
      />
    </>
  )
}

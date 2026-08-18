type Props = {
  /** Path under /public, e.g. "/assets/aynstyn.png". Falls back to the monogram when absent. */
  logo?: string
  /** Letter shown when there is no logo yet. */
  mono: string
  alt: string
  /** Narrow crests (university seals and the like) look better capped smaller. */
  maxWidth?: number
}

export default function EntryIcon({ logo, mono, alt, maxWidth }: Props) {
  return (
    <>
      <div className="entry-dot"></div>
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={alt} style={maxWidth ? { maxWidth } : undefined} />
      ) : (
        <div className="mono" title={alt}>
          {mono}
        </div>
      )}
    </>
  )
}

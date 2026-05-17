// Direction C — Modern Minimal / Product
// Linear-meets-academic. Crisp sans, signal accent, product-page rhythm.

const C_THEME = {
  bg: "var(--c-bg, #fafaf9)",
  surface: "var(--c-surface, #ffffff)",
  surfaceAlt: "var(--c-surface-alt, #f1f0ee)",
  ink: "var(--c-ink, #0c0d10)",
  inkSoft: "var(--c-ink-soft, #4b4f57)",
  inkMuted: "var(--c-ink-muted, #8c8f96)",
  rule: "var(--c-rule, #e6e4df)",
  accent: "var(--c-accent, #2548f0)",
  accentSoft: "var(--c-accent-soft, rgba(37,72,240,0.08))"
};

const cStyles = {
  display: "'Space Grotesk', -apple-system, sans-serif",
  body: "'DM Sans', -apple-system, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace"
};

function DirC_Page({ children, label }) {
  return (
    <div data-screen-label={label} style={{
      width: "100%",
      minHeight: "100%",
      background: C_THEME.bg,
      color: C_THEME.ink,
      fontFamily: cStyles.body,
      fontSize: 15,
      lineHeight: 1.55,
      letterSpacing: "-0.005em"
    }}>
      {children}
    </div>);

}

function DirC_Nav({ active }) {
  const items = [["Home", "home"], ["Résumé", "resume"], ["Publications", "publications"]];
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 40px",
      position: "sticky", top: 0, zIndex: 10,
      background: "rgba(250,250,249,0.85)",
      backdropFilter: "blur(10px)",
      borderBottom: `1px solid ${C_THEME.rule}`
    }}>
      <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: C_THEME.ink }}>
        <span style={{ fontFamily: cStyles.display, fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em" }}>
          Matteo Aldeghi
        </span>
      </a>
      <nav style={{ display: "flex", gap: 4, fontSize: 14 }}>
        {items.map(([label, key]) =>
        <a key={key} href={`#${key}`} style={{
          color: active === key ? C_THEME.ink : C_THEME.inkSoft,
          textDecoration: "none",
          padding: "8px 14px", borderRadius: 8,
          background: active === key ? C_THEME.surfaceAlt : "transparent",
          fontWeight: active === key ? 600 : 500
        }}>{label}</a>
        )}
      </nav>
    </header>);

}

function MLHighlight({ style = "serif" }) {
  const text = "Machine Learning.";

  if (style === "serif") {
    // Editorial: italic serif, accent color, soft highlighter bar behind
    return (
      <span style={{
        display: "inline-block", whiteSpace: "nowrap",
        fontFamily: "'Instrument Serif', Georgia, serif",
        fontStyle: "italic", fontWeight: 400,
        color: C_THEME.accent, letterSpacing: "-0.02em",
        position: "relative"
      }}>
        {text}
        <span aria-hidden="true" style={{
          position: "absolute",
          left: 0, right: "0.15em",
          bottom: "0.12em",
          height: 6,
          background: C_THEME.accentSoft,
          zIndex: -1
        }} />
      </span>);

  }

  if (style === "marker") {
    // Highlighter sweep: ink-colored text on a thick accent-soft band
    return (
      <span style={{
        display: "inline-block", whiteSpace: "nowrap",
        fontFamily: cStyles.display, fontWeight: 500,
        color: C_THEME.ink,
        position: "relative",
        padding: "0 0.12em"
      }}>
        {text}
        <span aria-hidden="true" style={{
          position: "absolute",
          left: 0, right: 0,
          bottom: "0.04em",
          top: "0.32em",
          background: C_THEME.accentSoft,
          transform: "skew(-3deg)",
          zIndex: -1
        }} />
      </span>);

  }

  if (style === "underline") {
    // Sans, accent color, thick accent underline
    return (
      <span style={{
        display: "inline-block", whiteSpace: "nowrap",
        fontFamily: cStyles.display, fontWeight: 500,
        color: C_THEME.accent,
        borderBottom: `4px solid ${C_THEME.accent}`,
        paddingBottom: "0.04em"
      }}>
        {text}
      </span>);

  }

  if (style === "mono") {
    // Mono contrast against sans display
    return (
      <span style={{
        display: "inline-block", whiteSpace: "nowrap",
        fontFamily: cStyles.mono, fontWeight: 500,
        color: C_THEME.accent,
        fontSize: "0.78em",
        letterSpacing: "-0.02em",
        verticalAlign: "0.16em",
        position: "relative"
      }}>
        {text}
        <span aria-hidden="true" style={{
          position: "absolute",
          left: 0, right: "0.15em",
          bottom: "-0.08em",
          height: 2,
          background: C_THEME.accent
        }} />
      </span>);

  }

  if (style === "split") {
    // Two-tone: Machine in ink, Learning in italic serif accent
    return (
      <span style={{ display: "inline-block", whiteSpace: "nowrap", color: C_THEME.ink, fontWeight: 500 }}>
        Machine{" "}
        <span style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontStyle: "italic", fontWeight: 400,
          color: C_THEME.accent, letterSpacing: "-0.02em"
        }}>
          Learning.
        </span>
      </span>);

  }

  if (style === "bracket") {
    // Bracketed in accent — feels like a notation/equation
    return (
      <span style={{
        display: "inline-block", whiteSpace: "nowrap",
        fontFamily: cStyles.display, fontWeight: 500,
        color: C_THEME.ink
      }}>
        <span style={{ color: C_THEME.accent, fontFamily: cStyles.mono, fontWeight: 400, marginRight: "0.15em", verticalAlign: "0.04em" }}>[</span>
        Machine Learning
        <span style={{ color: C_THEME.accent, fontFamily: cStyles.mono, fontWeight: 400, marginLeft: "0.15em", verticalAlign: "0.04em" }}>]</span>
        <span>.</span>
      </span>);

  }

  return null;
}

function DirC_Home({ tweaks }) {
  return (
    <DirC_Page label="C · Home">
      <DirC_Nav active="home" />

      {/* Hero */}
      <section style={{ padding: "64px 40px 64px", maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "end" }}>
          <div>
            <h1 style={{
              fontFamily: cStyles.display, fontWeight: 500,
              fontSize: 72, lineHeight: 1.04, letterSpacing: "-0.04em",
              margin: "0 0 32px"
            }}>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                Chemistry
                <span style={{ color: C_THEME.inkMuted, fontWeight: 300, fontSize: "0.82em", margin: "0 0.25em", letterSpacing: "0", verticalAlign: "0.05em" }}>×</span>
              </span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                Biology
                <span style={{ color: C_THEME.inkMuted, fontWeight: 300, fontSize: "0.82em", margin: "0 0.25em", letterSpacing: "0", verticalAlign: "0.05em" }}>×</span>
              </span>
              <MLHighlight style={tweaks.mlStyle || "serif"} />
            </h1>

            <p style={{ fontSize: 19, color: C_THEME.inkSoft, lineHeight: 1.5, margin: 0, maxWidth: 600 }}>I lead R&D Machine Learning Research at Bayer Pharmaceuticals, where I'm responsible for the development and application of ML/AI solutions supporting our efforts across the R&D value chain.</p>
            <p style={{ fontSize: 19, color: C_THEME.inkSoft, lineHeight: 1.5, margin: "16px 0 0", maxWidth: 600 }}>I'm interested in the potential that technology, especially artificial intelligence, has to enhance research productivity and accelerate the rate of scientific and medical advances.</p>
          </div>

          <div style={{
            background: C_THEME.surface, border: `1px solid ${C_THEME.rule}`,
            borderRadius: 14, padding: 24
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <img src="images/about.png" alt="" style={{ width: 84, height: 84, borderRadius: 18, objectFit: "cover" }} />
              <div>
                <div style={{ fontFamily: cStyles.display, fontWeight: 600, fontSize: 15 }}>Sr. Director, ML Research</div>
                <div style={{ fontSize: 13, color: C_THEME.inkSoft }}>Bayer Pharmaceuticals · Cambridge, MA</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 13 }}>
              <a href={window.PROFILE.links.scholar} style={{ color: C_THEME.ink, textDecoration: "none", padding: "8px 10px", background: C_THEME.surfaceAlt, borderRadius: 8, fontWeight: 500 }}>Scholar →</a>
              <a href={window.PROFILE.links.linkedin} style={{ color: C_THEME.ink, textDecoration: "none", padding: "8px 10px", background: C_THEME.surfaceAlt, borderRadius: 8, fontWeight: 500 }}>LinkedIn →</a>
              <a href={window.PROFILE.links.github} style={{ color: C_THEME.ink, textDecoration: "none", padding: "8px 10px", background: C_THEME.surfaceAlt, borderRadius: 8, fontWeight: 500 }}>GitHub →</a>
              <a href={`mailto:${window.PROFILE.email}`} style={{ color: C_THEME.ink, textDecoration: "none", padding: "8px 10px", background: C_THEME.surfaceAlt, borderRadius: 8, fontWeight: 500 }}>Email →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations strip */}
      <section style={{ padding: "32px 40px", borderTop: `1px solid ${C_THEME.rule}`, borderBottom: `1px solid ${C_THEME.rule}`, background: C_THEME.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <span style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.inkMuted, letterSpacing: "0.1em" }}>PREVIOUSLY</span>
          {["Google Research", "MIT", "Vector Institute", "Max Planck", "Oxford"].map((a) =>
          <span key={a} style={{ fontFamily: cStyles.display, fontWeight: 500, fontSize: 18, color: C_THEME.inkSoft, letterSpacing: "-0.015em" }}>{a}</span>
          )}
        </div>
      </section>

      <FeaturedPublications />

      <DirC_Footer />
    </DirC_Page>);

}

function pickThree() {
  const pool = window.PUBLICATIONS.slice();
  const out = [];
  while (out.length < 3 && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

function FeaturedPublications() {
  const [picks, setPicks] = React.useState(pickThree);
  const [refreshing, setRefreshing] = React.useState(false);

  const refresh = () => {
    setRefreshing(true);
    // Brief delay so the user sees the action
    setTimeout(() => {
      setPicks(pickThree());
      setRefreshing(false);
    }, 200);
  };

  return (
    <section style={{ padding: "80px 40px 32px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, gap: 24, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.accent, letterSpacing: "0.1em", marginBottom: 12, fontWeight: 600 }}>
            FEATURED · 3 OF {window.PUBLICATIONS.length}
          </div>
          <h2 style={{ fontFamily: cStyles.display, fontWeight: 500, fontSize: 36, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.05 }}>
            A random sample of my publications.
          </h2>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={refresh} disabled={refreshing} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: cStyles.body, fontSize: 13, fontWeight: 500,
            color: C_THEME.ink, background: C_THEME.surface,
            border: `1px solid ${C_THEME.rule}`,
            padding: "9px 14px", borderRadius: 8,
            cursor: refreshing ? "default" : "pointer",
            opacity: refreshing ? 0.6 : 1,
            transition: "opacity .15s",
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform .4s", transform: refreshing ? "rotate(360deg)" : "rotate(0)" }}>
              <path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9" />
              <path d="M14 3v3h-3" />
            </svg>
            Shuffle
          </button>
          <a href="#publications" style={{
            fontFamily: cStyles.body, fontSize: 13, fontWeight: 500,
            color: C_THEME.bg, background: C_THEME.ink,
            padding: "9px 14px", borderRadius: 8,
            textDecoration: "none",
          }}>View all →</a>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {picks.map((p) => (
          <a key={p.title} href={p.url} target="_blank" rel="noreferrer" style={{
            display: "flex", flexDirection: "column",
            background: C_THEME.surface, border: `1px solid ${C_THEME.rule}`,
            borderRadius: 14, padding: 24,
            textDecoration: "none", color: C_THEME.ink,
            transition: "border-color .15s, transform .15s",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontFamily: cStyles.mono, fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>'{String(p.year).slice(2)}</span>
              <span style={{
                fontFamily: cStyles.mono, fontSize: 11, fontWeight: 500,
                padding: "4px 8px", borderRadius: 6,
                background: C_THEME.surfaceAlt, color: C_THEME.inkSoft,
              }}>{p.affiliation}</span>
            </div>
            <div style={{ fontFamily: cStyles.display, fontWeight: 500, fontSize: 18, lineHeight: 1.3, letterSpacing: "-0.015em", marginBottom: 12, flex: 1 }}>
              {p.title}
            </div>
            <div style={{ fontSize: 12, color: C_THEME.inkMuted, fontFamily: cStyles.mono, marginTop: 8, paddingTop: 12, borderTop: `1px solid ${C_THEME.rule}` }}>
              <em style={{ fontStyle: "italic" }}>{p.venue}</em>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function DirC_Footer() {
  return (
    <footer style={{ padding: "48px 40px", borderTop: `1px solid ${C_THEME.rule}`, maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ fontFamily: cStyles.display, fontWeight: 600, fontSize: 20, letterSpacing: "-0.015em", marginBottom: 8 }}>Matteo Aldeghi</div>
          <p style={{ fontSize: 14, color: C_THEME.inkSoft, maxWidth: 320, margin: 0 }}>Machine learning research, drug discovery and development.</p>
        </div>
        <div>
          <div style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.inkMuted, marginBottom: 12, letterSpacing: "0.1em" }}>PAGES</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, color: C_THEME.inkSoft, lineHeight: 2 }}>
            <li><a href="#resume" style={{ color: "inherit", textDecoration: "none" }}>Résumé</a></li>
            <li><a href="#publications" style={{ color: "inherit", textDecoration: "none" }}>Publications</a></li>
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.inkMuted, marginBottom: 12, letterSpacing: "0.1em" }}>ELSEWHERE</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, color: C_THEME.inkSoft, lineHeight: 2 }}>
            <li><a href={window.PROFILE.links.scholar} style={{ color: "inherit", textDecoration: "none" }}>Google Scholar</a></li>
            <li><a href={window.PROFILE.links.linkedin} style={{ color: "inherit", textDecoration: "none" }}>LinkedIn</a></li>
            <li><a href={window.PROFILE.links.github} style={{ color: "inherit", textDecoration: "none" }}>GitHub</a></li>
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.inkMuted, marginBottom: 12, letterSpacing: "0.1em" }}>CONTACT</div>
          <a href={`mailto:${window.PROFILE.email}`} style={{ fontSize: 13, color: C_THEME.ink, textDecoration: "none", fontWeight: 500 }}>
            {window.PROFILE.email}
          </a>
        </div>
      </div>
      <div style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${C_THEME.rule}`, fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.inkMuted, display: "flex", justifyContent: "space-between", letterSpacing: "0.04em" }}>
        <span>© 2026 MATTEO ALDEGHI</span>
        <span>BUILT IN CAMBRIDGE</span>
      </div>
    </footer>);

}

function DirC_Resume({ tweaks }) {
  return (
    <DirC_Page label="C · Résumé">
      <DirC_Nav active="resume" />

      <section style={{ padding: "80px 40px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.accent, letterSpacing: "0.1em", marginBottom: 16, fontWeight: 600 }}>
          RÉSUMÉ / 2007 — PRESENT
        </div>
        <h1 style={{ fontFamily: cStyles.display, fontWeight: 500, fontSize: 84, letterSpacing: "-0.04em", lineHeight: 0.98, margin: "0 0 24px" }}>
          Career log.
        </h1>
        <p style={{ fontSize: 19, color: C_THEME.inkSoft, maxWidth: 720, lineHeight: 1.5 }}>Trained as a chemist, sharpened as a computational biophysicist, now a machine learning researcher.

        </p>
      </section>

      <section style={{ padding: "0 40px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.inkMuted, letterSpacing: "0.1em", marginBottom: 16, fontWeight: 600 }}>
          EXPERIENCE
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {window.RESUME.filter((r) => r.kind !== "education").map((r, i) =>
          <article key={r.org} style={{
            background: C_THEME.surface, border: `1px solid ${C_THEME.rule}`,
            borderRadius: 14, padding: 24,
            display: "grid", gridTemplateColumns: "120px 1fr 200px", gap: 24,
            alignItems: "center"
          }}>
              <div>
                <div style={{ fontFamily: cStyles.mono, fontSize: 12, color: C_THEME.inkSoft, fontWeight: 500 }}>
                  {r.yearStart} — {r.yearEnd ?? "Present"}
                </div>
                {r.yearEnd === null &&
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 6, padding: "3px 8px", background: C_THEME.accentSoft, color: C_THEME.accent, borderRadius: 6, fontSize: 10, fontWeight: 600, letterSpacing: "0.05em" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: C_THEME.accent }} /> NOW
                  </div>
              }
              </div>
              <div>
                <h3 style={{ fontFamily: cStyles.display, fontWeight: 600, fontSize: 22, letterSpacing: "-0.02em", margin: "0 0 4px", lineHeight: 1.15 }}>
                  {r.org}
                </h3>
                <div style={{ fontSize: 14, color: C_THEME.inkSoft, marginBottom: 12 }}>
                  {r.role}{r.advisor ? <> · advised by <span style={{ color: C_THEME.ink, fontWeight: 500 }}>{r.advisor}</span></> : null}
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {r.tags.map((t) =>
                <span key={t} style={{
                  fontFamily: cStyles.mono, fontSize: 11, fontWeight: 500,
                  color: C_THEME.inkSoft, padding: "3px 8px",
                  background: C_THEME.surfaceAlt, borderRadius: 6
                }}>{t}</span>
                )}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: cStyles.mono, fontSize: 12, color: C_THEME.inkMuted, letterSpacing: "0.04em" }}>
                  {r.location.toUpperCase()}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      <section style={{ padding: "0 40px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.inkMuted, letterSpacing: "0.1em", marginBottom: 16, fontWeight: 600 }}>
          EDUCATION
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {window.RESUME.filter((r) => r.kind === "education").map((r) =>
          <article key={r.org} style={{
            background: C_THEME.surface, border: `1px solid ${C_THEME.rule}`,
            borderRadius: 14, padding: 20
          }}>
              <div style={{ fontFamily: cStyles.mono, fontSize: 12, color: C_THEME.inkSoft, marginBottom: 12 }}>
                {r.yearStart} — {r.yearEnd}
              </div>
              <h4 style={{ fontFamily: cStyles.display, fontWeight: 600, fontSize: 17, letterSpacing: "-0.015em", margin: "0 0 6px", lineHeight: 1.2 }}>
                {r.org}
              </h4>
              <div style={{ fontSize: 13, color: C_THEME.inkSoft, marginBottom: 4 }}>{r.role}</div>
              {r.advisor &&
            <div style={{ fontSize: 12, color: C_THEME.inkMuted }}>advised by <span style={{ color: C_THEME.ink }}>{r.advisor}</span></div>
            }
            </article>
          )}
        </div>
      </section>
      <DirC_Footer />
    </DirC_Page>);

}

function DirC_Publications({ tweaks }) {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("All");
  const affiliations = ["All", "Bayer", "Google", "MIT", "Toronto", "Max Planck", "Oxford"];

  let pubs = window.PUBLICATIONS;
  if (filter !== "All") pubs = pubs.filter((p) => p.affiliation === filter);
  if (search) {
    const q = search.toLowerCase();
    pubs = pubs.filter((p) =>
    p.title.toLowerCase().includes(q) ||
    p.authors.toLowerCase().includes(q) ||
    p.venue.toLowerCase().includes(q)
    );
  }

  return (
    <DirC_Page label="C · Publications">
      <DirC_Nav active="publications" />

      <section style={{ padding: "64px 40px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.accent, letterSpacing: "0.1em", marginBottom: 16, fontWeight: 600 }}>
          PUBLICATIONS / {window.PUBLICATIONS.length} PAPERS
        </div>
        <h1 style={{ fontFamily: cStyles.display, fontWeight: 500, fontSize: 76, letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 24px" }}>
          The complete bibliography.
        </h1>
        <p style={{ fontSize: 18, color: C_THEME.inkSoft, maxWidth: 720, lineHeight: 1.55 }}>
          Search, filter, scan. Author position is denoted via underline; asterisks (*) mark equal contribution.
        </p>
      </section>

      {/* Controls */}
      <section style={{ padding: "16px 40px", maxWidth: 1200, margin: "0 auto", position: "sticky", top: 68, zIndex: 5, background: "rgba(250,250,249,0.9)", backdropFilter: "blur(10px)" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${C_THEME.rule}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, background: C_THEME.surface, border: `1px solid ${C_THEME.rule}`, borderRadius: 10, padding: "8px 14px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke={C_THEME.inkMuted} strokeWidth="2">
              <circle cx="9" cy="9" r="6" /><path d="m17 17-3.5-3.5" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search titles, authors, venues…"
              style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 14, fontFamily: cStyles.body, color: C_THEME.ink }} />
            
            <span style={{ fontFamily: cStyles.mono, fontSize: 11, color: C_THEME.inkMuted }}>{pubs.length} results</span>
          </div>
          <div style={{ display: "flex", gap: 4, background: C_THEME.surface, border: `1px solid ${C_THEME.rule}`, borderRadius: 10, padding: 4 }}>
            {affiliations.map((a) =>
            <button key={a} onClick={() => setFilter(a)} style={{
              fontFamily: cStyles.body, fontSize: 12, fontWeight: 500,
              padding: "6px 12px", borderRadius: 7,
              background: filter === a ? C_THEME.ink : "transparent",
              color: filter === a ? C_THEME.bg : C_THEME.inkSoft,
              border: "none", cursor: "pointer"
            }}>{a}</button>
            )}
          </div>
        </div>
      </section>

      <section style={{ padding: "16px 40px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 8 }}>
          {pubs.map((p, i) =>
          <a key={p.title} href={p.url} style={{
            display: "grid", gridTemplateColumns: "80px 1fr 200px",
            gap: 24, padding: "20px 24px",
            background: C_THEME.surface, border: `1px solid ${C_THEME.rule}`,
            borderRadius: 12,
            color: C_THEME.ink, textDecoration: "none",
            alignItems: "start"
          }}>
              <div>
                <div style={{ fontFamily: cStyles.mono, fontSize: 22, fontWeight: 500, color: C_THEME.ink, letterSpacing: "-0.02em" }}>
                  '{String(p.year).slice(2)}
                </div>
                <div style={{ fontFamily: cStyles.mono, fontSize: 10, color: C_THEME.inkMuted, letterSpacing: "0.05em" }}>
                  №{String(i + 1).padStart(3, "0")}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: cStyles.display, fontWeight: 500, fontSize: 19, lineHeight: 1.3, letterSpacing: "-0.015em", marginBottom: 8 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 13, color: C_THEME.inkSoft, lineHeight: 1.5, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: highlightAuthorC(p.authors) }} />
                <div style={{ fontSize: 12, color: C_THEME.inkMuted, fontFamily: cStyles.mono }}>
                  <em style={{ fontStyle: "italic" }}>{p.venue}</em> · {p.cite.replace(p.venue + ", ", "")}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{
                display: "inline-block",
                fontFamily: cStyles.mono, fontSize: 11, fontWeight: 500,
                padding: "4px 8px", borderRadius: 6,
                background: C_THEME.surfaceAlt, color: C_THEME.inkSoft
              }}>{p.affiliation}</div>
                {p.tags &&
              <div style={{ marginTop: 8, fontFamily: cStyles.mono, fontSize: 10, color: C_THEME.inkMuted, letterSpacing: "0.05em" }}>
                    {p.tags.join(" · ")}
                  </div>
              }
              </div>
            </a>
          )}
        </div>
      </section>
      <DirC_Footer />
    </DirC_Page>);

}

function highlightAuthorC(authors) {
  return authors.replace(/M\. Aldeghi/g, '<span class="dir-c-me">M. Aldeghi</span>');
}

Object.assign(window, { DirC_Home, DirC_Resume, DirC_Publications, C_THEME });
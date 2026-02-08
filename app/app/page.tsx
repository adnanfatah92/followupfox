// homepage

export default function Home() {
  return (
    <main
      style={{
        background: "#0b1020",
        color: "#eef",
        minHeight: "100vh",
        padding: 24
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)"
          }}
        >
          <strong>FollowUpFox</strong>
          <nav style={{ display: "flex", gap: 12 }}>
            <a href="/login" style={linkStyle}>Log in</a>
            <a href="/signup" style={ctaStyle}>Get started</a>
          </nav>
        </header>

        <section
          style={{
            marginTop: 24,
            padding: 24,
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)"
          }}
        >
          <h1 style={{ fontSize: 42, marginBottom: 12 }}>
            Never lose a lead again.
          </h1>

          <p style={{ fontSize: 18, color: "rgba(238,238,255,0.75)" }}>
            FollowUpFox automatically sends polite follow-up emails to people
            who already contacted your business.
          </p>

          <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
            <a href="/signup" style={ctaStyle}>Create free account</a>
            <a href="/dashboard" style={linkStyle}>View dashboard</a>
          </div>
        </section>

        <footer style={{ marginTop: 24, color: "rgba(238,238,255,0.6)" }}>
          Simple. Automated. Email-only.
        </footer>
      </div>
    </main>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#eef",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.2)",
  padding: "8px 14px",
  borderRadius: 12
};

const ctaStyle: React.CSSProperties = {
  background: "#fff",
  color: "#0b1020",
  textDecoration: "none",
  padding: "8px 14px",
  borderRadius: 12,
  fontWeight: 700
};

"use client";

import { useState } from "react";

const tools = [
  {
    icon: "✦",
    title: "AI Text Assistant",
    description: "Write, rewrite, summarize and improve your text with AI.",
  },
  {
    icon: "⌕",
    title: "Smart Search",
    description: "Search the web and find useful information quickly.",
  },
  {
    icon: "▣",
    title: "Text Tools",
    description: "Count words, characters, lines and clean your text.",
  },
  {
    icon: "↗",
    title: "QR Generator",
    description: "Create QR codes quickly for links and text.",
  },
  {
    icon: "◉",
    title: "Image Tools",
    description: "Useful browser-based tools for working with images.",
  },
  {
    icon: "⚙",
    title: "Developer Tools",
    description: "Simple utilities for developers and creators.",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.logoArea}>
          <div style={styles.logo}>N</div>
          <span style={styles.brand}>NovaTool AI</span>
        </div>

        <div style={styles.navLinks}>
          <a href="#tools" style={styles.navLink}>
            Tools
          </a>
          <a href="#about" style={styles.navLink}>
            About
          </a>
        </div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.badge}>✦ Free • Fast • Privacy Friendly</div>

        <h1 style={styles.heroTitle}>
          Powerful tools.
          <br />
          <span style={styles.gradientText}>Simple to use.</span>
        </h1>

        <p style={styles.heroText}>
          NovaTool AI is a collection of free browser-based AI and utility
          tools designed to make everyday tasks easier.
        </p>

        <div style={styles.searchBox}>
          <span style={styles.searchIcon}>⌕</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search a tool..."
            style={styles.input}
          />
        </div>
      </section>

      <section id="tools" style={styles.toolsSection}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.smallTitle}>EXPLORE</p>
            <h2 style={styles.sectionTitle}>Popular tools</h2>
          </div>

          <span style={styles.toolCount}>
            {filteredTools.length} tools
          </span>
        </div>

        <div style={styles.grid}>
          {filteredTools.map((tool) => (
            <div key={tool.title} style={styles.card}>
              <div style={styles.cardIcon}>{tool.icon}</div>

              <h3 style={styles.cardTitle}>{tool.title}</h3>

              <p style={styles.cardDescription}>{tool.description}</p>

              <button
                style={styles.useButton}
                onClick={() => alert(`${tool.title} is coming soon!`)}
              >
                Open tool →
              </button>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div style={styles.empty}>
            No tools found. Try another search.
          </div>
        )}
      </section>

      <section id="about" style={styles.about}>
        <div style={styles.aboutIcon}>N</div>

        <div>
          <p style={styles.smallTitle}>ABOUT NOVATOOL AI</p>

          <h2 style={styles.aboutTitle}>
            Useful utilities without the complexity.
          </h2>

          <p style={styles.aboutText}>
            Our goal is to build simple, fast and privacy-friendly tools that
            work directly in your browser.
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        <div>
          <strong style={{ color: "#fff" }}>NovaTool AI</strong>
          <span style={{ marginLeft: 8 }}>
            © {new Date().getFullYear()}
          </span>
        </div>

        <span>Free tools for everyone.</span>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #070a12;
          color: #f8fafc;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        a {
          text-decoration: none;
        }

        button,
        input {
          font: inherit;
        }

        @media (max-width: 700px) {
          .hero-title {
            font-size: 48px !important;
          }

          .grid {
            grid-template-columns: 1fr !important;
          }

          .nav-links {
            display: none !important;
          }

          .about {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 50% -10%, #172554 0%, #070a12 42%)",
    color: "#f8fafc",
  },

  nav: {
    height: 72,
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  logoArea: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 20,
    background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
    color: "#fff",
    boxShadow: "0 8px 30px rgba(96,165,250,.25)",
  },

  brand: {
    fontSize: 18,
    fontWeight: 700,
  },

  navLinks: {
    display: "flex",
    gap: 28,
  },

  navLink: {
    color: "#aab4c5",
    fontSize: 14,
  },

  hero: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "90px 24px 70px",
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "9px 15px",
    borderRadius: 999,
    border: "1px solid rgba(147,197,253,.2)",
    background: "rgba(59,130,246,.08)",
    color: "#93c5fd",
    fontSize: 13,
    marginBottom: 26,
  },

  heroTitle: {
    fontSize: 68,
    lineHeight: 1.05,
    letterSpacing: "-3px",
    margin: "0 0 24px",
    fontWeight: 800,
  },

  gradientText: {
    background: "linear-gradient(90deg,#60a5fa,#a78bfa,#f472b6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  heroText: {
    maxWidth: 650,
    margin: "0 auto 35px",
    color: "#9ca8bb",
    fontSize: 18,
    lineHeight: 1.7,
  },

  searchBox: {
    maxWidth: 600,
    margin: "0 auto",
    height: 58,
    display: "flex",
    alignItems: "center",
    padding: "0 18px",
    borderRadius: 16,
    background: "rgba(15,23,42,.9)",
    border: "1px solid rgba(148,163,184,.2)",
    boxShadow: "0 20px 50px rgba(0,0,0,.25)",
  },

  searchIcon: {
    color: "#94a3b8",
    fontSize: 26,
    marginRight: 12,
  },

  input: {
    width: "100%",
    border: 0,
    outline: 0,
    background: "transparent",
    color: "#fff",
    fontSize: 16,
  },

  toolsSection: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "30px 24px 90px",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: 25,
  },

  smallTitle: {
    margin: "0 0 8px",
    color: "#60a5fa",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 2,
  },

  sectionTitle: {
    margin: 0,
    fontSize: 32,
    letterSpacing: "-1px",
  },

  toolCount: {
    color: "#64748b",
    fontSize: 14,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
  },

  card: {
    padding: 25,
    minHeight: 245,
    borderRadius: 20,
    background:
      "linear-gradient(145deg, rgba(15,23,42,.95), rgba(9,13,24,.95))",
    border: "1px solid rgba(148,163,184,.14)",
    transition: "transform .2s ease",
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(96,165,250,.1)",
    color: "#93c5fd",
    fontSize: 23,
    marginBottom: 20,
  },

  cardTitle: {
    margin: "0 0 10px",
    fontSize: 19,
  },

  cardDescription: {
    margin: "0 0 22px",
    color: "#8995a8",
    fontSize: 14,
    lineHeight: 1.6,
  },

  useButton: {
    border: 0,
    background: "transparent",
    color: "#93c5fd",
    padding: 0,
    cursor: "pointer",
    fontWeight: 700,
  },

  empty: {
    textAlign: "center",
    padding: 50,
    color: "#94a3b8",
  },

  about: {
    maxWidth: 900,
    margin: "0 auto 90px",
    padding: "35px",
    display: "grid",
    gridTemplateColumns: "80px 1fr",
    gap: 25,
    alignItems: "center",
    borderRadius: 24,
    background: "rgba(15,23,42,.65)",
    border: "1px solid rgba(148,163,184,.12)",
  },

  aboutIcon: {
    width: 70,
    height: 70,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: 800,
    background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
  },

  aboutTitle: {
    margin: "0 0 12px",
    fontSize: 28,
  },

  aboutText: {
    margin: 0,
    color: "#94a3b8",
    lineHeight: 1.7,
  },

  footer: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "25px 24px 40px",
    borderTop: "1px solid rgba(255,255,255,.08)",
    display: "flex",
    justifyContent: "space-between",
    color: "#64748b",
    fontSize: 13,
  },
};

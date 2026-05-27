"use client";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--border)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.375rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: "var(--foreground)",
                marginBottom: "0.25rem",
              }}
            >
              HORIZON{" "}
              <span style={{ color: "var(--primary)" }}>GARAGE</span>
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "var(--muted-foreground)",
                marginBottom: "1.25rem",
              }}
            >
              Calgary NE · Auto Repair Specialists
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.65,
              }}
            >
              Honest service, transparent pricing, and work you can count on — right in your neighbourhood.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--primary)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)";
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--primary)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>
                  Address
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--foreground)", lineHeight: 1.5 }}>
                  21 35 Ave NE<br />Calgary, AB T2E 2K9
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>
                  Phone
                </p>
                <a
                  href="tel:+14038698686"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--primary)",
                    textDecoration: "none",
                  }}
                >
                  (403) 869-8686
                </a>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>
                  Hours
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--foreground)", lineHeight: 1.6 }}>
                  Mon–Fri: 8am–6pm<br />Sat: 9am–4pm<br />Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--muted-foreground)",
            }}
          >
            © {new Date().getFullYear()} Horizon Garage YYC. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--muted-foreground)",
            }}
          >
            Powered by{" "}
            <a
              href="https://haclab.net"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--foreground)",
                fontWeight: 500,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
              }}
            >
              Haclab Co Ltd
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "var(--background)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.375rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "var(--foreground)",
              textTransform: "uppercase",
            }}
          >
            HORIZON{" "}
            <span style={{ color: "var(--primary)" }}>GARAGE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--muted-foreground)",
                letterSpacing: "0.025em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted-foreground)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+14038698686"
            style={{
              background: "var(--primary)",
              color: "#fff",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              padding: "0.625rem 1.25rem",
              borderRadius: "var(--radius)",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--primary-hover)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--primary)")}
          >
            (403) 869-8686
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--foreground)",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{
              background: "var(--muted)",
              borderTop: "1px solid var(--border)",
              padding: "1rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--foreground)",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+14038698686"
              style={{
                background: "var(--primary)",
                color: "#fff",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.05em",
                padding: "0.75rem 1.25rem",
                borderRadius: "var(--radius)",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Call (403) 869-8686
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}

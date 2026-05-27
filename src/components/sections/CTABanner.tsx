"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "var(--primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            color: "#fff",
            marginBottom: "1.25rem",
            lineHeight: 1.1,
          }}
        >
          YOUR CAR NEEDS ATTENTION.
          <br />
          WE&apos;RE READY NOW.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "2.5rem",
            lineHeight: 1.65,
          }}
        >
          Drop in or call us today. No appointment needed for most services.
          <br />
          Free diagnostic check — no commitment required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="tel:+14038698686"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 2rem",
              background: "#fff",
              color: "var(--primary)",
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textDecoration: "none",
              borderRadius: "var(--radius)",
              transition: "opacity 0.2s",
            }}
          >
            📞 Call (403) 869-8686
          </a>
          <a
            href="https://maps.google.com/?q=21+35+Ave+NE,+Calgary,+AB+T2E+2K9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 2rem",
              background: "transparent",
              color: "#fff",
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textDecoration: "none",
              borderRadius: "var(--radius)",
              border: "2px solid rgba(255,255,255,0.6)",
              transition: "border-color 0.2s",
            }}
          >
            📍 Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}

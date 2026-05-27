"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1600&q=80"
        alt="Auto repair workshop"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.7) 60%, rgba(13,13,13,0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
          paddingTop: "72px",
        }}
      >
        {/* Pre-headline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(249,115,22,0.15)",
            border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: "2rem",
            padding: "0.375rem 1rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--primary)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--primary)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Calgary NE's Trusted Auto Garage
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            marginBottom: "1.5rem",
          }}
        >
          YOUR CAR.{" "}
          <br />
          <span style={{ color: "var(--primary)" }}>OUR CRAFT.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--muted-foreground)",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}
        >
          Full-service auto repair in Calgary NE — oil changes to engine
          diagnostics, done right the first time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+14038698686"
            style={{
              background: "var(--primary)",
              color: "#fff",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "1rem",
              letterSpacing: "0.05em",
              padding: "1rem 2rem",
              borderRadius: "var(--radius)",
              textTransform: "uppercase",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--primary-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--primary)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            📞 Call (403) 869-8686
          </a>
          <a
            href="#services"
            style={{
              background: "transparent",
              color: "var(--foreground)",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "1rem",
              letterSpacing: "0.05em",
              padding: "1rem 2rem",
              borderRadius: "var(--radius)",
              textTransform: "uppercase",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
              (e.currentTarget as HTMLElement).style.color = "var(--primary)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Services ↓
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              color: "var(--muted-foreground)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              width: "1px",
              height: "32px",
              background: "linear-gradient(to bottom, var(--primary), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

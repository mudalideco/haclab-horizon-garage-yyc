"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "📍",
    title: "We Know Calgary Roads",
    desc: "Born and raised in NE Calgary. We understand local winter driving, potholes, and what your car actually goes through year-round.",
  },
  {
    icon: "💬",
    title: "No Surprises on Your Bill",
    desc: "Transparent pricing every time. We provide a written estimate before any work begins — and we stick to it.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Most repairs are completed same day or next day. We respect your time as much as your vehicle.",
  },
  {
    icon: "🤝",
    title: "Your Car, Treated Right",
    desc: "No unnecessary upsells. No invented problems. Just honest diagnostics and the work your car actually needs.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--muted)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="why-us-grid"
      >
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{
            position: "relative",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            aspectRatio: "4/5",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
            alt="Mechanic working on a car at Horizon Garage"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Orange accent bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "var(--primary)",
            }}
          />
        </motion.div>

        {/* Right: Benefits */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "2.5rem" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--primary)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Why Horizon
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                color: "var(--foreground)",
              }}
            >
              THE GARAGE THAT EARNS YOUR TRUST
            </h2>
          </motion.div>

          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                display: "flex",
                gap: "1.25rem",
                padding: "1.5rem 0",
                borderBottom: i < benefits.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                style={{
                  fontSize: "1.375rem",
                  flexShrink: 0,
                  marginTop: "0.125rem",
                }}
              >
                {b.icon}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    color: "var(--foreground)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.65,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

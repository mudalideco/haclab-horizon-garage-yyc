"use client";

import { motion } from "framer-motion";

const signals = [
  { icon: "📍", label: "Calgary NE's Local Garage" },
  { icon: "🔧", label: "5 Core Services" },
  { icon: "✅", label: "Experienced Technicians" },
  { icon: "⚡", label: "Same-Day Service Available" },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: "var(--muted)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1.25rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {signals.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <span style={{ fontSize: "1.125rem" }}>{s.icon}</span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--muted-foreground)",
                letterSpacing: "0.025em",
                whiteSpace: "nowrap",
              }}
            >
              {s.label}
            </span>
            {i < signals.length - 1 && (
              <span
                style={{
                  marginLeft: "1.5rem",
                  width: "1px",
                  height: "16px",
                  background: "var(--border)",
                  display: "inline-block",
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

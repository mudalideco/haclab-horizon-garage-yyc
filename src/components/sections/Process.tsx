"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Drop Off",
    desc: "Bring your vehicle to 21 35 Ave NE, Calgary. No appointment needed for most services.",
  },
  {
    number: "02",
    title: "Free Diagnostic",
    desc: "We inspect your vehicle and diagnose the issue — completely free of charge before any decision.",
  },
  {
    number: "03",
    title: "Approve Quote",
    desc: "You receive a clear written estimate. Work begins only after your approval. No hidden extras.",
  },
  {
    number: "04",
    title: "Drive Away",
    desc: "Pick up your vehicle, confident it was fixed right. We stand behind every repair we make.",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
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
            How It Works
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
            SIMPLE. TRANSPARENT. DONE RIGHT.
          </h2>
        </motion.div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
            position: "relative",
          }}
          className="process-grid"
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "1.75rem",
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(to right, transparent, var(--border), var(--border), transparent)",
              zIndex: 0,
            }}
            className="process-line"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "0 1.5rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "var(--foreground)",
                  marginBottom: "0.75rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.65,
                  maxWidth: "220px",
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .process-line { display: none; }
          .process-grid { gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

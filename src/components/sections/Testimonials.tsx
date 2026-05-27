"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Mike T.",
    vehicle: "2018 Ford F-150",
    rating: 5,
    text: "Brought my F-150 in for a rough idle — they found a vacuum leak in 20 minutes that two other shops missed entirely. Honest diagnosis, fair price, done same day. These guys are the real deal.",
    initials: "MT",
  },
  {
    name: "Sandra K.",
    vehicle: "2020 Honda Civic",
    rating: 5,
    text: "I was quoted $900 elsewhere for brake work. Horizon did a full inspection, told me only the front pads actually needed replacing, and charged me $180. That kind of honesty is rare. My go-to garage now.",
    initials: "SK",
  },
  {
    name: "Dev P.",
    vehicle: "2016 Toyota Camry",
    rating: 5,
    text: "Check engine light had been on for weeks. Dropped it off at 9am, got a call by noon with a clear explanation and written quote. Picked it up by 4pm. Fast, communicative, and no BS.",
    initials: "DP",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "0.2rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--primary)", fontSize: "0.875rem" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
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
            What Customers Say
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
            CALGARY DRIVERS TRUST HORIZON
          </h2>
        </motion.div>

        {/* Featured testimonial card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "3rem",
            maxWidth: "760px",
            margin: "0 auto 2.5rem",
            position: "relative",
          }}
        >
          {/* Quote mark */}
          <span
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              fontFamily: "var(--font-heading)",
              fontSize: "6rem",
              color: "var(--primary)",
              opacity: 0.15,
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            "
          </span>

          <StarRating count={t.rating} />

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "var(--foreground)",
              lineHeight: 1.75,
              margin: "1.5rem 0 2rem",
              fontStyle: "italic",
            }}
          >
            "{t.text}"
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Avatar */}
            <div
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                background: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {t.initials}
              </span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "var(--foreground)",
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {t.vehicle}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Dots / switcher */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "2rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "1rem",
                background: i === active ? "var(--primary)" : "var(--border)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

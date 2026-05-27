"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Auto Repair",
    description:
      "From minor fixes to major overhauls — we diagnose and repair all makes and models with precision and care.",
    icon: "🔩",
    large: true,
    badge: null,
  },
  {
    id: 2,
    title: "Engine Diagnostics",
    description:
      "Advanced OBD-II scanning and hands-on inspection to find the root cause fast — not just the symptom.",
    icon: "🖥️",
    large: true,
    badge: null,
  },
  {
    id: 3,
    title: "Oil Change",
    description: "Conventional or synthetic. In and out fast.",
    icon: "💧",
    large: false,
    badge: "Quick Service",
  },
  {
    id: 4,
    title: "Brake Service",
    description: "Pads, rotors, calipers — we keep you stopping safely.",
    icon: "🛑",
    large: false,
    badge: "Safety Critical",
  },
  {
    id: 5,
    title: "General Maintenance",
    description: "Scheduled maintenance, filters, belts, and more.",
    icon: "📋",
    large: false,
    badge: null,
  },
];

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--surface)",
        border: `1px solid ${hovered ? "var(--primary)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        padding: service.large ? "2rem" : "1.5rem",
        transition: "border-color 0.25s, box-shadow 0.25s",
        boxShadow: hovered
          ? "0 0 24px rgba(249,115,22,0.12)"
          : "none",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100%",
      }}
    >
      {/* Icon */}
      <motion.span
        animate={{ scale: hovered ? 1.15 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          fontSize: service.large ? "2.25rem" : "1.75rem",
          display: "inline-block",
          width: "fit-content",
        }}
      >
        {service.icon}
      </motion.span>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: service.large ? "1.375rem" : "1.125rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              color: "var(--foreground)",
            }}
          >
            {service.title}
          </h3>
          {service.badge && (
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "var(--primary)",
                background: "rgba(249,115,22,0.12)",
                border: "1px solid rgba(249,115,22,0.25)",
                borderRadius: "2rem",
                padding: "0.2rem 0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {service.badge}
            </span>
          )}
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "var(--muted-foreground)",
            lineHeight: 1.65,
          }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const large = services.filter((s) => s.large);
  const small = services.filter((s) => !s.large);

  return (
    <section id="services" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
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
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
              maxWidth: "480px",
            }}
          >
            EVERY SERVICE YOUR CAR NEEDS
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gap: "1rem",
          }}
        >
          {/* Top row — 2 large */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {large.map((s, i) => (
              <ServiceCard key={s.id} service={s} delay={i * 0.1} />
            ))}
          </div>
          {/* Bottom row — 3 small */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {small.map((s, i) => (
              <ServiceCard key={s.id} service={s} delay={0.2 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

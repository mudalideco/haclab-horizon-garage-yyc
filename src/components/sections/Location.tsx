"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Location() {
  return (
    <section
      id="location"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--muted)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="location-grid"
      >
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
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
            Find Us
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
              marginBottom: "2.5rem",
            }}
          >
            RIGHT HERE IN CALGARY NE
          </h2>

          {/* Address block */}
          <div
            style={{
              padding: "1.5rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--primary)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              📍 Address
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "var(--foreground)",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              21 35 Ave NE
              <br />
              Calgary, AB T2E 2K9
            </p>
            <a
              href="https://maps.google.com/?q=21+35+Ave+NE,+Calgary,+AB+T2E+2K9"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "0.875rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "var(--primary)",
                textDecoration: "underline",
                fontWeight: 500,
              }}
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Phone */}
          <div
            style={{
              padding: "1.5rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--primary)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              📞 Phone
            </p>
            <a
              href="tel:+14038698686"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.375rem",
                fontWeight: 700,
                color: "var(--foreground)",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              (403) 869-8686
            </a>
          </div>

          {/* Hours */}
          <div
            style={{
              padding: "1.5rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--primary)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              🕐 Hours
            </p>
            {hours.map((h) => (
              <div
                key={h.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {h.day}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: h.time === "Closed" ? "var(--muted-foreground)" : "var(--foreground)",
                  }}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Map embed */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            borderRadius: "var(--radius)",
            overflow: "hidden",
            border: "1px solid var(--border)",
            height: "480px",
            position: "relative",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.4!2d-114.04!3d51.065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s21+35+Ave+NE%2C+Calgary%2C+AB+T2E+2K9!5e0!3m2!1sen!2sca!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Horizon Garage location on Google Maps"
          />
          {/* Orange border accent */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "var(--primary)",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

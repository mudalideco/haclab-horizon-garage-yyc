"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80",
    alt: "Auto repair workshop interior",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
    alt: "Engine diagnostics in progress",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    alt: "Vehicle on a lift for inspection",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&q=80",
    alt: "Mechanic working under the hood",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    alt: "Car repair tools",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Professional mechanic servicing a car",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--muted)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            Our Shop
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
            REAL WORK. REAL GARAGE.
          </h2>
        </motion.div>

        {/* Masonry-style grid using CSS columns */}
        <div
          style={{
            columns: "2",
            columnGap: "1rem",
          }}
          className="gallery-grid"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                breakInside: "avoid",
                marginBottom: "1rem",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                position: "relative",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: img.tall ? "400px" : "260px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s",
                }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 60%)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                className="gallery-overlay"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .gallery-grid { columns: 1 !important; }
        }
      `}</style>
    </section>
  );
}

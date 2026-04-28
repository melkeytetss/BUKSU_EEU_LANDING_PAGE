import { Download, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";

function PhoneMockup() {
  return (
    <div
      style={{
        width: "260px",
        height: "520px",
        borderRadius: "36px",
        background: "#0D0B2E",
        border: "2.5px solid rgba(79, 110, 247, 0.35)",
        boxShadow:
          "0 0 60px rgba(79, 110, 247, 0.25), 0 40px 80px rgba(1, 8, 55, 0.7), inset 0 0 30px rgba(5, 21, 171, 0.08)",
        padding: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Notch */}
      <div
        style={{
          width: "80px",
          height: "22px",
          background: "#0D0B2E",
          borderRadius: "0 0 16px 16px",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          border: "2px solid rgba(79, 110, 247, 0.2)",
          borderTop: "none",
        }}
      />
      {/* Screen */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "28px",
          overflow: "hidden",
        }}
      >
        <img
          src="home.jpg"
          alt="App Screenshot"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  const scrollToFeatures = () => {
    const el = document.querySelector("#features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #100E3F 0%, #010837 55%, #010837 100%)",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative glows */}
      <div style={{
        position: "absolute", top: "20%", left: "-10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(5, 21, 171, 0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "-5%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(79, 110, 247, 0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        style={{ maxWidth: "1440px", margin: "0 auto", width: "100%" }}
        className="px-5 md:px-10 py-16 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-16"
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <AnimatedSection delay={0.05}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(79, 110, 247, 0.1)",
                border: "1px solid rgba(79, 110, 247, 0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <div style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#4F6EF7",
                boxShadow: "0 0 8px #4F6EF7",
              }} />
              <span style={{ color: "#8990CB", fontSize: "0.8rem", fontWeight: 600 }}>
                Official BUKSU Student Ordering App
              </span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={0.15}>
            <h1
              style={{
                color: "#DBDDE7",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Order Your School{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #4F6EF7 0%, #8990CB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Essentials
              </span>{" "}
              — Anytime, Anywhere.
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection delay={0.25}>
            <p
              style={{
                color: "#DBDDE7",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                opacity: 0.85,
                maxWidth: "520px",
                marginBottom: "36px",
              }}
            >
              BUKSU EEU lets students browse and order school merchandise — PE uniforms, ID lanyards, and more — with just a few taps. Orders are reviewed by the admin, then picked up right on campus.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => window.location.href = '/BUKSU_EEU.apk'}
                style={{
                  background: "#0515AB",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  padding: "15px 28px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  minHeight: "52px",
                  boxShadow: "0 0 24px rgba(5, 21, 171, 0.65), 0 0 60px rgba(79, 110, 247, 0.2)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(5, 21, 171, 0.85), 0 0 80px rgba(79, 110, 247, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(5, 21, 171, 0.65), 0 0 60px rgba(79, 110, 247, 0.2)";
                }}
              >
                <Download size={20} strokeWidth={1.5} />
                Download APK
              </button>

              <button
                onClick={scrollToFeatures}
                style={{
                  background: "transparent",
                  color: "#DBDDE7",
                  border: "1.5px solid rgba(137, 144, 203, 0.35)",
                  borderRadius: "12px",
                  padding: "15px 28px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  minHeight: "52px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(79, 110, 247, 0.5)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(79, 110, 247, 0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(137, 144, 203, 0.35)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <ChevronDown size={20} strokeWidth={1.5} />
                See How It Works
              </button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.45}>
            <div
              className="flex items-center gap-0 mt-10"
              style={{ flexWrap: "wrap", justifyContent: "center" }}
            >
              {[
                { value: "500+", label: "Students" },
                { value: "10+", label: "Products" },
                { value: "100%", label: "On-Campus" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center px-6 py-2">
                    <span style={{ color: "#4F6EF7", fontSize: "1.5rem", fontWeight: 800 }}>
                      {stat.value}
                    </span>
                    <span style={{ color: "#8990CB", fontSize: "0.8rem", fontWeight: 500 }}>
                      {stat.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div style={{ width: "1px", height: "36px", background: "rgba(137, 144, 203, 0.2)" }} />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right Phone Mockup */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center"
          style={{ position: "relative" }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Radial glow behind phone */}
          <div style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            bottom: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(5, 21, 171, 0.45) 0%, transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
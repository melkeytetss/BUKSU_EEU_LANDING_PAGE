import { Download, Smartphone } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function DownloadSection() {
  return (
    <section
      id="download"
      style={{
        background: "#010837",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glowing blob background */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "350px",
        background: "radial-gradient(ellipse, rgba(5, 21, 171, 0.35) 0%, rgba(79, 110, 247, 0.08) 50%, transparent 75%)",
        filter: "blur(30px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "30%",
        left: "20%",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(79, 110, 247, 0.12) 0%, transparent 70%)",
        filter: "blur(20px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "15%",
        width: "240px",
        height: "240px",
        background: "radial-gradient(circle, rgba(137, 144, 203, 0.08) 0%, transparent 70%)",
        filter: "blur(20px)",
        pointerEvents: "none",
      }} />

      <div
        style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}
        className="px-5 md:px-10 py-24 md:py-32 flex flex-col items-center text-center"
      >
        {/* Icon */}
        <AnimatedSection direction="scale" delay={0}>
          <div style={{
            width: "72px",
            height: "72px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #0515AB 0%, #4F6EF7 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
            boxShadow: "0 0 32px rgba(5, 21, 171, 0.6), 0 0 80px rgba(79, 110, 247, 0.25)",
          }}>
            <Smartphone size={32} strokeWidth={1.5} color="#fff" />
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2
            style={{
              color: "#DBDDE7",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Get{" "}
            <span style={{
              background: "linear-gradient(90deg, #4F6EF7 0%, #8990CB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              BUKSU EEU
            </span>{" "}
            on Your Android
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p style={{
            color: "#DBDDE7",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            opacity: 0.75,
            maxWidth: "480px",
            marginBottom: "40px",
          }}>
            Start ordering your school essentials today. Install the app and manage your orders with ease — right from your phone.
          </p>
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection delay={0.3} direction="scale">
          <button
            onClick={() => window.location.href = 'BUKSU_EEU.apk'}
            className="w-full sm:w-auto"
            style={{
              background: "#0515AB",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              padding: "18px 48px",
              fontWeight: 700,
              fontSize: "1.05rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              minHeight: "56px",
              boxShadow: "0 0 32px rgba(5, 21, 171, 0.7), 0 0 80px rgba(79, 110, 247, 0.25), 0 8px 32px rgba(5, 21, 171, 0.4)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "transform 0.2s, box-shadow 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(5, 21, 171, 0.9), 0 0 100px rgba(79, 110, 247, 0.4), 0 12px 40px rgba(5, 21, 171, 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(5, 21, 171, 0.7), 0 0 80px rgba(79, 110, 247, 0.25), 0 8px 32px rgba(5, 21, 171, 0.4)";
            }}
          >
            <Download size={22} strokeWidth={1.5} />
            Download APK
          </button>
        </AnimatedSection>

        {/* Note */}
        <AnimatedSection delay={0.4}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "18px",
            color: "#8990CB",
            fontSize: "0.85rem",
          }}>
            <Smartphone size={15} strokeWidth={1.5} />
            Available for Android devices
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
import { ShoppingCart, ClipboardCheck, MapPin } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const features = [
  {
    icon: ShoppingCart,
    title: "Easy Ordering",
    description:
      "Browse PE uniforms, ID lanyards, and more in just a few taps. A clean, intuitive interface designed for every student.",
  },
  {
    icon: ClipboardCheck,
    title: "Admin Approval System",
    description:
      "Track your order status in real time and know exactly when it's ready. Stay informed at every step of the process.",
  },
  {
    icon: MapPin,
    title: "Campus Pickup",
    description:
      "No delivery needed. Just walk to the school office to collect your items — fast, easy, and fully on-campus.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        background: "#100E3F",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top edge glow */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(79, 110, 247, 0.4), transparent)",
      }} />
      {/* Ambient glow top center */}
      <div style={{
        position: "absolute",
        top: "-80px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "200px",
        background: "radial-gradient(ellipse, rgba(79, 110, 247, 0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        style={{ maxWidth: "1440px", margin: "0 auto" }}
        className="px-5 md:px-10 py-20 md:py-28"
      >
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <div style={{
              display: "inline-block",
              background: "rgba(79, 110, 247, 0.1)",
              border: "1px solid rgba(79, 110, 247, 0.2)",
              borderRadius: "100px",
              padding: "5px 16px",
              marginBottom: "16px",
            }}>
              <span style={{ color: "#4F6EF7", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em" }}>
                FEATURES
              </span>
            </div>
            <h2
              style={{
                color: "#DBDDE7",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Everything You Need,{" "}
              <span style={{
                background: "linear-gradient(90deg, #4F6EF7 0%, #8990CB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                In One App
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={i}>
                <div
                  style={{
                    background: "linear-gradient(160deg, rgba(5, 21, 171, 0.12) 0%, rgba(16, 14, 63, 0.6) 100%)",
                    border: "1px solid rgba(79, 110, 247, 0.2)",
                    borderRadius: "20px",
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    transition: "border-color 0.3s, transform 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79, 110, 247, 0.5)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79, 110, 247, 0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Card inner glow */}
                  <div style={{
                    position: "absolute",
                    top: "-30px",
                    left: "-30px",
                    width: "140px",
                    height: "140px",
                    background: "radial-gradient(circle, rgba(5, 21, 171, 0.2) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "#0515AB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(5, 21, 171, 0.5), 0 0 40px rgba(79, 110, 247, 0.15)",
                    flexShrink: 0,
                  }}>
                    <Icon size={24} strokeWidth={1.5} color="#fff" />
                  </div>

                  {/* Title */}
                  <h3 style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.3 }}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: "#DBDDE7", fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.85 }}>
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Bottom edge */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(79, 110, 247, 0.2), transparent)",
      }} />
    </section>
  );
}
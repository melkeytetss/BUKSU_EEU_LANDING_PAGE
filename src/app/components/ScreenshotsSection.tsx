import { useRef } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

function HomeScreen() {
  return (
    <img
      src="/home.jpg"
      alt="Home"
      style={{ width: "100%", height: "100%", objectFit: "fill" }}
    />
  );
}

function BrowseScreen() {
  return (
    <img
      src="/products.jpg"
      alt="Browse Products"
      style={{ width: "100%", height: "100%", objectFit: "fill" }}
    />
  );
}

function OrderStatusScreen() {
  return (
    <img
      src="/orders.jpg"
      alt="Order Status"
      style={{ width: "100%", height: "100%", objectFit: "fill" }}
    />
  );
}

const screens = [
  { label: "Home", Component: HomeScreen },
  { label: "Browse Products", Component: BrowseScreen },
  { label: "Order Status", Component: OrderStatusScreen },
];

function PhoneFrame({ label, Component }: { label: string; Component: React.FC }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", flexShrink: 0 }}>
      {/* Glow behind phone */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute",
          inset: "-20px",
          background: "radial-gradient(ellipse, rgba(79, 110, 247, 0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }} />
        <div style={{
          width: "200px",
          height: "400px",
          borderRadius: "32px",
          background: "#0D0B2E",
          border: "2px solid rgba(79, 110, 247, 0.3)",
          boxShadow: "0 0 40px rgba(79, 110, 247, 0.18), 0 30px 60px rgba(1, 8, 55, 0.6), inset 0 0 20px rgba(5, 21, 171, 0.06)",
          padding: "8px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Notch */}
          <div style={{
            width: "60px",
            height: "18px",
            background: "#0D0B2E",
            borderRadius: "0 0 12px 12px",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            border: "2px solid rgba(79, 110, 247, 0.2)",
            borderTop: "none",
          }} />
          {/* Screen */}
          <div style={{
            width: "100%",
            height: "100%",
            borderRadius: "26px",
            overflow: "hidden",
          }}>
            <Component />
          </div>
        </div>
      </div>
      <div style={{
        color: "#DBDDE7",
        fontSize: "0.875rem",
        fontWeight: 600,
        opacity: 0.85,
        textAlign: "center",
      }}>
        {label}
      </div>
    </div>
  );
}

export function ScreenshotsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="screenshots"
      style={{
        background: "#100E3F",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(79, 110, 247, 0.3), transparent)",
      }} />

      <div
        style={{ maxWidth: "1440px", margin: "0 auto" }}
        className="px-5 md:px-10 py-20 md:py-28"
      >
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div style={{
              display: "inline-block",
              background: "rgba(79, 110, 247, 0.1)",
              border: "1px solid rgba(79, 110, 247, 0.2)",
              borderRadius: "100px",
              padding: "5px 16px",
              marginBottom: "16px",
            }}>
              <span style={{ color: "#4F6EF7", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em" }}>
                APP SCREENSHOTS
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
              A Closer Look at{" "}
              <span style={{
                background: "linear-gradient(90deg, #4F6EF7 0%, #8990CB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                BUKSU EEU
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Desktop: Row with stagger */}
        <StaggerContainer className="hidden md:flex justify-center gap-10">
          {screens.map((s, i) => (
            <StaggerItem key={i} direction="up">
              <PhoneFrame label={s.label} Component={s.Component} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile: Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex md:hidden gap-6 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {screens.map((s, i) => (
            <div key={i} style={{ scrollSnapAlign: "center", flexShrink: 0 }}>
              <PhoneFrame label={s.label} Component={s.Component} />
            </div>
          ))}
        </div>
        {/* Mobile scroll hint */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {screens.map((_, i) => (
            <div key={i} style={{
              width: i === 0 ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === 0 ? "#4F6EF7" : "rgba(137, 144, 203, 0.3)",
            }} />
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(79, 110, 247, 0.2), transparent)",
      }} />
    </section>
  );
}
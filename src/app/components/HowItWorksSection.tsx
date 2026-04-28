import { Search, Send, Clock, CheckCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Products",
    description: "Explore available school items in the app — uniforms, lanyards, and more.",
  },
  {
    number: "02",
    icon: Send,
    title: "Place Your Order",
    description: "Submit your order with just a few taps. Simple, fast, and straightforward.",
  },
  {
    number: "03",
    icon: Clock,
    title: "Wait for Approval",
    description: "The admin reviews and prepares your order. You'll be notified when it's ready.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Pick Up on Campus",
    description: "Head to the school office to claim your items. No delivery, no hassle.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        background: "#010837",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient glows */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(5, 21, 171, 0.09) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        style={{ maxWidth: "1440px", margin: "0 auto" }}
        className="px-5 md:px-10 py-20 md:py-28"
      >
        {/* Section Header */}
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
                HOW IT WORKS
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
              From Browse to{" "}
              <span style={{
                background: "linear-gradient(90deg, #4F6EF7 0%, #8990CB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Pickup
              </span>{" "}
              — In 4 Easy Steps
            </h2>
          </div>
        </AnimatedSection>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Dashed connecting line */}
          <div style={{
            position: "absolute",
            top: "38px",
            left: "calc(12.5% + 26px)",
            right: "calc(12.5% + 26px)",
            height: "1px",
            borderTop: "2px dashed rgba(79, 110, 247, 0.25)",
            zIndex: 0,
          }} />

          <StaggerContainer className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={i} direction="up">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                    {/* Step icon circle */}
                    <div style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0515AB 0%, #100E3F 100%)",
                      border: "2px solid rgba(79, 110, 247, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      boxShadow: "0 0 24px rgba(5, 21, 171, 0.4), 0 0 60px rgba(79, 110, 247, 0.1)",
                      flexShrink: 0,
                    }}>
                      <Icon size={24} strokeWidth={1.5} color="#4F6EF7" />
                    </div>

                    {/* Step number */}
                    <div style={{
                      background: "linear-gradient(135deg, #4F6EF7 0%, #8990CB 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      marginBottom: "8px",
                    }}>
                      STEP {step.number}
                    </div>

                    {/* Title */}
                    <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "10px", lineHeight: 1.3 }}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p style={{ color: "#DBDDE7", fontSize: "0.875rem", lineHeight: 1.65, opacity: 0.8 }}>
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Mobile: Vertical Stacked List */}
        <div className="flex flex-col gap-0 md:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ display: "flex", gap: "16px", position: "relative" }}>
                  {/* Left: icon + connector line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0515AB 0%, #100E3F 100%)",
                      border: "2px solid rgba(79, 110, 247, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 0 18px rgba(5, 21, 171, 0.4)",
                    }}>
                      <Icon size={20} strokeWidth={1.5} color="#4F6EF7" />
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{
                        width: "2px",
                        flex: 1,
                        minHeight: "32px",
                        borderLeft: "2px dashed rgba(79, 110, 247, 0.2)",
                        margin: "6px 0",
                      }} />
                    )}
                  </div>

                  {/* Right: text */}
                  <div style={{ paddingBottom: i < steps.length - 1 ? "24px" : "0", paddingTop: "4px" }}>
                    <div style={{
                      background: "linear-gradient(135deg, #4F6EF7 0%, #8990CB 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      marginBottom: "4px",
                    }}>
                      STEP {step.number}
                    </div>
                    <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "#DBDDE7", fontSize: "0.875rem", lineHeight: 1.65, opacity: 0.8 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
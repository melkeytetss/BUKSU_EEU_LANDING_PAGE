import { useRef } from "react";
import {
  Home,
  Search,
  ShoppingBag,
  Bell,
  ChevronRight,
  Package,
  Clock,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

function HomeScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(160deg, #0A0828 0%, #060420 100%)" }}>
      <div style={{ padding: "28px 14px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "#8990CB", fontSize: "0.58rem" }}>Welcome back,</div>
          <div style={{ color: "#DBDDE7", fontSize: "0.78rem", fontWeight: 700 }}>Juan dela Cruz</div>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, #0515AB, #4F6EF7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Bell size={12} strokeWidth={1.5} color="#fff" />
        </div>
      </div>
      <div style={{ margin: "8px 12px", borderRadius: 12, background: "linear-gradient(135deg, #0515AB 0%, #4F6EF7 100%)", padding: "12px 14px" }}>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.52rem", marginBottom: 2 }}>FEATURED</div>
        <div style={{ color: "#fff", fontSize: "0.72rem", fontWeight: 700 }}>New PE Uniform Sets</div>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.5rem", marginTop: 4 }}>Available now for ordering</div>
      </div>
      <div style={{ padding: "8px 12px 0", color: "#8990CB", fontSize: "0.58rem", fontWeight: 600 }}>QUICK ORDER</div>
      <div style={{ padding: "6px 12px", display: "flex", flexDirection: "column", gap: 5, flex: 1, overflow: "hidden" }}>
        {["PE Uniform Top", "PE Uniform Bottom", "ID Lanyard"].map((item, i) => (
          <div key={i} style={{ background: "rgba(79,110,247,0.08)", border: "1px solid rgba(79,110,247,0.15)", borderRadius: 8, padding: "7px 9px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: "rgba(5,21,171,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShoppingBag size={10} strokeWidth={1.5} color="#4F6EF7" />
              </div>
              <span style={{ color: "#DBDDE7", fontSize: "0.6rem", fontWeight: 500 }}>{item}</span>
            </div>
            <ChevronRight size={12} strokeWidth={1.5} color="#8990CB" />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 8px 12px", borderTop: "1px solid rgba(79,110,247,0.1)", marginTop: "auto" }}>
        {[{ Icon: Home, active: true }, { Icon: Search, active: false }, { Icon: ShoppingBag, active: false }].map(({ Icon, active }, i) => (
          <div key={i} style={{ width: 34, height: 26, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 7, background: active ? "rgba(5,21,171,0.35)" : "transparent" }}>
            <Icon size={13} strokeWidth={1.5} color={active ? "#4F6EF7" : "#8990CB"} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BrowseScreen() {
  const products = [
    { name: "PE Uniform Top", price: "₱250" },
    { name: "PE Uniform Bottom", price: "₱220" },
    { name: "ID Lanyard", price: "₱80" },
    { name: "School Bag", price: "₱450" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(160deg, #0A0828 0%, #060420 100%)" }}>
      <div style={{ padding: "28px 14px 10px" }}>
        <div style={{ color: "#DBDDE7", fontSize: "0.78rem", fontWeight: 700, marginBottom: 8 }}>Browse Products</div>
        <div style={{ background: "rgba(79,110,247,0.08)", border: "1px solid rgba(79,110,247,0.15)", borderRadius: 8, padding: "6px 10px", display: "flex", alignItems: "center", gap: 6 }}>
          <Search size={11} strokeWidth={1.5} color="#8990CB" />
          <span style={{ color: "#8990CB", fontSize: "0.58rem" }}>Search items...</span>
        </div>
      </div>
      <div style={{ padding: "0 12px", color: "#8990CB", fontSize: "0.58rem", fontWeight: 600, marginBottom: 6 }}>ALL ITEMS</div>
      <div style={{ padding: "0 12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, flex: 1, overflow: "hidden" }}>
        {products.map((p, i) => (
          <div key={i} style={{ background: "rgba(79,110,247,0.08)", border: "1px solid rgba(79,110,247,0.15)", borderRadius: 10, padding: "10px 10px 8px", display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ width: "100%", height: 48, borderRadius: 7, background: "rgba(5,21,171,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Package size={18} strokeWidth={1.5} color="#4F6EF7" />
            </div>
            <div style={{ color: "#DBDDE7", fontSize: "0.58rem", fontWeight: 600, lineHeight: 1.3 }}>{p.name}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#4F6EF7", fontSize: "0.6rem", fontWeight: 700 }}>{p.price}</span>
              <div style={{ background: "#0515AB", borderRadius: 5, padding: "2px 6px" }}>
                <span style={{ color: "#fff", fontSize: "0.48rem", fontWeight: 700 }}>Add</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 8px 12px", borderTop: "1px solid rgba(79,110,247,0.1)", marginTop: "auto" }}>
        {[{ Icon: Home, active: false }, { Icon: Search, active: true }, { Icon: ShoppingBag, active: false }].map(({ Icon, active }, i) => (
          <div key={i} style={{ width: 34, height: 26, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 7, background: active ? "rgba(5,21,171,0.35)" : "transparent" }}>
            <Icon size={13} strokeWidth={1.5} color={active ? "#4F6EF7" : "#8990CB"} />
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderStatusScreen() {
  const orders = [
    { id: "#0021", item: "PE Uniform Top", status: "Ready", icon: CheckCircle, color: "#22c55e" },
    { id: "#0020", item: "ID Lanyard", status: "Pending", icon: Clock, color: "#f59e0b" },
    { id: "#0019", item: "PE Uniform Bottom", status: "Approved", icon: CheckCircle, color: "#4F6EF7" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(160deg, #0A0828 0%, #060420 100%)" }}>
      <div style={{ padding: "28px 14px 10px", display: "flex", alignItems: "center", gap: 8 }}>
        <ArrowLeft size={14} strokeWidth={1.5} color="#8990CB" />
        <div style={{ color: "#DBDDE7", fontSize: "0.78rem", fontWeight: 700 }}>Order Status</div>
      </div>
      <div style={{ padding: "0 12px", color: "#8990CB", fontSize: "0.58rem", fontWeight: 600, marginBottom: 6 }}>YOUR ORDERS</div>
      <div style={{ padding: "0 12px", display: "flex", flexDirection: "column", gap: 6, flex: 1, overflow: "hidden" }}>
        {orders.map((order, i) => {
          const Icon = order.icon;
          return (
            <div key={i} style={{ background: "rgba(79,110,247,0.08)", border: "1px solid rgba(79,110,247,0.15)", borderRadius: 10, padding: "10px 11px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <div>
                  <div style={{ color: "#8990CB", fontSize: "0.52rem" }}>Order {order.id}</div>
                  <div style={{ color: "#DBDDE7", fontSize: "0.65rem", fontWeight: 600 }}>{order.item}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(0,0,0,0.2)", borderRadius: 6, padding: "3px 7px" }}>
                  <Icon size={10} strokeWidth={1.5} color={order.color} />
                  <span style={{ color: order.color, fontSize: "0.5rem", fontWeight: 700 }}>{order.status}</span>
                </div>
              </div>
              <div style={{ width: "100%", height: 3, background: "rgba(79,110,247,0.1)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: order.status === "Ready" ? "100%" : order.status === "Approved" ? "66%" : "33%",
                  background: `linear-gradient(90deg, #0515AB, ${order.color})`,
                  borderRadius: 2,
                }} />
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 8px 12px", borderTop: "1px solid rgba(79,110,247,0.1)", marginTop: "auto" }}>
        {[{ Icon: Home, active: false }, { Icon: Search, active: false }, { Icon: ShoppingBag, active: true }].map(({ Icon, active }, i) => (
          <div key={i} style={{ width: 34, height: 26, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 7, background: active ? "rgba(5,21,171,0.35)" : "transparent" }}>
            <Icon size={13} strokeWidth={1.5} color={active ? "#4F6EF7" : "#8990CB"} />
          </div>
        ))}
      </div>
    </div>
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
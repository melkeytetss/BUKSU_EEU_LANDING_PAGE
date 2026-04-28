import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import logo from "../../imports/BUKSU_EEU_LOGO.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Screenshots", href: "#screenshots" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        background: "rgba(1, 8, 55, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(79, 110, 247, 0.12)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{ maxWidth: "1440px", margin: "0 auto" }}
        className="px-5 md:px-10 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="BUKSU Logo"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
          <span
            style={{
              color: "#DBDDE7",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "0.04em",
            }}
          >
            BUKSU{" "}
            <span style={{ color: "#4F6EF7" }}>EEU</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                color: "#8990CB",
                fontWeight: 500,
                fontSize: "0.95rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#DBDDE7")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#8990CB")
              }
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => window.location.href = '/BUKSU_EEU.apk'}
            style={{
              background: "#0515AB",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 22px",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 0 18px rgba(5, 21, 171, 0.6), 0 0 40px rgba(79, 110, 247, 0.2)",
              transition: "box-shadow 0.2s, transform 0.2s",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 28px rgba(5, 21, 171, 0.9), 0 0 60px rgba(79, 110, 247, 0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 18px rgba(5, 21, 171, 0.6), 0 0 40px rgba(79, 110, 247, 0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Download size={16} strokeWidth={1.5} />
            Download APK
          </button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => window.location.href = '/BUKSU_EEU.apk'}
            style={{
              background: "#0515AB",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 14px",
              fontWeight: 700,
              fontSize: "0.78rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 0 14px rgba(5, 21, 171, 0.55)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <Download size={14} strokeWidth={1.5} />
            APK
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#DBDDE7",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(16, 14, 63, 0.98)",
            borderTop: "1px solid rgba(79, 110, 247, 0.1)",
            padding: "16px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                color: "#DBDDE7",
                fontWeight: 500,
                fontSize: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "12px 4px",
                borderBottom: "1px solid rgba(137, 144, 203, 0.1)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

import logo from "../../imports/BUKSU_EEU_LOGO.png";

export function Footer() {
  return (
    <footer
      style={{
        background: "#010837",
        borderTop: "1px solid rgba(79, 110, 247, 0.12)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div
        style={{ maxWidth: "1440px", margin: "0 auto" }}
        className="px-5 md:px-10 py-8 flex flex-col md:flex-row items-center gap-4"
      >
        {/* Logo + Name */}
        <div className="flex items-center gap-2.5 md:flex-1">
          <img
            src={logo}
            alt="BUKSU Logo"
            style={{ width: 36, height: 36, objectFit: "contain" }}
          />
          <span style={{ color: "#DBDDE7", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.04em" }}>
            BUKSU <span style={{ color: "#4F6EF7" }}>EEU</span>
          </span>
        </div>

        {/* Copyright */}
        <div className="text-center md:flex-1">
          <p style={{ color: "#8990CB", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} BUKSU EEU · Bukidnon State University
          </p>
          <p style={{ color: "#8990CB", fontSize: "0.75rem", marginTop: "2px", opacity: 0.65 }}>
            Official Student Ordering Application
          </p>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:flex-1" />
      </div>
    </footer>
  );
}

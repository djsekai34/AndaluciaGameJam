import logosFinanciacion from "../Imagenes/LogosFinanciacion.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-ocean-deep py-5 px-4 text-center"
      style={{ borderTop: "2px solid rgba(196,154,42,0.4)" }}
    >
      {/* Corner decorations */}
      <span className="corner-decoration tl" />
      <span className="corner-decoration tr" />

      {/* Rosa de los vientos pequeña */}
      <div className="flex justify-center mb-3">
        <svg
          width="40"
          height="40"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.6"
        >
          <circle cx="30" cy="30" r="28" stroke="#c49a2a" strokeWidth="1" />
          <polygon points="30,4 33,24 27,24" fill="#d4a017" />
          <polygon points="30,56 33,36 27,36" fill="#8b6914" />
          <polygon points="4,30 24,27 24,33" fill="#8b6914" />
          <polygon points="56,30 36,27 36,33" fill="#8b6914" />
          <polygon
            points="30,4 32,18 30,16 28,18"
            fill="#8b1a1a"
            opacity="0.6"
          />
          <circle cx="30" cy="30" r="3" fill="#d4a017" />
          <circle cx="30" cy="30" r="1.5" fill="#0a1628" />
        </svg>
      </div>

      <p className="font-heading text-parchment-light text-sm tracking-widest mb-2">
        © {year} · Descubrimiento de América
      </p>
      <p className="font-body text-parchment-mid/70 text-xs tracking-wide mb-3">
        Curso de Especialización de Videojuegos y VR
      </p>

      {/* Golden divider */}
      <div className="golden-divider max-w-xs mx-auto mb-2">
        <span className="text-gold text-xs">✦</span>
      </div>

      <p className="font-body italic text-parchment-pale/50 text-sm mb-4">
        "No temas al mar que no conoces"
      </p>

      {/* Logos de financiación */}
      <div
        className="mt-3 pt-3"
        style={{ borderTop: "1px solid rgba(196,154,42,0.2)" }}
      >
        <img
          src={logosFinanciacion}
          alt="Logos de financiación"
          className="mx-auto block"
          style={{
            opacity: 0.85,
            objectFit: "contain",
            width: "70%",
            maxHeight: "80px",
          }}
        />
      </div>
    </footer>
  );
}

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Ship from "./Barco";
import WaveBackground from "./Olas";
import { ChevronDown } from "lucide-react";

function Star({ style }) {
  return <div className="star animate-twinkle" style={style} />;
}

export default function HeroSection() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const s = Array.from({ length: 80 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 60}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(s);
  }, []);

  const handleScrollDown = () => {
    const next = document.querySelector("#explicacion");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050d1a 0%, #0a1628 30%, #1a3a5c 70%, #2e6ea6 90%, #0a1628 100%)",
      }}
    >
      {/* Stars */}
      {stars.map((s, i) => (
        <Star key={i} style={s} />
      ))}

      {/* Subtle clouds / nebula effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 20% 20%, rgba(46,110,166,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 30% at 80% 15%, rgba(10,22,40,0.3) 0%, transparent 50%)",
        }}
      />

      {/* Moon */}
      <div
        className="absolute top-16 right-24 rounded-full"
        style={{
          width: 60,
          height: 60,
          background:
            "radial-gradient(circle at 35% 35%, #f5ecd7 0%, #e8d5a3 40%, #c49a2a 100%)",
          boxShadow:
            "0 0 30px rgba(212,160,23,0.3), 0 0 60px rgba(212,160,23,0.1)",
        }}
      />

      {/* Sailing ship crossing the scene */}
      <motion.div
        className="absolute bottom-40 pointer-events-none"
        animate={{ x: ["calc(-20vw)", "calc(110vw)"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 5,
        }}
      >
        <Ship size={0.9} />
      </motion.div>

      {/* Main ship centered */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 pointer-events-none">
        <Ship size={1.4} />
      </div>

      {/* Waves */}
      <WaveBackground />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 mb-32">
        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xl">✦</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* 1492 */}
        <motion.h1
          className="font-display text-gold leading-none mb-4"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            letterSpacing: "0.3em",
            textShadow:
              "0 0 40px rgba(212,160,23,0.5), 0 0 80px rgba(212,160,23,0.2)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          1492
        </motion.h1>

        {/* Main title */}
        <motion.h2
          className="font-display text-parchment-light leading-tight mb-3"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
            letterSpacing: "0.1em",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          DESCUBRE EL VIAJE
        </motion.h2>

        {/* Subtitle */}
        <motion.h3
          className="font-heading text-ocean-foam"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.8rem)",
            letterSpacing: "0.05em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          para descubrir América
        </motion.h3>

        {/* Quote */}
        <motion.p
          className="font-body italic text-parchment-pale/70 mt-6 text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          "Navega con nosotros hacia el horizonte desconocido"
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-parchment-mid/60 hover:text-gold transition-colors flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-label="Desplazarse hacia abajo"
      >
        <span className="font-heading text-xs tracking-widest">EXPLORAR</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import TeamMap, { teamMembers } from "./MapaEquipo";

export default function NosotrosSection() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section
      id="nosotros"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a1628 0%, #1a3a5c 50%, #0a1628 100%)",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#c49a2a 1px, transparent 1px), linear-gradient(90deg, #c49a2a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="golden-divider mb-4">
            <span className="font-heading text-parchment-light text-xl tracking-widest">
              ✦ NUESTRA TRIPULACIÓN ✦
            </span>
          </div>
          <p className="font-body italic text-parchment-mid/60 text-base">
            "Cuatro exploradores, un mismo destino"
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 rounded overflow-hidden"
        >
          <TeamMap activeId={activeId} onMarkerClick={setActiveId} />
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveId(member.id)}
              className={`relative cursor-pointer rounded overflow-hidden transition-all duration-300 ${
                activeId === member.id
                  ? "ring-2 ring-gold shadow-lg shadow-gold/20"
                  : "hover:ring-1 hover:ring-parchment-mid/50"
              }`}
              style={{
                background: "linear-gradient(160deg, #1a3a5c 0%, #0d2040 100%)",
                border: "1px solid rgba(196,154,42,0.25)",
              }}
            >
              {/* Gold top bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #8b6914, #d4a017, #8b6914)",
                }}
              />

              <div className="p-5 text-center">
                {/* Avatar */}
                <div
                  className="mb-3 w-16 h-16 mx-auto flex items-center justify-center rounded-full p-1"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)",
                    border: "1px solid rgba(196,154,42,0.3)",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name */}
                <h3 className="font-heading text-parchment-light text-sm tracking-wide mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="font-body italic text-parchment-mid/70 text-xs mb-3">
                  {member.role}
                </p>

                {/* Location */}
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xs">📍</span>
                  <span className="font-body text-ocean-light/70 text-xs">
                    {member.city}
                  </span>
                </div>
              </div>

              {/* Active indicator */}
              {activeId === member.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #d4a017, transparent)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

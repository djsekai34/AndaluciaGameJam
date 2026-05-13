import { motion } from 'framer-motion'

export default function Ship({ className = '', size = 1 }) {
  const w = 200 * size
  const h = 160 * size

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -12, 0],
        rotate: [-1.5, 1.5, -1.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width={w}
        height={h}
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hull */}
        <path
          d="M20 100 Q100 125 180 100 L165 130 Q100 145 35 130 Z"
          fill="#4a2c0a"
          stroke="#8b6914"
          strokeWidth="1.5"
        />
        {/* Deck */}
        <rect x="35" y="95" width="130" height="10" rx="2" fill="#6b3e12" stroke="#8b6914" strokeWidth="1" />

        {/* Main mast */}
        <line x1="100" y1="20" x2="100" y2="100" stroke="#4a2c0a" strokeWidth="4" />

        {/* Fore mast */}
        <line x1="60" y1="35" x2="60" y2="98" stroke="#4a2c0a" strokeWidth="3" />

        {/* Main sail */}
        <path
          d="M100 22 L145 45 L145 85 L100 95 Z"
          fill="#f5ecd7"
          stroke="#c49a2a"
          strokeWidth="1"
          opacity="0.95"
        />
        {/* Main sail cross */}
        <line x1="100" y1="40" x2="145" y2="55" stroke="#8b1a1a" strokeWidth="2" opacity="0.7" />
        <line x1="100" y1="65" x2="145" y2="75" stroke="#8b1a1a" strokeWidth="1.5" opacity="0.5" />

        {/* Red cross on main sail */}
        <rect x="112" y="35" width="8" height="40" fill="#8b1a1a" opacity="0.6" />
        <rect x="100" y="52" width="32" height="7" fill="#8b1a1a" opacity="0.6" />

        {/* Fore sail */}
        <path
          d="M60 37 L90 52 L90 85 L60 95 Z"
          fill="#e8d5a3"
          stroke="#c49a2a"
          strokeWidth="1"
          opacity="0.9"
        />

        {/* Lateen sail (back) */}
        <path
          d="M140 50 L165 65 L140 92 Z"
          fill="#e8d5a3"
          stroke="#c49a2a"
          strokeWidth="1"
          opacity="0.85"
        />

        {/* Bowsprit */}
        <line x1="20" y1="80" x2="60" y2="50" stroke="#4a2c0a" strokeWidth="3" />
        <path
          d="M20 80 L60 50 L60 85 Z"
          fill="#dcc98c"
          stroke="#c49a2a"
          strokeWidth="0.5"
          opacity="0.7"
        />

        {/* Flag */}
        <line x1="100" y1="20" x2="100" y2="8" stroke="#4a2c0a" strokeWidth="1.5" />
        <path d="M100 8 L118 13 L100 18 Z" fill="#8b1a1a" />

        {/* Water reflection below */}
        <ellipse cx="100" cy="135" rx="75" ry="6" fill="#1a3a5c" opacity="0.4" />

        {/* Waves near hull */}
        <path
          d="M30 128 Q50 124 70 128 Q90 132 110 128 Q130 124 150 128 Q165 131 175 128"
          stroke="#4da6d4"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M25 133 Q45 130 65 133 Q85 136 105 133 Q125 130 145 133 Q160 136 170 133"
          stroke="#2e6ea6"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </motion.div>
  )
}

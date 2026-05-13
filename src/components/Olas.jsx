export default function WaveBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden pointer-events-none">
      {/* Wave 1 - deepest */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ animation: 'wave 12s ease-in-out infinite', minWidth: '200%' }}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="#0a1628"
          opacity="0.8"
        />
      </svg>

      {/* Wave 2 - mid */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ animation: 'wave 8s ease-in-out infinite reverse', minWidth: '200%' }}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C360,80 720,10 1080,50 C1260,70 1350,30 1440,40 L1440,100 L0,100 Z"
          fill="#1a3a5c"
          opacity="0.6"
        />
      </svg>

      {/* Wave 3 - surface */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ animation: 'wave 6s ease-in-out infinite', minWidth: '200%' }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C180,55 360,5 540,30 C720,55 900,10 1080,35 C1260,55 1350,20 1440,30 L1440,80 L0,80 Z"
          fill="#2e6ea6"
          opacity="0.4"
        />
      </svg>

      {/* Foam/highlights */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ animation: 'wave 5s ease-in-out infinite reverse', minWidth: '200%' }}
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 C120,35 240,5 360,20 C480,35 600,5 720,20 C840,35 960,5 1080,20 C1200,35 1320,10 1440,20 L1440,50 L0,50 Z"
          fill="#4da6d4"
          opacity="0.15"
        />
      </svg>
    </div>
  )
}

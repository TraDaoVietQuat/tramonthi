export default function RoadmapIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <circle cx="300" cy="300" r="230" fill="url(#glowGradient)" />

      {/* orbit ring */}
      <circle
        cx="300"
        cy="300"
        r="200"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
        strokeDasharray="4 10"
        className="roadmap-orbit"
      />

      {/* book stack */}
      <g>
        <rect x="200" y="360" width="200" height="26" rx="6" fill="#4b2e0f" opacity="0.9" />
        <rect x="212" y="336" width="176" height="26" rx="6" fill="#5b1fa0" opacity="0.9" />
        <rect x="224" y="312" width="152" height="26" rx="6" fill="#0f5b4a" opacity="0.9" />
      </g>

      {/* graduation cap */}
      <g filter="drop-shadow(0 8px 24px rgba(16,185,129,0.35))">
        <path d="M300 190 L410 235 L300 280 L190 235 Z" fill="url(#capGradient)" />
        <rect x="270" y="235" width="60" height="46" rx="6" fill="url(#capGradient)" opacity="0.85" />
        <path
          d="M370 245 L370 285 C370 298 337 308 300 308 C263 308 230 298 230 285 L230 245"
          fill="none"
          stroke="url(#capGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line x1="405" y1="238" x2="405" y2="288" stroke="url(#capGradient)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="405" cy="294" r="7" fill="url(#capGradient)" />
      </g>

      {/* satellite badges around the orbit */}
      <g>
        <circle cx="300" cy="100" r="30" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeOpacity="0.35" />
        <path d="M289 100 l7 7 l15 -15" fill="none" stroke="#34d399" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g>
        <circle cx="473" cy="410" r="30" fill="#06b6d4" fillOpacity="0.12" stroke="#06b6d4" strokeOpacity="0.35" />
        <path d="M475 396 l-10 16 h8 l-2 14 l12 -18 h-8 Z" fill="#22d3ee" />
      </g>
      <g>
        <circle cx="127" cy="410" r="30" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeOpacity="0.35" />
        <path
          d="M127 394 c10 3 16 3 16 3 v14 c0 10 -8 16 -16 20 c-8 -4 -16 -10 -16 -20 v-14 c0 0 6 0 16 -3 Z"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>

      {/* scattered accent dots */}
      <circle cx="205" cy="180" r="4" fill="#34d399" opacity="0.6" />
      <circle cx="415" cy="170" r="3" fill="#22d3ee" opacity="0.5" />
      <circle cx="150" cy="300" r="3" fill="#60a5fa" opacity="0.5" />
      <circle cx="450" cy="300" r="4" fill="#34d399" opacity="0.5" />
    </svg>
  );
}

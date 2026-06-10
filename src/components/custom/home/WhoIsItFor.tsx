"use client";

import { ChevronRight } from "lucide-react";

// Color map (blue ramp matching globals.css --primary: #0a66c2)
// bg-light   : #e6f0fa  (replaces #e1f5ee)
// ring-mid   : #90bde8  (replaces #9fe1cb)
// accent     : #4d9de0  (replaces #4ecda4 / #5dcaa5)
// solid-mid  : #1a74c8  (replaces #1d9e75)
// dark-1     : #0a3d6b  (replaces #0f4a3c)
// dark-2     : #082e52  (replaces #0d3d30)
// dark-hub   : #052244  (replaces #085041)

// ─── SVG Illustration ────────────────────────────────────────────────────────
function ScienceIllustration() {
  return (
    <svg
      viewBox="0 0 680 680"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Global Science Platform – scientists collaborating worldwide"
    >
      {/* Background circle */}
      <circle cx="340" cy="340" r="310" fill="#e6f0fa" />
      <circle cx="340" cy="340" r="310" fill="none" stroke="#90bde8" strokeWidth="1" />
      <circle cx="340" cy="340" r="260" fill="none" stroke="#90bde8" strokeWidth="0.5" opacity="0.5" />

      {/* ── Researcher avatars ── */}
      {/* Top – Lead Researcher */}
      <circle cx="340" cy="220" r="60" fill="#0a3d6b" />
      <text x="340" y="212" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="22" fontWeight="700" fill="#4d9de0">DR</text>
      <text x="340" y="230" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fill="#90bde8">Lead Researcher</text>

      {/* Bottom-left – AI Scientist */}
      <circle cx="200" cy="410" r="52" fill="#082e52" />
      <text x="200" y="403" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="700" fill="#4d9de0">LM</text>
      <text x="200" y="419" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">AI Scientist</text>

      {/* Bottom-right – Biochemist */}
      <circle cx="480" cy="410" r="52" fill="#082e52" />
      <text x="480" y="403" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="700" fill="#4d9de0">PS</text>
      <text x="480" y="419" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">Biochemist</text>

      {/* ── Connection lines between avatars ── */}
      <line x1="340" y1="280" x2="240" y2="368" stroke="#1a74c8" strokeWidth="1.5" opacity="0.7" />
      <line x1="340" y1="280" x2="440" y2="368" stroke="#1a74c8" strokeWidth="1.5" opacity="0.7" />
      <line x1="252" y1="410" x2="428" y2="410" stroke="#1a74c8" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />

      {/* ── Central shared-research hub ── */}
      <circle cx="340" cy="315" r="30" fill="#052244" />
      <text x="340" y="309" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">SHARED</text>
      <text x="340" y="321" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">RESEARCH</text>
      <text x="340" y="333" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#4d9de0">2025</text>

      {/* ── Molecule decorations ── */}
      {/* Left molecule */}
      <circle cx="120" cy="225" r="18" fill="none" stroke="#1a74c8" strokeWidth="1.5" />
      <circle cx="120" cy="225" r="6" fill="#1a74c8" />
      <ellipse cx="120" cy="225" rx="18" ry="7" fill="none" stroke="#4d9de0" strokeWidth="1" opacity="0.6" />
      <ellipse cx="120" cy="225" rx="7" ry="18" fill="none" stroke="#4d9de0" strokeWidth="1" opacity="0.6" />

      {/* Right molecule */}
      <circle cx="560" cy="225" r="18" fill="none" stroke="#1a74c8" strokeWidth="1.5" />
      <circle cx="560" cy="225" r="6" fill="#1a74c8" />
      <ellipse cx="560" cy="225" rx="18" ry="7" fill="none" stroke="#4d9de0" strokeWidth="1" opacity="0.6" />
      <ellipse cx="560" cy="225" rx="7" ry="18" fill="none" stroke="#4d9de0" strokeWidth="1" opacity="0.6" />

      {/* Bottom molecule */}
      <circle cx="340" cy="535" r="18" fill="none" stroke="#1a74c8" strokeWidth="1.5" />
      <circle cx="340" cy="535" r="6" fill="#1a74c8" />
      <ellipse cx="340" cy="535" rx="18" ry="7" fill="none" stroke="#4d9de0" strokeWidth="1" opacity="0.6" />
      <ellipse cx="340" cy="535" rx="7" ry="18" fill="none" stroke="#4d9de0" strokeWidth="1" opacity="0.6" />

      {/* ── Dashed lines from molecules to avatars ── */}
      <line x1="138" y1="225" x2="180" y2="395" stroke="#4d9de0" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.5" />
      <line x1="542" y1="225" x2="500" y2="395" stroke="#4d9de0" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.5" />
      <line x1="340" y1="517" x2="225" y2="455" stroke="#4d9de0" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.5" />
      <line x1="340" y1="517" x2="455" y2="455" stroke="#4d9de0" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.5" />
      <line x1="120" y1="207" x2="305" y2="215" stroke="#4d9de0" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.4" />
      <line x1="560" y1="207" x2="375" y2="215" stroke="#4d9de0" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.4" />

      {/* ── Institution labels under molecules ── */}
      <rect x="86" y="250" width="68" height="22" rx="11" fill="#0a3d6b" />
      <text x="120" y="265" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">MIT · Physics</text>

      <rect x="526" y="250" width="68" height="22" rx="11" fill="#0a3d6b" />
      <text x="560" y="265" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">Oxford · Bio</text>

      <rect x="296" y="558" width="88" height="22" rx="11" fill="#0a3d6b" />
      <text x="340" y="573" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">IISc Bengaluru</text>

      {/* ── Institution labels under bottom-row avatars ── */}
      <rect x="84" y="466" width="74" height="22" rx="11" fill="#0a3d6b" />
      <text x="121" y="481" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">Tsinghua Univ.</text>

      <rect x="522" y="466" width="74" height="22" rx="11" fill="#0a3d6b" />
      <text x="559" y="481" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">CSIR India</text>

      {/* ── Decorative accent dots ── */}
      <circle cx="180" cy="175" r="5" fill="#4d9de0" opacity="0.7" />
      <circle cx="500" cy="160" r="5" fill="#4d9de0" opacity="0.7" />
      <circle cx="425" cy="565" r="5" fill="#4d9de0" opacity="0.7" />
      <circle cx="255" cy="565" r="5" fill="#4d9de0" opacity="0.7" />
      <circle cx="128" cy="318" r="4" fill="#90bde8" opacity="0.6" />
      <circle cx="552" cy="318" r="4" fill="#90bde8" opacity="0.6" />

      {/* ── Central platform badge ── */}
      <rect x="286" y="464" width="108" height="36" rx="8" fill="#052244" />
      <text x="340" y="479" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#4d9de0">GLOBAL SCIENCE</text>
      <text x="340" y="493" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#90bde8">PLATFORM</text>
    </svg>
  );
}

// ─── Card item ────────────────────────────────────────────────────────────────
interface CardItemProps {
  label: string;
  href?: string;
}

function CardItem({ label, href = "#" }: CardItemProps) {
  return (
    <a
      href={href}
      className="
        flex items-center justify-between
        px-5 py-4
        bg-secondary hover:bg-secondary/70
        border border-border
        rounded-lg
        text-foreground text-sm font-medium
        transition-colors duration-150
        group
      "
    >
      <span>{label}</span>
      <ChevronRight
        size={18}
        className="text-muted-foreground group-hover:text-primary transition-colors duration-150"
      />
    </a>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function WhoIsItFor() {
  const items: CardItemProps[] = [
    { label: "Find a research collaborator or fellow scientist" },
    { label: "Discover and attend scientific events" },
    { label: "Share your research and publications" },
    { label: "Join domain-specific science communities" },
  ];

  return (
    <section className="bg-background w-full">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-24">

          {/* ── Left: text + cards ── */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl lg:text-4xl  text-primary leading-tight">
                Who is GSP for?
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Any scientist looking to connect, collaborate, and advance their research career globally.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <CardItem key={item.label} label={item.label} />
              ))}
            </div>
          </div>

          {/* ── Right: circular illustration ── */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              className="
                relative w-full max-w-[420px] lg:max-w-[480px]
                aspect-square
                rounded-full overflow-hidden
                border-2 border-[#90bde8]
              "
            >
              <ScienceIllustration />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
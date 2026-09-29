"use client";

import { useState } from "react";
import { Eye, Layers3, Navigation, Radar } from "lucide-react";

/* ==========================================================================
   CAPABILITY EXPLORER
   Replaces the static numbered list. Four capabilities on the left; the
   active one expands and a matching animated diagram plays on the right.
   • Auto-advances every DURATION_MS (a thin progress line shows the timer).
   • Hovering or focusing anywhere in the component pauses auto-advance.
   • Clicking a capability jumps straight to it.
   • Respects prefers-reduced-motion: no animation, no auto-advance.
   To change the wording, edit the `capabilities` array below.
   ========================================================================== */

const DURATION_MS = 6000;

const css = `
@keyframes cap-rotate{to{transform:rotate(360deg)}}
@keyframes cap-pulse{0%,100%{opacity:.2}50%{opacity:1}}
@keyframes cap-flow{to{stroke-dashoffset:-16}}
@keyframes cap-bar{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}
@keyframes cap-progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes cap-fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.cap-sweep{transform-origin:200px 150px;animation:cap-rotate 5s linear infinite}
.cap-ring{transform-origin:200px 150px;animation:cap-rotate 24s linear infinite}
.cap-blip{animation:cap-pulse 5s ease-in-out infinite}
.cap-flow{animation:cap-flow 1.4s linear infinite}
.cap-bar{transform-box:fill-box;transform-origin:50% 100%;animation:cap-bar 3.2s ease-in-out infinite}
.cap-progress{transform-origin:left;animation-name:cap-progress;animation-timing-function:linear;animation-fill-mode:forwards}
.cap-fade{animation:cap-fade .5s ease-out}
@media (prefers-reduced-motion:reduce){
  .cap-sweep,.cap-ring,.cap-blip,.cap-flow,.cap-bar,.cap-fade{animation:none}
  .cap-progress{animation:none;transform:scaleX(0)}
}
`;

/* -------------------------------- visuals -------------------------------- */

function PerceptionVisual() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden="true"
    >
      {[45, 90, 135].map((r) => (
        <circle key={r} cx="200" cy="150" r={r} className="stroke-white/15" strokeWidth="1" />
      ))}
      <line x1="65" y1="150" x2="335" y2="150" className="stroke-white/10" />
      <line x1="200" y1="15" x2="200" y2="285" className="stroke-white/10" />

      <g className="cap-sweep">
        <path d="M200 150 L335 150 A135 135 0 0 0 303.4 63.2 Z" className="fill-orange/25" />
        <line x1="200" y1="150" x2="335" y2="150" className="stroke-orange" strokeWidth="1.5" />
      </g>

      {[
        { x: 262, y: 108, d: "0.4s" },
        { x: 148, y: 196, d: "2.2s" },
        { x: 250, y: 200, d: "3.6s" },
      ].map((b) => (
        <g key={b.d} className="cap-blip" style={{ animationDelay: b.d }}>
          <circle cx={b.x} cy={b.y} r="11" className="stroke-orange/40" strokeWidth="1" />
          <circle cx={b.x} cy={b.y} r="4.5" className="fill-orange" />
        </g>
      ))}

      <circle cx="200" cy="150" r="4" className="fill-white" />
    </svg>
  );
}

const NAV_PATH = "M50 230 C130 230 120 145 200 145 S300 70 350 70";

function NavigationVisual() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path d={NAV_PATH} className="stroke-white/25" strokeWidth="1.5" strokeDasharray="4 6" />

      {[
        { x: 50, y: 230 },
        { x: 200, y: 145 },
        { x: 350, y: 70 },
      ].map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r="15"
            className="cap-blip stroke-orange/50"
            strokeWidth="1"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
          <circle cx={p.x} cy={p.y} r="6" className="fill-navy-950 stroke-white/60" strokeWidth="1.5" />
        </g>
      ))}

      <circle r="13" className="fill-orange/25">
        <animateMotion dur="5s" repeatCount="indefinite" path={NAV_PATH} />
      </circle>
      <circle r="5.5" className="fill-orange">
        <animateMotion dur="5s" repeatCount="indefinite" path={NAV_PATH} />
      </circle>
    </svg>
  );
}

function AutonomyVisual() {
  const nodes = [
    { x: 100, y: 75 },
    { x: 300, y: 75 },
    { x: 100, y: 225 },
    { x: 300, y: 225 },
  ];

  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden="true"
    >
      {nodes.map((n, i) => (
        <line
          key={i}
          x1="200"
          y1="150"
          x2={n.x}
          y2={n.y}
          className="cap-flow stroke-white/30"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      ))}

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="13" className="fill-navy-950 stroke-white/50" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="3.5" className="fill-white/60" />
        </g>
      ))}

      <circle cx="200" cy="150" r="46" className="cap-ring stroke-white/25" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="200" cy="150" r="26" className="fill-orange/15 stroke-orange" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="8" className="fill-orange" />
    </svg>
  );
}

function MissionVisual() {
  const heights = [60, 100, 80, 140, 95, 170, 120];
  const highlight = 5;

  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden="true"
    >
      <line x1="60" y1="230" x2="340" y2="230" className="stroke-white/25" />

      {heights.map((h, i) => {
        const cx = 90 + i * 36;
        const isHighlight = i === highlight;

        return (
          <rect
            key={i}
            x={cx - 9}
            y={230 - h}
            width="18"
            height={h}
            rx="2"
            className={isHighlight ? "fill-orange" : "cap-bar fill-white/25"}
            style={isHighlight ? undefined : { animationDelay: `${i * 0.35}s` }}
          />
        );
      })}

      <g className="cap-blip">
        <circle cx={90 + highlight * 36} cy={230 - heights[highlight] - 18} r="11" className="stroke-orange/40" strokeWidth="1" />
        <circle cx={90 + highlight * 36} cy={230 - heights[highlight] - 18} r="4.5" className="fill-orange" />
      </g>
    </svg>
  );
}

/* ------------------------------- content -------------------------------- */

const capabilities = [
  {
    id: "perception",
    icon: Eye,
    title: "Perception",
    headline: "Sense the environment.",
    description:
      "Real-time environmental awareness that enables autonomous systems to understand their surroundings.",
    Visual: PerceptionVisual,
  },
  {
    id: "navigation",
    icon: Navigation,
    title: "Navigation",
    headline: "Move with confidence.",
    description:
      "Intelligent navigation technologies designed for reliable autonomous movement and mission execution.",
    Visual: NavigationVisual,
  },
  {
    id: "autonomy",
    icon: Layers3,
    title: "Autonomy",
    headline: "Decide with less supervision.",
    description:
      "Integrated software and hardware systems that allow platforms to make decisions with reduced operator dependency.",
    Visual: AutonomyVisual,
  },
  {
    id: "mission-intelligence",
    icon: Radar,
    title: "Mission Intelligence",
    headline: "Turn data into decisions.",
    description:
      "Technology focused on turning platform data into actionable information during operations.",
    Visual: MissionVisual,
  },
];

/* ------------------------------ component ------------------------------- */

export default function CapabilityExplorer() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = capabilities[active];
  const goNext = () => setActive((i) => (i + 1) % capabilities.length);

  return (
    <div
      className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <style>{css}</style>

      {/* ---- Capability list ---- */}
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Core capabilities"
        className="divide-y divide-body/10 border-y border-body/10 self-start"
      >
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          const isActive = index === active;

          return (
            <div key={capability.id} className="relative">
              <button
                type="button"
                role="tab"
                id={`cap-tab-${capability.id}`}
                aria-selected={isActive}
                aria-controls="cap-panel"
                onClick={() => setActive(index)}
                className="group flex w-full items-start gap-5 py-6 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange"
              >
                <span
                  className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                    isActive
                      ? "border-orange bg-orange text-white"
                      : "border-body/10 text-body group-hover:border-orange/60"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.5} />
                </span>

                <span className="block flex-1">
                  <span
                    className={`block text-xl font-semibold tracking-tight transition-colors duration-300 ${
                      isActive ? "text-body" : "text-body/50 group-hover:text-body"
                    }`}
                  >
                    {capability.title}
                  </span>

                  <span
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="mt-2 block max-w-md text-sm leading-6 text-muted">
                        {capability.description}
                      </span>
                    </span>
                  </span>
                </span>
              </button>

              {/* Timer line for the active capability; finishing it moves on */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 overflow-hidden"
              >
                {isActive && (
                  <span
                    className="cap-progress block h-full bg-orange"
                    style={{
                      animationDuration: `${DURATION_MS}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                    onAnimationEnd={goNext}
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* ---- Visual panel ---- */}
      <div
        id="cap-panel"
        role="tabpanel"
        aria-labelledby={`cap-tab-${current.id}`}
        className="relative min-h-88 overflow-hidden rounded-2xl bg-navy-950 text-white lg:min-h-120"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[90px]"
        />

        <div className="absolute inset-x-8 bottom-32 top-8 sm:bottom-28">
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              aria-hidden={index !== active}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <capability.Visual />
            </div>
          ))}
        </div>

        <div
          key={current.id}
          className="cap-fade absolute inset-x-0 bottom-0 border-t border-white/10 bg-linear-to-t from-black/60 to-transparent p-6 sm:p-8"
        >
          <div className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
              {current.title}
            </span>
          </div>

          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {current.headline}
          </p>
        </div>
      </div>
    </div>
  );
}
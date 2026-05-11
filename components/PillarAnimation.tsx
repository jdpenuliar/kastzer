"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type PillarKind = "software" | "skincare" | "coffee" | "realestate";

const ARIA_LABEL: Record<PillarKind, string> = {
  software: "Animated illustration: lines of code drawing themselves inside a window.",
  skincare: "Animated illustration: a droplet falling and creating a ripple.",
  coffee: "Animated illustration: a coffee cup with steam rising.",
  realestate: "Animated illustration: a building outline rendered as one window lights up.",
};

export function PillarAnimation({ kind }: { kind: PillarKind }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [playId, setPlayId] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const hasTriggeredRef = useRef(false);
  const cooldownRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || reducedMotion) return;
    if (hasTriggeredRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            setPlayId((id) => id + 1);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion]);

  const replay = useCallback(() => {
    if (reducedMotion) return;
    if (cooldownRef.current) return;
    cooldownRef.current = true;
    setPlayId((id) => id + 1);
    window.setTimeout(() => {
      cooldownRef.current = false;
    }, 500);
  }, [reducedMotion]);

  const isPlaying = playId > 0 && !reducedMotion;

  return (
    <div
      ref={wrapperRef}
      className={`pillar-anim anim-${kind}${isPlaying ? " is-playing" : ""}`}
      onMouseEnter={replay}
      onFocus={replay}
      onTouchStart={replay}
      tabIndex={0}
      role="img"
      aria-label={ARIA_LABEL[kind]}
    >
      <div className="pillar-anim-stage" key={playId}>
        {kind === "software" && <SoftwareSvg />}
        {kind === "skincare" && <SkinCareSvg />}
        {kind === "coffee" && <CoffeeSvg />}
        {kind === "realestate" && <RealEstateSvg />}
      </div>
    </div>
  );
}

function SoftwareSvg() {
  return (
    <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="frame" x="20" y="20" width="160" height="120" rx="6" />
      <circle className="dot" cx="32" cy="32" r="2.5" />
      <circle className="dot" cx="42" cy="32" r="2.5" />
      <circle className="dot" cx="52" cy="32" r="2.5" />

      <path className="bracket" data-draw pathLength="1" d="M 38 56 L 32 64 L 38 72" />
      <path className="bracket" data-draw pathLength="1" d="M 162 56 L 168 64 L 162 72" />

      <path className="bar bar-1" data-draw pathLength="1" d="M 50 64 L 120 64" />
      <path className="bar bar-2" data-draw pathLength="1" d="M 60 84 L 155 84" />
      <path className="bar bar-3" data-draw pathLength="1" d="M 60 104 L 135 104" />
      <path className="bar bar-4" data-draw pathLength="1" d="M 50 124 L 100 124" />

      <rect className="cursor" x="104" y="118" width="3" height="12" rx="1" />
    </svg>
  );
}

function SkinCareSvg() {
  return (
    <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path className="leaf" d="M 22 130 Q 30 80 70 70 Q 50 100 35 138 Z" />
      <path className="leaf" d="M 178 130 Q 170 80 130 70 Q 150 100 165 138 Z" />

      <g className="droplet">
        <path d="M 100 32 C 86 50 80 64 80 76 a 20 20 0 0 0 40 0 c 0 -12 -6 -26 -20 -44 z" />
      </g>

      <circle className="ripple" cx="100" cy="120" r="6" />
      <circle className="ripple ripple-2" cx="100" cy="120" r="16" />

      <line x1="36" y1="138" x2="164" y2="138" stroke="rgba(10, 15, 44, 0.1)" strokeWidth="1" />
    </svg>
  );
}

function CoffeeSvg() {
  return (
    <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path className="steam steam-1" d="M 80 78 Q 76 68 82 60 Q 88 52 84 44" />
      <path className="steam steam-2" d="M 100 78 Q 96 68 102 60 Q 108 52 104 44" />
      <path className="steam steam-3" d="M 120 78 Q 116 68 122 60 Q 128 52 124 44" />

      <path
        className="cup"
        d="M 64 90 L 64 116 a 14 14 0 0 0 14 14 L 122 130 a 14 14 0 0 0 14 -14 L 136 90 Z"
      />
      <path className="cup" d="M 136 96 a 12 12 0 0 1 0 22" />
      <ellipse className="liquid" cx="100" cy="92" rx="34" ry="4" />

      <path className="saucer" d="M 56 138 L 144 138" />
      <path className="saucer" d="M 50 144 Q 100 154 150 144" />
    </svg>
  );
}

function RealEstateSvg() {
  return (
    <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <line className="ground" x1="20" y1="142" x2="180" y2="142" />

      <path className="outline" data-draw pathLength="1" d="M 60 142 L 60 78 L 100 50 L 140 78 L 140 142" />
      <path className="outline" data-draw pathLength="1" d="M 60 90 L 140 90" />
      <path className="outline" data-draw pathLength="1" d="M 60 110 L 140 110" />
      <path className="outline" data-draw pathLength="1" d="M 100 110 L 100 142" />
      <path className="outline" data-draw pathLength="1" d="M 86 124 L 86 142" />
      <path className="outline" data-draw pathLength="1" d="M 114 124 L 114 142" />

      <rect className="window win-1" x="70" y="96" width="14" height="10" />
      <rect className="window win-2" x="116" y="96" width="14" height="10" />
      <rect className="window win-3" x="70" y="116" width="14" height="10" />
      <rect className="window win-4" x="116" y="116" width="14" height="10" />
      <rect className="window win-5" x="92" y="60" width="16" height="14" />

      <rect className="lit" x="93" y="61" width="14" height="12" rx="1" />
    </svg>
  );
}

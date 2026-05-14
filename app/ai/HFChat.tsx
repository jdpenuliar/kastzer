"use client";

import { useState } from "react";

export function HFChat() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="hf-wrap">
      {!loaded && (
        <div className="hf-loading" aria-live="polite">
          <span className="hf-pulse" aria-hidden="true"></span>
          Loading Kastzer AI&hellip;
        </div>
      )}
      <iframe
        src="https://jdpenuliar-kastzer-profile.hf.space/"
        frameBorder="0"
        allow="microphone"
        title="Kastzer AI Adviser"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "750px",
          borderRadius: "16px",
          border: "1px solid rgba(201, 168, 76, 0.3)",
          boxShadow: "0 8px 32px rgba(10, 15, 44, 0.15)",
          background: "#F8F8F6",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
}

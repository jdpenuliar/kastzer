"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Full chat page is already at /ai — hide bubble there
  if (!mounted || pathname === "/ai") return null;

  function handleOpen() {
    setOpen(true);
    setEverOpened(true);
  }

  return (
    <>
      {/* ── Chat panel ── */}
      <div className={`fc-panel${open ? " fc-panel-open" : ""}`} role="dialog" aria-label="Kastzer AI chat" aria-hidden={!open}>
        <div className="fc-header">
          <span className="fc-title">
            <span className="fc-hdot" aria-hidden="true"></span>
            Kastzer AI
          </span>
          <button
            className="fc-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="fc-body">
          {/* Only render iframe after first open to avoid loading on every page */}
          {everOpened && (
            <>
              {!iframeLoaded && (
                <div className="hf-loading">
                  <span className="hf-pulse" aria-hidden="true"></span>
                  Loading Kastzer AI&hellip;
                </div>
              )}
              <iframe
                src="https://huggingface.co/spaces/jdpenuliar/kastzer_profile"
                title="Kastzer AI Chat"
                allow="microphone"
                frameBorder="0"
                onLoad={() => setIframeLoaded(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                  opacity: iframeLoaded ? 1 : 0,
                  transition: "opacity 0.4s ease",
                }}
              />
            </>
          )}
        </div>
      </div>

      {/* ── Trigger button ── */}
      <button
        className={`fc-btn${open ? " fc-btn-open" : ""}`}
        onClick={() => (open ? setOpen(false) : handleOpen())}
        aria-label={open ? "Close AI chat" : "Chat with Kastzer AI"}
        aria-expanded={open}
      >
        {/* Chat icon */}
        <svg className="fc-icon-chat" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {/* Close icon */}
        <svg className="fc-icon-close" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>

        {/* Unread pulse shown before first open */}
        {!everOpened && <span className="fc-unread" aria-hidden="true"></span>}
      </button>
    </>
  );
}

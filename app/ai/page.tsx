import type { Metadata } from "next";
import Link from "next/link";

import { HFChat } from "./HFChat";

export const metadata: Metadata = {
  title: "AI Adviser",
  description:
    "Chat with Kastzer AI — a personal adviser built on real experience in software engineering, real estate, skin care, and coffee. Ask about projects, collaboration, and ideas.",
  openGraph: {
    title: "Kastzer AI Adviser",
    description:
      "Your AI guide to Kastzer's projects and expertise. Powered by Hugging Face.",
    url: "https://kastzer.com/ai",
  },
};

export default function AIPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Powered by Hugging Face</span>
          <h1>Meet Kastzer AI</h1>
          <div className="gold-rule"></div>
          <p>
            Your personal adviser on my experience, projects, and how we can
            bring your ideas to life.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ai-intro reveal">
            <p>
              This AI assistant draws from my background in software engineering,
              real estate, skin care, and coffee. Ask it about my projects, my
              approach, or how to get started working together. It&apos;s here to
              give you a real sense of what Kastzer does and how I can help.
            </p>
          </div>

          <div className="ai-frame-wrap reveal">
            <HFChat />
          </div>

          <div className="ai-footer reveal">
            <p className="ai-note">
              Kastzer AI is powered by Hugging Face. Responses reflect real
              experience and projects &mdash; ask anything.
            </p>
            <Link href="/contact" className="btn btn-gold">
              Prefer to talk directly? Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

import { AgentClient } from "./AgentClient";

export const metadata: Metadata = {
  title: "Agent",
  description: "Chat with the Kastzer agent.",
};

export default function AgentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#C9A84C" }}>
            Beta
          </span>
          <h1>Talk to Kastzer.</h1>
          <div className="gold-rule"></div>
          <p>
            An AI assistant grounded in our four practices &mdash; software, skin care,
            coffee, and real estate.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="agent-shell">
          <div className="agent-frame">
            <AgentClient />
          </div>
        </div>
      </section>
    </>
  );
}

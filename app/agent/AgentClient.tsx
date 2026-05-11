"use client";

import { AgentChat, createAgentChat } from "@21st-sdk/nextjs";
import { useChat } from "@ai-sdk/react";
import type { Chat } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import { useMemo } from "react";

import "@21st-sdk/react/styles.css";

export function AgentClient() {
  const chat = useMemo(
    () =>
      createAgentChat({
        agent: "my-agent",
        tokenUrl: "/api/an-token",
      }),
    [],
  );

  const { messages, sendMessage, status, stop, error } = useChat({
    chat: chat as Chat<UIMessage>,
  });

  return (
    <AgentChat
      messages={messages}
      onSend={(msg) => sendMessage({ text: msg.content })}
      status={status}
      onStop={stop}
      error={error ?? undefined}
    />
  );
}

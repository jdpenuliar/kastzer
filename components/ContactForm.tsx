"use client";

import { useState } from "react";

export function ContactForm() {
  const [note, setNote] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNote(
      "Thanks — for now, please email operations@kastzer.com directly. We will get back to you shortly.",
    );
  }

  return (
    <form className="contact-form reveal" noValidate onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-row">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" required />
      </div>
      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button className="btn btn-primary" type="submit" style={{ width: "100%" }}>
        Send message
      </button>
      <p className="form-note" style={note ? { color: "#0A0F2C" } : undefined}>
        {note ?? (
          <>
            This form is for inquiries only and does not submit to a backend. Please
            email <a href="mailto:operations@kastzer.com">operations@kastzer.com</a> directly.
          </>
        )}
      </p>
    </form>
  );
}

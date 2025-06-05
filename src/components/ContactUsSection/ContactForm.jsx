import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    emailjs
      .sendForm("service_blkhs3e", "template_72vv2rj", form.current, {
        publicKey: "fJ4pj3o6K_YrlHeIS", // Replace with your actual public key
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("✅ Message sent successfully!");
          setTimeout(() => setSuccess(""), 4000); // Clear message after 4 sec
        },
        (err) => {
          console.error("FAILED...", err.text);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      {success && <p className="text-green-400 mb-4">{success}</p>}
      {error && <p className="text-red-400 mb-4">{error}</p>}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-darkBrown px-3 border-cyan border"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-darkBrown px-3 border-cyan border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-darkBrown p-3 border-cyan border"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl bg-cyan hover:bg-darkCyan transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

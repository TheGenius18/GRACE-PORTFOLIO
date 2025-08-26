import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const form = useRef();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

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
        .sendForm("service_1eldsja", "template_72vv2rj", form.current, {
        publicKey: "fJ4pj3o6K_YrlHeIS",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(t("contactForm.success"));
          setTimeout(() => setSuccess(""), 4000);
        },
        (err) => {
          console.error("FAILED...", err.text);
          setError(t("contactForm.error"));
        }
      );
  };

  return (
    <div className={isRTL ? "text-right" : "text-left"}>
      {success && <p className="text-green-400 mb-4">{success}</p>}
      {error && <p className="text-red-400 mb-4">{error}</p>}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder={t("contactForm.placeholders.name")}
          required
          className="h-12 rounded-lg bg-darkBrown px-3 border-cyan border"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder={t("contactForm.placeholders.email")}
          required
          className="h-12 rounded-lg bg-darkBrown px-3 border-cyan border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          placeholder={t("contactForm.placeholders.message")}
          required
          className="rounded-lg bg-darkBrown p-3 border-cyan border"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl bg-cyan hover:bg-darkCyan transition-all duration-300"
        >
          {t("contactForm.button")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

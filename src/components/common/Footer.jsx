import React, { useState } from "react";
import logo from "../../assets/images/CDlogo.png";

const BRAND_NAME = "CreadorDesigns";
const BRAND_TAGLINE = "Creativity is in our DNA";

const INSTAGRAM_URL = "https://www.instagram.com/creadordesigns/"; 
const WHATSAPP_URL = "https://wa.me/919325026968"; // e.g. https://wa.me/91XXXXXXXXXX


const INVERT_LOGO = false;

// Left panel me dikhne wale stats — apne actual numbers se replace kar do
const STATS = [
  { value: "198+", label: "Projects\nDelivered" },
  { value: "93%", label: "Results\nRetained" },
  { value: "99+", label: "Clients\nDelighted" },
  { value: "10+", label: "Partnerships\nForged" },
];

/* ----------------------------- Icons ----------------------------- */

function InstagramIcon({ width = 20, height = 20, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ width = 20, height = 20, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      {...props}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function ChatIcon({ width = 16, height = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function MailIcon({ width = 16, height = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m4 6 8 7 8-7" />
    </svg>
  );
}

function GlobeIcon({ width = 16, height = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </svg>
  );
}

function LinkedInIcon({ width = 16, height = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" className="h-4 w-4 shrink-0" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.44 20h-3.37v-5.97c0-1.42-.03-3.25-1.98-3.25-1.99 0-2.29 1.55-2.29 3.15V20h-3.37V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20z" />
    </svg>
  );
}

function ArrowUpRightIcon({ width = 16, height = 16, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      {...props}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function CheckCircleIcon({ width = 16, height = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

/* ------------------------- Floating-label field (light theme) ------------------------- */

function Field({ id, label, required, type = "text", value, onChange }) {
  return (
    <div className="relative pt-5">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full border-0 border-b border-black/15 bg-transparent pb-2 pt-3 text-sm text-black outline-none focus:border-black"
      />

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-[26px] text-[13px] uppercase tracking-wide text-black/50 transition-all duration-200
        peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-black/70
        peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-black/70"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
    </div>
  );
}

function TextAreaField({ id, label, required, value, onChange }) {
  return (
    <div className="relative pt-5">
      <textarea
        id={id}
        name={id}
        rows={1}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full resize-none border-0 border-b border-black/15 bg-transparent pb-2 pt-3 text-sm text-black outline-none focus:border-black"
      />

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-[26px] text-[13px] uppercase tracking-wide text-black/50 transition-all duration-200
        peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-black/70
        peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-black/70"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
    </div>
  );
}

/* --------------------------------- Footer --------------------------------- */

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setSent(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: yahan apna API / EmailJS / WhatsApp redirect logic lagao
    console.log("Form submitted:", form);

    setSent(true);
    setForm({ name: "", email: "", phone: "", business: "" });
  };

  return (
    <footer id="contact" className="overflow-hidden rounded-t-[28px] bg-black text-white">
      <div className="grid md:grid-cols-2">
        {/* Left: brand panel with grid background */}
        <div className="relative flex flex-col justify-between gap-6 overflow-hidden bg-black p-6 sm:gap-8 sm:p-8 md:p-10">
          {/* Grid background */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(120% 120% at 15% 10%, black 35%, transparent 88%)",
              WebkitMaskImage: "radial-gradient(120% 120% at 15% 10%, black 35%, transparent 88%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to black/40" />

          <div className="relative z-10 flex flex-col gap-6">
            {/* Brand: logo + name + tagline */}
            <div className="flex items-center gap-3.5">
              <img
                src={logo}
                alt={`${BRAND_NAME} logo`}
                className={`h-[64px] w-auto shrink-0 object-contain sm:h-[76px] ${
                  INVERT_LOGO ? "brightness-0 invert" : ""
                }`}
              />

              <div className="flex flex-col items-start justify-center">
                <span className="whitespace-nowrap text-[17px] font-extrabold leading-none tracking-[-0.03em] text-white sm:text-[19px]">
                  {BRAND_NAME}
                </span>

                <span className="mt-[5px] whitespace-nowrap text-[7px] font-semibold uppercase leading-none tracking-[0.24em] text-white/55">
                  {BRAND_TAGLINE}
                </span>
              </div>
            </div>

            <h2 className="max-w-md text-2xl font-medium leading-[1.15] tracking-tight sm:text-3xl md:text-[42px]">
              Have a project in mind? We’re ready.
            </h2>

            {/* Quick connect */}
            <div>
              <p className="text-xs text-white/50">Connect quickly with</p>
              <div className="mt-3 flex items-center gap-2.5">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat with us" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                  <ChatIcon />
                </a>
                <a href="mailto:hello@creadordesigns.com" aria-label="Email us" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                  <MailIcon />
                </a>
                <a href="#" aria-label="Visit our website" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                  <GlobeIcon />
                </a>
                <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold italic tracking-tight sm:text-3xl">{s.value}</p>
                <p className="mt-1 whitespace-pre-line text-[12px] leading-tight text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form panel */}
        <div className="flex flex-col justify-center bg-white p-6 text-black sm:p-8 md:p-10">
          <h3 className="text-xl font-medium leading-snug sm:text-2xl md:text-[26px]">
            Got The Vision? <span className="font-semibold">We&apos;ve Got The Expertise.</span>
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 max-w-[380px] space-y-3.5">
            <Field
              id="name"
              label="First Name"
              required
              value={form.name}
              onChange={handleChange}
            />

            <Field
              id="email"
              label="Email Address"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
            />

            <Field
              id="phone"
              label="Phone Number"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />

            <TextAreaField
              id="business"
              label="Your Business Information"
              value={form.business}
              onChange={handleChange}
            />

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="submit"
                className="group flex h-[52px] items-center justify-center gap-2 rounded-full bg-black px-8 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-neutral-800"
              >
                Submit
                <ArrowUpRightIcon className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {sent && (
                <span className="flex items-center gap-1.5 text-xs text-black/60">
                  <CheckCircleIcon />
                  Thanks! We’ll get back to you soon.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-start justify-between gap-3 border-t border-white/15 bg-black px-6 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5 md:px-10">
        <p className="text-sm font-light text-white/60">
          © {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.
        </p>

        <div className="flex items-center gap-2.5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <InstagramIcon width={18} height={18} className="h-[18px] w-[18px]" />
          </a>
           <a
          
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <WhatsAppIcon width={18} height={18} className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from "react";
import logo from "../../assets/images/CDlogo.png";

const BRAND_NAME = "CreadorDesigns";
const BRAND_TAGLINE = "Creativity is in our DNA";

const INSTAGRAM_URL = "#"; // apna Instagram link yahan daalo
const WHATSAPP_URL = "#"; // e.g. https://wa.me/91XXXXXXXXXX

// Agar logo dark/black hai aur black footer pe nahi dikh raha,
// to isko true kar do. Logo white ho jaayega.
const INVERT_LOGO = false;

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

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
        className="peer w-full border-0 border-b border-white bg-transparent pb-2 pt-3 text-sm text-white outline-none focus:border-white"
      />

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-[26px] text-[13px] uppercase tracking-wide text-white transition-all duration-200
        peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-white/70
        peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-white/70"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
    </div>
  );
}

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
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
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <footer id="contact" className="rounded-t-[28px] bg-black text-white">
      <div className="container-main pt-16">
        {/* Top: heading + brand + form */}
        <div className="grid gap-12 pb-14 md:grid-cols-[2fr_1fr] md:gap-0">
          <div className="flex flex-col justify-between gap-12 md:pr-10">
            <h2 className="max-w-md text-4xl font-medium leading-[1.12] tracking-tight md:text-[52px]">
              Have a project in mind? We’re ready.
            </h2>

            {/* Brand: logo + name + tagline */}
            <div className="flex items-center gap-4 sm:gap-5">
              <img
                src={logo}
                alt={`${BRAND_NAME} logo`}
                className={`h-[72px] w-auto shrink-0 object-contain sm:h-[88px] ${
                  INVERT_LOGO ? "brightness-0 invert" : ""
                }`}
              />

              <div className="flex flex-col items-start justify-center">
                <span className="whitespace-nowrap text-[22px] font-extrabold leading-none tracking-[-0.03em] text-white sm:text-[26px]">
                  {BRAND_NAME}
                </span>

                <span className="mt-[7px] whitespace-nowrap text-[7px] font-semibold uppercase leading-none tracking-[0.24em] text-white/55 sm:text-[8px]">
                  {BRAND_TAGLINE}
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:border-l md:border-white/20 md:pl-10 lg:pl-[41px]"
          >
            <div className="max-w-[333px] space-y-4">
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

              <div className="flex items-center gap-4 pt-3">
                <button
                  type="submit"
                  className="rounded-full bg-[#f0f0f0] px-7 py-3 text-sm font-medium text-black transition hover:bg-white"
                >
                  Submit
                </button>

                {sent && (
                  <span className="text-xs text-white/60">
                    Thanks! We’ll get back to you soon.
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/15 py-8 sm:flex-row sm:items-center">
          <p className="text-base font-light text-white/60">
            © {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <InstagramIcon />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { PLACEHOLDERS, WHATSAPP_LINK, eventTypes } from "../../data/siteContent";
import { GOLD, GOLD_BORDER, SANS, SERIF } from "../../styles/tokens";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const inputClass = `${SANS} w-full border border-[#C9A24B]/40 bg-black px-4 py-3 text-sm text-[#F3EEE3] placeholder:text-[#F3EEE3]/40 focus:border-[#F5C518] focus:outline-none`;
const labelClass = `${SANS} mb-2 block text-[11px] tracking-[0.15em] text-[#F3EEE3]/70`;

export default function QuoteForm() {
  // status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Honeypot: real visitors never fill this in
    if (formData.get("website")) return;

    setStatus("sending");
    try {
      // TODO: send formData to a backend (Formspree, Resend, a Supabase edge function, etc.)
      // that emails order@foodbyhybek.com
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="bg-[#141414] px-6 py-24 sm:py-32">
      <SectionHeading
        title="Request a Quote"
        subtitle="Tell us about your event and we'll get back to you with a custom quote."
      />

      <Reveal className="mx-auto mt-14 grid max-w-6xl gap-12 border border-[#C9A24B]/40 bg-[#0d0d0d] p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Direct contact options come first on mobile */}
        <aside className="order-first space-y-6 lg:order-last">
          <a
            href={WHATSAPP_LINK}
            className={`${SANS} flex items-center justify-center gap-3 border ${GOLD_BORDER} py-3 text-xs font-medium uppercase tracking-[0.2em] ${GOLD} transition-colors hover:bg-[#C9A24B] hover:text-black`}
          >
            <MessageCircle size={18} /> Message on WhatsApp
          </a>
          <ul className={`${SANS} space-y-4 text-sm text-[#F3EEE3]/80`}>
            <li className="flex items-center gap-3">
              <Phone size={16} className={GOLD} />
              <a href={PLACEHOLDERS.phoneHref}>{PLACEHOLDERS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className={GOLD} />
              <a href={`mailto:${PLACEHOLDERS.email}`}>{PLACEHOLDERS.email}</a>
            </li>
          </ul>
          <p className={`${SANS} text-xs leading-relaxed text-[#F3EEE3]/60`}>
            Serving Edmonton and surrounding areas.
          </p>
        </aside>

        {status === "success" ? (
          <div className="flex animate-fade-up flex-col items-center justify-center py-12 text-center">
            <h3 className={`${SERIF} text-3xl font-semibold text-[#F3EEE3]`}>Request sent</h3>
            <p className={`${SANS} mt-4 max-w-sm text-sm text-[#F3EEE3]/70`}>
              Thank you. We'll review your event details and reply with a custom quote.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Name</label>
              <input id="name" name="name" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone</label>
              <input id="phone" name="phone" type="tel" required className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelClass}>Email (optional)</label>
              <input id="email" name="email" type="email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="eventType" className={labelClass}>Event type</label>
              <select id="eventType" name="eventType" required defaultValue="" className={inputClass}>
                <option value="" disabled>Select one</option>
                {eventTypes.map((eventType) => (
                  <option key={eventType} value={eventType}>{eventType}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="eventDate" className={labelClass}>Event date</label>
              <input id="eventDate" name="eventDate" type="date" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="guestCount" className={labelClass}>Estimated guests</label>
              <input id="guestCount" name="guestCount" type="number" min={1} className={inputClass} />
            </div>
            <div>
              <label htmlFor="area" className={labelClass}>Area in Edmonton</label>
              <input id="area" name="area" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="dishes" className={labelClass}>Dishes you're interested in</label>
              <input id="dishes" name="dishes" placeholder="Jollof, suya, egusi..." className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>Dietary needs or anything else</label>
              <textarea id="message" name="message" rows={4} className={inputClass} />
            </div>

            {/* Honeypot field, hidden from people */}
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`${SANS} w-full bg-[#F5C518] py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#ffd84a] disabled:opacity-60`}
              >
                {status === "sending" ? "Sending..." : "Send request"}
              </button>
              {status === "error" && (
                <p className={`${SANS} mt-4 text-sm text-[#F3EEE3]/80`} role="alert">
                  Your request didn't send. Please try again, or{" "}
                  <a href={WHATSAPP_LINK} className={`${GOLD} underline underline-offset-4`}>
                    reach us on WhatsApp
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        )}
      </Reveal>
    </section>
  );
}

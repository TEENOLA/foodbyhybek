import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../../data/siteContent";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      aria-label="Chat on WhatsApp"
      style={{ animationDelay: "1800ms" }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 animate-fade-up items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden"
        aria-hidden="true"
      />
      <MessageCircle size={28} className="relative" />
    </a>
  );
}

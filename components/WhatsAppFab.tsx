import { SITE } from "@/lib/site";

export default function WhatsAppFab() {
  const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${SITE.name}, I'd like to know more about your infrastructure, security, and energy solutions.`,
  )}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.95.57 3.84 1.65 5.49L2 22l4.69-1.23a9.9 9.9 0 005.35 1.55h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0012.04 2zm0 18.13c-1.62 0-3.21-.43-4.59-1.25l-.33-.2-2.78.73.74-2.71-.21-.34a8.21 8.21 0 01-1.27-4.36c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.13-8.04 8.12zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73 2.48 1.07 2.48.71 2.93.66.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
      </svg>
    </a>
  );
}

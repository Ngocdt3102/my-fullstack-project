import { MessageCircle } from "lucide-react";
import { contactInfo } from "../data/siteData";

export default function ZaloFloatingButton() {
  return (
    <a
      href={contactInfo.zaloUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Liên hệ Zalo"
      className="group fixed bottom-6 right-6 z-[999] flex items-center gap-3"
    >
      {/* Tooltip */}
      <div className="hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#003F78] opacity-0 shadow-xl shadow-blue-950/15 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat Zalo
      </div>

      {/* Pulse background */}
      <span className="absolute right-0 flex h-16 w-16 rounded-full bg-[#0B74C9] opacity-40 animate-ping" />

      {/* Main button */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#0B74C9] text-white shadow-2xl shadow-blue-900/30 ring-4 ring-white transition duration-300 group-hover:scale-110 group-hover:bg-[#F36B21]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B74C9] transition group-hover:text-[#F36B21]">
          <MessageCircle className="h-6 w-6" />
        </div>
      </div>
    </a>
  );
}
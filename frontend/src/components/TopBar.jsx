import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { contactInfo } from "../data/siteData";

export default function TopBar() {
  return (
    <div className="bg-brand-blueDark text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-2.5 text-xs md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <div className="flex items-center gap-2">
            <span className="hidden font-semibold text-blue-100 sm:inline">
              Theo dõi chúng tôi:
            </span>

            <div className="flex items-center gap-2">
              {["f", "ig", "yt"].map((item) => (
                <a
                  key={item}
                  href={item === "f" ? contactInfo.facebook : item === "ig" ? contactInfo.instagram : contactInfo.youtube}
                  aria-label={item}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] font-black uppercase transition hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <span className="hidden h-4 w-px bg-white/20 md:block" />

          <div className="hidden items-center gap-2 text-blue-100 lg:flex">
            <Clock size={14} className="text-brand-yellow" />
            <span>Thứ 2 - Chủ nhật: 7:00 - 17:30</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
          <span className="flex items-center gap-1.5 text-blue-50">
            <MapPin size={14} className="shrink-0 text-brand-yellow" />
            <span className="max-w-[180px] truncate sm:max-w-none">
              {contactInfo.address}
            </span>
          </span>

          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-1.5 text-blue-50 transition hover:text-brand-yellow"
          >
            <Mail size={14} className="shrink-0 text-brand-yellow" />
            <span className="hidden sm:inline">{contactInfo.email}</span>
            <span className="sm:hidden">Email</span>
          </a>

          <a
            href={contactInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-3.5 py-1.5 font-black text-white shadow-sm transition hover:bg-brand-orangeDark"
          >
            <Phone size={14} />
            <span>{contactInfo.phone}</span>
          </a>
        </div>
      </div>

      <div className="h-[3px] bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-blueLight" />
    </div>
  );
}
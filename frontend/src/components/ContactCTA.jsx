import { Mail, Phone } from "lucide-react";
import { contactInfo } from "../data/siteData";

export default function ContactCTA() {
  return (
    <section className="bg-orange-500 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center lg:flex-row lg:text-left">
        <div>
          <p className="font-extrabold uppercase tracking-[0.25em] text-orange-100">Cần tư vấn khóa học?</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Liên hệ trung tâm để được hỗ trợ ngay hôm nay</h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={contactInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase text-orange-600 transition hover:bg-slate-100">
            <Phone size={18} /> Gọi ngay
          </a>
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-white/10">
            <Mail size={18} /> Gửi email
          </a>
        </div>
      </div>
    </section>
  );
}
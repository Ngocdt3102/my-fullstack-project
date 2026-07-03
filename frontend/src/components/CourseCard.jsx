import { ArrowRight, CalendarDays, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <article className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:border-orange-200">
      <span className="inline-flex rounded-full bg-orange-50 px-4 py-1.5 text-xs font-black uppercase text-orange-600">
        {course.type}
      </span>
      <h3 className="mt-5 min-h-[64px] text-xl font-black leading-tight text-blue-950">{course.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{course.desc}</p>
      <div className="mt-5 space-y-3 text-sm text-slate-600">
        <p className="flex items-center gap-2"><CalendarDays size={17} className="text-orange-500" /> {course.date}</p>
        <p className="flex items-center gap-2"><Phone size={17} className="text-orange-500" /> Học phí: {course.price}</p>
      </div>
      <Link to="/lien-he" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-950 px-4 py-3 text-sm font-black text-white transition hover:bg-orange-500">
        Đăng ký ngay <ArrowRight size={16} />
      </Link>
    </article>
  );
}
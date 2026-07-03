import { ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import ContactCTA from "../../components/ContactCTA";
import { newsPosts } from "../../data/siteData";

export default function News() {
  return (
    <>
      <PageHero eyebrow="Tin tức" title="Cập Nhật Kiến Thức Và Kinh Nghiệm Lái Xe" desc="Các bài viết hỗ trợ học viên chuẩn bị tốt hơn trước khi học, thi và tham gia giao thông thực tế." />
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle eyebrow="Bài viết mới" title="Thông Tin Hữu Ích Cho Học Viên" desc="Nội dung tập trung vào kinh nghiệm học, thi và kỹ năng xử lý tình huống khi lái xe." />
          <div className="grid gap-6 md:grid-cols-3">
            {newsPosts.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.5rem] bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-48 bg-gradient-to-br from-blue-950 to-sky-700 p-6 text-white">
                  <p className="text-sm font-bold text-orange-300">{item.date}</p>
                  <h3 className="mt-5 text-xl font-black leading-tight">{item.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-orange-500 hover:text-orange-600">
                    Xem thêm <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
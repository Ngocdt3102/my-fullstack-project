import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  FileCheck,
  HelpCircle,
  Phone,
  Users,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import ContactCTA from "../../components/ContactCTA";
import { contactInfo, trainingPrograms } from "../../data/siteData";

export default function TrainingDetail() {
  const { slug } = useParams();

  const program = trainingPrograms.find((item) => item.slug === slug);

  if (!program) {
    return (
      <>
        <PageHero
          eyebrow="Đào tạo"
          title="Không tìm thấy chương trình đào tạo"
          desc="Chương trình bạn đang truy cập không tồn tại hoặc đã được thay đổi."
        />

        <section className="bg-[#F3F8FC] py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-black text-[#003F78]">
              Chương trình không tồn tại
            </h2>

            <p className="mt-4 text-slate-600">
              Vui lòng quay lại trang đào tạo để xem các chương trình hiện có.
            </p>

            <Link
              to="/dao-tao"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F36B21] px-7 py-3.5 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
            >
              Quay lại trang đào tạo <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Chi tiết chương trình đào tạo"
        title={program.title}
        desc={program.heroDesc}
      />

      {/* Overview */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1fr_1fr]">
          <div className="relative">
            <img
              src={program.image}
              alt={program.title}
              className="h-[540px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 left-6 right-6 rounded-[1.5rem] bg-white p-6 shadow-2xl shadow-blue-950/15 md:left-auto md:right-[-28px] md:w-80">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#F36B21]">
                Chương trình
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#003F78]">
                {program.shortTitle}
              </h3>

              <p className="mt-2 text-sm font-semibold text-slate-600">
                {program.type}
              </p>
            </div>
          </div>

          <div>
            <SectionTitle
              center={false}
              eyebrow="Tổng quan khóa học"
              title="Lộ Trình Học Rõ Ràng, Dễ Theo Dõi"
              desc={program.desc}
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#F3F8FC] p-5">
                <Clock className="mb-3 text-[#F36B21]" size={26} />
                <h4 className="font-black text-[#003F78]">Thời gian</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {program.duration}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F3F8FC] p-5">
                <FileCheck className="mb-3 text-[#F36B21]" size={26} />
                <h4 className="font-black text-[#003F78]">Học phí</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {program.price}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F3F8FC] p-5">
                <Users className="mb-3 text-[#F36B21]" size={26} />
                <h4 className="font-black text-[#003F78]">Đối tượng</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {program.suitableFor}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {program.details.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-[#F3F8FC] p-4 font-semibold text-slate-700"
                >
                  <CheckCircle2 className="shrink-0 text-[#F36B21]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/lien-he"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-7 py-3.5 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
              >
                Đăng ký tư vấn <ArrowRight size={17} />
              </Link>

              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-black uppercase text-[#003F78] transition hover:border-[#F36B21] hover:text-[#F36B21]"
              >
                <Phone size={18} />
                Gọi tư vấn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target users */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Đối tượng phù hợp"
            title={`Ai Nên Đăng Ký ${program.shortTitle}?`}
            desc="Chương trình được thiết kế để phù hợp với nhiều nhóm học viên khác nhau, đặc biệt là những người cần được hướng dẫn rõ ràng từ đầu."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {program.targetUsers.map((item) => (
              <article
                key={item}
                className="rounded-[1.5rem] bg-white p-6 shadow-lg shadow-blue-950/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F36B21] text-white">
                  <Users size={24} />
                </div>

                <p className="font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-[#003F78] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-[#FFD21F]">
              Nội dung đào tạo
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Học Theo Từng Bước, Không Bị Rối Khi Vào Thi
            </h2>

            <p className="mt-5 leading-8 text-blue-50">
              Nội dung học được chia thành các phần rõ ràng, giúp học viên hiểu
              mình cần chuẩn bị gì, học gì và luyện tập như thế nào trước khi
              tham gia kỳ sát hạch.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
              <div className="flex gap-3">
                <BadgeCheck className="shrink-0 text-[#FFD21F]" size={24} />
                <p className="text-sm leading-7 text-blue-50">
                  Trung tâm tập trung vào việc hướng dẫn học viên học đúng trọng
                  tâm, luyện đúng bài và nắm rõ quy trình thi.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {program.curriculum.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur sm:grid-cols-[80px_1fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F36B21] text-2xl font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-blue-50">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Benefits */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#F3F8FC] p-8 shadow-lg shadow-blue-950/5">
            <h2 className="text-2xl font-black text-[#003F78]">
              Điều kiện / hồ sơ cần chuẩn bị
            </h2>

            <div className="mt-6 space-y-4">
              {program.requirements.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-white p-4 font-semibold text-slate-700"
                >
                  <FileCheck className="shrink-0 text-[#F36B21]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#003F78] p-8 text-white shadow-lg shadow-blue-950/10">
            <h2 className="text-2xl font-black">Lợi ích khi đăng ký</h2>

            <div className="mt-6 space-y-4">
              {program.benefits.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/10 p-4 font-semibold text-blue-50"
                >
                  <CheckCircle2 className="shrink-0 text-[#FFD21F]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Câu hỏi thường gặp"
            title={`Một Số Câu Hỏi Về ${program.shortTitle}`}
            desc="Các thắc mắc phổ biến trước khi học viên đăng ký chương trình đào tạo."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {program.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.5rem] bg-white p-7 shadow-lg shadow-blue-950/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F36B21]/10 text-[#F36B21]">
                  <HelpCircle size={24} />
                </div>

                <h3 className="text-lg font-black leading-7 text-[#003F78]">
                  {item.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
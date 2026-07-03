import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import ContactCTA from "../../components/ContactCTA";
import { contactInfo, trainingPrograms } from "../../data/siteData";

const trainingBenefits = [
  {
    icon: ClipboardCheck,
    title: "Hồ sơ rõ ràng",
    desc: "Hỗ trợ học viên nắm rõ giấy tờ cần chuẩn bị, quy trình đăng ký và các bước trước khi thi.",
  },
  {
    icon: GraduationCap,
    title: "Học đúng trọng tâm",
    desc: "Nội dung học tập trung vào lý thuyết cần nhớ, kỹ năng thực hành và các lỗi thường gặp.",
  },
  {
    icon: ShieldCheck,
    title: "Thực hành sát bài thi",
    desc: "Học viên được hướng dẫn các thao tác cần thiết để tự tin hơn khi bước vào kỳ sát hạch.",
  },
];

const processSteps = [
  "Tư vấn chọn hạng bằng phù hợp",
  "Hướng dẫn chuẩn bị hồ sơ",
  "Ôn tập lý thuyết trọng tâm",
  "Luyện thực hành sát bài thi",
  "Hỗ trợ trước ngày thi sát hạch",
];

export default function Training() {
  return (
    <>
      <PageHero
        eyebrow="Đào tạo"
        title="Đào Tạo Bằng Lái Xe Máy Hạng A Và A1"
        desc="Trang tổng quan các chương trình đào tạo bằng lái xe máy tại trung tâm, bao gồm hạng A1 cho xe mô tô phổ thông và hạng A cho mô tô phân khối lớn."
      />

      {/* Overview */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              center={false}
              eyebrow="Tổng quan đào tạo"
              title="Lộ Trình Học Rõ Ràng, Phù Hợp Từng Nhu Cầu"
              desc="Mỗi chương trình đào tạo được xây dựng theo mục tiêu sử dụng phương tiện của học viên. Trung tâm hỗ trợ từ bước tư vấn, chuẩn bị hồ sơ, học lý thuyết, luyện thực hành đến khi tham gia sát hạch."
            />

            <div className="mt-7 grid gap-4">
              {processSteps.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-[#F3F8FC] p-4 font-semibold text-slate-700"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F36B21] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/khoa-hoc"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-7 py-3.5 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
              >
                Xem khóa học <ArrowRight size={17} />
              </Link>

              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-black uppercase text-[#003F78] transition hover:border-[#F36B21] hover:text-[#F36B21]"
              >
                <Phone size={18} />
                Tư vấn nhanh
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-[#003F78] to-[#0B74C9] p-8 text-white shadow-2xl shadow-blue-950/20">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FFD21F]">
              Chương trình chính
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight">
              A1 Và A Là Hai Hạng Bằng Trọng Tâm
            </h2>

            <p className="mt-5 leading-8 text-blue-50">
              Học viên có thể chọn chương trình phù hợp với nhu cầu điều khiển
              xe mô tô phổ thông hoặc mô tô phân khối lớn. Mỗi chương trình có
              nội dung tư vấn, hồ sơ và luyện tập riêng.
            </p>

            <div className="mt-8 grid gap-4">
              {trainingPrograms.map((program) => (
                <Link
                  key={program.id}
                  to={`/dao-tao/${program.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/15"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFD21F]">
                        {program.type}
                      </p>

                      <h3 className="mt-2 text-xl font-black">
                        {program.shortTitle}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-blue-50">
                        {program.desc}
                      </p>
                    </div>

                    <ArrowRight
                      className="mt-1 shrink-0 transition group-hover:translate-x-1"
                      size={22}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program cards */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Chương trình đào tạo"
            title="Chọn Hạng Bằng Phù Hợp Với Bạn"
            desc="Mỗi chương trình có trang chi tiết riêng để học viên xem rõ đối tượng phù hợp, nội dung đào tạo, hồ sơ cần chuẩn bị và câu hỏi thường gặp."
          />

          <div className="space-y-12">
            {trainingPrograms.map((program, index) => (
              <article
                id={program.id}
                key={program.id}
                className={`grid scroll-mt-32 items-center gap-10 overflow-hidden rounded-[2rem] bg-white p-6 shadow-xl shadow-blue-950/5 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>img]:order-2" : ""
                }`}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />

                <div className="p-2 md:p-6">
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#F36B21]">
                    {program.type}
                  </p>

                  <h2 className="text-3xl font-black text-[#003F78]">
                    {program.title}
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {program.desc}
                  </p>

                  <div className="mt-6 space-y-3">
                    {program.details.map((detail) => (
                      <p
                        key={detail}
                        className="flex gap-3 rounded-xl bg-[#F3F8FC] p-4 font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="shrink-0 text-[#F36B21]" />
                        {detail}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to={`/dao-tao/${program.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
                    >
                      Xem chi tiết chương trình <ArrowRight size={17} />
                    </Link>

                    <Link
                      to="/lien-he"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-100 px-6 py-3 text-sm font-black uppercase text-[#003F78] transition hover:border-[#F36B21] hover:text-[#F36B21]"
                    >
                      Đăng ký tư vấn
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Điểm nổi bật"
            title="Trung Tâm Hỗ Trợ Học Viên Như Thế Nào?"
            desc="Không chỉ cung cấp thông tin khóa học, trung tâm tập trung hỗ trợ học viên trong toàn bộ quá trình từ đăng ký đến trước ngày thi."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {trainingBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] bg-[#F3F8FC] p-7 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003F78] text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-black text-[#003F78]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#F3F8FC] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 rounded-[2rem] bg-gradient-to-r from-[#003F78] to-[#0B74C9] p-8 text-white shadow-2xl shadow-blue-950/15 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FFD21F]">
                Chưa biết nên chọn A hay A1?
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Liên hệ trung tâm để được tư vấn hạng bằng phù hợp
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-blue-50">
                Nếu bạn chưa rõ nên đăng ký hạng A1 hay hạng A, trung tâm sẽ hỗ
                trợ tư vấn theo nhu cầu sử dụng phương tiện và điều kiện đăng ký
                của bạn.
              </p>
            </div>

            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
            >
              <Phone size={18} />
              Gọi tư vấn
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
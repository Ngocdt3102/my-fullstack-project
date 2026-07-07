import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Star,
  ClipboardCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import CourseCard from "../../components/CourseCard";
import ContactCTA from "../../components/ContactCTA";
import LeadForm from "../../components/LeadForm";
import {
  contactInfo,
  courseList,
  stats,
  trainingPrograms,
  whyChooseUs,
  testimonials,
} from "../../data/siteData";
import backgroundHero from "../../assets/images/background_hero_home.jpg";
import home_image_01 from "../../assets/images/home_image_01.jpg";

function RegistrationSection() {
  return (
    <section className="bg-[#F3F8FC] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Left content */}
        <div className="animate-fade-up">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-[#F36B21]">
            Đăng ký tư vấn
          </p>

          <h2 className="text-3xl font-black leading-tight text-[#003F78] md:text-4xl">
            Để Lại Thông Tin, Trung Tâm Sẽ Tư Vấn Khóa Học Phù Hợp
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Sau khi tìm hiểu chương trình đào tạo, học viên có thể để lại thông
            tin để được hỗ trợ về hồ sơ, lịch học, học phí và quy trình thi sát
            hạch bằng lái xe máy hạng A1 hoặc hạng A.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="reveal-card flex gap-3 rounded-2xl bg-white p-5 shadow-lg shadow-blue-950/5 hover:shadow-xl">
              <ClipboardCheck className="shrink-0 text-[#F36B21]" size={22} />
              <div>
                <h3 className="font-black text-[#003F78]">
                  Hỗ trợ hồ sơ nhanh gọn
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Tư vấn điều kiện đăng ký, giấy tờ cần chuẩn bị và lịch thi phù
                  hợp.
                </p>
              </div>
            </div>

            <div className="reveal-card flex gap-3 rounded-2xl bg-white p-5 shadow-lg shadow-blue-950/5 hover:shadow-xl">
              <Phone className="shrink-0 text-[#F36B21]" size={22} />
              <div>
                <h3 className="font-black text-[#003F78]">
                  Tư vấn trực tiếp qua hotline
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Gọi ngay{" "}
                  <a
                    href={contactInfo.phoneHref}
                    className="font-black text-[#F36B21]"
                  >
                    {contactInfo.phone}
                  </a>{" "}
                  để được hỗ trợ nhanh hơn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <LeadForm />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#003F78]">
        <div className="absolute inset-0">
          <img
            src={backgroundHero}
            alt="Driving school hero"
            className="h-full w-full scale-105 object-cover opacity-35 transition duration-[3500ms] hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0060b923] via-[#004689]/80 to-[#0B74C9]/30" />
        </div>

        {/* Animated background */}
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#F36B21]/25 blur-3xl animate-float-soft" />
        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-[#FFD21F]/15 blur-3xl animate-float-soft" />

        {/* Decorative lines */}
        <div className="absolute left-0 top-0 h-full w-full opacity-20">
          <div className="absolute left-[8%] top-[18%] h-px w-48 bg-white/50" />
          <div className="absolute bottom-[24%] right-[12%] h-px w-64 bg-[#FFD21F]/60" />
        </div>

        <div className="relative mx-auto flex min-h-[660px] max-w-7xl items-center px-4 py-24">
          <div className="max-w-4xl text-white">
            <p className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-[#FFD21F] ring-1 ring-white/15 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#FFD21F] shadow-[0_0_14px_rgba(255,210,31,0.9)]" />
              Trung tâm đào tạo lái xe tại Đà Nẵng
            </p>

            <h1 className="animate-fade-up text-4xl font-black leading-tight md:text-6xl [animation-delay:120ms]">
              Học & Thi Bằng Lái Xe Máy{" "}
              <span className="text-[#F36B21] drop-shadow-[0_0_20px_rgba(243,107,33,0.35)]">
                A1 - A
              </span>{" "}
              Tại Đà Nẵng
            </h1>

            <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-8 text-blue-50 [animation-delay:220ms]">
              Hỗ trợ đăng ký nhanh, hồ sơ trọn gói, học lý thuyết dễ hiểu,
              thực hành sát bài thi. Đồng hành cùng học viên từ lúc đăng ký đến
              ngày thi sát hạch.
            </p>

            <div className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row [animation-delay:320ms]">
              <Link
                to="/khoa-hoc"
                className="btn-shine animate-pulse-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-7 py-4 text-sm font-black uppercase text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-[#D95512]"
              >
                Xem khóa học A1 - A <ArrowRight size={18} />
              </Link>

              <Link
                to="/dao-tao"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase text-[#003F78] shadow-xl shadow-blue-950/10 transition hover:-translate-y-1 hover:bg-[#F3F8FC]"
              >
                Xem chương trình đào tạo
              </Link>
            </div>

            <div className="animate-fade-up mt-10 grid max-w-3xl gap-4 sm:grid-cols-3 [animation-delay:420ms]">
              {[
                "Hồ sơ trọn gói",
                "Thực hành sát bài thi",
                "Hỗ trợ đến ngày thi",
              ].map((item) => (
                <div
                  key={item}
                  className="reveal-card flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur hover:border-[#FFD21F]/60 hover:bg-white/15"
                >
                  <CheckCircle2 size={18} className="text-[#FFD21F]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-16 px-4">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-white p-6 shadow-2xl shadow-blue-950/10 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="reveal-card rounded-2xl bg-[#F3F8FC] p-6 text-center shadow-sm transition hover:bg-white hover:shadow-xl hover:shadow-blue-950/10"
            >
              <div className="text-4xl font-black text-[#F36B21]">
                {item.value}
              </div>

              <p className="mt-2 text-sm font-bold text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative overflow-visible">
            <img
              src={home_image_01}
              alt="About"
              loading="lazy"
              className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
            />

            <div className="animate-float-soft absolute -bottom-8 -right-4 rounded-[1.5rem] bg-[#003F78] p-6 text-white shadow-xl md:-right-8">
              <div className="text-5xl font-black text-[#FFD21F]">A1</div>
              <p className="mt-1 font-bold">Đào tạo trọng tâm</p>
            </div>
          </div>

          <div>
            <SectionTitle
              center={false}
              eyebrow="Về chúng tôi"
              title="Trung Tâm Đào Tạo Lái Xe Uy Tín, Chất Lượng"
              desc="Chúng tôi tập trung xây dựng môi trường học lái xe máy bài bản, dễ tiếp cận và sát với nội dung thi thực tế."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Lộ trình học rõ ràng",
                "Hỗ trợ hồ sơ nhanh chóng",
                "Hướng dẫn lý thuyết dễ hiểu",
                "Thực hành sát bài thi",
                "Chi phí minh bạch",
                "Tư vấn tận tình",
              ].map((item) => (
                <div
                  key={item}
                  className="reveal-card flex items-center gap-3 rounded-xl bg-[#F3F8FC] p-4 font-semibold text-slate-700 hover:bg-white hover:shadow-lg hover:shadow-blue-950/5"
                >
                  <CheckCircle2
                    className="shrink-0 text-[#F36B21]"
                    size={20}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/gioi-thieu"
                className="btn-shine inline-flex items-center justify-center rounded-full bg-[#003F78] px-7 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#00539B]"
              >
                Tìm hiểu thêm
              </Link>

              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-black text-[#003F78] transition hover:-translate-y-1 hover:border-[#F36B21] hover:text-[#F36B21]"
              >
                <Phone size={18} /> {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Đào tạo"
            title="Chương Trình Đào Tạo Bằng Lái Xe Máy"
            desc="Tập trung vào hai chương trình chính: bằng lái xe máy hạng A1 và bằng lái mô tô hạng A. Mỗi chương trình có lộ trình học, hồ sơ và nội dung thực hành riêng."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {trainingPrograms.map((item) => (
              <article
                key={item.id}
                className="reveal-card group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-blue-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#003F78]/80 via-[#003F78]/20 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#F36B21] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg">
                    {item.type}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-2xl font-black text-white">
                      {item.shortTitle}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-[#FFD21F]">
                      Chương trình đào tạo trọng tâm
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-black leading-tight text-[#003F78]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {item.details.slice(0, 3).map((detail) => (
                      <div
                        key={detail}
                        className="flex gap-3 rounded-xl bg-[#F3F8FC] p-4 text-sm font-semibold leading-6 text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-[#F36B21]"
                          size={18}
                        />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to={`/dao-tao/${item.slug}`}
                      className="btn-shine inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F36B21] px-5 py-3 text-sm font-black uppercase text-white transition hover:-translate-y-1 hover:bg-[#D95512]"
                    >
                      Xem chi tiết <ArrowRight size={16} />
                    </Link>

                    <Link
                      to="/lien-he"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-blue-100 px-5 py-3 text-sm font-black uppercase text-[#003F78] transition hover:-translate-y-1 hover:border-[#F36B21] hover:text-[#F36B21]"
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

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-[#003F78] py-24 text-white">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#F36B21]/20 blur-3xl animate-float-soft" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FFD21F]/10 blur-3xl animate-float-soft" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-[#FFD21F]">
              Tại sao chọn chúng tôi
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Tận Tâm Trong Từng Buổi Học
            </h2>

            <p className="mt-4 text-base leading-7 text-blue-50">
              Trung tâm hướng đến việc giúp học viên nắm chắc kiến thức, luyện
              tập đúng kỹ thuật và tự tin bước vào kỳ thi sát hạch.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="reveal-card group rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:border-[#FFD21F]/50 hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-950/20"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F36B21] text-white transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-blue-50">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Khóa học"
            title="Các Khóa Học Đang Mở Đăng Ký"
            desc="Cập nhật các chương trình đào tạo phù hợp cho từng nhóm học viên."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {courseList.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <RegistrationSection />

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Cảm nhận học viên"
            title="Học Viên Nói Gì Về Trung Tâm"
            desc="Những phản hồi tích cực là động lực để trung tâm tiếp tục cải thiện chất lượng đào tạo."
          />

          <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="reveal-card rounded-[1.5rem] bg-[#F3F8FC] p-7 shadow-lg shadow-blue-950/5 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-950/10"
            >
              <div className="mb-5 flex gap-1 text-[#FFD21F] drop-shadow-[0_0_10px_rgba(255,210,31,0.35)]">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    className="text-[#FFD21F]"
                  />
                ))}
              </div>

              <p className="min-h-[120px] leading-8 text-slate-600 italic">
                "{item.comment}"
              </p>

              <div className="mt-6 border-t border-slate-200 pt-4">
                <h4 className="font-black text-[#003F78]">{item.name}</h4>
                <p className="text-sm font-medium text-[#F36B21]">{item.role}</p>
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
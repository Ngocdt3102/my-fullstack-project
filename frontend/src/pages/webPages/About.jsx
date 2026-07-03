import {
  ArrowRight,
  BadgeCheck,
  Bike,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import ContactCTA from "../../components/ContactCTA";
import { contactInfo } from "../../data/siteData";
import aboutImage from "../../assets/images/about_image.jpg";

const highlights = [
  {
    value: "A1 - A",
    label: "Chương trình đào tạo trọng tâm",
  },
  {
    value: "100%",
    label: "Hỗ trợ hồ sơ đăng ký",
  },
  {
    value: "795K+",
    label: "Học phí ưu đãi tham khảo",
  },
  {
    value: "Đà Nẵng",
    label: "Khu vực đào tạo",
  },
];

const commitments = [
  {
    icon: ClipboardCheck,
    title: "Hồ sơ rõ ràng",
    desc: "Hỗ trợ học viên chuẩn bị hồ sơ đăng ký thi bằng lái xe máy A1, A nhanh gọn, hạn chế sai sót và tiết kiệm thời gian.",
  },
  {
    icon: BookOpenCheck,
    title: "Lý thuyết dễ hiểu",
    desc: "Nội dung lý thuyết được hướng dẫn theo cách dễ nhớ, tập trung vào biển báo, luật giao thông và nhóm câu hỏi thường gặp.",
  },
  {
    icon: Bike,
    title: "Thực hành sát bài thi",
    desc: "Học viên được luyện các kỹ năng quan trọng như vòng số 8, đường thẳng, đường quanh co và thao tác điều khiển xe.",
  },
  {
    icon: ShieldCheck,
    title: "Đào tạo đúng quy trình",
    desc: "Trung tâm định hướng học viên học thật, thi thật, hiểu đúng quy định và sử dụng giấy phép lái xe đúng pháp luật.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tư vấn khóa học",
    desc: "Học viên được tư vấn hạng bằng phù hợp, điều kiện đăng ký, học phí và lịch học.",
  },
  {
    step: "02",
    title: "Chuẩn bị hồ sơ",
    desc: "Trung tâm hướng dẫn giấy tờ cần thiết và hỗ trợ hoàn thiện hồ sơ đăng ký.",
  },
  {
    step: "03",
    title: "Học lý thuyết",
    desc: "Học viên ôn tập kiến thức luật giao thông, biển báo và các nhóm câu hỏi trọng tâm.",
  },
  {
    step: "04",
    title: "Luyện thực hành",
    desc: "Luyện kỹ năng điều khiển xe theo bài thi, đặc biệt là vòng số 8 và các bài thực hành cơ bản.",
  },
  {
    step: "05",
    title: "Tham gia sát hạch",
    desc: "Học viên được nhắc lịch, hướng dẫn quy trình thi và chuẩn bị tâm lý trước ngày sát hạch.",
  },
];

const trustPoints = [
  "Phù hợp cho học sinh, sinh viên, người đi làm cần thi bằng lái xe máy.",
  "Quy trình tư vấn rõ ràng, dễ hiểu, không làm học viên bị rối khi đăng ký.",
  "Tập trung vào hai hạng bằng phổ biến: A1 và A.",
  "Nội dung học bám sát nhu cầu thi thực tế.",
  "Hỗ trợ học viên từ lúc đăng ký đến trước ngày thi.",
  "Định hướng học viên lái xe an toàn, đúng luật sau khi có bằng.",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Trung Tâm Đào Tạo Lái Xe Mô Tô Số 5 Tại Đà Nẵng"
        desc="Đồng hành cùng học viên trong quá trình đăng ký, học lý thuyết, luyện thực hành và tham gia kỳ sát hạch bằng lái xe máy hạng A1, A."
      />

      {/* Overview */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutImage}
              loading="lazy"
              alt="Giới thiệu trung tâm đào tạo lái xe mô tô"
              className="h-[540px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 left-6 right-6 rounded-[1.5rem] bg-white p-5 shadow-2xl shadow-blue-950/15 md:left-auto md:right-[-28px] md:w-80">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F36B21] text-white">
                  <Star size={28} fill="currentColor" />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F36B21]">
                    Uy tín hàng đầu
                  </p>
                  <h3 className="mt-1 text-xl font-black text-[#003F78]">
                    Học thật - Thi thật - Bằng thật
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle
              center={false}
              eyebrow="Về trung tâm"
              title="Đào Tạo Không Chỉ Để Thi, Mà Để Học Viên Lái Xe An Toàn"
              desc="Trung tâm tập trung hỗ trợ học viên học và thi bằng lái xe máy A1, A tại Đà Nẵng với quy trình đăng ký nhanh gọn, nội dung học dễ hiểu và thực hành sát bài thi."
            />

            <div className="space-y-5 text-slate-600">
              <p className="leading-8">
                Với định hướng đào tạo thực tế, trung tâm không chỉ giúp học
                viên hoàn thành kỳ sát hạch mà còn giúp người học hiểu đúng luật
                giao thông, biết cách quan sát, kiểm soát xe và hình thành thói
                quen tham gia giao thông an toàn.
              </p>

              <p className="leading-8">
                Chương trình học phù hợp với nhiều nhóm học viên như học sinh,
                sinh viên, người đi làm hoặc người cần hoàn thiện giấy phép lái
                xe để sử dụng phương tiện đúng quy định.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Hỗ trợ hồ sơ trọn gói",
                "Lý thuyết dễ hiểu",
                "Thực hành sát bài thi",
                "Tư vấn tận tình",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#F3F8FC] p-4 font-bold text-slate-700"
                >
                  <CheckCircle2 className="shrink-0 text-[#F36B21]" size={20} />
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-black text-[#003F78] transition hover:border-[#F36B21] hover:text-[#F36B21]"
              >
                <Phone size={18} /> {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight stats */}
      <section className="bg-[#F3F8FC] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] bg-white p-7 text-center shadow-lg shadow-blue-950/5"
              >
                <div className="text-4xl font-black text-[#F36B21]">
                  {item.value}
                </div>
                <p className="mt-3 text-sm font-bold leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / commitment */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Cam kết đào tạo"
            title="Những Giá Trị Trung Tâm Mang Lại Cho Học Viên"
            desc="Trung tâm xây dựng quy trình học rõ ràng, dễ tiếp cận và tập trung vào kết quả thực tế của học viên."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-blue-100 bg-white p-7 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-[#F36B21]/40"
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

      {/* Process */}
      <section className="bg-[#003F78] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-[#FFD21F]">
                Quy trình học viên
              </p>

              <h2 className="text-3xl font-black leading-tight md:text-4xl">
                Từ Đăng Ký Đến Ngày Thi Được Hướng Dẫn Rõ Ràng
              </h2>

              <p className="mt-5 leading-8 text-blue-50">
                Một trong những điểm quan trọng khi học bằng lái xe máy là học
                viên phải nắm được mình cần chuẩn bị gì, học gì, thi như thế nào
                và cần lưu ý điều gì trước ngày sát hạch.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex gap-3">
                  <MapPin className="shrink-0 text-[#FFD21F]" size={22} />
                  <div>
                    <h3 className="font-black">Khu vực hỗ trợ</h3>
                    <p className="mt-1 text-sm leading-6 text-blue-50">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur sm:grid-cols-[80px_1fr]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F36B21] text-2xl font-black text-white">
                    {item.step}
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
        </div>
      </section>

      {/* Trust / why choose */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionTitle
              center={false}
              eyebrow="Vì sao nên chọn trung tâm"
              title="Tạo Niềm Tin Bằng Sự Rõ Ràng, Tận Tâm Và Thực Tế"
              desc="Một website đẹp chỉ là bước đầu. Điều quan trọng hơn là trung tâm cần thể hiện được sự rõ ràng trong thông tin, sự tận tâm trong hỗ trợ và sự thực tế trong quá trình đào tạo."
            />

            <div className="grid gap-4">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-white p-4 font-semibold leading-7 text-slate-700 shadow-sm shadow-blue-950/5"
                >
                  <BadgeCheck className="mt-1 shrink-0 text-[#F36B21]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-blue-950/10">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F36B21] text-white">
                <Users size={32} />
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#F36B21]">
                  Phù hợp nhiều đối tượng
                </p>
                <h3 className="mt-1 text-2xl font-black text-[#003F78]">
                  Ai Nên Đăng Ký Học?
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Học sinh, sinh viên",
                  desc: "Cần thi bằng lái xe máy A1 để đi học, đi làm thêm hoặc di chuyển hằng ngày.",
                },
                {
                  title: "Người đi làm",
                  desc: "Cần hoàn thiện giấy phép lái xe đúng quy định nhưng muốn quy trình đăng ký nhanh gọn.",
                },
                {
                  title: "Người thi bằng hạng A",
                  desc: "Có nhu cầu điều khiển mô tô phân khối lớn và cần được tư vấn điều kiện đăng ký phù hợp.",
                },
                {
                  title: "Người mới lần đầu thi",
                  desc: "Chưa nắm rõ hồ sơ, lịch học, cách thi lý thuyết và thực hành nên cần được hướng dẫn cụ thể.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-[#F3F8FC] p-5"
                >
                  <h4 className="font-black text-[#003F78]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/lien-he"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#F36B21] px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
              >
                Đăng ký tư vấn
              </Link>

              <Link
                to="/dao-tao"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-blue-100 px-5 py-3 text-sm font-black uppercase text-[#003F78] transition hover:border-[#F36B21] hover:text-[#F36B21]"
              >
                Xem đào tạo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 rounded-[2rem] bg-gradient-to-r from-[#003F78] to-[#0B74C9] p-8 text-white shadow-2xl shadow-blue-950/15 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FFD21F]">
                Cần tư vấn trước khi đăng ký?
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Liên hệ trung tâm để được hướng dẫn hồ sơ và lịch học phù hợp
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-blue-50">
                Đội ngũ tư vấn sẽ hỗ trợ học viên nắm rõ điều kiện đăng ký,
                chương trình học, lịch thi và các bước chuẩn bị trước khi tham
                gia sát hạch.
              </p>
            </div>

            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
            >
              <Phone size={18} />
              Gọi tư vấn ngay
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
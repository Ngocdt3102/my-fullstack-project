import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  ClipboardCheck,
  HelpCircle,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import LeadForm from "../../components/LeadForm";
import { contactInfo } from "../../data/siteData";

const supportItems = [
  "Tư vấn khóa học phù hợp: A1 hoặc A",
  "Hướng dẫn hồ sơ đăng ký rõ ràng",
  "Hỗ trợ lịch học và lịch thi sát hạch",
  "Giải đáp học phí, quy trình học và thời gian nhận bằng",
];

const faqItems = [
  {
    question: "Tôi chưa biết nên đăng ký hạng A1 hay hạng A?",
    answer:
      "Bạn có thể để lại số điện thoại hoặc gọi trực tiếp hotline, trung tâm sẽ tư vấn theo nhu cầu sử dụng xe và điều kiện đăng ký của bạn.",
  },
  {
    question: "Tôi cần chuẩn bị hồ sơ gì?",
    answer:
      "Trung tâm sẽ hướng dẫn cụ thể các giấy tờ cần thiết khi bạn đăng ký, giúp quá trình chuẩn bị hồ sơ nhanh gọn hơn.",
  },
  {
    question: "Có hỗ trợ người mới chưa từng thi không?",
    answer:
      "Có. Học viên mới sẽ được hướng dẫn lý thuyết, quy trình thi và luyện các bài thực hành sát nội dung sát hạch.",
  },
];

export default function Contact() {
  const mapQuery = encodeURIComponent(
    contactInfo.mapLocation || contactInfo.address
  );

  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Liên Hệ Tư Vấn Khóa Học"
        desc="Gửi thông tin của bạn để trung tâm hỗ trợ tư vấn khóa học, hồ sơ, lịch học và quy trình thi bằng lái xe máy phù hợp."
      />

      {/* Contact main */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left content */}
          <div>
            <SectionTitle
              center={false}
              eyebrow="Thông tin liên hệ"
              title="Kết Nối Với Trung Tâm"
              desc="Bạn có thể liên hệ trực tiếp qua hotline, email, Facebook hoặc gửi biểu mẫu tư vấn để được hỗ trợ nhanh chóng."
            />

            {/* Contact cards */}
            <div className="space-y-4">
              <div className="group flex gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F36B21]/10 text-[#F36B21]">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-black text-[#003F78]">Địa chỉ</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F36B21]/10 text-[#F36B21]">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-black text-[#003F78]">Email</h3>
                  <p className="mt-1 break-all text-sm leading-6 text-slate-600">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={contactInfo.phoneHref}
                className="group flex gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F36B21]/10 text-[#F36B21]">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="font-black text-[#003F78]">Hotline</h3>
                  <p className="mt-1 text-sm font-black leading-6 text-[#F36B21]">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              <div className="group flex gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F36B21]/10 text-[#F36B21]">
                  <Clock size={22} />
                </div>

                <div>
                  <h3 className="font-black text-[#003F78]">
                    Thời gian hỗ trợ
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {contactInfo.workingTime ||
                      "Thứ 2 - Chủ nhật: 7:00 - 17:30"}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick buttons */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
              >
                <Phone size={17} />
                Gọi ngay
              </a>

              <a
                href={contactInfo.facebookUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#003F78]/15 bg-white px-5 py-3 text-sm font-black uppercase text-[#003F78] transition hover:border-[#F36B21] hover:text-[#F36B21]"
              >
                <MessageCircle size={17} />
                Facebook
              </a>
            </div>

            {/* Support box */}
            <div className="mt-8 rounded-[1.5rem] bg-[#003F78] p-6 text-white shadow-xl shadow-blue-950/10">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD21F] text-[#003F78]">
                  <ClipboardCheck size={24} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD21F]">
                    Trung tâm hỗ trợ
                  </p>
                  <h3 className="mt-1 text-xl font-black">
                    Bạn sẽ được tư vấn những gì?
                  </h3>
                </div>
              </div>

              <div className="grid gap-3">
                {supportItems.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-blue-50">
                    <CheckCircle2 className="shrink-0 text-[#FFD21F]" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <LeadForm />
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Bản đồ"
            title="Vị Trí Trung Tâm"
            desc="Bạn có thể xem vị trí trên bản đồ hoặc mở Google Maps để được chỉ đường chi tiết."
          />

          <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-2 shadow-2xl shadow-blue-950/10">
            <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F36B21]/10 text-[#F36B21]">
                  <MapPin size={24} />
                </div>

                <div>
                  <h3 className="font-black text-[#003F78]">
                    Trung Tâm Đào Tạo Lái Xe Mô Tô Số 5
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <a
                href={
                  contactInfo.googleMapsUrl ||
                  `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003F78] px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-[#F36B21]"
              >
                Mở Google Maps <ExternalLink size={16} />
              </a>
            </div>

            <iframe
              title="Bản đồ trung tâm"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[420px] w-full rounded-[1.5rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Câu hỏi thường gặp"
            title="Một Số Thắc Mắc Trước Khi Đăng Ký"
            desc="Những câu hỏi phổ biến của học viên trước khi đăng ký học và thi bằng lái xe máy."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {faqItems.map((item) => (
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

          <div className="mt-10 rounded-[2rem] bg-[#003F78] p-8 text-white shadow-xl shadow-blue-950/10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FFD21F]">
                  Cần hỗ trợ nhanh?
                </p>

                <h2 className="mt-3 text-2xl font-black">
                  Gọi trực tiếp để được tư vấn hồ sơ và lịch học phù hợp
                </h2>
              </div>

              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
              >
                <Phone size={18} />
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
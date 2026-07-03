import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Gauge,
  Lightbulb,
  Phone,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import ContactCTA from "../../components/ContactCTA";
import { contactInfo, skills } from "../../data/siteData";
import skillImage from "../../assets/images/Skill_page_image.jpg";

const practiceSteps = [
  {
    step: "01",
    title: "Nắm quy trình thi",
    desc: "Hiểu rõ thứ tự bài thi, cách bắt đầu, cách kết thúc và những lỗi có thể bị trừ điểm.",
  },
  {
    step: "02",
    title: "Luyện kỹ năng điều khiển xe",
    desc: "Tập giữ thăng bằng, kiểm soát tay ga, phanh, hướng lái và tốc độ khi vào bài thi.",
  },
  {
    step: "03",
    title: "Thực hành vòng số 8",
    desc: "Đây là phần quan trọng nhất trong bài thi A1, cần luyện đúng góc vào, tốc độ và quỹ đạo xe.",
  },
  {
    step: "04",
    title: "Sửa lỗi thường gặp",
    desc: "Nhận biết các lỗi như chạm vạch, chống chân, đi sai hướng, tăng ga quá mạnh hoặc thiếu quan sát.",
  },
];

const commonMistakes = [
  "Chạm vạch khi đi vòng số 8.",
  "Chống chân trong lúc thực hiện bài thi.",
  "Đi sai thứ tự bài thi hoặc sai hướng di chuyển.",
  "Tăng ga không đều, làm xe bị giật hoặc mất thăng bằng.",
  "Thiếu quan sát trước khi bắt đầu bài thi.",
  "Tâm lý căng thẳng dẫn đến xử lý thiếu chính xác.",
];

const tips = [
  {
    icon: Gauge,
    title: "Giữ tốc độ ổn định",
    desc: "Không nên đi quá nhanh hoặc quá chậm. Tốc độ đều giúp xe dễ kiểm soát hơn trong vòng số 8.",
  },
  {
    icon: Target,
    title: "Nhìn theo hướng xe đi",
    desc: "Không nhìn sát bánh trước. Hãy nhìn xa hơn theo hướng di chuyển để giữ quỹ đạo ổn định.",
  },
  {
    icon: ShieldCheck,
    title: "Giữ tâm lý bình tĩnh",
    desc: "Trước khi thi nên hít thở sâu, đi đúng trình tự và không vội vàng xử lý khi gặp lỗi nhỏ.",
  },
];

export default function Skills() {
  return (
    <>
      <PageHero
        eyebrow="Kỹ năng"
        title="Kỹ Năng Cần Có Khi Học Và Thi Bằng Lái"
        desc="Tổng hợp các nhóm kỹ năng quan trọng giúp học viên tự tin hơn khi học, thi sát hạch và tham gia giao thông thực tế."
      />

      {/* Overview */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              center={false}
              eyebrow="Tổng quan kỹ năng"
              title="Học Đúng Kỹ Năng, Thi Tự Tin Hơn"
              desc="Việc học bằng lái xe máy không chỉ là ghi nhớ lý thuyết hay vượt qua bài thi thực hành. Học viên cần hiểu cách điều khiển xe an toàn, giữ tâm lý ổn định và xử lý đúng các tình huống cơ bản."
            />

            <div className="space-y-4">
              {[
                "Hiểu đúng luật giao thông và biển báo cơ bản.",
                "Nắm rõ quy trình thi lý thuyết và thực hành.",
                "Luyện kỹ năng điều khiển xe trong vòng số 8.",
                "Biết cách tránh các lỗi thường gặp khi sát hạch.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-[#F3F8FC] p-4 font-semibold text-slate-700"
                >
                  <CheckCircle2 className="shrink-0 text-[#F36B21]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/dao-tao"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36B21] px-7 py-3.5 text-sm font-black uppercase text-white transition hover:bg-[#D95512]"
              >
                Xem chương trình đào tạo <ArrowRight size={17} />
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

          <div className="relative">
            <img
              src={skillImage}
              alt="Kỹ năng học và thi bằng lái xe máy"
              className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 left-6 right-6 rounded-[1.5rem] bg-white p-6 shadow-2xl shadow-blue-950/15 md:left-auto md:right-[-24px] md:w-80">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003F78] text-white">
                  <BadgeCheck size={28} />
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#F36B21]">
                    Trọng tâm
                  </p>
                  <h3 className="mt-1 text-xl font-black text-[#003F78]">
                    Vững lý thuyết, chắc thực hành
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core skills */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Kỹ năng trọng tâm"
            title="Những Kỹ Năng Học Viên Cần Nắm"
            desc="Các nhóm kỹ năng dưới đây giúp học viên chuẩn bị tốt hơn trước kỳ thi và tự tin hơn khi điều khiển xe ngoài thực tế."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[1.5rem] bg-white p-7 shadow-lg shadow-blue-950/5 transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F36B21] text-white transition group-hover:bg-[#003F78]">
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

      {/* Practice process */}
      <section className="bg-[#003F78] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-[#FFD21F]">
              Quy trình luyện tập
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Luyện Từng Bước Để Không Bị Rối Khi Vào Bài Thi
            </h2>

            <p className="mt-5 leading-8 text-blue-50">
              Nhiều học viên bị mất điểm không phải vì không biết chạy xe, mà vì
              chưa hiểu đúng quy trình thi, chưa quen bài thực hành hoặc quá căng
              thẳng khi sát hạch.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
              <div className="flex gap-3">
                <Lightbulb className="shrink-0 text-[#FFD21F]" size={24} />
                <p className="text-sm leading-7 text-blue-50">
                  Mục tiêu của phần luyện kỹ năng là giúp học viên đi đúng bài,
                  đúng tốc độ, đúng kỹ thuật và giữ được tâm lý ổn định.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {practiceSteps.map((item) => (
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
      </section>

      {/* Common mistakes */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionTitle
              center={false}
              eyebrow="Lỗi thường gặp"
              title="Những Lỗi Học Viên Cần Tránh Khi Thi Thực Hành"
              desc="Nhận biết trước các lỗi phổ biến sẽ giúp học viên luyện tập có mục tiêu và giảm áp lực khi bước vào kỳ thi."
            />

            <div className="grid gap-4">
              {commonMistakes.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-orange-100 bg-orange-50/60 p-4 font-semibold leading-7 text-slate-700"
                >
                  <AlertTriangle className="mt-1 shrink-0 text-[#F36B21]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#F3F8FC] p-8 shadow-xl shadow-blue-950/5">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F36B21] text-white">
                <ClipboardCheck size={32} />
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#F36B21]">
                  Gợi ý luyện tập
                </p>
                <h3 className="mt-1 text-2xl font-black text-[#003F78]">
                  Trước Khi Thi Nên Làm Gì?
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Ôn lại lý thuyết theo từng nhóm câu hỏi thay vì học dàn trải.",
                "Tập vòng số 8 nhiều lần để quen hướng lái và tốc độ.",
                "Ngủ đủ trước ngày thi, tránh đến sân thi trong trạng thái mệt mỏi.",
                "Đến sớm để ổn định tâm lý và nghe hướng dẫn trước khi thi.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-white p-4 font-semibold leading-7 text-slate-700"
                >
                  <CircleDot className="mt-1 shrink-0 text-[#003F78]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-[#F3F8FC] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Mẹo thi tự tin"
            title="Một Số Mẹo Giúp Học Viên Thi Tốt Hơn"
            desc="Các mẹo nhỏ nhưng có tác dụng lớn trong quá trình luyện tập và khi bước vào bài thi thực hành."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {tips.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] bg-white p-7 shadow-lg shadow-blue-950/5"
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

          <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-[#003F78] to-[#0B74C9] p-8 text-white shadow-2xl shadow-blue-950/15">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FFD21F]">
                  Cần được hướng dẫn trực tiếp?
                </p>

                <h2 className="mt-3 text-2xl font-black md:text-3xl">
                  Liên hệ trung tâm để được tư vấn lịch học và luyện tập phù hợp
                </h2>
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
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
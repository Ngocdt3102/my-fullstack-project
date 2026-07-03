import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Clock,
} from "lucide-react";
import { contactInfo, navItems, trainingPrograms } from "../data/siteData";
import logo from "../assets/logo_01.png";

export default function Footer() {
  const mapQuery = encodeURIComponent(contactInfo.address);

  return (
    <footer className="bg-[#003F78] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Brand + contact */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-md ring-2 ring-[#F36B21]">
                <img
                  src={logo}
                  alt="Logo Trung Tâm Lái Xe"
                  className="h-full w-full rounded-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-black uppercase leading-tight">
                  Trung Tâm Đào Tạo Lái Xe
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#FFD21F]">
                  Đà Nẵng MT5
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-blue-50">
              Đào tạo lái xe an toàn, chuyên nghiệp, hỗ trợ học viên hoàn thiện
              kỹ năng, nắm chắc luật giao thông và tự tin khi tham gia sát hạch.
            </p>

            {/* Contact cards */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <div className="flex gap-3">
                  <MapPin className="shrink-0 text-[#FFD21F]" size={20} />
                  <div>
                    <h4 className="font-black">Địa chỉ</h4>
                    <p className="mt-1 text-sm leading-6 text-blue-50">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={contactInfo.phoneHref}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:border-[#FFD21F]/60 hover:bg-white/15"
              >
                <div className="flex gap-3">
                  <Phone className="shrink-0 text-[#FFD21F]" size={20} />
                  <div>
                    <h4 className="font-black">Hotline</h4>
                    <p className="mt-1 text-sm font-bold text-blue-50">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:border-[#FFD21F]/60 hover:bg-white/15"
              >
                <div className="flex gap-3">
                  <Mail className="shrink-0 text-[#FFD21F]" size={20} />
                  <div>
                    <h4 className="font-black">Email</h4>
                    <p className="mt-1 break-all text-sm leading-6 text-blue-50">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <div className="flex gap-3">
                  <Clock className="shrink-0 text-[#FFD21F]" size={20} />
                  <div>
                    <h4 className="font-black">Thời gian làm việc</h4>
                    <p className="mt-1 text-sm leading-6 text-blue-50">
                      Thứ 2 - Chủ nhật: 7:00 - 17:30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <span className="text-sm font-semibold text-blue-100">
                Theo dõi:
              </span>

              <a
                href={contactInfo.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F36B21]"
              >
                f
              </a>

              <a
                href={contactInfo.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-black text-white transition hover:bg-[#F36B21]"
              >
                ig
              </a>

              <a
                href={contactInfo.youtube}
                aria-label="Youtube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-black text-white transition hover:bg-[#F36B21]"
              >
                yt
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-2 shadow-2xl shadow-blue-950/30">
              <div className="flex items-center justify-between gap-4 px-3 py-3">
                <div>
                  <h4 className="font-black">Bản đồ trung tâm</h4>
                  <p className="mt-1 text-xs text-blue-100">
                    Nhấn vào bản đồ để xem chỉ đường
                  </p>
                </div>

                <MapPin className="text-[#FFD21F]" size={24} />
              </div>

              <iframe
                title="Bản đồ trung tâm"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-[330px] w-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-xs font-black uppercase text-[#003F78] transition hover:bg-[#FFD21F]"
              >
                Xem trên Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-5 text-lg font-black">Liên kết nhanh</h4>

            <div className="space-y-3 text-sm text-blue-50">
              {navItems
                .filter((item) => !item.children)
                .map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block transition hover:translate-x-1 hover:text-[#FFD21F]"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black">Đào tạo</h4>

            <div className="space-y-3 text-sm text-blue-50">
              {trainingPrograms.map((item) => (
                <Link
                  key={item.id}
                  to={`/dao-tao/${item.slug}`}
                  className="block transition hover:translate-x-1 hover:text-[#FFD21F]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black">Dịch vụ hỗ trợ</h4>

            <div className="space-y-3 text-sm text-blue-50">
              <Link
                to="/lien-he"
                className="block transition hover:translate-x-1 hover:text-[#FFD21F]"
              >
                Tư vấn hồ sơ đăng ký
              </Link>
              <Link
                to="/ky-nang"
                className="block transition hover:translate-x-1 hover:text-[#FFD21F]"
              >
                Hướng dẫn kỹ năng thi
              </Link>
              <Link
                to="/khoa-hoc"
                className="block transition hover:translate-x-1 hover:text-[#FFD21F]"
              >
                Lịch khai giảng
              </Link>
              <Link
                to="/tin-tuc"
                className="block transition hover:translate-x-1 hover:text-[#FFD21F]"
              >
                Tin tức học lái xe
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black">Đăng ký tư vấn</h4>

            <p className="text-sm leading-7 text-blue-50">
              Liên hệ ngay để được hỗ trợ thông tin khóa học, hồ sơ, lịch học và
              chi phí phù hợp.
            </p>

            <a
              href={contactInfo.phoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F36B21] px-5 py-3 text-sm font-black text-white transition hover:bg-[#D95512]"
            >
              <Phone size={16} />
              Gọi tư vấn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#003764]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-blue-100 md:flex-row">
          <p>© 2026 Trung Tâm Đào Tạo Lái Xe. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-[#FFD21F]">
              Chính sách bảo mật
            </a>
            <span className="h-4 w-px bg-white/20" />
            <a href="#" className="transition hover:text-[#FFD21F]">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
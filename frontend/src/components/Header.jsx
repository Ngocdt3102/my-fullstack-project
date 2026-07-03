import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { contactInfo, navItems } from "../data/siteData";
import logo from "../assets/logo_01.png";

const navClass = ({ isActive }) =>
  isActive ? "text-orange-500" : "text-slate-700 hover:text-orange-500";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg shadow-slate-900/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-md ring-2 ring-orange-400">
            <img
              src={logo}
              alt="Logo trung tâm"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-base font-black uppercase leading-tight text-blue-950 md:text-lg">
              Trung Tâm Đào Tạo Lái Xe
            </h1>
            <p className="text-xs font-semibold text-orange-500">Uy tín · An toàn · Chuyên nghiệp</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <NavLink to={item.path} className="flex items-center gap-1 text-slate-700 transition hover:text-orange-500">
                  {item.label} <ChevronDown size={16} />
                </NavLink>
                <div className="invisible absolute left-0 top-full w-64 translate-y-3 rounded-xl bg-white py-3 opacity-0 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-100 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link key={child.label} to={child.path} className="block px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.label} to={item.path} className={navClass}>
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-orange-300 hover:text-orange-500">
            <Search size={18} />
          </button>
          <a href={contactInfo.phoneHref} className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600">
            Gọi tư vấn
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2 text-sm font-bold text-slate-700">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button onClick={() => setMobileDropdown(!mobileDropdown)} className="flex w-full items-center justify-between rounded-lg px-3 py-3 hover:bg-orange-50">
                    {item.label} <ChevronDown size={16} />
                  </button>
                  {mobileDropdown && (
                    <div className="ml-3 border-l border-orange-200 pl-3">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.path} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-orange-50">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} to={item.path} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-orange-50">
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
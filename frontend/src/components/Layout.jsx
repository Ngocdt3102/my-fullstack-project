import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import ZaloFloatingButton from "./ZaloFloatingButton";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ZaloFloatingButton />
    </div>
  );
}
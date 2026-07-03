import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/webPages/Home";
import About from "./pages/webPages/About";
import Courses from "./pages/webPages/Courses";
import Training from "./pages/webPages/Training";
import TrainingDetail from "./pages/webPages/TrainingDetail";
import Skills from "./pages/webPages/Skills";
import News from "./pages/webPages/News";
import Contact from "./pages/webPages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="gioi-thieu" element={<About />} />
        <Route path="khoa-hoc" element={<Courses />} />

        {/* Trang tổng quan đào tạo */}
        <Route path="dao-tao" element={<Training />} />

        {/* Trang chi tiết đào tạo: /dao-tao/a1 hoặc /dao-tao/a */}
        <Route path="dao-tao/:slug" element={<TrainingDetail />} />

        <Route path="ky-nang" element={<Skills />} />
        <Route path="tin-tuc" element={<News />} />
        <Route path="lien-he" element={<Contact />} />
      </Route>
    </Routes>
  );
}
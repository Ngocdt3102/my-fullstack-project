import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import CourseCard from "../../components/CourseCard";
import ContactCTA from "../../components/ContactCTA";
import { courseList } from "../../data/siteData";

export default function Courses() {
  return (
    <>
      <PageHero eyebrow="Khóa học" title="Các Khóa Học Đang Mở Đăng Ký" desc="Lựa chọn khóa học phù hợp với nhu cầu của bạn, bao gồm hạng A1 và hạng A." />
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle eyebrow="Danh sách khóa học" title="Chọn Khóa Học Phù Hợp Với Bạn" desc="Mỗi khóa học được thiết kế theo lộ trình rõ ràng, hỗ trợ học viên từ hồ sơ đến luyện thi." />
          <div className="grid gap-6 md:grid-cols-2">
            {courseList.map((course) => <CourseCard key={course.title} course={course} />)}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
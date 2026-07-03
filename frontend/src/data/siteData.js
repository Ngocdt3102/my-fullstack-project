import {
  ShieldCheck,
  Bike,
  FileCheck,
  Users,
  BadgeCheck,
  MapPinned,
  BookOpenCheck,
  ClipboardCheck,
} from "lucide-react";

import background_course_A from "../assets/images/background_course_A.jpg";
import background_course_A1 from "../assets/images/background_course_A1.jpg";

export const contactInfo = {
  brandName: "Trung Tâm Đào Tạo Lái Xe Mô Tô Số 5",
  shortName: "Lái Xe Mô Tô Số 5 Đà Nẵng",
  slogan: "Uy tín - Tận tâm - Đồng hành cùng học viên",
  address: "Trung Tâm Đào Tạo Lái Xe Mô Tô Số 5, Đà Nẵng",
  mapLocation: "16.0715968,108.1789773",
  email: "",
  phone: "0905 851 556",
  phoneHref: "tel:0905851556",
  workingTime: "Thứ 2 - Chủ nhật: 7:00 - 17:30",
  facebookUrl: "https://web.facebook.com/profile.php?id=61583345434360",
  googleMapsUrl:
    "https://www.google.com/maps/place/Trung+T%C3%A2m+%C4%90%C3%A0o+T%E1%BA%A1o+L%C3%A1i+Xe+M%C3%B4+T%C3%B4+S%E1%BB%91+5/@16.0715968,108.1789773,652m/data=!3m1!1e3!4m8!3m7!1s0x314219c65dc2862f:0xb395ef6cd8fc61ba!8m2!3d16.0715968!4d108.1789773!9m1!1b1!16s%2Fg%2F11ytv7jxj7",
  zaloUrl: "https://zalo.me/0905123456",
};

export const navItems = [
  { label: "Trang chủ", path: "/" },
  { label: "Giới thiệu", path: "/gioi-thieu" },
  {
    label: "Đào tạo",
    path: "/dao-tao",
    children: [
      { label: "Đào tạo bằng lái A1", path: "/dao-tao/a1" },
      { label: "Đào tạo bằng lái A", path: "/dao-tao/a" },
    ],
  },
  { label: "Khóa học", path: "/khoa-hoc" },
  { label: "Kỹ năng", path: "/ky-nang" },
  { label: "Tin tức", path: "/tin-tuc" },
  { label: "Liên hệ", path: "/lien-he" },
];

export const stats = [
  { value: "A1", label: "Bằng lái xe máy phổ thông" },
  { value: "A", label: "Bằng lái mô tô phân khối lớn" },
  { value: "795K+", label: "Học phí ưu đãi tham khảo" },
  { value: "100%", label: "Hỗ trợ hồ sơ trọn gói" },
];

export const trainingPrograms = [
  {
    id: "a1",
    slug: "a1",
    title: "Đào tạo bằng lái xe máy hạng A1",
    shortTitle: "Bằng lái hạng A1",
    type: "Xe mô tô phổ thông",
    image:
      background_course_A1,

    desc: "Khóa học dành cho người cần thi bằng lái xe máy hạng A1 tại Đà Nẵng. Lộ trình học dễ hiểu, thực hành sát bài thi và hỗ trợ hồ sơ nhanh gọn.",

    heroDesc:
      "Chương trình đào tạo bằng lái xe máy hạng A1 phù hợp với học viên cần điều khiển xe mô tô hai bánh phổ thông. Trung tâm hỗ trợ học viên từ bước chuẩn bị hồ sơ, học lý thuyết, luyện thực hành đến ngày thi sát hạch.",

    price: "Chỉ từ 795K",
    duration: "Lịch học linh hoạt",
    suitableFor: "Học sinh, sinh viên, người đi làm",

    details: [
      "Hỗ trợ đăng ký hồ sơ thi bằng lái xe máy A1.",
      "Học lý thuyết dễ hiểu, có thể ôn tập linh hoạt.",
      "Luyện thực hành vòng số 8 và các bài thi cơ bản.",
      "Hỗ trợ học viên trước ngày thi sát hạch.",
      "Phù hợp cho học sinh, sinh viên, người đi làm.",
    ],

    targetUsers: [
      "Người cần thi bằng lái xe máy hạng A1 để sử dụng xe mô tô phổ thông.",
      "Học sinh, sinh viên cần giấy phép lái xe để đi học, đi làm thêm hoặc di chuyển hằng ngày.",
      "Người đi làm muốn hoàn thiện giấy phép lái xe đúng quy định.",
      "Người mới lần đầu thi bằng lái xe máy và chưa nắm rõ quy trình đăng ký.",
    ],

    curriculum: [
      {
        title: "Tư vấn và hướng dẫn hồ sơ",
        desc: "Học viên được tư vấn điều kiện đăng ký, giấy tờ cần chuẩn bị, thời gian học và quy trình thi sát hạch.",
      },
      {
        title: "Ôn tập lý thuyết",
        desc: "Hướng dẫn học viên nắm các nhóm kiến thức trọng tâm như biển báo, luật giao thông, quy tắc nhường đường và câu hỏi thường gặp.",
      },
      {
        title: "Luyện thực hành vòng số 8",
        desc: "Học viên được hướng dẫn cách vào vòng số 8, giữ thăng bằng, kiểm soát tay ga, giữ tốc độ và đi đúng quỹ đạo.",
      },
      {
        title: "Luyện các bài thi cơ bản",
        desc: "Bao gồm đường thẳng, đường quanh co, đường gồ ghề và các thao tác thường gặp trong bài thi thực hành.",
      },
      {
        title: "Chuẩn bị trước ngày thi",
        desc: "Trung tâm nhắc lịch, hướng dẫn quy trình thi và các lưu ý quan trọng để học viên tự tin hơn khi sát hạch.",
      },
    ],

    requirements: [
      "Đủ độ tuổi đăng ký thi bằng lái xe máy theo quy định.",
      "Có giấy tờ cá nhân hợp lệ.",
      "Có nhu cầu thi bằng lái xe máy hạng A1.",
      "Chuẩn bị hồ sơ theo hướng dẫn của trung tâm.",
    ],

    benefits: [
      "Quy trình đăng ký nhanh gọn, dễ hiểu.",
      "Học lý thuyết theo trọng tâm, phù hợp người mới.",
      "Được luyện thực hành sát nội dung bài thi.",
      "Hỗ trợ học viên trong suốt quá trình học và thi.",
      "Phù hợp với học sinh, sinh viên và người đi làm.",
    ],

    commonMistakes: [
      "Chạm vạch khi đi vòng số 8.",
      "Chống chân trong quá trình thi thực hành.",
      "Đi sai hướng hoặc sai thứ tự bài thi.",
      "Tăng ga không đều khiến xe mất ổn định.",
      "Tâm lý căng thẳng khi vào bài thi.",
    ],

    faq: [
      {
        question: "Bằng lái hạng A1 phù hợp với ai?",
        answer:
          "Bằng A1 phù hợp với người cần điều khiển xe mô tô hai bánh phổ thông theo quy định hiện hành.",
      },
      {
        question: "Người mới chưa biết quy trình thi có đăng ký được không?",
        answer:
          "Có. Trung tâm sẽ hướng dẫn từ bước chuẩn bị hồ sơ, học lý thuyết, luyện thực hành đến các lưu ý trước ngày thi.",
      },
      {
        question: "Khóa học có luyện vòng số 8 không?",
        answer:
          "Có. Vòng số 8 là phần thực hành quan trọng, học viên sẽ được hướng dẫn cách đi đúng hướng, giữ tốc độ và hạn chế lỗi.",
      },
      {
        question: "Học phí bằng A1 là bao nhiêu?",
        answer:
          "Học phí có thể thay đổi theo từng thời điểm. Học viên nên liên hệ trung tâm để được tư vấn mức học phí hiện tại.",
      },
    ],
  },

  {
    id: "a",
    slug: "a",
    title: "Đào tạo bằng lái xe mô tô hạng A",
    shortTitle: "Bằng lái hạng A",
    type: "Mô tô phân khối lớn",
    image:
      background_course_A,

    desc: "Khóa học dành cho học viên có nhu cầu thi bằng lái xe mô tô hạng A. Nội dung tập trung vào kỹ năng điều khiển xe, xử lý tình huống và quy trình thi thực tế.",

    heroDesc:
      "Chương trình đào tạo bằng lái xe mô tô hạng A dành cho học viên có nhu cầu điều khiển mô tô phân khối lớn. Trung tâm hỗ trợ tư vấn điều kiện đăng ký, hồ sơ, lý thuyết và thực hành sát bài thi.",

    price: "Liên hệ",
    duration: "Lịch học linh hoạt",
    suitableFor: "Người cần điều khiển mô tô phân khối lớn",

    details: [
      "Tư vấn điều kiện đăng ký bằng lái xe mô tô hạng A.",
      "Hướng dẫn hồ sơ và lịch thi rõ ràng.",
      "Luyện kỹ năng kiểm soát xe và xử lý tình huống.",
      "Học lý thuyết trên app tiện lợi, dễ ôn tập.",
      "Thực hành kỹ, sát nội dung bài thi.",
    ],

    targetUsers: [
      "Người có nhu cầu điều khiển mô tô phân khối lớn.",
      "Người muốn đăng ký bằng lái phù hợp với loại phương tiện đang sử dụng.",
      "Học viên cần được tư vấn rõ điều kiện đăng ký bằng hạng A.",
      "Người muốn luyện kỹ năng điều khiển mô tô an toàn và đúng quy định.",
    ],

    curriculum: [
      {
        title: "Tư vấn điều kiện đăng ký",
        desc: "Học viên được tư vấn rõ về điều kiện, đối tượng phù hợp, hồ sơ và các thông tin cần biết trước khi đăng ký bằng lái hạng A.",
      },
      {
        title: "Hướng dẫn hồ sơ",
        desc: "Trung tâm hỗ trợ học viên chuẩn bị giấy tờ cần thiết, lịch học và lịch thi phù hợp.",
      },
      {
        title: "Ôn tập lý thuyết",
        desc: "Hướng dẫn các nhóm câu hỏi về luật giao thông, biển báo, tình huống thường gặp và kiến thức cần nắm khi sát hạch.",
      },
      {
        title: "Luyện kỹ năng điều khiển xe",
        desc: "Tập trung vào khả năng giữ thăng bằng, kiểm soát tốc độ, xử lý tay ga, phanh và thao tác điều khiển mô tô.",
      },
      {
        title: "Chuẩn bị sát hạch",
        desc: "Học viên được hướng dẫn quy trình thi, các lỗi cần tránh và cách giữ tâm lý ổn định trước ngày sát hạch.",
      },
    ],

    requirements: [
      "Đủ điều kiện đăng ký bằng lái xe mô tô hạng A theo quy định.",
      "Có giấy tờ cá nhân hợp lệ.",
      "Có nhu cầu điều khiển mô tô phân khối lớn.",
      "Chuẩn bị hồ sơ theo hướng dẫn của trung tâm.",
    ],

    benefits: [
      "Được tư vấn rõ điều kiện đăng ký bằng hạng A.",
      "Lộ trình học phù hợp với học viên mới.",
      "Được hướng dẫn lý thuyết và thực hành theo trọng tâm.",
      "Rèn luyện kỹ năng kiểm soát mô tô an toàn hơn.",
      "Hỗ trợ học viên trong quá trình học và thi.",
    ],

    commonMistakes: [
      "Chưa nắm rõ điều kiện đăng ký bằng hạng A.",
      "Thiếu kỹ năng kiểm soát xe khi vào bài thực hành.",
      "Chưa quen tốc độ và trọng lượng xe.",
      "Tâm lý căng thẳng khi thực hành mô tô phân khối lớn.",
      "Không nắm rõ quy trình thi sát hạch.",
    ],

    faq: [
      {
        question: "Bằng lái hạng A dành cho loại xe nào?",
        answer:
          "Bằng hạng A thường dành cho người có nhu cầu điều khiển mô tô phân khối lớn theo quy định hiện hành.",
      },
      {
        question: "Tôi chưa rõ mình có đủ điều kiện đăng ký bằng hạng A không?",
        answer:
          "Bạn nên liên hệ trung tâm để được tư vấn cụ thể về điều kiện đăng ký, hồ sơ và quy trình học thi.",
      },
      {
        question: "Khóa học có hướng dẫn thực hành không?",
        answer:
          "Có. Học viên được hướng dẫn kỹ năng kiểm soát xe, xử lý tốc độ và các nội dung thực hành cần thiết.",
      },
      {
        question: "Học phí bằng hạng A là bao nhiêu?",
        answer:
          "Học phí có thể thay đổi tùy thời điểm và chương trình học. Học viên nên liên hệ trực tiếp để được báo thông tin chính xác.",
      },
    ],
  },
];

export const courseList = [
  {
    title: "Khóa học bằng lái xe máy Hạng A1",
    type: "A1",
    date: "Khai giảng / nhận hồ sơ thường xuyên",
    price: "Chỉ từ 795K",
    desc: "Khóa học phù hợp với người cần thi bằng lái xe máy phổ thông. Hỗ trợ hồ sơ, học lý thuyết dễ hiểu và luyện thực hành sát bài thi.",
  },
  {
    title: "Khóa học bằng lái xe mô tô Hạng A",
    type: "A",
    date: "Lịch học linh hoạt",
    price: "Liên hệ",
    desc: "Dành cho học viên cần thi bằng lái mô tô hạng A. Hỗ trợ tư vấn điều kiện, hồ sơ, lý thuyết và thực hành.",
  },
];

export const whyChooseUs = [
  {
    icon: ClipboardCheck,
    title: "Hồ sơ trọn gói",
    desc: "Hỗ trợ học viên chuẩn bị hồ sơ đăng ký nhanh gọn, hạn chế phát sinh và tiết kiệm thời gian.",
  },
  {
    icon: BookOpenCheck,
    title: "Học lý thuyết dễ hiểu",
    desc: "Nội dung lý thuyết được hướng dẫn dễ nhớ, có thể ôn tập linh hoạt qua app hoặc tài liệu hỗ trợ.",
  },
  {
    icon: Bike,
    title: "Thực hành sát bài thi",
    desc: "Tập trung luyện các bài thi quan trọng như vòng số 8, đường thẳng, đường quanh co và đường gồ ghề.",
  },
  {
    icon: ShieldCheck,
    title: "Thi thật, bằng thật",
    desc: "Định hướng đào tạo rõ ràng, minh bạch, đồng hành cùng học viên trong quá trình học và thi.",
  },
];

export const skills = [
  {
    icon: FileCheck,
    title: "Nắm chắc luật giao thông",
    desc: "Hiểu biển báo, vạch kẻ đường, quy tắc nhường đường và những nhóm câu hỏi thường xuất hiện khi thi.",
  },
  {
    icon: BadgeCheck,
    title: "Kỹ năng thi vòng số 8",
    desc: "Rèn kỹ năng giữ thăng bằng, vào cua, giữ tốc độ và quan sát khi thực hiện bài thi vòng số 8.",
  },
  {
    icon: Users,
    title: "Tâm lý khi thi",
    desc: "Giữ bình tĩnh, đi đúng tốc độ, không chống chân sai vị trí và tránh các lỗi mất điểm thường gặp.",
  },
  {
    icon: MapPinned,
    title: "Kỹ năng đi đường thực tế",
    desc: "Tập thói quen quan sát, bật xi nhan, giữ khoảng cách, chuyển hướng an toàn và xử lý tình huống đô thị.",
  },
];

export const newsPosts = [
  {
    title: "Kinh nghiệm thi bằng lái xe máy A1 cho người mới",
    date: "28/05/2026",
    desc: "Tổng hợp các mẹo học lý thuyết, luyện vòng số 8 và chuẩn bị tâm lý trước ngày thi sát hạch.",
  },
  {
    title: "Những lỗi thường gặp khi thi thực hành hạng A1",
    date: "24/05/2026",
    desc: "Các lỗi như chạm vạch, chống chân, đi sai hướng, thiếu quan sát và cách khắc phục khi luyện tập.",
  },
  {
    title: "Cần chuẩn bị gì khi đăng ký thi bằng lái xe máy?",
    date: "20/05/2026",
    desc: "Những thông tin cần biết về hồ sơ, thời gian học, lịch thi và các lưu ý trước khi đăng ký.",
  },
];
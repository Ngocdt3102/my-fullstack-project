import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfJY1ntZqZtZOMeIIde-0hTyHk_sJsQTR_bv0kASPZh8XSPKA/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.91161963",
  phone: "entry.1960832217",
  email: "entry.921104111",
  course: "entry.1424379114",
  userType: "entry.2055858842",
  message: "entry.1386359477",
  contactTime: "entry.1727616739",
  source: "entry.1294380295",
  note: "entry.1452818110",
};

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  course: "",
  userType: "",
  message: "",
  contactTime: "",
  source: "Website",
  note: "",
};

export default function LeadForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Vui lòng nhập họ và tên.";
    }

    if (!formData.phone.trim()) {
      return "Vui lòng nhập số điện thoại.";
    }

    if (!formData.course.trim()) {
      return "Vui lòng chọn khóa học cần tư vấn.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const body = new URLSearchParams();

    body.append(GOOGLE_FORM_FIELDS.name, formData.name);
    body.append(GOOGLE_FORM_FIELDS.phone, formData.phone);
    body.append(GOOGLE_FORM_FIELDS.email, formData.email);
    body.append(GOOGLE_FORM_FIELDS.course, formData.course);
    body.append(GOOGLE_FORM_FIELDS.userType, formData.userType);
    body.append(GOOGLE_FORM_FIELDS.message, formData.message);
    body.append(GOOGLE_FORM_FIELDS.contactTime, formData.contactTime);
    body.append(GOOGLE_FORM_FIELDS.source, formData.source);
    body.append(GOOGLE_FORM_FIELDS.note, formData.note);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Không thể gửi thông tin lúc này. Vui lòng thử lại hoặc liên hệ hotline."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-white p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl md:shadow-2xl shadow-blue-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-950/20 "
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full bg-[#F36B21]/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full bg-[#0B74C9]/10 blur-2xl" />
      <div className="relative">
        <div className="mb-5 sm:mb-6 md:mb-8">
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#F36B21]">
            Biểu mẫu tư vấn
          </p>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight text-[#003F78]">
            Đăng ký tư vấn khóa học
          </h3>

          <p className="mt-2 text-sm sm:text-[15px] leading-6 sm:leading-7 text-slate-600">
            Điền thông tin bên dưới, trung tâm sẽ liên hệ hỗ trợ bạn trong thời
            gian sớm nhất.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="
              rounded-xl
              border
              border-slate-200
              px-3.5
              sm:px-4
              py-2.5
              sm:py-3.5
              text-[15px]
              outline-none

              transition-all
              duration-300

              focus:-translate-y-0.5
              focus:border-[#F36B21]
              focus:ring-4
              focus:ring-[#F36B21]/15
              focus:shadow-lg
              focus:shadow-orange-200/20
              "
            placeholder="Họ và tên"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="
              rounded-xl
              border
              border-slate-200
              px-3.5
              sm:px-4
              py-2.5
              sm:py-3.5
              text-[15px]
              outline-none

              transition-all
              duration-300

              focus:-translate-y-0.5
              focus:border-[#F36B21]
              focus:ring-4
              focus:ring-[#F36B21]/15
              focus:shadow-lg
              focus:shadow-orange-200/20
              "
            placeholder="Số điện thoại liên hệ"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="
              rounded-xl
              border
              border-slate-200
              px-3.5
              sm:px-4
              py-2.5
              sm:py-3.5
              text-[15px]
              outline-none

              transition-all
              duration-300

              focus:-translate-y-0.5
              focus:border-[#F36B21]
              focus:ring-4
              focus:ring-[#F36B21]/15
              focus:shadow-lg
              focus:shadow-orange-200/20
              "
            placeholder="Email nếu có"
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="
            cursor-pointer
            rounded-xl
            border
            border-slate-200
            bg-white

            px-3.5
            sm:px-4

            py-2.5
            sm:py-3.5

            text-[15px]
            text-slate-600

            outline-none

            transition-all
            duration-300

            focus:-translate-y-0.5
            focus:border-[#F36B21]
            focus:ring-4
            focus:ring-[#F36B21]/15
            focus:shadow-lg
            focus:shadow-orange-200/20
            "
          >
            <option value="">Khóa học bạn quan tâm</option>
            <option value="Bằng lái xe máy hạng A1">
              Bằng lái xe máy hạng A1
            </option>
            <option value="Bằng lái mô tô hạng A">
              Bằng lái mô tô hạng A
            </option>
            <option value="Chưa rõ, cần được tư vấn thêm">
              Chưa rõ, cần được tư vấn thêm
            </option>
          </select>

          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="
              cursor-pointer
              rounded-xl
              border
              border-slate-200
              bg-white

              px-3.5
              sm:px-4

              py-2.5
              sm:py-3.5

              text-[15px]
              text-slate-600

              outline-none

              transition-all
              duration-300

              focus:-translate-y-0.5
              focus:border-[#F36B21]
              focus:ring-4
              focus:ring-[#F36B21]/15
              focus:shadow-lg
              focus:shadow-orange-200/20
            "
          >
            <option value="">Bạn thuộc nhóm đối tượng nào?</option>
            <option value="Học sinh / Sinh viên">Học sinh / Sinh viên</option>
            <option value="Người đi làm">Người đi làm</option>
            <option value="Người mới lần đầu đăng ký thi bằng lái">
              Người mới lần đầu đăng ký thi bằng lái
            </option>
            <option value="Người cần tư vấn nâng hạng hoặc đổi hạng bằng">
              Người cần tư vấn nâng hạng hoặc đổi hạng bằng
            </option>
            <option value="Khác">Khác</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="
            min-h-[110px]
            resize-y

            rounded-xl
            border
            border-slate-200

            px-3.5
            sm:px-4

            py-2.5
            sm:py-3.5

            text-[15px]

            outline-none

            transition-all
            duration-300

            focus:-translate-y-0.5
            focus:border-[#F36B21]
            focus:ring-4
            focus:ring-[#F36B21]/15
            focus:shadow-lg
            focus:shadow-orange-200/20
            "
            placeholder="Nội dung cần tư vấn"
          />

          <select
            name="contactTime"
            value={formData.contactTime}
            onChange={handleChange}
            className="
              cursor-pointer
              rounded-xl
              border
              border-slate-200
              bg-white

              px-3.5
              sm:px-4

              py-2.5
              sm:py-3.5

              text-[15px]
              text-slate-600

              outline-none

              transition-all
              duration-300

              focus:-translate-y-0.5
              focus:border-[#F36B21]
              focus:ring-4
              focus:ring-[#F36B21]/15
              focus:shadow-lg
              focus:shadow-orange-200/20
            "
          >
            <option value="">Thời gian thuận tiện để trung tâm liên hệ lại</option>
            <option value="Buổi sáng">Buổi sáng</option>
            <option value="Buổi chiều">Buổi chiều</option>
            <option value="Buổi tối">Buổi tối</option>
            <option value="Thời gian nào cũng được">
              Thời gian nào cũng được
            </option>
          </select>

          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="
              cursor-pointer
              rounded-xl
              border
              border-slate-200
              bg-white

              px-3.5
              sm:px-4

              py-2.5
              sm:py-3.5

              text-[15px]
              text-slate-600

              outline-none

              transition-all
              duration-300

              focus:-translate-y-0.5
              focus:border-[#F36B21]
              focus:ring-4
              focus:ring-[#F36B21]/15
              focus:shadow-lg
              focus:shadow-orange-200/20
            "
          >
            <option value="Website">Website</option>
            <option value="Facebook">Facebook</option>
            <option value="Zalo">Zalo</option>
            <option value="Google Maps">Google Maps</option>
            <option value="Người quen giới thiệu">Người quen giới thiệu</option>
            <option value="Khác">Khác</option>
          </select>

          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows="3"
            className="
              rounded-xl
              border
              border-slate-200

              px-3.5
              sm:px-4

              py-2.5
              sm:py-3.5

              text-[15px]

              outline-none

              transition-all
              duration-300

              focus:-translate-y-0.5
              focus:border-[#F36B21]
              focus:ring-4
              focus:ring-[#F36B21]/15
              focus:shadow-lg
              focus:shadow-orange-200/20
            "
            placeholder="Ghi chú thêm nếu có"
          />

          {status === "error" && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {errorMessage}
            </p>
          )}

          {isSuccess && (
            <p className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
              <CheckCircle2 size={18} />
              Gửi thông tin thành công. Trung tâm sẽ liên hệ lại sớm nhất.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="
            btn-shine

            mt-3

            flex
            w-full
            items-center
            justify-center
            gap-2

            rounded-xl

            bg-[#F36B21]

            px-6
            lg:px-8

            py-3
            lg:py-3.5

            text-sm
            sm:text-base

            font-black
            uppercase
            text-white

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-[#D95512]
            hover:shadow-xl
            hover:shadow-orange-300/30

            disabled:cursor-not-allowed
            disabled:opacity-70
            "
          >
            {isSubmitting ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Đang gửi...
              </>
            ) : (
              <>
                Gửi thông tin tư vấn <ArrowRight size={17} />
              </>
            )}
          </button>

          <p className="text-center text-xs leading-6 text-slate-500">
            Thông tin của bạn chỉ dùng để tư vấn khóa học và hỗ trợ đăng ký.
          </p>
        </div>
      </div>
    </form>
  );
}
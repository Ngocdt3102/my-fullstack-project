# WEBSITE TRUNG TÂM ĐÀO TẠO LÁI XE MÔ TÔ SỐ 5

---

# 1. Giới thiệu dự án

Đây là website giới thiệu và tiếp nhận đăng ký học viên dành cho **Trung tâm Đào tạo Lái xe Mô tô Số 5**.

Website được xây dựng với mục tiêu:

- Giới thiệu hình ảnh, uy tín và thông tin của trung tâm.
- Giới thiệu các chương trình đào tạo bằng lái xe hạng A và A1.
- Cung cấp đầy đủ thông tin khóa học, kỹ năng, tin tức.
- Cho phép học viên đăng ký tư vấn trực tuyến.
- Tự động lưu thông tin học viên.
- Tự động gửi Email thông báo.
- Hỗ trợ quản lý học viên thông qua Google Sheet như một hệ thống CRM Mini.

Website được thiết kế theo hướng đơn giản, dễ sử dụng, dễ mở rộng và chi phí vận hành gần như bằng 0.

---

# 2. Công nghệ sử dụng

## Frontend

- ReactJS
- Vite
- TailwindCSS
- React Router
- Lucide React Icons

## Lưu trữ dữ liệu

Google Form

Google Sheet

Google Apps Script

Gmail API (MailApp)

---

# 3. Cấu trúc dự án

```
frontend/
│
├── src/
│
├── assets/
│      logo
│      banner
│      hình ảnh
│
├── components/
│      Header
│      TopBar
│      Footer
│      Hero
│      ContactCTA
│      Floating Zalo
│      PageHero
│      ...
│
├── pages/
│      Home
│      About
│      Courses
│      Training
│      TrainingDetail
│      Skills
│      News
│      Contact
│
├── data/
│      siteData.js
│
├── App.jsx
│
└── main.jsx

```

---

# 4. Kiến trúc hoạt động của dự án

Website được chia thành **hai nhóm dữ liệu hoàn toàn độc lập**.

## 4.1 Dữ liệu tĩnh (Static Data)

Đây là toàn bộ dữ liệu phục vụ việc hiển thị giao diện.

Ví dụ:

- Menu
- Banner
- Khóa học
- Giới thiệu
- Tin tức
- Footer
- Thông tin liên hệ
- Chương trình đào tạo
- FAQ
- Kỹ năng
- Các hình ảnh

Toàn bộ dữ liệu này được lưu trong

```
src/data/siteData.js
```

Website chỉ đọc dữ liệu này để hiển thị.

Không có thao tác ghi dữ liệu.

Điều này giúp website hoạt động rất nhanh.

Nếu muốn chỉnh sửa nội dung website chỉ cần sửa file:

```
siteData.js
```

không cần chỉnh sửa source code.

---

## 4.2 Dữ liệu động (Dynamic Data)

Đây là dữ liệu được tạo bởi học viên.

Bao gồm:

- Họ tên
- Số điện thoại
- Email
- Khóa học
- Nội dung tư vấn
- Ghi chú
- Nguồn đăng ký
- Thời gian liên hệ

Đây là dữ liệu quan trọng.

Dữ liệu này không lưu trong website.

Sau khi học viên bấm:

```
Đăng ký tư vấn
```

website sẽ gửi dữ liệu trực tiếp đến:

```
Google Form
```

Google Form sẽ tự động ghi vào

```
Google Sheet
```

Google Apps Script sẽ tiếp tục xử lý dữ liệu.

---

# 5. Luồng hoạt động của hệ thống

```
Học viên

↓

Website

↓

Google Form

↓

Google Sheet

↓

Google Apps Script

↓

Gửi Email

↓

CRM Mini
```

Chi tiết:

Bước 1

Người dùng điền form.

↓

Bước 2

Website submit tới Google Form.

↓

Bước 3

Google Form ghi dữ liệu vào Google Sheet.

↓

Bước 4

Apps Script Trigger được kích hoạt.

↓

Bước 5

Tự động:

- sinh mã học viên

- tính ngày đăng ký

- gửi Email

↓

Bước 6

Nhân viên mở Google Sheet để quản lý.

---

# 6. Hệ thống Google Form

Google Form đóng vai trò:

- nhận dữ liệu từ website

- chống spam

- đảm bảo dữ liệu không bị mất

- kết nối trực tiếp Google Sheet

Website KHÔNG lưu dữ liệu.

Google Form mới là nơi tiếp nhận.

---

# 7. Hệ thống Google Sheet

Google Sheet được sử dụng như một CRM Mini.

Hiện tại gồm ba Sheet chính.

---

## 7.1 Data Đăng Ký

Đây là nơi lưu toàn bộ học viên.

Mỗi dòng tương ứng một học viên.

Bao gồm:

Thông tin cá nhân

↓

Thông tin khóa học

↓

Thông tin thanh toán

↓

Thông tin hồ sơ

↓

Thông tin lịch học

↓

Thông tin ghi chú

↓

Trạng thái chăm sóc

Đây là Sheet quan trọng nhất.

---

## 7.2 Danh Mục

Đây là nơi lưu:

- trạng thái
- nguồn khách
- khóa học
- ca học
- hình thức thanh toán

Các Dropdown trong CRM đều đọc dữ liệu từ đây.

Nếu muốn thêm:

```
Khóa học mới

Nguồn khách mới

Trạng thái mới
```

chỉ cần sửa Sheet này.

---

## 7.3 Tổng Quan

Đây là Dashboard.

Hiển thị:

- Tổng số học viên
- Học viên hôm nay
- Học viên tuần này
- Đã thanh toán
- Chưa thanh toán
- Tổng doanh thu
- Doanh thu còn thiếu

Toàn bộ đều tự động cập nhật.

Không cần nhập tay.

---

# 8. Cách quản lý học viên

Sau khi học viên đăng ký.

Nhân viên chỉ cần mở

Google Sheet

↓

Data Đăng Ký

↓

Tìm học viên

↓

Cập nhật:

- Đã gọi
- Đã tư vấn
- Đã đóng tiền
- Đã nhận hồ sơ
- Đã thi
- Đã cấp GPLX

Google Sheet sẽ tự động tính toán.

---

# 9. Hệ thống Email

Khi có học viên đăng ký.

Apps Script sẽ tự động gửi hai Email.

## Email thứ nhất

Gửi cho trung tâm.

Nội dung gồm:

- thông tin học viên
- khóa học
- nội dung cần tư vấn

để nhân viên liên hệ.

---

## Email thứ hai

Gửi cho học viên.

Nội dung gồm:

- xác nhận đã nhận đăng ký
- mã học viên
- thông tin đã đăng ký
- hotline
- email trung tâm

Điều này giúp tăng tính chuyên nghiệp.

---

# 10. Các Trigger đang sử dụng

Google Apps Script sử dụng Trigger:

```
On Form Submit
```

Mỗi khi Google Form có dữ liệu mới.

Trigger sẽ tự động chạy.

Không cần thao tác thủ công.

---

# 11. Chỉnh sửa nội dung website

Muốn sửa:

Menu

↓

```
siteData.js
```

Muốn sửa:

Thông tin liên hệ

↓

```
siteData.js
```

Muốn sửa:

Khóa học

↓

```
siteData.js
```

Muốn sửa:

Footer

↓

```
Footer.jsx
```

Muốn sửa:

Trang chủ

↓

```
Home.jsx
```

Muốn sửa:

Logo

↓

```
assets/logo.jpg
```

---

# 12. Cách chạy dự án

Cài đặt

```
npm install
```

Chạy

```
npm run dev
```

Build

```
npm run build
```

Preview

```
npm run preview
```

---

# 13. Quy trình bảo trì

Định kỳ nên kiểm tra:

Google Form

↓

Google Sheet

↓

Apps Script

↓

Trigger

↓

Email gửi thành công

Nếu thay đổi Google Form cần cập nhật lại:

```
Entry ID
```

trong source code.

---

# 14. Hướng phát triển trong tương lai

Website hiện tại là phiên bản giới thiệu và tiếp nhận đăng ký.

Trong tương lai có thể mở rộng thêm:

- Đăng nhập học viên
- Quản lý hồ sơ trực tuyến
- Thanh toán online
- Theo dõi tiến độ học
- Thông báo lịch thi
- Quản lý giáo viên
- Quản lý lớp học
- Quản lý doanh thu
- Hệ thống quản trị (Admin Dashboard)
- Đồng bộ dữ liệu với Firebase hoặc MySQL
- Tích hợp Zalo OA
- Chatbot AI tư vấn
- Báo cáo thống kê nâng cao

---

# 15. Tổng kết

Dự án được thiết kế theo mô hình "Frontend + Google Workspace".

Ưu điểm:

- Không cần Backend Server.
- Không cần Database riêng.
- Không cần VPS.
- Không cần Hosting phức tạp.
- Chi phí vận hành gần như bằng 0.
- Dễ bảo trì.
- Dễ mở rộng.
- Tốc độ triển khai nhanh.

Kiến trúc này phù hợp với các trung tâm đào tạo quy mô nhỏ và vừa, đáp ứng tốt nhu cầu giới thiệu dịch vụ, tiếp nhận đăng ký học viên và quản lý dữ liệu ban đầu thông qua Google Workspace.
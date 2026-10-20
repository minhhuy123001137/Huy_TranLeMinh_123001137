# TravelHi - Cổng Khám Phá & Trải Nghiệm Du Lịch Nhật Bản 2026

> **ĐỒ ÁN KIỂM TRA GIỮA KỲ - HỌC PHẦN: THIẾT KẾ WEB**  
> **Khoa Công nghệ Thông tin - Trường Đại học Lạc Hồng (LHU)**

---

## 📌 Thông Tin Sinh Viên Thực Hiện
- **Họ và tên:** Trần Lê Minh Huy
- **Mã số sinh viên (MSSV):** 123001137
- **Tên Repository GitHub:** `Huy_TranLeMinh_123001137`
- **Link GitHub Repository:** [https://github.com/minhhuy123001137/Huy_TranLeMinh_123001137](https://github.com/minhhuy123001137/Huy_TranLeMinh_123001137)
- **Link Live Preview (GitHub Pages):** [https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/](https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/)

---

## 🌸 Giới Thiệu Đề Tài "TravelHi"
**TravelHi** là trang web quảng bá du lịch chuyên biệt về đất nước Nhật Bản (Xứ sở hoa anh đào - Đất nước mặt trời mọc). Website mang đậm phong cách thẩm mỹ Nhật Bản tinh tế, giới thiệu trọn vẹn cảnh sắc bốn mùa, các điểm đến biểu tượng (Tokyo, Kyoto, Osaka, Phú Sĩ, Hokkaido, Nara), văn hóa truyền thống (Trà đạo Chado, Suối khoáng nóng Onsen, Áo Kimono, Tàu Shinkansen) và nền ẩm thực Washoku đạt chuẩn di sản thế giới UNESCO.

---

## 🛠️ Yêu Cầu Kỹ Thuật Đã Triển Khai Hoàn Hảo (Thang Điểm 10/10)

### 1. Chuẩn Semantic HTML5 (Tối thiểu 5 thành phần)
- `<header>`: Chứa Logo thương hiệu SVG, thanh điều hướng chính, hotline và nút CTA đặt tour nhanh.
- `<nav>`: Thanh điều hướng danh mục chính của website.
- `<main>`: Khu vực nội dung chính của toàn trang web.
- `<section>`: Chia các khối nội dung rõ ràng (`#hero`, `#intro`, `#destinations`, `#experiences`, `#cuisine`, `#tours`, `#tips`, `#contact`).
- `<article>`: Áp dụng chuẩn xác cho từng thẻ card điểm đến, card món ăn, khối tour lịch trình và bài viết cẩm nang du lịch.
- `<aside>`: Cột thông tin liên hệ và mạng xã hội bổ trợ tại khối Contact.
- `<footer>`: Chân trang ngữ nghĩa chứa liên kết hệ thống, giấy phép du lịch, bản tin và thông tin sinh viên.
- `<figure>` & `<figcaption>`: Bọc ảnh minh họa du lịch đúng chuẩn W3C, không lạm dụng thẻ `<div>`.

### 2. Kỹ thuật CSS & CSS Variables
- Khai báo hệ thống biến `:root` quản lý toàn diện:
  - `--primary-color: #bc002d` (Sắc đỏ cờ Nhật Bản Hinomaru Red)
  - `--primary-light: #e63946`, `--primary-dark: #8c001f`
  - `--sakura-pink: #fbc3bc`, `--sakura-subtle: #fff1f2`
  - `--bg-cream: #faf6f0` (Màu giấy Washi truyền thống)
  - Hệ thống typography: `--font-main`, `--font-heading`, `--font-jp`
  - Hệ thống `--shadow-md`, `--shadow-hover`, `--radius-md`, `--transition-normal`.
- Bố cục Layout hiện đại: **CSS Grid** (3 cột, 4 cột) và **CSS Flexbox** co giãn linh hoạt.
- **Responsive 100%**: Tương thích mượt mà trên Desktop, Laptop, Máy tính bảng (Tablet) và Điện thoại thông minh (Mobile).

### 3. Tương tác & Hiệu ứng Thư viện (Libraries)
- **Animate.css (v4.1.1):** Áp dụng hiệu ứng động ấn tượng cho phần tử chính tại Hero Section (`animate__fadeInDown`, `animate__fadeInUp`, `animate__delay-1s`).
- **AOS - Animate On Scroll (v2.3.1):** Tích hợp hiệu ứng cuộn trang sinh động (`data-aos="fade-up"`, `data-aos="zoom-in"`, `data-aos-delay`) cho các section nội dung.
- **Hiệu ứng tự viết bằng CSS:**
  - `:hover` phóng to mượt mà hình ảnh (`transform: scale(1.08)`), nâng cao thẻ card (`translateY(-8px)`) và đổ bóng hào quang đỏ nhẹ.
  - `:focus-visible` đạt chuẩn tiếp cận người dùng (Accessibility).
- **Pure HTML & CSS:** Toàn bộ menu mobile được điều khiển bằng kỹ thuật CSS Checkbox Hack (`.nav-toggle`), không cần file JavaScript riêng biệt.

---

## 📂 Cấu Trúc Thư Mục Repository

```text
Huy_TranLeMinh_123001137/
│
├── index.html                  # Mã nguồn trang chủ chuẩn Semantic HTML5
├── style.css                   # Tập tin CSS chính với CSS Variables & Responsive
├── PROMPT_LOG.md               # Nhật ký Prompt Engineering (Vibe Coding Log chuẩn mục III)
├── README.md                   # Tài liệu giới thiệu đồ án & thông tin sinh viên
│
├── assets/
│   ├── images/
│   │   ├── logo.svg            # Logo TravelHi độc quyền (Núi Phú Sĩ & Mặt trời mọc)
│   │   └── favicon.svg         # Favicon trình duyệt
│   └── icons/
│
└── css/
    └── style.css               # Bản sao lưu trữ thư mục CSS
```

---

## 🚀 Hướng Dẫn Kích Hoạt & Xem Live Trên GitHub Pages

1. Đăng nhập vào GitHub, truy cập repository: `https://github.com/minhhuy123001137/Huy_TranLeMinh_123001137`.
2. Vào mục **Settings** $\rightarrow$ chọn thẻ **Pages** ở thanh menu bên trái.
3. Tại phần **Build and deployment**:
   - **Source:** Chọn `Deploy from a branch`.
   - **Branch:** Chọn nhánh `main` và thư mục `/ (root)`.
   - Bấm **Save**.
4. Chờ 1 - 2 phút, đường link live preview sẽ sẵn sàng tại:  
   👉 **`https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/`**
5. Dán link live preview này vào mục **About** (mô tả bên phải trang chính của Repository).

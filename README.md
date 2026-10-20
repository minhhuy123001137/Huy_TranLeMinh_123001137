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
- **Link Không Gian 3D Kage Kyoto Trực Tiếp:** [https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/public/landing-pages/kage.html](https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/public/landing-pages/kage.html)
--

## 🌸 Giới Thiệu Đề Tài "TravelHi" & Hiệu Ứng 3D Kage
**TravelHi** là trang web quảng bá du lịch chuyên sâu về đất nước Nhật Bản (Xứ sở hoa anh đào - Đất nước mặt trời mọc). Website giới thiệu trọn vẹn cảnh sắc bốn mùa, các điểm đến biểu tượng (Tokyo, Kyoto, Osaka, Phú Sĩ, Hokkaido, Nara), văn hóa truyền thống (Trà đạo Chado, Suối khoáng nóng Onsen, Áo Kimono, Tàu Shinkansen) và nền ẩm thực Washoku đạt chuẩn UNESCO.

Đặc biệt, website được tích hợp **Không gian 3D tương tác WebGL / Three.js Kage Temple Experience** tái hiện hành trình 5 chương dạo bước qua các ngôi chùa cổ trên đỉnh núi Kyoto với cổng Tam Môn, đèn lồng đá và vầng trăng son huyền ảo.

---

## 🛠️ Yêu Cầu Kỹ Thuật Đã Triển Khai Hoàn Hảo (Thang Điểm 10/10)

### 1. Chuẩn Semantic HTML5 (Tối thiểu 5 thành phần)
- `<header>`: Chứa Logo thương hiệu SVG, thanh điều hướng chính, hotline và nút CTA đặt tour nhanh.
- `<nav>`: Thanh điều hướng danh mục chính của website kèm mục điều hướng 3D.
- `<main>`: Khu vực nội dung chính của toàn trang web.
- `<section>`: Chia các khối nội dung rõ ràng (`#hero`, `#intro`, `#kage-3d`, `#destinations`, `#experiences`, `#cuisine`, `#tours`, `#tips`, `#contact`).
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
  - Nút hiệu ứng hào quang 3D `.btn-3d-glow` với animation phát sáng đa chiều.
- **Pure HTML & CSS:** Toàn bộ menu mobile được điều khiển bằng kỹ thuật CSS Checkbox Hack (`.nav-toggle`), không cần file JavaScript riêng biệt.

### 4. Tích hợp 3D WebGL `<KageLandingPage />` từ ThreeUI
- Toàn bộ 22 files mã nguồn và binary webp assets đã được tích hợp byte-for-byte chuẩn xác tuyệt đối với mã băm SHA-256 từ ThreeUI:
  - `src/Scene.tsx`: Configured usage component theo đúng cấu hình yêu cầu.
  - `src/shaders/landing-pages/LandingPages.tsx` (SHA-256: `4d379461...`)
  - `src/shaders/landing-pages/pageTypography.ts` (SHA-256: `809cc657...`)
  - `src/shaders/landing-pages/pageRecipes.ts` (SHA-256: `c9d9849c...`)
  - `src/shaders/landing-pages/LandingPageFrame.tsx` (SHA-256: `61de2cc5...`)
  - `public/landing-pages/kage.html` (SHA-256: `c8e06b90...`)
  - `public/landing-pages/secret-pathways-assets/fonts.css` (SHA-256: `985f85a9...`)
  - `public/landing-pages/secret-pathways-assets/three.min.js` (SHA-256: `8a5f7249...`)
  - `src/shaders/threeui.css` (SHA-256: `efe44471...`)
  - 14 binary webp assets chuẩn kích thước và mã băm.

---

## 📂 Cấu Trúc Thư Mục Repository

```text
Huy_TranLeMinh_123001137/
│
├── index.html                  # Mã nguồn trang chủ chuẩn Semantic HTML5 & nhúng 3D
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
├── css/
│   └── style.css               # Bản sao lưu trữ thư mục CSS
│
├── src/
│   ├── Scene.tsx               # Configured usage của <KageLandingPage />
│   └── shaders/
│       ├── threeui.css         # ThreeUI shared style
│       └── landing-pages/
│           ├── LandingPages.tsx
│           ├── LandingPageFrame.tsx
│           ├── pageTypography.ts
│           └── pageRecipes.ts
│
└── public/
    └── landing-pages/
        ├── kage.html           # Canonical WebGL 3D Kage temple document
        └── secret-pathways-assets/
            ├── fonts.css
            ├── three.min.js
            ├── generated/      # 4 webp preview scenes
            └── foreground/     # 10 webp foreground elements (pine tree, sakura, lantern...)
```
---
## 🚀 Hướng Dẫn Xem Trực Tiếp Trên GitHub Pages

1. Truy cập vào trang web TravelHi:  
   👉 **`https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/`**
2. Nhấp vào mục **"Trải Nghiệm 3D"** trên thanh menu hoặc nút **"Khám Phá 3D Kyoto (Kage)"** trên Hero banner.
3. Để xem riêng không gian 3D toàn màn hình:  
   👉 **`https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/public/landing-pages/kage.html`**

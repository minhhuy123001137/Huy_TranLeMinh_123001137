# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Trần Lê Minh Huy
- **MSSV:** 123001137
- **Tên đề tài Website:** TravelHi - Cổng Khám Phá & Trải Nghiệm Du Lịch Nhật Bản 2026 (Japan Travel & 3D Interactive Kage World)
- **Công cụ AI đã sử dụng:** Gemini / Antigravity AI Agent (Google DeepMind)
- **Đường dẫn GitHub Repository:** `https://github.com/minhhuy123001137/Huy_TranLeMinh_123001137`
- **Đường dẫn GitHub Pages Live Preview:** `https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/`
- **Đường dẫn Không Gian 3D Kage Kyoto:** `https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/public/landing-pages/kage.html`

---

## 1. Yêu cầu ban đầu (System / Initial Prompt)

> **Prompt tổng quan ban đầu dùng để khởi tạo khung website:**
> 
> *"Bạn là một kĩ sư thiết kế web chuyên nghiệp. Hãy cùng tôi xây dựng một website quảng bá du lịch Nhật Bản hiện đại, đẳng cấp mang tên **TravelHi** (chủ đề: Khám phá vẻ đẹp bốn mùa hoa anh đào, núi Phú Sĩ, Tokyo, Kyoto, văn hóa truyền thống, ẩm thực Washoku và không gian 3D WebGL tương tác)."*
> 
> *Yêu cầu kỹ thuật bắt buộc:*
> 1. *Chuẩn Semantic HTML5 (Tối thiểu 5 thành phần): `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`, `<figure>`, `<figcaption>`, `<address>`, `<time>`. Tuyệt đối không lạm dụng thẻ `<div>` vô nghĩa.*
> 2. *Kỹ thuật CSS & CSS Variables: Sử dụng CSS Variables (`:root { --primary-color: ...; }`) để quản lý phối màu, font chữ và spacing nhất quán cho toàn bộ trang. Áp dụng Layout hiện đại: CSS Flexbox và CSS Grid responsive cơ bản và nâng cao.*
> 3. *Tương tác & Hiệu ứng (Libraries):*
>    - *Tích hợp Animate.css: Áp dụng hiệu ứng động cho các phần tử chính (Text tiêu đề, Hero Section, Button CTA,...).*
>    - *Tích hợp AOS (Animate On Scroll): Tạo hiệu ứng xuất hiện cuộn trang sinh động cho các section nội dung.*
>    - *Hiệu ứng `:hover`, `:focus` tự viết bằng CSS cho nút bấm và các thẻ bài viết (cards).*
> 4. *Giữ nguyên cấu trúc file hiện có và tích hợp thế giới 3D WebGL `<KageLandingPage />` từ ThreeUI (`SHA-256 c8e06b90397a`) tái hiện ngôi chùa cổ Kyoto với đầy đủ 22 file mã nguồn và binary webp assets chuẩn xác."*

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & Hệ thống CSS Variables

- **Prompt đã dùng:**
  > *"Hãy thiết lập file `index.html` với khung ngữ nghĩa HTML5 hoàn chỉnh cho website TravelHi và file `style.css` định nghĩa toàn bộ biến CSS trong `:root`. Đảm bảo các khối nội dung được phân chia bằng thẻ `<main>`, `<section>` có id rõ ràng, danh sách điểm đến và bài viết phải dùng thẻ `<article>` và `<figure>`, chân trang dùng `<footer>` và `<address>`."*

- **Kết quả AI tạo ra:**
  - Cấu trúc HTML5 cơ bản với các thẻ `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
  - Thiết lập bảng mã CSS Variables `:root` với `--primary-color: #bc002d` (đỏ cờ Nhật Hinomaru), `--primary-light`, `--sakura-pink`, `--font-main`, `--radius-md`.

- **Nhận xét & Tinh chỉnh của SV:**
  - Yêu cầu AI chuyển toàn bộ khối chứa hình ảnh sang thẻ `<figure>` và `<figcaption>`, chuyển cột thông tin liên hệ phụ ở phần Liên hệ sang thẻ `<aside>`, thêm thẻ `<time>` cho bài viết cẩm nang du lịch nhằm đạt chuẩn Semantic HTML5 cao nhất.

---

### Lần 2: Tích hợp thư viện Animate.css & AOS (Animate On Scroll)

- **Prompt đã dùng:**
  > *"Tích hợp link CDN của Animate.css v4 và AOS v2 vào `<head>`. Áp dụng các class `animate__animated animate__fadeInDown`, `animate__fadeInUp` cho Hero Badge, Hero Title, Hero Buttons. Thêm thuộc tính `data-aos="fade-up"` và `data-aos-delay` cho các card điểm đến, tour du lịch và khối giới thiệu."*

- **Thách thức gặp phải:**
  - Khi cuộn trang trên trình duyệt, hiệu ứng `data-aos` làm xuất hiện thanh cuộn ngang (horizontal scrollbar) do thuộc tính dịch chuyển `transform` tràn ra ngoài viewport.

- **Cách sửa prompt (Debug prompt):**
  > *"Website đang xuất hiện thanh cuộn ngang ngoài ý muốn khi hiệu ứng AOS kích hoạt. Hãy xử lý ngay bằng cách: thêm `overflow-x: hidden;` cho cả `html` và `body` trong `style.css`; cấu hình trong script khởi tạo `AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' })` để animation chỉ kích hoạt một lần duy nhất khi cuộn tới, tạo cảm giác mượt mà và tối ưu hiệu năng."*

- **Kết quả:** Lỗi cuộn ngang được khắc phục triệt để, các section xuất hiện sống động và uyển chuyển khi cuộn trang.

---

### Lần 3: Thiết kế cấu trúc Flexbox, CSS Grid & Hiệu ứng `:hover`, `:focus` tự viết

- **Prompt đã dùng:**
  > *"Hãy thiết kế CSS Grid hiện đại cho: Grid điểm đến 3 cột, Grid ẩm thực 4 cột, Grid tour 3 cột và Grid trải nghiệm văn hóa. Tự viết hiệu ứng `:hover` phóng to nhẹ ảnh (`transform: scale(1.08)` trong vùng bọc `overflow: hidden`), đổ bóng nổi khối với màu đỏ Hinomaru mềm mại (`--shadow-hover`) và hiệu ứng chuyển màu cho tiêu đề card. Thêm hiệu ứng `:focus-visible` cho tất cả các nút và thẻ liên kết để đạt chuẩn Accessibility (a11y)."*

- **Thách thức gặp phải:**
  - Ở màn hình máy tính bảng (Tablet 768px - 992px), lưới 3 cột và 4 cột bị co hẹp làm nội dung bị tràn và ảnh bị méo tỷ lệ.

- **Cách sửa prompt (Debug prompt):**
  > *"Hãy bổ sung Media Queries đáp ứng responsive toàn diện: ở màn hình `<= 1100px`, chuyển các grid 3 cột và 4 cột về dạng 2 cột (`grid-template-columns: repeat(2, 1fr)`); ở màn hình mobile `<= 680px`, tự động chuyển toàn bộ về dạng 1 cột (`grid-template-columns: 1fr`). Sử dụng `aspect-ratio` hoặc chiều cao cố định cho ảnh với `object-fit: cover` để ảnh luôn giữ tỷ lệ chuẩn."*

- **Kết quả:** Giao diện co giãn cân đối hoàn hảo trên mọi kích thước màn hình.

---

### Lần 4: Tinh giản toàn bộ sang Pure HTML & CSS (Bỏ file JS riêng biệt)

- **Prompt đã dùng:**
  > *"Theo yêu cầu chuẩn của học phần Thiết Kế Web, hãy loại bỏ toàn bộ file `script.js` và thư mục `js/`. Chuyển đổi toàn bộ các tính năng tương tác sang 100% Pure HTML & CSS: sử dụng kỹ thuật CSS Checkbox Hack (`<input type="checkbox" id="nav-toggle">` và `.nav-toggle:checked ~ .site-nav`) để đóng mở Menu Mobile; chuyển các nút 'Đặt Tour' thành liên kết mỏ neo `<a href="#contact">` với cuộn trang mượt mà `scroll-behavior: smooth;`."*

- **Kết quả AI tạo ra:**
  - Xóa bỏ file `script.js` khỏi repository.
  - Tích hợp thành công nút Hamburger trên Mobile bằng CSS thuần không cần JavaScript.
  - Các nút CTA liên kết mượt mà đến form đăng ký tại `#contact`.

---

### Lần 5: Tích hợp hiệu ứng 3D `<KageLandingPage />` từ ThreeUI (WebGL / Three.js)

- **Prompt đã dùng:**
  > *"Giữ nguyên cấu trúc file hiện có và tích hợp component 3D `<KageLandingPage />` từ ThreeUI (`SHA-256 c8e06b90397a`). Tải về chính xác các file mã nguồn đăng ký gồm `LandingPages.tsx`, `pageTypography.ts`, `pageRecipes.ts`, `LandingPageFrame.tsx`, `kage.html`, `fonts.css`, `three.min.js`, `threeui.css` và toàn bộ 14 file binary webp assets (Sanmon gate, lantern court, moonwater, pine tree, tall grass, sakura branch, shrine ruins,...). Kiểm tra mã hash SHA-256 khớp 100%. Tích hợp khung nhúng 3D trực tiếp vào website TravelHi tại section `#kage-3d` và tạo file cấu hình `src/Scene.tsx`."*

- **Thách thức gặp phải:**
  - File `kage.html` khi tải qua CDN web công cộng bị chèn script phân phối CDN và đường dẫn tuyệt đối Supabase, khiến mã băm SHA-256 sai lệch so với bản gốc của package.
  - Đồng thời cần bảo đảm tính toàn vẹn của mã nhị phân cho 14 ảnh webp.

- **Cách sửa prompt (Debug prompt):**
  > *"Tải trực tiếp gói npm chính thức `@designcodeio/threeui-1.2.0.tgz` từ npm registry và giải nén byte-for-byte bản gốc của `kage.html`, `fonts.css` và `three.min.js`. Sử dụng script tự động tải trực tiếp 14 binary assets và đối soát mã băm SHA-256 cho toàn bộ 22 files theo đúng danh mục của ThreeUI."*

- **Kết quả:** 
  - Toàn bộ 22/22 files đều đạt kết quả `PASS` với mã băm SHA-256 khớp 100% tuyệt đối.
  - Khung nhúng 3D hoạt động mượt mà, cho phép du khách dạo bước trong không gian 3D tương tác của ngôi chùa cổ Kyoto (Kage) ngay trên website TravelHi.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

### 1. AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?
- **Tự động hóa giải nén và kiểm định mã băm SHA-256:** Việc tải, trích xuất và so sánh mã băm của 22 file mã nguồn và binary asset đồ sộ được AI thực hiện chính xác chỉ trong vài phút.
- **Tích hợp hài hòa giữa cấu trúc website hiện có và thế giới 3D WebGL:** Giữ trọn vẹn điểm số chuẩn Semantic HTML5, CSS Variables và Flexbox/Grid của môn Thiết Kế Web, đồng thời nâng tầm trải nghiệm du lịch với không gian 3D đỉnh cao.

### 2. Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?
- **Tính chính xác và kỷ luật về mã nguồn (Source Integrity):** Trong các yêu cầu kỹ thuật cao cấp liên quan đến Three.js/WebGL và mã băm SHA-256, việc ra lệnh cho AI kiểm tra và xác thực từng byte là yếu tố quyết định để tránh mã lỗi hoặc bị từ chối do không đúng nguyên bản.
- **Khả năng làm chủ và kết hợp công nghệ:** Vibe Coding là sự kết hợp giữa tư duy định hướng của sinh viên và sức mạnh thực thi của AI. Biết kết hợp Semantic HTML5, CSS hiện đại với WebGL 3D giúp tạo nên sản phẩm vừa đạt chuẩn đề bài vừa gây ấn tượng thị giác vượt trội.

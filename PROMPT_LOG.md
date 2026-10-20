# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Trần Lê Minh Huy
- **MSSV:** 123001137
- **Tên đề tài Website:** TravelHi - Cổng Khám Phá & Trải Nghiệm Du Lịch Nhật Bản 2026 (Japan Travel)
- **Công cụ AI đã sử dụng:** Gemini / Antigravity AI Agent (Google DeepMind)
- **Đường dẫn GitHub Repository:** `https://github.com/minhhuy123001137/Huy_TranLeMinh_123001137`
- **Đường dẫn GitHub Pages Live Preview:** `https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/`

---

## 1. Yêu cầu ban đầu (System / Initial Prompt)

> **Prompt tổng quan ban đầu dùng để khởi tạo khung website:**
> 
> *"Bạn là một kĩ sư thiết kế web chuyên nghiệp. Hãy cùng tôi xây dựng một website quảng bá du lịch Nhật Bản hiện đại, đẳng cấp mang tên **TravelHi** (chủ đề: Khám phá vẻ đẹp bốn mùa hoa anh đào, núi Phú Sĩ, Tokyo, Kyoto, văn hóa truyền thống và ẩm thực Washoku xứ Phù Tang).*
> 
> *Yêu cầu kỹ thuật bắt buộc theo đúng chuẩn đề thi giữa kỳ môn Thiết kế Web:*
> 1. *Chuẩn Semantic HTML5 (Tối thiểu 5 thành phần): Website bắt buộc sử dụng đúng ngữ nghĩa các thẻ HTML5: `<header>` (chứa logo, navigation menu), `<nav>` (thanh điều hướng), `<main>` (khu vực nội dung chính), `<section>` hoặc `<article>` (chia các khối nội dung rõ ràng), `<footer>` (chân trang chứa thông tin liên hệ, copyright,...). Tuyệt đối không lạm dụng thẻ `<div>` vô nghĩa.*
> 2. *Kỹ thuật CSS & CSS Variables: Sử dụng CSS Variables (`:root { --primary-color: ...; }`) để quản lý phối màu, font chữ và spacing nhất quán cho toàn bộ trang. Áp dụng Layout hiện đại: CSS Flexbox hoặc CSS Grid để căn chỉnh responsive cơ bản và nâng cao.*
> 3. *Tương tác & Hiệu ứng (Libraries):*
>    - *Tích hợp Animate.css: Áp dụng hiệu ứng động cho các phần tử chính (Text tiêu đề, Hero Section, Button CTA,...).*
>    - *Tích hợp AOS (Animate On Scroll): Tạo hiệu ứng xuất hiện cuộn trang sinh động cho các section nội dung.*
>    - *Hiệu ứng `:hover`, `:focus` tự viết bằng CSS cho nút bấm và các thẻ bài viết (cards).*
> 4. *Kiến trúc mã nguồn: Giữ cấu trúc thuần HTML & CSS, không sử dụng file JavaScript phức tạp riêng biệt để tuân thủ quy chuẩn học phần Thiết Kế Web."*

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & Hệ thống CSS Variables

- **Prompt đã dùng:**
  > *"Hãy thiết lập file `index.html` với khung ngữ nghĩa HTML5 hoàn chỉnh cho website TravelHi và file `style.css` định nghĩa toàn bộ biến CSS trong `:root`. Đảm bảo các khối nội dung được phân chia bằng thẻ `<main>`, `<section>` có id rõ ràng, danh sách điểm đến và bài viết phải dùng thẻ `<article>` và `<figure>`, chân trang dùng `<footer>` và `<address>`."*

- **Kết quả AI tạo ra:**
  - AI đã tạo cấu trúc HTML5 cơ bản với các thẻ `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
  - Thiết lập bảng mã CSS Variables `:root` với `--primary-color: #bc002d` (đỏ cờ Nhật Hinomaru), `--primary-light`, `--sakura-pink`, `--font-main`, `--radius-md`, v.v.

- **Nhận xét & Tinh chỉnh của SV:**
  - **Vấn đề phát hiện:** Ban đầu AI vẫn dùng các thẻ `<div>` để bọc khối ảnh và thông tin thẻ bài viết (`<div class="card-image">`).
  - **Chỉ đạo tinh chỉnh:** Nhắc AI chuyển toàn bộ khối chứa hình ảnh sang thẻ `<figure>` và `<figcaption>`, chuyển cột thông tin liên hệ phụ ở phần Liên hệ sang thẻ `<aside>`, thêm thẻ `<time>` cho bài viết cẩm nang du lịch nhằm đạt chuẩn Semantic HTML5 cao nhất.

---

### Lần 2: Tích hợp thư viện Animate.css & AOS (Animate On Scroll)

- **Prompt đã dùng:**
  > *"Tích hợp link CDN của Animate.css v4 và AOS v2 vào `<head>`. Áp dụng các class `animate__animated animate__fadeInDown`, `animate__fadeInUp` cho Hero Badge, Hero Title, Hero Buttons. Thêm thuộc tính `data-aos="fade-up"` và `data-aos-delay` cho các card điểm đến, tour du lịch và khối giới thiệu. Thêm đoạn script khởi tạo AOS ngắn gọn trực tiếp trong HTML."*

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

## 3. Đánh giá cá nhân về quá trình Vibe Coding

### 1. AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?
- **Khởi tạo dữ liệu nội dung chuyên sâu:** AI đã giúp tổng hợp nhanh chóng hệ thống thông tin chân thực, phong phú về du lịch Nhật Bản (địa danh Tokyo, Kyoto, Osaka, Phú Sĩ, Hokkaido; ẩm thực bò Wagyu A5, Sushi; văn hóa trà đạo, tắm Onsen) mà không cần mất công tìm kiếm thủ công.
- **Viết cú pháp CSS đồng bộ:** Khai báo nhanh hệ thống CSS Variables trong `:root`, thiết lập layout Grid/Flexbox và các Media Queries responsive nhanh chóng, chính xác.
- **Tích hợp thư viện CDN chính xác:** Cung cấp link CDN và cú pháp tích hợp Animate.css và AOS chuẩn xác ngay từ đầu.

### 2. Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?
- **Đặt yêu cầu kỹ thuật rõ ràng ngay từ đầu:** Chỉ định rõ ràng các thẻ HTML5 cần dùng (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) để AI không sinh mã bằng các thẻ `<div>` vô nghĩa.
- **Làm chủ kiến thức nền tảng:** Nhận biết khi nào cần dùng pure CSS và khi nào AI đang viết thừa mã không cần thiết, từ đó ra lệnh tinh giản mã nguồn giúp trang web nhẹ, chuẩn quy cách chấm điểm của môn học.
- **Tư duy lặp (Iterative Refinement):** Tiếp cận từng bước: Dựng khung xương Semantic $\rightarrow$ Định hình màu sắc qua biến `:root` $\rightarrow$ Tích hợp thư viện hiệu ứng $\rightarrow$ Tối ưu responsive và tinh gọn mã nguồn.

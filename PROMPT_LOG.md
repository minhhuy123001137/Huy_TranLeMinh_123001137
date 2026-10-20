# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Trần Lê Minh Huy
- **MSSV:** 123001137
- **Tên đề tài Website:** TravelHi - Cổng Khám Phá & Đặt Tour Du Lịch Nhật Bản 2026 (Japan Travel)
- **Công cụ AI đã sử dụng:** Gemini / Antigravity AI Agent (Google DeepMind)
- **Đường dẫn GitHub Repository:** `https://github.com/minhhuy123001137/Huy_TranLeMinh_123001137`
- **Đường dẫn GitHub Pages Live Preview:** `https://minhhuy123001137.github.io/Huy_TranLeMinh_123001137/`

---

## 1. Yêu cầu ban đầu (System / Initial Prompt)

> **Prompt tổng quan ban đầu dùng để khởi tạo khung website:**
> 
> *"Bạn là một kĩ sư thiết kế web chuyên nghiệp (Senior Frontend Engineer & UI/UX Designer). Hãy đóng vai trò đối tác lập trình theo phương pháp Vibe Coding để giúp tôi xây dựng một website quảng bá du lịch Nhật Bản hiện đại, cao cấp có tên là **TravelHi** (chủ đề: Khám phá vẻ đẹp bốn mùa, văn hóa truyền thống, ẩm thực Washoku và các điểm đến biểu tượng của xứ Phù Tang).*
> 
> *Yêu cầu kỹ thuật bắt buộc:*
> 1. *Tuân thủ 100% chuẩn Semantic HTML5: Bắt buộc sử dụng `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`, `<address>`, tuyệt đối không lạm dụng thẻ `<div>` vô nghĩa.*
> 2. *CSS & CSS Variables: Thiết lập hệ thống biến `:root` quản lý toàn diện bảng màu (đỏ cờ Nhật Hinomaru `#bc002d`, hồng sakura, kem Washi), typography, spacing, box-shadow, border-radius; layout sử dụng CSS Grid và Flexbox hiện đại, đảm bảo responsive mượt mà từ mobile đến desktop.*
> 3. *Thư viện hiệu ứng: Tích hợp Animate.css cho Hero/CTA/Heading và AOS (Animate On Scroll) cho các khối nội dung cuộn trang; tự viết hiệu ứng `:hover`, `:focus` bằng CSS cho buttons, cards, links, inputs.*
> 4. *Nội dung thực tế, chuyên nghiệp: Hero section có quick search; Điểm đến nổi bật (Tokyo, Kyoto, Osaka, Phú Sĩ, Hokkaido, Nara); Trải nghiệm văn hóa (Trà đạo, Onsen, Kimono, Shinkansen); Tinh hoa ẩm thực; Lịch trình tour tiêu biểu; Cẩm nang du lịch; Đánh giá khách hàng; Form đăng ký tư vấn kèm Modal popup và Toast notification."*

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & Hệ thống CSS Variables

- **Prompt đã dùng:**
  > *"Hãy thiết lập file `index.html` với khung ngữ nghĩa HTML5 hoàn chỉnh cho website TravelHi và file `style.css` định nghĩa toàn bộ biến CSS trong `:root`. Đảm bảo các khối nội dung được phân chia bằng thẻ `<main>`, `<section>` có id rõ ràng, danh sách điểm đến và bài viết phải dùng thẻ `<article>` và `<figure>`, chân trang dùng `<footer>` và `<address>`."*

- **Kết quả AI tạo ra:**
  - AI đã tạo cấu trúc HTML5 cơ bản với các thẻ `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
  - Thiết lập bảng mã CSS Variables `:root` với `--primary-color`, `--font-main`, `--radius-md`, v.v.

- **Nhận xét & Tinh chỉnh của SV:**
  - **Vấn đề phát hiện:** Ban đầu AI vẫn có thói quen bọc ảnh và nội dung card trong các thẻ `<div class="card-image">` và `<div class="card-info">` thông thường, chưa khai thác triệt để chuẩn Semantic HTML5.
  - **Chỉ đạo tinh chỉnh:** Yêu cầu AI thay toàn bộ các khối chứa hình ảnh sang thẻ `<figure>` và nội dung mô tả tương ứng, đồng thời cột liên hệ phụ ở section Contact phải chuyển sang thẻ `<aside>` ngữ nghĩa. Thêm thẻ `<time>` chuẩn datetime cho các bài viết cẩm nang du lịch.

---

### Lần 2: Tích hợp thư viện Animate.css & AOS (Animate On Scroll)

- **Prompt đã dùng:**
  > *"Tích hợp link CDN của Animate.css v4 và AOS v2 vào `<head>` và trước thẻ đóng `</body>`. Áp dụng các class `animate__animated animate__fadeInDown`, `animate__fadeInUp` cho Hero Badge, Hero Title, Hero Buttons. Thêm thuộc tính `data-aos="fade-up"` và `data-aos-delay` cho các card điểm đến, tour du lịch và khối giới thiệu. Viết mã khởi tạo AOS trong `script.js`."*

- **Thách thức gặp phải:**
  - Sau khi thêm các thuộc tính `data-aos`, một số phần tử xuất hiện hiện tượng giật layout hoặc thanh cuộn ngang (horizontal scrollbar) xuất hiện do thuộc tính `transform: translateY(...)` của AOS vượt quá độ rộng của viewport màn hình. Ngoài ra, trên thiết bị di động, hiệu ứng lặp đi lặp lại khiến người dùng bị rối mắt khi cuộn lên xuống.

- **Cách sửa prompt (Debug prompt):**
  > *"Website đang xuất hiện thanh cuộn ngang ngoài ý muốn do hiệu ứng AOS tràn viền và hiệu ứng chạy lại liên tục khi cuộn. Hãy xử lý ngay bằng cách: thêm `overflow-x: hidden;` cho `html` và `body` trong `style.css`; cấu hình trong file `script.js` hàm `AOS.init({ once: true, offset: 80, easing: 'ease-out-cubic', duration: 800 })` để animation chỉ kích hoạt một lần duy nhất khi cuộn tới, tạo cảm giác mượt mà và tối ưu hiệu năng."*

- **Kết quả:** Lỗi cuộn ngang được khắc phục 100%, hiệu ứng cuộn trang mượt mà chuẩn UX.

---

### Lần 3: Thiết kế cấu trúc các Card Destination, Văn Hóa, Ẩm Thực và Tinh chỉnh Flexbox/Grid

- **Prompt đã dùng:**
  > *"Hãy thiết kế CSS Grid hiện đại cho: Grid điểm đến 3 cột, Grid ẩm thực 4 cột, Grid tour 3 cột và Grid trải nghiệm văn hóa. Tự viết hiệu ứng `:hover` phóng to nhẹ ảnh (`transform: scale(1.08)` trong vùng bọc `overflow: hidden`), đổ bóng nổi khối với màu đỏ Hinomaru mềm mại (`--shadow-hover`) và hiệu ứng chuyển màu cho tiêu đề card. Thêm hiệu ứng `:focus-visible` cho tất cả các nút và thẻ liên kết để đạt chuẩn Accessibility (a11y)."*

- **Thách thức gặp phải:**
  - Khi xem trên màn hình máy tính bảng (Tablet 768px - 992px), lưới 3 cột và 4 cột bị co rúm quá hẹp, hình ảnh bị méo tỷ lệ và văn bản bị tràn khỏi khung card.

- **Cách sửa prompt (Debug prompt):**
  > *"Hãy bổ sung Media Queries đáp ứng responsive toàn diện: ở màn hình `<= 1100px`, chuyển các grid 3 cột và 4 cột về dạng 2 cột (`grid-template-columns: repeat(2, 1fr)`); ở màn hình mobile `<= 680px`, tự động chuyển toàn bộ về dạng 1 cột (`grid-template-columns: 1fr`). Sử dụng `aspect-ratio` hoặc chiều cao cố định cho ảnh với `object-fit: cover` để ảnh luôn giữ tỷ lệ chuẩn không bị méo."*

- **Kết quả:** Giao diện hiển thị hoàn hảo trên cả 3 kích thước: Màn hình lớn (Desktop), Máy tính bảng (Tablet) và Điện thoại di động (Smartphone).

---

### Lần 4: Xử lý tương tác JavaScript (Menu Mobile, Modal Booking, Filter Mùa, Toast Thông Báo)

- **Prompt đã dùng:**
  > *"Viết mã nguồn `script.js` độc lập không dùng jQuery để xử lý các tính năng tương tác người dùng gồm:*
  > 1. *Toggle Hamburger menu trên mobile kèm hiệu ứng chuyển icon 3 gạch thành dấu X.*
  > 2. *Thanh lọc điểm đến (Filter tabs): khi click tab 'Tokyo & Kanto', 'Kyoto & Kansai', 'Hokkaido' thì chỉ hiển thị các card tương ứng với hiệu ứng fade-in mượt mà.*
  > 3. *Popup Modal Đặt Tour: khi click nút 'Đặt Ngay' ở bất kỳ tour nào, modal mở lên và tự động điền tên tour vào tiêu đề modal.*
  > 4. *Xử lý form submit và hiển thị Toast Notification thông báo thành công đẹp mắt mà không cần tải lại trang."*

- **Thách thức gặp phải:**
  - Khi mở Modal trên điện thoại, trang web phía sau vẫn cuộn được làm trải nghiệm người dùng bị mất tập trung; đồng thời khi ấn nút Esc trên bàn phím, modal không tự đóng.

- **Cách sửa prompt (Debug prompt):**
  > *"Hãy bổ sung vào hàm mở Modal: `document.body.style.overflow = 'hidden'` để khóa cuộn nền; khi đóng Modal thì khôi phục lại `document.body.style.overflow = ''`. Lắng nghe sự kiện bàn phím `keydown` kiểm tra `e.key === 'Escape'` để đóng modal tự nhiên; đồng thời cho phép đóng khi click ra ngoài vùng backdrop."*

- **Kết quả:** Modal hoạt động chuyên nghiệp, trải nghiệm người dùng (UX) rất mượt mà.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

### 1. AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?
- **Khởi tạo nội dung mẫu và bản sắc văn hóa:** Thay vì mất hàng giờ tự tìm kiếm địa danh, món ăn, lễ hội Nhật Bản, AI đã giúp tổng hợp nhanh chóng hệ thống dữ liệu chân thực và sống động (núi Phú Sĩ, bò Wagyu A5, trà đạo Chado, suối Onsen, chùa Sensoji, vé Shinkansen,...).
- **Viết cú pháp CSS đồng bộ:** Việc khai báo hệ thống biến `:root` và các lớp tiện ích Grid/Flexbox tốn rất ít thời gian, giúp tập trung vào tư duy thẩm mỹ và trải nghiệm người dùng thay vì gõ từng dòng CSS lặp lại.
- **Tích hợp các thư viện CDN chính xác:** Cung cấp link CDN và cấu trúc thuộc tính `data-aos`, các class Animate.css chuẩn xác mà không cần tra cứu tài liệu thủ công.

### 2. Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?
- **Ràng buộc tiêu chuẩn kỹ thuật ngay từ đầu:** Nếu không chỉ định rõ ràng `Semantic HTML5`, AI có xu hướng sinh mã bằng rất nhiều thẻ `<div>` lồng nhau. Việc đưa ra yêu cầu khắt khe về cấu trúc ngữ nghĩa ngay từ System Prompt giúp mã nguồn sạch đẹp và chuẩn SEO.
- **Tư duy lặp (Iterative Refinement):** Không nên kỳ vọng một prompt duy nhất tạo ra sản phẩm hoàn hảo 100%. Cách tiếp cận hiệu quả nhất là chia nhỏ bài toán: Dựng khung xương (HTML) $\rightarrow$ Định hình phong cách (CSS Variables & Layout) $\rightarrow$ Tích hợp hiệu ứng (Animate.css & AOS) $\rightarrow$ Hoàn thiện tương tác (JavaScript & Responsive).
- **Kiểm soát và làm chủ mã nguồn:** Sinh viên cần hiểu rõ bản chất của từng dòng code để phát hiện các lỗi tiềm ẩn (như lỗi tràn màn hình của AOS, lỗi cuộn nền của modal) và kịp thời ra lệnh prompt định hướng cho AI debug chính xác.

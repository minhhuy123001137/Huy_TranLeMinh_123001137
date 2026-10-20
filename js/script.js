/**
 * TRAVELHI - JAPAN TOURISM WEBSITE JAVASCRIPT
 * Sinh viên thực hiện: Trần Lê Minh Huy - MSSV: 123001137
 * Môn học: Thiết Kế Web - Khoa CNTT Trường Đại học Lạc Hồng
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. KHỞI TẠO THƯ VIỆN AOS (ANIMATE ON SCROLL)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 50
    });
  }

  // 2. HEADER SCROLL & ACTIVE LINK SPY
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy for navigation
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  // 3. BACK TO TOP CLICK HANDLER
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. MOBILE HAMBURGER MENU TOGGLE
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', !isExpanded);
      mobileBtn.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Đóng menu khi nhấp vào link điều hướng trên mobile
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        mainNav.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 5. BỘ LỌC ĐIỂM ĐẾN (DESTINATION FILTER TABS)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const destinationCards = document.querySelectorAll('.destination-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Đổi class active cho nút tab
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      destinationCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.classList.add('animate__animated', 'animate__fadeIn');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate__animated', 'animate__fadeIn');
        }
      });
    });
  });

  // 6. POPUP MODAL ĐẶT TOUR NHANH
  const bookingModal = document.getElementById('bookingModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalTourTitle = document.getElementById('modalTourTitle');
  const modalSelectedTour = document.getElementById('modalSelectedTour');
  const openModalButtons = document.querySelectorAll('.open-modal-btn');

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourName = btn.getAttribute('data-tour') || 'Tư vấn chuyến đi Nhật Bản';
      if (modalTourTitle) modalTourTitle.textContent = `Đặt Chuyến Đi: ${tourName}`;
      if (modalSelectedTour) modalSelectedTour.value = tourName;
      if (bookingModal) {
        bookingModal.classList.add('active');
        bookingModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Khóa cuộn trang khi mở modal
      }
    });
  });

  const closeModal = () => {
    if (bookingModal) {
      bookingModal.classList.remove('active');
      bookingModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal && bookingModal.classList.contains('active')) {
      closeModal();
    }
  });

});

// 7. HÀM HIỂN THỊ THÔNG BÁO TOAST THÀNH CÔNG
function showToast(title, message) {
  const toast = document.getElementById('toastNotice');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMsg');

  if (toast && toastTitle && toastMsg) {
    toastTitle.textContent = title;
    toastMsg.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

// 8. XỬ LÝ FORM TÌM KIẾM NHANH HERO
function handleQuickSearch() {
  const dest = document.getElementById('searchDest').value;
  const season = document.getElementById('searchSeason').value;

  const destSection = document.getElementById('destinations');
  if (destSection) {
    destSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Tự động kích hoạt tab lọc tương ứng
  const filterMap = {
    'tokyo': 'kanto',
    'kyoto': 'kansai',
    'osaka': 'kansai',
    'fuji': 'fuji',
    'hokkaido': 'hokkaido',
    'nara': 'kansai'
  };

  const targetCategory = filterMap[dest] || 'all';
  const targetBtn = document.querySelector(`.filter-btn[data-filter="${targetCategory}"]`);
  if (targetBtn) {
    targetBtn.click();
  }

  showToast('Kết Quả Tìm Kiếm', `Đang hiển thị các điểm đến phù hợp tại Nhật Bản.`);
}

// 9. XỬ LÝ GỬI FORM TƯ VẤN TOUR (SECTION CONTACT)
function handleConsultSubmit(form) {
  const name = form.querySelector('#fullName').value;
  const phone = form.querySelector('#phoneNumber').value;
  const dest = form.querySelector('#preferredDest').value;

  showToast('Đăng Ký Thành Công!', `Cảm ơn ${name}! Chuyên viên TravelHi sẽ liên hệ qua SĐT ${phone} để tư vấn lịch trình ${dest} sớm nhất.`);
  form.reset();
}

// 10. XỬ LÝ GỬI FORM MODAL ĐẶT TOUR
function handleModalBookingSubmit(form) {
  const name = form.querySelector('#modalName').value;
  const phone = form.querySelector('#modalPhone').value;
  const tour = form.querySelector('#modalSelectedTour').value || 'Tour Nhật Bản';

  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  showToast('Giữ Chỗ Thành Công!', `Chúc mừng ${name}! TravelHi đã tiếp nhận đăng ký ${tour}. Chúng tôi sẽ gọi xác nhận đến SĐT ${phone} trong 15 phút.`);
  form.reset();
}

// 11. XỬ LÝ GỬI FORM NHẬN BẢN TIN (NEWSLETTER)
function handleNewsletterSubmit(form) {
  const emailInput = form.querySelector('.newsletter-input');
  const email = emailInput ? emailInput.value : '';

  showToast('Đăng Ký Thành Công!', `Mã ưu đãi giảm 2.000.000₫ đã được gửi đến email ${email}.`);
  form.reset();
}

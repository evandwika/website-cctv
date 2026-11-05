/**
 * CAHAYA MUSTIKA INTERNESIA - Main JavaScript
 * Handles Theme Management, Navbar, Dropdown, Modals, Forms & WhatsApp Integration
 */

const CM_PHONE = '+62 811-330-1819';
const CM_WA_NUMBER = '628113301819';
const CM_COMPANY = 'PT Cahaya Mustika Internesia';

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Button
  const themeBtn = document.getElementById('theme');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
      showToast(`Tema diubah ke mode ${next === 'dark' ? 'Gelap' : 'Terang'}`);
    });
  }

  // Navbar Scroll Shadow
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (nav) {
      nav.classList.toggle('sc', window.scrollY > 8);
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile Menu & Burger Toggle
  const menu = document.getElementById('menu');
  const burger = document.getElementById('burger');
  const dd = document.querySelector('.dd');
  const ddBtn = document.querySelector('.dd-btn');

  const closeMenu = () => {
    if (menu) menu.classList.remove('open');
    if (burger) {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Buka menu');
    }
  };

  if (burger && menu) {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });
  }

  // Dropdown Menu Interactions
  if (dd && ddBtn) {
    ddBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle('open');
      ddBtn.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        ddBtn.setAttribute('aria-expanded', 'false');
      }
      if (menu && burger && !menu.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dd.classList.remove('open');
        ddBtn.setAttribute('aria-expanded', 'false');
        closeMenu();
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });

  // Active Navigation Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.menu > a, .dd-btn');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
  if (currentPath.includes('product')) {
    if (dd) dd.classList.add('active');
    if (ddBtn) ddBtn.classList.add('active');
  }

  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item, .faq-i');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question, .faq-q');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active') || item.classList.contains('open');
        faqItems.forEach(other => {
          other.classList.remove('active');
          other.classList.remove('open');
          const ob = other.querySelector('.faq-question, .faq-q');
          if (ob) ob.setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
          item.classList.add('active');
          item.classList.add('open');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // Global Quote / Consultation Modal
  setupConsultationModal();

  // Contact Form Handling -> Redirect to WhatsApp +62 811-330-1819
  const contactForm = document.getElementById('mainContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inputName')?.value.trim() || 'Pelanggan';
      const phone = document.getElementById('inputPhone')?.value.trim() || '-';
      const email = document.getElementById('inputEmail')?.value.trim() || '-';
      const city = document.getElementById('inputCity')?.value.trim() || '-';
      const service = document.getElementById('selectService')?.value || 'Instalasi CCTV';
      const count = document.getElementById('selectCamCount')?.value || '-';
      const notes = document.getElementById('inputNotes')?.value.trim() || '-';

      const msg = `Halo Cahaya Mustika Internesia, saya ingin berkonsultasi mengenai solusi CCTV.\n\n` +
                  `Nama: ${name}\n` +
                  `Nomor HP/WA: ${phone}\n` +
                  `Email: ${email}\n` +
                  `Lokasi: ${city}\n` +
                  `Jenis Properti: ${service}\n` +
                  `Estimasi Titik Kamera: ${count}\n` +
                  `Catatan: ${notes}`;

      const waUrl = `https://wa.me/${CM_WA_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank', 'noopener');
      showToast(`Terima kasih Bapak/Ibu ${name}! Membuka WhatsApp konsultan kami...`, 4000);
      contactForm.reset();
    });
  }

  // Update Year in footer
  document.querySelectorAll('#yr').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});

// Toast Notification System
function showToast(message, duration = 3500) {
  let toast = document.querySelector('.toast-box');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-box';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Modal System
function setupConsultationModal() {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const openBtns = document.querySelectorAll('[data-open-modal="quoteModal"]');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const packageName = btn.getAttribute('data-package') || '';
      if (packageName) {
        const packageInput = modal.querySelector('#modalPackageInput');
        if (packageInput) packageInput.value = packageName;
      }
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  const modalForm = modal.querySelector('#modalQuoteForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = modalForm.querySelector('input[type="text"]')?.value.trim() || 'Pelanggan';
      const phone = modalForm.querySelector('input[type="tel"]')?.value.trim() || '-';
      const pkg = modalForm.querySelector('#modalPackageInput')?.value || 'Konsultasi CCTV';
      const notes = modalForm.querySelector('textarea')?.value.trim() || '-';

      const msg = `Halo Cahaya Mustika Internesia, saya ingin berkonsultasi mengenai paket CCTV.\n\n` +
                  `Nama: ${name}\n` +
                  `Nomor HP/WA: ${phone}\n` +
                  `Paket Pilihan: ${pkg}\n` +
                  `Catatan: ${notes}`;

      modal.classList.remove('active');
      const waUrl = `https://wa.me/${CM_WA_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank', 'noopener');
      showToast('Permintaan survei & konsultasi berhasil terkirim!');
      modalForm.reset();
    });
  }
}

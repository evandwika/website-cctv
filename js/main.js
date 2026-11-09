/**
 * CAHAYA MUSTIKA INTERNESIA - Main JavaScript
 * Spesialis Sistem CCTV Tambang, Pengawasan Pit, Stockpile & Alat Berat
 */

const CM_PHONE = '+62 811-330-1819';
const CM_WA_NUMBER = '628113301819';
const CM_COMPANY = 'PT Cahaya Mustika Internesia';

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar Scroll
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (nav) {
      nav.classList.toggle('sc', window.scrollY > 10);
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

  // Dropdown Menu
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
  const navLinks = document.querySelectorAll('.menu > a, .dd-list a');
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

  // Contact Form Handling (Redirect to WhatsApp)
  const contactForm = document.getElementById('mainContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('inputCompany')?.value.trim() || '-';
      const name = document.getElementById('inputName')?.value.trim() || 'Pelanggan';
      const phone = document.getElementById('inputPhone')?.value.trim() || '-';
      const email = document.getElementById('inputEmail')?.value.trim() || '-';
      const siteLoc = document.getElementById('inputSiteLocation')?.value.trim() || '-';
      const commodity = document.getElementById('selectCommodity')?.value || 'Batubara / Nikel';
      const need = document.getElementById('selectNeed')?.value || 'CCTV Pit Tambang / Solar Tower';
      const notes = document.getElementById('inputNotes')?.value.trim() || '-';

      const msg = `Halo PT Cahaya Mustika Internesia (Divisi CCTV Tambang),\n` +
                  `Saya ingin konsultasi & permintaan survey site pengawasan tambang:\n\n` +
                  `• Perusahaan: ${company}\n` +
                  `• Nama PIC: ${name}\n` +
                  `• No. WhatsApp: ${phone}\n` +
                  `• Email: ${email}\n` +
                  `• Lokasi Site: ${siteLoc}\n` +
                  `• Komoditas Tambang: ${commodity}\n` +
                  `• Kebutuhan Sistem: ${need}\n` +
                  `• Catatan Khusus: ${notes}\n\n` +
                  `Mohon info jadwal diskusi teknis & estimasi penawarannya. Terima kasih.`;

      const waUrl = `https://wa.me/${CM_WA_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank', 'noopener');
      showToast(`Terima kasih Bapak/Ibu ${name}! Menghubungi konsultan CCTV Tambang kami...`, 4000);
      contactForm.reset();
    });
  }

  // Update Year in footer
  document.querySelectorAll('#yr').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});

// Toast Notification
function showToast(message, duration = 3500) {
  let toast = document.querySelector('.toast-box');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-box';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2.2">
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

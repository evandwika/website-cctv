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

  // Portfolio Lightbox Modal
  const initPortfolioModal = () => {
    const portCards = document.querySelectorAll('.port-card');
    if (!portCards.length) return;

    let modal = document.querySelector('.port-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'port-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Pratinjau Dokumentasi Portofolio');
      modal.innerHTML = `
        <div class="port-modal-dialog">
          <div class="port-modal-head">
            <span class="port-modal-badge" id="portModalCategory">Dokumentasi Proyek</span>
            <button class="port-modal-close" aria-label="Tutup pratinjau" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="port-modal-media">
            <img src="" alt="" id="portModalImg">
          </div>
          <div class="port-modal-body">
            <h3 class="port-modal-title" id="portModalTitle">-</h3>
            <p class="port-modal-desc" id="portModalDesc">-</p>
            <div class="port-modal-actions">
              <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-orange" id="portModalWA">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Konsultasikan Solusi Ini
              </a>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    const modalCategory = modal.querySelector('#portModalCategory');
    const modalImg = modal.querySelector('#portModalImg');
    const modalTitle = modal.querySelector('#portModalTitle');
    const modalDesc = modal.querySelector('#portModalDesc');
    const modalWA = modal.querySelector('#portModalWA');
    const closeBtn = modal.querySelector('.port-modal-close');

    let lastFocusedElement = null;

    const openModal = (card) => {
      lastFocusedElement = document.activeElement;
      const img = card.querySelector('.port-image, img');
      const cat = card.querySelector('.port-cat, .port-badge, .port-tag');
      const title = card.querySelector('.port-title, h3');
      const desc = card.querySelector('.port-desc, p');

      const titleText = title ? title.textContent.trim() : 'Solusi CCTV Pertambangan';
      const descText = desc ? desc.textContent.trim() : '';
      const catText = cat ? cat.textContent.trim() : 'Dokumentasi Proyek';
      const imgSrc = img ? img.getAttribute('src') : '';
      const imgAlt = img ? img.getAttribute('alt') : titleText;

      modalCategory.textContent = catText;
      modalTitle.textContent = titleText;
      modalDesc.textContent = descText;
      modalImg.src = imgSrc;
      modalImg.alt = imgAlt;

      const waMsg = `Halo PT Cahaya Mustika Internesia,\nSaya melihat dokumentasi portofolio: "${titleText}" (${catText}).\nSaya ingin konsultasi penerapan sistem serupa untuk area operasional tambang/industri kami.`;
      modalWA.href = `https://wa.me/${CM_WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    };

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    };

    portCards.forEach(card => {
      card.addEventListener('click', () => openModal(card));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card);
        }
      });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  };

  initPortfolioModal();
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

/**
 * VIGILAX SECURE - Product Catalog & Filtering Logic per PDF Blueprint
 */

const cctvProducts = [
  {
    id: 'prod-1',
    name: 'Vigilax Ultra 4K AI Bullet Camera',
    category: 'bullet',
    categoryName: 'Bullet Camera',
    brand: 'vigilax',
    brandName: 'Vigilax',
    res: '4K UHD (8MP)',
    price: 'Rp 1.450.000',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
    badge: 'AI Flagship',
    specs: [
      'Sensor Sony Starvis 8MP 4K Ultra-HD (3840 x 2160)',
      'Smart AcuSense Human & Vehicle AI Detection',
      'Infrared Smart IR 50M + DarkFighter Low Light',
      'IP67 Weatherproof Logam Tahan Cuaca Ekstrem',
      'Power over Ethernet (PoE) Support'
    ],
    desc: 'Kamera pengawas outdoor resolusi 4K dengan kecerdasan buatan (AI) untuk menyaring alarm palsu daun bergoyang/hewan, mendeteksi manusia dan kendaraan dengan akurasi 99%.'
  },
  {
    id: 'prod-2',
    name: 'Hikvision ColorVu Dome 5MP Audio',
    category: 'dome',
    categoryName: 'Dome Camera',
    brand: 'hikvision',
    brandName: 'Hikvision',
    res: '5MP QHD',
    price: 'Rp 980.000',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=600&q=80',
    badge: 'ColorVu 24/7',
    specs: [
      'Rekaman Berwarna 24 Jam Penuh dalam Gelap Gulita',
      'Built-in Microphone Audio 2 Arah Jernih',
      'Lensa Fixed 2.8mm Sudut Pandang Lebar 110°',
      'Desain Kubah Vandal-proof IK10 Tahan Benturan',
      'Slot MicroSD onboard up to 256GB'
    ],
    desc: 'Kamera dome elegan untuk kantor, perbankan, dan interior rumah mewah. Menyajikan gambar berwarna terang benderang meskipun ruangan mati lampu total tanpa perlu lampu tambahan.'
  },
  {
    id: 'prod-3',
    name: 'Dahua Apex 360° PTZ Speed Dome 4K',
    category: 'ptz',
    categoryName: 'PTZ Camera',
    brand: 'dahua',
    brandName: 'Dahua',
    res: '4K UHD (8MP)',
    price: 'Rp 4.750.000',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
    badge: 'Auto-Tracking',
    specs: [
      '360° Pan Endless, 90° Tilt & 25x Optical Zoom',
      'Auto-Tracking AI Mengikuti Target Bergerak Otomatis',
      'Laser IR Night Vision Jarak Jangkau 150 Meter',
      'Active Defense: Lampu Strobo Merah Biru & Sirine',
      'IP66 Weatherproof Logam Padat Heavy Duty'
    ],
    desc: 'Sistem pengawas komprehensif untuk area perkebunan, pergudangan luas, dermaga, dan perbatasan. Kamera berputar otomatis mengikuti pergerakan penyusup dengan zoom optik presisi.'
  },
  {
    id: 'prod-4',
    name: 'Uniview SolarGuard 4G LTE Dual-Lens',
    category: 'ip',
    categoryName: 'IP Camera',
    brand: 'uniview',
    brandName: 'Uniview',
    res: 'Dual 4MP + 4MP',
    price: 'Rp 2.890.000',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80',
    badge: 'Solar 4G Off-Grid',
    specs: [
      'Panel Surya Monocrystalline 20W + Baterai 20.000mAh',
      'Koneksi Kartu SIM 4G LTE (Telkomsel, Indosat, XL)',
      'Dual Lens: 1 Lensa Tetap Lebar + 1 Lensa PTZ Bergerak',
      'Tahan Operasional Non-stop hingga 7 Hari Cuaca Hujan',
      'PIR Sensor Hemat Energi & Cloud Storage'
    ],
    desc: 'Solusi terbaik untuk proyek konstruksi, perkebunan sawit, tambang, tambak udang, dan vila terpencil yang belum teraliri jaringan kabel PLN maupun internet kabel.'
  },
  {
    id: 'prod-5',
    name: 'Hikvision Turbo HD Analog Bullet 5MP',
    category: 'analog',
    categoryName: 'Analog Camera',
    brand: 'hikvision',
    brandName: 'Hikvision',
    res: '5MP HD',
    price: 'Rp 480.000',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
    badge: 'Ekonomis Handal',
    specs: [
      'Resolusi 5MP High Definition over Coaxial Cable',
      'EXIR 2.0 Smart IR Jarak Jangkau 30 Meter',
      'IP67 Logam Tahan Air & Debu Outdoor',
      'Mendukung Switch 4 Sinyal (TVI / AHD / CVI / CVBS)',
      'Cocok untuk Upgrade CCTV Kabel Lama'
    ],
    desc: 'Pilihan hemat dan handal untuk meningkatkan kualitas rekaman CCTV analog kabel lama tanpa perlu membongkar seluruh jaringan kabel yang sudah tertanam di dinding.'
  },
  {
    id: 'prod-6',
    name: 'Dahua Core NVR 16-Channel 4K AI PoE',
    category: 'nvr',
    categoryName: 'NVR dan DVR',
    brand: 'dahua',
    brandName: 'Dahua',
    res: '4K Playback',
    price: 'Rp 3.850.000',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    badge: '16 PoE Ports',
    specs: [
      '16 Port PoE Langsung Pasang (Plug and Play)',
      'Support 2 Slot SATA HDD hingga 2x 16TB (Total 32TB)',
      'H.265+ Smart Codec Menghemat Bandwidth & Storage 75%',
      'AI Smart Search: Cari Rekaman Wajah/Plat dalam Detik',
      'Aplikasi Monitoring Android & iOS Gratis Seumur Hidup'
    ],
    desc: 'Perekam jaringan mandiri NVR tangguh dengan dukungan 16 kamera resolusi 4K secara serentak. Tidak membebani jaringan WiFi dan aman dari gangguan peretasan.'
  },
  {
    id: 'prod-7',
    name: 'Seagate SkyHawk Surveillance HDD 8TB',
    category: 'accessories',
    categoryName: 'CCTV Accessories',
    brand: 'vigilax',
    brandName: 'Seagate',
    res: 'Custom Storage',
    price: 'Rp 2.950.000',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80',
    badge: 'Heavy Duty 24/7',
    specs: [
      'Desain Khusus Operasional Rekam Nonstop 24/7',
      'ImagePerfect Firmware Mencegah Frame Dropping',
      'Support hingga 64 Kamera HD Serentak',
      'Rotational Vibration (RV) Sensors',
      'Garansi Resmi Distributor 3 Tahun Penggantian Baru'
    ],
    desc: 'Hard disk resmi khusus sistem CCTV dengan keandalan workload 3x lebih tinggi dibanding hard disk PC biasa. Tahan panas dan putaran konstan bertahun-tahun.'
  },
  {
    id: 'prod-8',
    name: 'Vigilax Pro Conduit Cable Box Kit 100M',
    category: 'accessories',
    categoryName: 'CCTV Accessories',
    brand: 'vigilax',
    brandName: 'Vigilax',
    res: 'Kabel & Pipa',
    price: 'Rp 850.000',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    badge: 'Instalasi Kit',
    specs: [
      '100 Meter Kabel UTP Cat6 Pure Copper 100%',
      'Junction Box Waterproof IP66 dengan Karet Seal',
      'Pipa Conduit High Impact PVC 20mm Putih Bersih',
      'Konektor RJ45 Cat6 Gold Plated Anti Korosi',
      'Klem Pipa & Fisher Baut Komplit'
    ],
    desc: 'Paket material instalasi kabel berstandar enterprise untuk memastikan seluruh jalur kabel terlindungi dari sengatan matahari dan gigitan hewan pengerat.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const productContainer = document.getElementById('productGridContainer');
  const searchInput = document.getElementById('searchProductInput');
  const catFilterBtns = document.querySelectorAll('.cat-filter-btn');
  const brandFilterBtns = document.querySelectorAll('.brand-filter-btn');

  if (!productContainer) return;

  // Read URL query params for initial category
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('cat') || 'all';
  let activeBrand = 'all';
  let searchTerm = '';

  // Synchronize category button state
  catFilterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === activeCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  function renderProducts() {
    const filtered = cctvProducts.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchBrand = activeBrand === 'all' || item.brand === activeBrand;
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.res.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.brandName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchBrand && matchSearch;
    });

    if (filtered.length === 0) {
      productContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; color: var(--text-muted);">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="margin-bottom: 0.5rem;">Tidak Ada Produk yang Cocok</h3>
          <p>Coba gunakan kata kunci pencarian lain atau klik tombol Semua.</p>
        </div>
      `;
      return;
    }

    productContainer.innerHTML = filtered.map(item => `
      <div class="product-card" data-id="${item.id}">
        <div class="product-image-box">
          <span class="product-badge-overlay">${item.badge}</span>
          <span class="product-res-tag">${item.res}</span>
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="product-body">
          <div class="product-meta-row">
            <span class="product-category">${item.categoryName}</span>
            <span class="product-brand-tag">${item.brandName}</span>
          </div>
          <h3 class="product-title">${item.name}</h3>
          <div class="product-specs-list">
            ${item.specs.slice(0, 3).map(s => `
              <div class="spec-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${s}</span>
              </div>
            `).join('')}
          </div>
          <div class="product-footer product-footer-nopricing">
            <a href="product-detail.html?id=${item.id}" class="btn btn-primary btn-sm btn-full-width">
              Detail Produk
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Category Filter Buttons
  catFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  // Brand Filter Buttons
  brandFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      brandFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeBrand = btn.getAttribute('data-brand');
      renderProducts();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderProducts();
    });
  }

  // Initial render
  renderProducts();
});

/**
 * CAHAYA MUSTIKA INTERNESIA - Mining CCTV & Industrial Surveillance Catalog
 * Solusi CCTV Khusus Area Pertambangan, Pit Terbuka, Stockpile, & Alat Berat
 */

const cctvProducts = [
  {
    id: 'prod-1',
    name: 'CMI MineGuard Explosion-Proof 4K PTZ Camera',
    category: 'explosion-proof',
    categoryName: 'Kamera CCTV Explosion-Proof',
    brand: 'cahayamustika',
    brandName: 'CMI Mining',
    res: '4K Ultra-HD (8MP)',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80',
    badge: 'ATEX / IECEx Zone 1',
    specs: [
      'Housing Stainless Steel 316L Anti-Korosi & Tahan Gas Metana',
      'Sertifikasi Resmi ATEX / IECEx Zone 1 & Zone 2 Anti-Ledakan',
      '30x Optical Zoom dengan Wiper Otomatis Pembersih Lumpur & Debu',
      'Proteksi Cuaca & Tekanan Air Ekstrem Rating IP68',
      'Infrared Laser Night Vision Jangkauan 150 Meter'
    ],
    desc: 'Kamera pengawas PTZ bersertifikasi explosion-proof khusus area berbahaya pertambangan bawah tanah (underground), gudang bahan peledak (handak), refinery, dan tangki bahan bakar tambang.'
  },
  {
    id: 'prod-2',
    name: 'CMI SolarPit Mobile Solar CCTV Tower 4G',
    category: 'solar-tower',
    categoryName: 'Solar CCTV Tower',
    brand: 'cahayamustika',
    brandName: 'CMI Mining',
    res: '4K Dual Lens PTZ',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    badge: '100% Off-Grid Solar',
    specs: [
      'Panel Surya Monokristalin 200W Efisiensi Tinggi',
      'Baterai Lithium LiFePO4 80Ah Bertahan 3-4 Hari Cuaca Mendung',
      'Koneksi Mandiri 4G/5G LTE Dual SIM Auto-Failover',
      'Tiang Teleskopik Galvanis Heavy-Duty Mudah Dipindahkan di Pit',
      'AI Human & Vehicle Detection dengan Smart Strobe Alarm'
    ],
    desc: 'Tower pengawas CCTV mandiri bertenaga surya 100% off-grid tanpa kabel PLN. Didesain untuk pit aktif penambangan terbuka, disposal area, dan persimpangan hauling road yang sering berpindah lokasi.'
  },
  {
    id: 'prod-3',
    name: 'Hikvision Industrial Dual-Spectrum AI Thermal & Optical Bullet',
    category: 'thermal',
    categoryName: 'Kamera Thermal dan AI',
    brand: 'hikvision',
    brandName: 'Hikvision Mining',
    res: 'Dual 4MP + Thermal Sensor',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    badge: 'Early Fire Hotspot Alert',
    specs: [
      'Deteksi Panas Spontan (Spontaneous Combustion) Stockpile Batubara',
      'Sensor Thermal Resolusi Tinggi Menembus Debu Tebal & Asap',
      'Akurasi Pengukuran Suhu Titik Api ±2°C Real-Time',
      'Casing Tahan Suhu Ekstrem Tambang -40°C hingga +70°C',
      'Peringatan Dini Otomatis ke Control Room Sebelum Terjadi Kebakaran'
    ],
    desc: 'Kamera termal dual-spektrum untuk memantau tumpukan batubara di stockpile dan jalur conveyor tambang. Mampu mendeteksi kenaikan suhu internal batubara sebelum timbul lidah api secara preventif.'
  },
  {
    id: 'prod-4',
    name: 'Dahua Mining Heavy Fleet AI Camera Kit (Haul Truck & Excavator)',
    category: 'fleet-ai',
    categoryName: 'Kamera AI Alat Berat',
    brand: 'dahua',
    brandName: 'Dahua Heavy',
    res: 'Full HD 1080p Anti-Shock',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    badge: 'MIL-STD-810G & IP69K',
    specs: [
      'Standar Uji Getaran Militer MIL-STD-810G Tahan Guncangan Berat',
      'IP69K Tahan Semprotan Air Cuci Bertekanan Tinggi Steam Washdown',
      'AI Blindspot Radar Sensor untuk Deteksi Pekerja di Sekitar Dump Truck',
      'Driver Safety System (DSM): Deteksi Kantuk & Pengemudi Mengantuk',
      'Mobile DVR dengan GPS Tracking & Siaran Langsung via 4G'
    ],
    desc: 'Sistem kamera keselamatan kabin dan blindspot 360° untuk dump truck raksasa (CAT, Komatsu, Volvo) dan excavator tambang. Mengurangi fatalitas kecelakaan kerja tabrakan di jalur hauling tambang.'
  },
  {
    id: 'prod-5',
    name: 'CMI PitPerimeter 50x Ultra Long-Range Laser PTZ 3KM',
    category: 'long-range',
    categoryName: 'Kamera PTZ untuk Area Tambang',
    brand: 'cahayamustika',
    brandName: 'CMI Mining',
    res: '4K Ultra-HD 50x Zoom',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
    badge: 'Night Vision 3.000 Meter',
    specs: [
      '50x Optical Super Telephoto Zoom Jangkauan Jauh',
      'Laser Illuminator Mengawasi Area Gelap Total hingga 3 Kilometer',
      'Optical Image Stabilization (OIS) Mengatasi Goyangan Tiang Tower',
      'Pemantauan Pergerakan Lereng Tambang (Slope Stability Monitoring)',
      'Bodi Aluminium Alloy Heavy-Duty dengan Pelindung Penangkal Petir'
    ],
    desc: 'Kamera pantau perimeter berjarak ultra-jauh untuk mengawasi batas konsesi tambang (IUP), pergerakan dinding galian pit tambang (slope failure), dan pencegahan penambang ilegal dari menara pengawas.'
  },
  {
    id: 'prod-6',
    name: 'CMI ConveyorGuard Heavy-Duty Dustproof Camera',
    category: 'thermal',
    categoryName: 'Kamera Thermal dan AI',
    brand: 'cahayamustika',
    brandName: 'CMI Mining',
    res: '5MP QHD Low-Light',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    badge: 'Anti-Vibration Conveyor',
    specs: [
      'Desain Khusus Dudukan Bracket Anti-Getar Getaran Motor Konveyor',
      'Kaca Lensa Anti-Debu Statis dengan Aliran Udara Air-Purge',
      'Sensor AI Deteksi Sobekan & Penumpukan Material pada Ban Berjalan',
      'Operasional Non-Stop 24 Jam di Lingkungan Debu Batubara & Nikel',
      'Integrasi Relai Alarm ke PLC Konveyor untuk Emergency Stop Otomatis'
    ],
    desc: 'Kamera pengawas jalur ban berjalan (conveyor belt) dan transfer chute material tambang. Memantau kelancaran aliran batubara/bijih nikel menuju crusher dan dermaga tongkang secara real-time.'
  },
  {
    id: 'prod-7',
    name: 'CMI AirBridge Mining Wireless Microwave PTP 15KM',
    category: 'transmisi',
    categoryName: 'Sistem Wireless CCTV',
    brand: 'cahayamustika',
    brandName: 'CMI Mining',
    res: 'Throughput 500+ Mbps',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    badge: 'Jangkauan 15 KM Line-of-Sight',
    specs: [
      'Transmisi Nirkabel Frekuensi 5GHz Tahan Interferensi Cuaca Tambang',
      'Jangkauan Transmisi Point-to-Point (PTP) hingga Jarak 15-20 KM',
      'Throughput Bandwidth 500 Mbps Mampu Menghantarkan 30+ Kamera 4K',
      'Enkripsi Data Standar Militer AES-256 Anti-Penyadapan',
      'Housing Outdoor Tahan Petir & Angin Kencang Kecepatan 200 km/jam'
    ],
    desc: 'Antena radio jembatan nirkabel microwave untuk menyambungkan transmisi video CCTV dari pit tambang, pos satpam, dan dermaga jetty terpencil ke Central Control Room (CCR) tanpa kabel fiber optic.'
  },
  {
    id: 'prod-8',
    name: 'Hikvision Ruggedized Mining Central NVR 64-Channel RAID',
    category: 'transmisi',
    categoryName: 'Perangkat Pendukung CCTV',
    brand: 'hikvision',
    brandName: 'Hikvision Mining',
    res: '64-Channel 4K H.265+',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    badge: 'Redundansi RAID 0/1/5/10',
    specs: [
      'Dukungan Perekaman hingga 64 Titik Kamera CCTV Tambang 4K',
      'Power Supply Ganda (Dual Redundant PSU) Tahan Fluktuasi Genset',
      'Sistem Pendingin Filter Debu Industri Khusus Ruang Server Site',
      'Konfigurasi RAID 5/6/10 Mencegah Data Hilang saat Hard Disk Rusak',
      'Integrasi Video Wall Multi-Layar untuk Central Control Room'
    ],
    desc: 'Perekam data surveillance kelas enterprise untuk ruang kendali pusat (Central Control Room / Dispatch) site tambang. Tahan terhadap ketidakstabilan pasokan listrik genset site dan debu tambang.'
  }
];

// Document ready logic
document.addEventListener('DOMContentLoaded', () => {
  const productContainer = document.getElementById('productGridContainer');
  const catSelect = document.getElementById('categoryFilter');
  const brandSelect = document.getElementById('brandFilter');
  const searchInput = document.getElementById('productSearchInput');
  const catFilterBtns = document.querySelectorAll('.cat-pill');
  const brandFilterBtns = document.querySelectorAll('.brand-pill');

  if (!productContainer) return;

  // Read URL Params for pre-filtering
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('cat') || 'all';
  let activeBrand = urlParams.get('brand') || 'all';
  let searchTerm = '';

  // Synchronize dropdowns
  if (catSelect) {
    if (Array.from(catSelect.options).some(o => o.value === activeCategory)) {
      catSelect.value = activeCategory;
    } else {
      activeCategory = 'all';
      catSelect.value = 'all';
    }
  }

  if (brandSelect) {
    if (Array.from(brandSelect.options).some(o => o.value === activeBrand)) {
      brandSelect.value = activeBrand;
    } else {
      activeBrand = 'all';
      brandSelect.value = 'all';
    }
  }

  // Synchronize filter buttons if present
  catFilterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === activeCategory);
  });
  brandFilterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-brand') === activeBrand);
  });

  function renderProducts() {
    const filtered = cctvProducts.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchBrand = activeBrand === 'all' || item.brand === activeBrand;
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.res.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchBrand && matchSearch;
    });

    if (filtered.length === 0) {
      productContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; color: var(--mute);">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="font-family: var(--font-heading); margin-bottom: 0.5rem; color: var(--ink);">Tidak Ada Perangkat yang Sesuai</h3>
          <p style="color: var(--mute);">Coba ubah pilihan filter kategori atau kata kunci pencarian perangkat tambang Anda.</p>
        </div>
      `;
      return;
    }

    productContainer.innerHTML = filtered.map(item => `
      <div class="product-card" data-id="${item.id}">
        <div class="product-image-box">
          ${item.badge ? `<span class="product-badge-overlay">${item.badge}</span>` : ''}
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="product-body">
          <span class="product-mining-tag">${item.categoryName}</span>
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
          <div class="product-footer">
            <a href="product-detail.html?id=${item.id}" class="btn btn-p btn-sm" style="width: 100%; text-align: center;">Lihat Produk</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Category Dropdown Listener
  if (catSelect) {
    catSelect.addEventListener('change', (e) => {
      activeCategory = e.target.value;
      catFilterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === activeCategory);
      });
      renderProducts();
    });
  }

  // Brand Dropdown Listener
  if (brandSelect) {
    brandSelect.addEventListener('change', (e) => {
      activeBrand = e.target.value;
      brandFilterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-brand') === activeBrand);
      });
      renderProducts();
    });
  }

  // Category Filter Buttons
  catFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      if (catSelect) catSelect.value = activeCategory;
      renderProducts();
    });
  });

  // Brand Filter Buttons
  brandFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      brandFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeBrand = btn.getAttribute('data-brand');
      if (brandSelect) brandSelect.value = activeBrand;
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

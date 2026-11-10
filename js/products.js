/**
 * CAHAYA MUSTIKA INTERNESIA - Katalog CCTV Tambang & Industrial
 * Partner Resmi Solusi Surveilans & Kamera CCTV Hikvision Industrial
 * Spesifikasi Teknis Resmi Sesuai Datasheet & Katalog Hikvision Indonesia (hikvision.com/id)
 */

const cctvProducts = [
  // ==========================================
  // 1. CCTV IP Camera Outdoor (3 Model)
  // ==========================================
  {
    id: 'ds-2cd2t43g2-2i',
    name: 'Hikvision DS-2CD2T43G2-2I 4 MP AcuSense Fixed Bullet Camera',
    category: 'ip-camera',
    categoryName: 'CCTV IP Camera Outdoor',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP (2688 × 1520) @ 30 fps',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Sensor 1/3″ Progressive Scan CMOS Resolusi 4 MP (2688 × 1520 piksel @ 30 fps)',
      'Teknologi AcuSense Deep Learning: Klasifikasi Akurat Manusia & Kendaraan Mengurangi False Alarm',
      '120 dB True WDR (Wide Dynamic Range) & 3D Digital Noise Reduction (DNR) Mengatasi Silau Backlight',
      'Smart IR Night Vision Jangkauan hingga 60 Meter (Panjang Gelombang 850 nm) dengan Day/Night Auto-Switch',
      'Casing Logam Aluminium Kokoh Bersertifikasi IP67 Tahan Debu Tambang & Hujan Badai (-30 °C s/d 60 °C)'
    ],
    desc: 'Kamera jaringan fixed bullet outdoor 4 MP dari lini Hikvision EasyIP 4.0 AcuSense. Menggunakan sensor 1/3″ Progressive Scan CMOS yang menghasilkan citra resolusi tinggi 2688 × 1520 pada 30 fps. Dilengkapi algoritma kecerdasan buatan Deep Learning untuk mendeteksi serta mengklasifikasikan target manusia dan kendaraan secara real-time, secara efektif mengabaikan pemicu alarm palsu seperti dedaunan tertiup angin, debu tambang berterbangan, atau hewan liar. Dilindungi casing logam berstandar IP67 yang tangguh untuk pos pantau keamanan, workshop alat berat, dan perimeter tambang terbuka.',
    detailedSpecs: {
      'Sensor & Kamera': {
        'Sensor Gambar': '1/3″ Progressive Scan CMOS',
        'Resolusi Maksimal': '2688 × 1520 (4 Megapixel)',
        'Kecepatan Shutter': '1/3 s hingga 1/100,000 s',
        'Sensitivitas / Min. Illumination': 'Color: 0.005 Lux @ (F1.6, AGC ON), B/W: 0 Lux dengan IR aktif',
        'Day & Night': 'IR Cut Filter otomatis dengan auto switch',
        'Pengaturan Sudut (Bracket)': 'Pan: 0° s/d 360°, Tilt: 0° s/d 90°, Rotasi: 0° s/d 360°'
      },
      'Lensa & Sudut Pandang': {
        'Tipe Lensa': 'Fixed Focal Lens (Pilihan 2.8 mm, 4 mm, 6 mm)',
        'Aperture': 'F1.6',
        'Sudut Pandang (FOV)': '2.8 mm: Horisontal 103°, Vertikal 55°, Diagonal 122° | 4 mm: Horisontal 84°, Vertikal 45°, Diagonal 100°',
        'Dudukan Lensa (Mount)': 'M12'
      },
      'Penerangan Malam (Illuminator)': {
        'Tipe Lampu': 'Smart Infrared (IR)',
        'Panjang Gelombang': '850 nm',
        'Jarak Jangkauan IR': 'Hingga 60 meter (varian -2I) / 80 meter (varian -4I)'
      },
      'Video & Kompresi': {
        'Kompresi Video': 'Main stream: H.265+/H.265/H.264+/H.264 | Sub-stream: H.265/H.264/MJPEG',
        'Video Bit Rate': '32 Kbps hingga 8 Mbps',
        'Rentang Dinamis (WDR)': '120 dB True WDR',
        'Penyempurnaan Gambar': 'BLC, HLC, 3D DNR, Region of Interest (ROI) 1 wilayah tetap'
      },
      'Fitur AI Cerdas (AcuSense)': {
        'Perlindungan Perimeter': 'Line Crossing Detection (Perlintasan Garis), Intrusion Detection (Deteksi Intrusi Area)',
        'Klasifikasi Target AI': 'Pembedaan target Manusia dan Kendaraan berbasis algoritma Deep Learning'
      },
      'Antarmuka & Jaringan': {
        'Port Jaringan': '1 port RJ45 10M/100M self-adaptive Ethernet',
        'Penyimpanan Lokal': 'Slot kartu MicroSD/SDHC/SDXC terintegrasi, kapasitas hingga 512 GB',
        'Protokol': 'TCP/IP, ICMP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, NTP, UPnP, SMTP, IGMP, 802.1X, QoS, IPv6'
      },
      'Umum & Proteksi Lingkungan': {
        'Material Bodi': 'Paduan Logam Aluminium (Metal)',
        'Standar Perlindungan': 'IP67 (Kedap debu & tahan semburan air kuat)',
        'Suhu Operasional': '-30 °C hingga 60 °C, kelembapan ≤ 95% (non-kondensasi)',
        'Konsumsi Daya': '12 VDC ± 25%, 0.63 A, maks. 7.5 W; PoE (802.3af, 36 V s/d 57 V), 0.25 A s/d 0.15 A, maks. 9 W'
      }
    }
  },
  {
    id: 'ds-2cd2t46g2-2i',
    name: 'Hikvision DS-2CD2T46G2-2I 4 MP DarkFighter Bullet Camera',
    category: 'ip-camera',
    categoryName: 'CCTV IP Camera Outdoor',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP DarkFighter Ultra Low-Light',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Sensor 1/3″ Progressive Scan CMOS DarkFighter Resolusi 4 MP (2688 × 1520 @ 30 fps)',
      'Performa Ultra Low-Light Unggulan Powered-by-DarkFighter (Sensitivitas 0.003 Lux @ F1.4)',
      'Aperture Lensa Lebar F1.4 Menangkap 2× Lebih Banyak Cahaya Dibanding Lensa Standar',
      'Teknologi AcuSense AI: Filter Akurat Objek Manusia & Kendaraan untuk Keamanan Perimeter Tambang',
      '120 dB True WDR, Smart IR 60 Meter, dan Rating Proteksi IP67 Tahan Suhu Ekstrem -30 °C s/d 60 °C'
    ],
    desc: 'Kamera bullet outdoor 4 MP generasi DarkFighter AcuSense yang dirancang khusus untuk area pengawasan minim penerangan di lokasi tambang dan industri berat. Dilengkapi sensor sensitivitas tinggi dan bukaan lensa lebar F1.4, kamera mampu mempertahankan visual berwarna tajam pada pencahayaan sangat redup (0.003 Lux) sebelum beralih ke mode Smart IR 60 meter. Dilengkapi algoritma Deep Learning AcuSense untuk perlindungan batas perimeter site tambang dari penyusup tanpa terganggu cuaca buruk.',
    detailedSpecs: {
      'Sensor & Kamera': {
        'Sensor Gambar': '1/3″ Progressive Scan CMOS DarkFighter',
        'Resolusi Maksimal': '2688 × 1520 (4 Megapixel @ 30 fps)',
        'Sensitivitas / Min. Illumination': 'Color: 0.003 Lux @ (F1.4, AGC ON), B/W: 0 Lux dengan IR aktif',
        'Shutter Speed': '1/3 s hingga 1/100,000 s',
        'Day & Night': 'IR Cut Filter otomatis'
      },
      'Lensa & Sudut Pandang': {
        'Tipe Lensa': 'Fixed Focal Lens (2.8 mm, 4 mm, 6 mm)',
        'Aperture': 'F1.4 (Ultra-Large Aperture)',
        'Sudut Pandang (FOV)': '2.8 mm: Horisontal 103°, Vertikal 55° | 4 mm: Horisontal 83°, Vertikal 45°',
        'Dudukan Lensa': 'M12'
      },
      'Penerangan Malam': {
        'Tipe Lampu': 'Smart Infrared (IR)',
        'Panjang Gelombang': '850 nm',
        'Jarak IR': 'Hingga 60 meter (Varian -2I) / 80 meter (Varian -4I)'
      },
      'Video & WDR': {
        'Kompresi Video': 'H.265+/H.265/H.264+/H.264',
        'WDR': '120 dB True WDR',
        'Penyempurnaan Citra': '3D DNR, BLC, HLC, Defog Digital'
      },
      'Fitur AI Cerdas': {
        'Analisis Perilaku': 'Deteksi Perlintasan Garis, Deteksi Intrusi, Deteksi Masuk/Keluar Wilayah',
        'Klasifikasi Target': 'AcuSense AI klasifikasi manusia dan kendaraan'
      },
      'Antarmuka & Jaringan': {
        'Koneksi Jaringan': '1 RJ45 10M/100M Ethernet port',
        'Slot Memori': 'MicroSD/SDHC/SDXC hingga 512 GB',
        'Keamanan': 'Proteksi kata sandi, enkripsi HTTPS, IEEE 802.1X, audit log'
      },
      'Umum & Proteksi': {
        'Material Casing': 'Full Metal Aluminum Alloy',
        'Tingkat Proteksi': 'IP67 Weatherproof',
        'Suhu Kerja': '-30 °C s/d 60 °C, kelembapan ≤ 95%',
        'Suplai Daya': '12 VDC ± 25%, maks. 7.5 W; PoE (802.3af), maks. 9 W'
      }
    }
  },
  {
    id: 'ds-2cd2t47g2-l',
    name: 'Hikvision DS-2CD2T47G2-L 4 MP ColorVu Fixed Bullet Camera',
    category: 'ip-camera',
    categoryName: 'CCTV IP Camera Outdoor',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP 24/7 Full-Color Imaging',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Sensor Besar 1/1.8″ Progressive Scan CMOS Resolusi 4 MP (2688 × 1520 piksel @ 30 fps)',
      'Teknologi Revolusioner ColorVu 24/7: Menghasilkan Rekaman Berwarna Penuh Siang dan Malam Tanpa IR',
      'Lensa Super-Aperture F1.0 Terbesar di Kelasnya Menangkap Cahaya 4× Lebih Banyak dari Lensa F2.0',
      'Lampu Tambahan Warm White Light Ramah Lingkungan Jarak hingga 60 Meter Tanpa Menyilaukan Mata',
      '130 dB True WDR, AcuSense Deep Learning, Slot MicroSD 512 GB, dan Casing Logam IP67 Tahan Korosi'
    ],
    desc: 'Kamera outdoor flagship Hikvision ColorVu 4 MP yang menyajikan visual berwarna terang dan nyata selama 24 jam non-stop, bahkan dalam kondisi gelap gulita total. Didukung sensor besar 1/1.8″ dan lensa F1.0 super-aperture dengan teknologi pencahayaan tambahan Warm White Light sejauh 60 meter. Sangat krusial di area tambang batubara dan stockpile untuk mengidentifikasi warna kendaraan armada dump truck, plat nomor lambung, serta rompi keselamatan personel K3 yang tidak dapat diidentifikasi oleh kamera inframerah monokrom hitam-putih konvensional.',
    detailedSpecs: {
      'Sensor & Kamera': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS (Large Format Sensor)',
        'Resolusi Maksimal': '2688 × 1520 (4 Megapixel @ 30 fps)',
        'Sensitivitas / Min. Illumination': 'Color: 0.0005 Lux @ (F1.0, AGC ON), 0 Lux dengan White Light aktif',
        'Teknologi Warna': 'Hikvision ColorVu 24/7 Full-Color Technology',
        'Kecepatan Shutter': '1/3 s hingga 1/100,000 s'
      },
      'Lensa & Sudut Pandang': {
        'Tipe Lensa': 'Fixed Focal Lens (2.8 mm dan 4 mm)',
        'Aperture': 'F1.0 Super-Aperture',
        'Sudut Pandang (FOV)': '2.8 mm: Horisontal 112°, Vertikal 61°, Diagonal 134° | 4 mm: Horisontal 95°, Vertikal 51°, Diagonal 115°',
        'Dudukan Lensa': 'M16'
      },
      'Penerangan Tambahan': {
        'Tipe Lampu': 'Warm White Light (Cahaya Hangat 3000 K Ramah Lingkungan)',
        'Jangkauan Iluminasi': 'Hingga 60 meter dengan Smart Light Auto-Adjust'
      },
      'Video & WDR': {
        'Rentang Dinamis (WDR)': '130 dB True WDR (Mampu menembus sorot lampu tembak kendaraan)',
        'Kompresi Video': 'H.265+/H.265/H.264+/H.264',
        'Penyempurnaan Citra': '3D DNR, BLC, HLC, Defog'
      },
      'Fitur AI Cerdas': {
        'Perlindungan Perimeter': 'AcuSense AI klasifikasi target Manusia & Kendaraan berbasis Deep Learning',
        'Pemberitahuan Alarm': 'Deteksi Perlintasan Garis, Intrusi Wilayah, Pengecualian Audio'
      },
      'Antarmuka & Fisik': {
        'Port Jaringan': '1 RJ45 10M/100M self-adaptive Ethernet port',
        'Penyimpanan Lokal': 'Slot MicroSD/SDHC/SDXC internal hingga 512 GB',
        'Material Casing': 'Logam Aluminium Padat Tahan Korosi',
        'Standar Perlindungan': 'IP67 Weatherproof',
        'Suhu Operasional': '-30 °C hingga 60 °C, kelembapan ≤ 95%',
        'Suplai Daya': '12 VDC ± 25%, maks. 8.5 W; PoE (802.3af), maks. 10 W'
      }
    }
  },

  // ==========================================
  // 2. CCTV PTZ Tambang (3 Model)
  // ==========================================
  {
    id: 'ds-2de5425iwg-k-4g',
    name: 'Hikvision DS-2DE5425IWG-K/4G 4 MP 25× 4G Speed Dome',
    category: 'ptz-tambang',
    categoryName: 'CCTV PTZ Tambang',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP (2560 × 1440) 25× Optical Zoom',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Sensor 1/2.8″ Progressive Scan CMOS Resolusi 4 MP (2560 × 1440 piksel @ 30 fps)',
      '25× Optical Zoom (focal length 4.8 mm - 120 mm) & 16× Digital Zoom Pantau Detail Jarak Jauh',
      'Modem Seluler 4G LTE Terintegrasi (Dual SIM Auto-Failover) untuk Lokasi Off-Grid Tanpa Kabel LAN',
      'Smart IR Night Vision Jarak Jauh hingga 150 Meter dengan Penyesuaian Sudut Sorot Otomatis',
      'Mekanisme Pan 360° Endless & Tilt -15° s/d 90°, Sertifikasi Cuaca IP66, IK10, serta TVS 6000V Lightning'
    ],
    desc: 'Kamera PTZ Speed Dome 4 MP berkinerja tinggi yang dilengkapi modem 4G LTE mandiri terintegrasi. Dirancang untuk pengawasan area penambangan terbuka (open-pit), disposal overburden, dan persimpangan jalur angkut batubara (hauling road) yang berpindah-pindah tanpa ketergantungan pada jaringan kabel fiber optik atau LAN tetap. Menggabungkan 25× optical zoom bertenaga DarkFighter dan Smart IR 150 meter untuk memantau aktivitas operasional alat berat hingga pergerakan dinding lereng tambang secara fleksibel.',
    detailedSpecs: {
      'Sensor & Kamera': {
        'Sensor Gambar': '1/2.8″ Progressive Scan CMOS DarkFighter',
        'Resolusi Maksimal': '2560 × 1440 (4 Megapixel @ 30 fps)',
        'Sensitivitas / Min. Illumination': 'Color: 0.005 Lux @ (F1.6, AGC ON), B/W: 0.001 Lux @ (F1.6, AGC ON), 0 Lux dengan IR',
        'Shutter Speed': '1/1 s hingga 1/30,000 s',
        'WDR': '120 dB True WDR'
      },
      'Lensa & Perbesaran': {
        'Panjang Fokus (Focal Length)': '4.8 mm hingga 120 mm (25× Optical Zoom)',
        'Kecepatan Zoom': 'Sekitar 3.6 detik (optical wide-tele)',
        'Sudut Pandang (FOV)': 'Horisontal 55° (wide) hingga 2.4° (tele), Vertikal 33° hingga 1.4°',
        'Aperture': 'F1.6 hingga F3.5',
        'Digital Zoom': '16×'
      },
      'Mekanisme PTZ': {
        'Rentang Pergerakan': 'Pan: 360° rotasi tanpa batas (endless); Tilt: -15° hingga 90° (auto flip)',
        'Kecepatan Pan': 'Kecepatan manual 0.1°/s s/d 120°/s; Kecepatan preset 120°/s',
        'Kecepatan Tilt': 'Kecepatan manual 0.1°/s s/d 80°/s; Kecepatan preset 80°/s',
        'Preset & Patrol': '300 presets, 8 patroli (hingga 32 preset per patroli), 4 pattern scan'
      },
      'Konektivitas Transmisi': {
        'Jaringan Nirkabel': '4G LTE FDD/TDD, WCDMA terintegrasi',
        'Slot Kartu SIM': 'Slot Micro SIM mandiri terproteksi',
        'Port Jaringan Kabel': '1 port RJ45 10M/100M Ethernet'
      },
      'Iluminasi Malam': {
        'Tipe Lampu': 'Smart Infrared (IR)',
        'Jangkauan IR': 'Jarak hingga 150 meter (menyesuaikan otomatis dengan rasio zoom)'
      },
      'Fitur AI Cerdas': {
        'Perlindungan Perimeter': 'AcuSense AI klasifikasi manusia dan kendaraan, deteksi perlintasan batas pit, intrusi, masuk/keluar area aman'
      },
      'Fisik & Lingkungan': {
        'Rating Ketahanan': 'IP66 Weatherproof, IK10 Vandal-Resistant',
        'Proteksi Lonjakan': 'TVS 6000V Lightning Surge Protection',
        'Suhu Kerja': '-30 °C s/d 65 °C, kelembapan ≤ 90%',
        'Suplai Daya': '12 VDC ± 20%, konsumsi maks. 24 W (IR menyala)'
      }
    }
  },
  {
    id: 'ds-2se7c432iwg-k-4g-14-f0',
    name: 'Hikvision TandemVu DS-2SE7C432IWG-K/4G/14(F0) 32× 4G Dome',
    category: 'ptz-tambang',
    categoryName: 'CCTV PTZ Tambang',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: 'Dual 4 MP (Panorama ColorVu + 32× PTZ)',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1528310263766-d7e14ecbc600?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Arsitektur Inovatif TandemVu: 1 Kamera Mengintegrasikan Lensa Panorama ColorVu & 32× PTZ Zoom',
      'Saluran Panorama 4 MP Lensa F1.0 ColorVu Sudut Lebar 109° Memantau Area Tanpa Pernah Blindspot',
      'Saluran PTZ 4 MP 32× Optical Zoom (5.9 mm - 188.8 mm) Membidik & Melacak Target Otomatis',
      'Smart Linkage Tracking: Saluran Panorama Mendeteksi Target, Saluran PTZ Otomatis Mengunci & Zoom',
      'Konektivitas 4G LTE Mandiri, Smart IR 200m, Lampu Strobe & Sirene Audio Aktif, serta Proteksi IP67'
    ],
    desc: 'Kamera speed dome flagship generasi TandemVu dari Hikvision yang menyatukan dua kamera dalam satu sasis terpadu: kamera fixed panorama sudut lebar dengan ColorVu dan kamera PTZ optik 32× bertenaga DarkFighter. Memberikan keunggulan pemantauan tanpa celah (situational awareness) di area loading tambang batubara, stockpile, dan dermaga tongkang. Ketika kamera PTZ digerakkan untuk memperbesar target di kejauhan, kamera panorama tetap mengawasi seluruh area tanpa kehilangan visual situasi sekitar.',
    detailedSpecs: {
      'Arsitektur Sistem': {
        'Konsep Produk': 'Hikvision TandemVu Dual-Channel Panoramic & Speed Dome PTZ',
        'Resolusi Saluran': 'Dual 4 MP (Kanal Panorama 2560 × 1440 + Kanal PTZ 2560 × 1440 @ 30 fps)'
      },
      'Saluran Panorama (Panoramic Channel)': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS',
        'Lensa & Aperture': '2.8 mm Fixed Lens, Super-Aperture F1.0 ColorVu',
        'Sudut Pandang (FOV)': 'Horisontal 109°, Vertikal 56°, Diagonal 130°',
        'Sensitivitas': 'Color: 0.0005 Lux @ (F1.0, AGC ON)',
        'Iluminator Panorama': 'White Light jangkauan hingga 30 meter'
      },
      'Saluran PTZ (PTZ Channel)': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS DarkFighter',
        'Zoom Optik & Digital': '32× Optical Zoom (focal length 5.9 mm - 188.8 mm), 16× Digital Zoom',
        'Sensitivitas': 'Color: 0.001 Lux @ (F1.5, AGC ON), B/W: 0.0005 Lux, 0 Lux dengan IR',
        'Rentang Gerak': 'Pan 360° endless, Tilt -15° s/d 90° (auto flip)',
        'Iluminator IR': 'Smart IR jangkauan hingga 200 meter'
      },
      'Fitur Cerdas AI': {
        'Smart Linkage Tracking': 'Pelacakan tertaut otomatis: Kanal panorama mendeteksi objek mencurigakan dan memerintahkan kanal PTZ melacak',
        'Klasifikasi Target': 'AcuSense AI klasifikasi presisi manusia dan kendaraan',
        'Pertahanan Aktif (Active Defense)': 'Lampu flash strobe putih berkedip & speaker alarm sirene suara audio terintegrasi'
      },
      'Transmisi & Jaringan': {
        'Koneksi Nirkabel': 'Modul seluler 4G LTE terintegrasi dual antena',
        'Port Jaringan': '1 RJ45 10M/100M Ethernet port',
        'Penyimpanan': 'Slot kartu MicroSD/SDHC/SDXC hingga 512 GB'
      },
      'Fisik & Lingkungan': {
        'Material Casing': 'Paduan Logam Aluminium ADC12',
        'Standar Perlindungan': 'IP67 Weatherproof, TVS 6000V Lightning Protection',
        'Suhu Kerja': '-30 °C s/d 65 °C, kelembapan ≤ 90%',
        'Suplai Daya': '12 VDC ± 25% / PoE+ (kompatibel solar panel trailer)'
      }
    }
  },
  {
    id: 'ds-2df8225ix-aelw-t5',
    name: 'Hikvision DS-2DF8225IX-AELW(T5) 8-inch 25× Laser Speed Dome',
    category: 'ptz-tambang',
    categoryName: 'CCTV PTZ Tambang',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '2 MP (1920 × 1080) Ultra-Long Range Laser',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Sensor 1/1.8″ Progressive Scan CMOS DarkFighter Resolusi 2 MP Frame Rate Tinggi (1920 × 1080 @ 60 fps)',
      'Laser Illuminator Night Vision Ultra Jarak Jauh hingga 400 Meter dalam Kegelapan Total Pit Tambang',
      'Wiper Pembersih Kaca Otomatis Terintegrasi (-W) dengan Sensor Deteksi Lumpur, Debu, & Hujan Tambang',
      '25× Optical Zoom (5.7 mm - 142.5 mm) & Optical Image Stabilization (OIS) Meredam Goyangan Menara Tower',
      '140 dB True WDR, Auto-Tracking 2.0 Deep Learning, Proteksi IP67 & IK10, Suhu Ekstrem -40 °C s/d 70 °C'
    ],
    desc: 'Kamera speed dome heavy-duty berukuran 8 inci kelas pertambangan berat dari seri Hikvision DarkFighter Ultra. Mengusung Laser Illuminator berkemampuan sorot hingga jarak 400 meter dan wiper otomatis pembersih kaca depan untuk menjaga lensa tetap jernih dari debu pekat, lumpur galian, dan percikan air site. Dilengkapi teknologi stabilisasi optik OIS untuk mengatasi goyangan tiang menara akibat terpaan angin badai serta algoritma Auto-Tracking 2.0 untuk memantau pergerakan batas konsesi tambang (IUP) dan kestabilan dinding galian pit terbuka.',
    detailedSpecs: {
      'Sensor & Kamera': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS DarkFighter',
        'Resolusi Maksimal': '1920 × 1080 (Full HD 2 MP @ 60 fps)',
        'Sensitivitas / Min. Illumination': 'Color: 0.002 Lux @ (F1.5, AGC ON), B/W: 0.0002 Lux @ (F1.5, AGC ON), 0 Lux dengan Laser aktif',
        'Rentang Dinamis (WDR)': '140 dB True WDR (Industry-leading)',
        'Stabilisasi Citra': 'Optical Image Stabilization (OIS) & EIS'
      },
      'Lensa & Perbesaran': {
        'Zoom Optik': '25× Optical Zoom (focal length 5.7 mm hingga 142.5 mm)',
        'Zoom Digital': '16×',
        'Sudut Pandang (FOV)': 'Horisontal 61.1° (wide) hingga 2.9° (tele)',
        'Aperture': 'F1.5 hingga F3.4'
      },
      'Teknologi Laser Night Vision': {
        'Sumber Penerangan': 'Laser Illuminator Khusus Jarak Jauh',
        'Jarak Jangkauan Laser': 'Hingga 400 meter (penyesuaian sudut berkas otomatis mengikuti zoom)',
        'Keamanan Laser': 'Class 1M Eye-Safe Laser Standard'
      },
      'Fitur Khusus Tambang': {
        'Wiper Otomatis (-W)': 'Wiper mekanis terintegrasi dengan sensor hujan otomatis untuk membersihkan kaca depan',
        'Pemanas & De-icing': 'Built-in heater dan kaca pemanas anti-embun (de-fogging)'
      },
      'Mekanisme PTZ': {
        'Rentang Pergerakan': 'Pan 360° endless, Tilt -20° hingga 90° (auto flip)',
        'Kecepatan Pan': 'Kecepatan manual 0.1°/s s/d 210°/s; Kecepatan preset hingga 280°/s',
        'Preset & Patrol': '300 presets, 8 patroli, 4 pattern scan'
      },
      'Fitur AI & Pelacakan': {
        'Smart Tracking': 'Auto-Tracking 2.0 berbasis Deep Learning, pelacakan target kontinu',
        'Perlindungan Perimeter': 'Deteksi perlintasan batas konsesi, deteksi intrusi lereng galian'
      },
      'Fisik & Ketahanan Lingkungan': {
        'Rating Ketahanan': 'IP67 Weatherproof, IK10 Vandal-Resistant',
        'Material Bodi': 'Aluminium Alloy Heavy-Duty ADC12',
        'Suhu Operasional': '-40 °C hingga 70 °C, kelembapan ≤ 95%',
        'Suplai Daya': 'Hi-PoE (maks. 60 W) / 24 VAC ± 25% (maks. 60 W)'
      }
    }
  },

  // ==========================================
  // 3. CCTV Thermal (3 Model)
  // ==========================================
  {
    id: 'ds-2td2138-7-qy',
    name: 'Hikvision DS-2TD2138-7/QY Anti-Corrosion Thermal Bullet',
    category: 'thermal',
    categoryName: 'CCTV Thermal',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: 'Thermal 384 × 288 (VOx Sensor)',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Sensor Termal Uncooled Focal Plane Arrays (VOx) Resolusi 384 × 288 Piksel (Pixel Pitch 12 μm)',
      'Sensitivitas Termal Unggul NETD < 35 mK Mampu Menembus Kabut Asap Tebal, Hujan Lebat, & Debu Pekat',
      'Pelapisan Khusus Anti-Korosi Memenuhi Standar NEMA 4X & C5-M untuk Area Gas Kimia & Uap Garam Pesisir',
      'Algoritma Pengukuran Suhu Titik Api Rentang -20 °C s/d 150 °C (Akurasi ±8 °C) untuk Pencegahan Kebakaran',
      'Proteksi Standar IP67, TVS 6000V Lightning Surge Protection, dan Suhu Operasional Tambang -40 °C s/d 65 °C'
    ],
    desc: 'Kamera bullet termal anti-korosi yang dirancang khusus untuk lingkungan industri agresif seperti pabrik pengolahan nikel (smelter), dermaga loading batubara pesisir (jetty), dan area pengolahan asam tambang. Dibekali lapisan anti-korosi berstandar internasional C5-M dan NEMA 4X yang tahan terhadap uap gas metana, asam sulfat, dan garam laut. Mampu memantau distribusi suhu permukaan tumpukan material secara preventif dan mendeteksi anomali kenaikan temperatur sebelum timbul kobaran api terbuka.',
    detailedSpecs: {
      'Sensor Termal': {
        'Tipe Sensor': 'Vanadium Oxide (VOx) Uncooled Focal Plane Arrays',
        'Resolusi Termal': '384 × 288 (dapat ditingkatkan hingga output display 1280 × 720)',
        'Pixel Pitch': '12 μm',
        'Rentang Spektral': '8 μm hingga 14 μm',
        'Sensitivitas Termal (NETD)': '< 35 mK (@25 °C, F# = 1.0)'
      },
      'Lensa Termal': {
        'Focal Length': '6.9 mm',
        'Aperture': 'F1.0',
        'Sudut Pandang (FOV)': 'Horisontal 37.7°, Vertikal 28.7°',
        'Jarak Fokus Minimum': '1.3 meter'
      },
      'Fungsi Pengukuran Suhu': {
        'Rentang Suhu Terukur': '-20 °C hingga 150 °C',
        'Akurasi Pengukuran': '±8 °C',
        'Aturan Suhu (Rules)': 'Dukungan 21 aturan (10 titik, 10 area poligon, 1 garis)'
      },
      'Deteksi Kebakaran': {
        'Deteksi Titik Api Dinamis': 'Hingga 10 titik api terdeteksi secara bersamaan',
        'Notifikasi Peringatan': 'Alarm exception otomatis ke software pusat kendali VMS'
      },
      'Perlindungan Anti-Korosi': {
        'Standar Anti-Korosi': 'NEMA 4X dan C5-M Anti-Corrosion Standard (Tahan asam, garam, dan sulfur)'
      },
      'Fisik & Lingkungan': {
        'Tingkat Proteksi': 'IP67 Weatherproof & TVS 6000V Lightning Protection',
        'Suhu Operasional': '-40 °C hingga 65 °C, kelembapan ≤ 95%',
        'Suplai Daya': 'PoE (802.3af, Class 3) / 12 VDC ± 25%, konsumsi maks. 5 W'
      }
    }
  },
  {
    id: 'ds-2td2667t-15-p',
    name: 'Hikvision DS-2TD2667T-15/P Thermographic Thermal & Optical Bullet',
    category: 'thermal',
    categoryName: 'CCTV Thermal',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: 'Thermal 640 × 512 + Optical 4 MP',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Dual-Spectrum Bi-Channel: Sensor Termal Resolusi Tinggi 640 × 512 + Sensor Kamera Optik 4 MP (2688 × 1520)',
      'Pengukuran Suhu Termografi Presisi Tinggi Rentang -20 °C hingga 550 °C dengan Akurasi ±2 °C atau ±2%',
      'Pencegahan Kebakaran Dini (Early Fire Prevention): Mendeteksi Self-Heating Spontan pada Stockpile Batubara',
      'Teknologi Bi-Spectrum Image Fusion Menggabungkan Detail Kontur Gambar Optik di Atas Citra Termal',
      'Lampu Flash Strobe Putih & Sirene Audio Terintegrasi Memberikan Peringatan Evakuasi Instan di Lokasi Site'
    ],
    desc: 'Kamera bi-spektrum termografi profesional kelas industri pertambangan yang menggabungkan sensor termal 640 × 512 dan kamera optik 4 MP dalam satu perangkat. Mampu mengukur suhu titik api dengan rentang lebar -20 °C hingga 550 °C dan akurasi presisi ±2 °C. Didesain khusus untuk pemantauan tumpukan batubara di stockpile, ban berjalan (conveyor belt), transfer chute, dan tangki penimbunan bahan bakar. Memungkinkan identifikasi visual yang jelas berkat fusi citra optik-termal serta memberikan alarm pencegahan sebelum timbul kebakaran hebat.',
    detailedSpecs: {
      'Spesifikasi Saluran Termal': {
        'Sensor Termal': 'Vanadium Oxide (VOx) Uncooled Focal Plane Arrays',
        'Resolusi Termal': '640 × 512 piksel (17 μm, 8~14 μm)',
        'Sensitivitas (NETD)': '< 35 mK (@25 °C, F# = 1.0)',
        'Lensa Termal': '15 mm (Sudut pandang Horisontal 42.1°, Vertikal 33.7°)'
      },
      'Spesifikasi Saluran Optik': {
        'Sensor Gambar Optik': '1/2.7″ Progressive Scan CMOS',
        'Resolusi Optik': '4 MP (2688 × 1520 @ 30 fps)',
        'Lensa Optik': '6 mm Fixed Lens (Sudut pandang Horisontal 51.7°)',
        'WDR & Penerangan': '120 dB True WDR, Smart IR jangkauan hingga 50 meter'
      },
      'Pengukuran Suhu Termografi': {
        'Rentang Pengukuran': '-20 °C hingga 550 °C (-4 °F hingga 1022 °F)',
        'Akurasi Termal': '±2 °C atau ±2% (mana yang bernilai lebih besar)',
        'Aturan Suhu': 'Mendukung 21 aturan pengukuran simultan (10 titik, 10 area, 1 garis)',
        'Aplikasi Spesifik': 'Deteksi Spontaneous Combustion batubara, overheat bearing conveyor, trafo listrik'
      },
      'Fitur Gambar & Fusi Citra': {
        'Image Fusion': 'Teknologi fusi bi-spektrum menampilkan detail tepi visual optik di atas gambar termal',
        'Picture in Picture (PIP)': 'Menampilkan gambar termal di dalam pratinjau optik penuh'
      },
      'Alarm & Pertahanan Aktif': {
        'Strobe Light': 'Lampu flash putih berkedip aktif sebagai peringatan visual',
        'Audio Alarm': 'Speaker internal suara sirene/peringatan suara yang dapat disesuaikan'
      },
      'Fisik & Lingkungan': {
        'Standar Perlindungan': 'IP67 Weatherproof',
        'Suhu Operasional': '-40 °C hingga 65 °C, kelembapan ≤ 95%',
        'Suplai Daya': 'PoE+ (802.3at) / 24 VAC / 12 VDC, konsumsi maks. 18 W'
      }
    }
  },
  {
    id: 'ds-2td4167t-25-w',
    name: 'Hikvision DS-2TD4167T-25/W Thermographic Thermal & Optical Dome',
    category: 'thermal',
    categoryName: 'CCTV Thermal',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: 'Thermal 640 × 512 + Optical 4 MP PTZ',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Kombinasi Sensor Termal 640 × 512 Lensa 25 mm & Kamera Optik PTZ Resolusi 4 MP 40× Optical Zoom',
      'Rotasi Pan 360° Endless & Tilt -20° s/d 90° dengan Kemampuan Smart Thermal Tracking Melacak Titik Api',
      'Pengukuran Suhu Termografi -20 °C hingga 550 °C (Akurasi ±2 °C) Memindai Seluruh Area Stockpile Batubara',
      'Wiper Pembersih Kaca Otomatis Terintegrasi Menjaga Lensa Bebas Debu Tambang & Cipratan Lumpur',
      'Penerangan Jarak Jauh IR 200m, Proteksi Standar IP67, TVS 6000V Surge, Suhu Kerja Ekstrem -40 °C s/d 65 °C'
    ],
    desc: 'Kamera PTZ Speed Dome Bi-Spectrum Termal dan Optik tercanggih dari Hikvision untuk pengawasan area luas berisiko tinggi. Menggabungkan sensor termografi beresolusi tinggi 640 × 512 dan kamera optik PTZ berkemampuan 40× optical zoom. Mampu melakukan rotasi 360 derajat untuk memindai ratusan meter kubik stockpile batubara dan tangki fuel farm secara otomatis dalam rute patroli terjadwal. Jika terdeteksi kenaikan suhu abnormal, sistem secara otomatis mengunci dan melacak target (Smart Thermal Tracking) serta mengirimkan koordinat peringatan ke Central Control Room.',
    detailedSpecs: {
      'Kanal Termal': {
        'Sensor Termal': 'Vanadium Oxide (VOx) Uncooled Focal Plane Arrays 640 × 512 (17 μm)',
        'Sensitivitas (NETD)': '< 35 mK (@25 °C, F# = 1.0)',
        'Lensa Termal': '25 mm (Sudut pandang Horisontal 24.8°, Vertikal 19.9°)'
      },
      'Kanal Optik PTZ': {
        'Sensor Optik': '1/1.8″ Progressive Scan CMOS 4 MP (2688 × 1520 @ 30 fps)',
        'Zoom Optik & Digital': '40× Optical Zoom (focal length 6 mm - 240 mm), 16× Digital Zoom',
        'Penerangan Malam': 'Laser/Smart IR jangkauan hingga 200 meter'
      },
      'Mekanisme PTZ Speed Dome': {
        'Rentang Pergerakan': 'Pan: 360° rotasi kontinu tanpa henti; Tilt: -20° hingga 90°',
        'Kecepatan Putar': 'Pan speed 0.1°/s s/d 200°/s; Tilt speed 0.1°/s s/d 105°/s',
        'Preset & Patrol': '300 presets, 8 rute patroli termal terjadwal'
      },
      'Pengukuran Suhu & Tracking': {
        'Rentang Pengukuran': '-20 °C hingga 550 °C (Akurasi ±2 °C atau ±2%)',
        'Fitur Tracking': 'Smart Thermal Tracking otomatis melacak titik panas/api yang bergerak',
        'Pembersih Lensa': 'Wiper mekanis terintegrasi pembersih kaca otomatis'
      },
      'Fisik & Daya': {
        'Tingkat Proteksi': 'IP67 Weatherproof, TVS 6000V Lightning Surge Protection',
        'Suhu Kerja': '-40 °C hingga 65 °C, kelembapan ≤ 90%',
        'Suplai Daya': 'Hi-PoE / 36 VDC / 24 VAC, konsumsi maks. 60 W'
      }
    }
  },

  // ==========================================
  // 4. CCTV Solar Powered (3 Model)
  // ==========================================
  {
    id: 'ds-2xs6a47g1-ls-c36s80',
    name: 'Hikvision DS-2XS6A47G1-LS/C36S80 4 MP ColorVu Solar Camera Kit',
    category: 'solar-powered',
    categoryName: 'CCTV Solar Powered',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP ColorVu Off-Grid Solar 4G',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Paket Komplit Mandiri: Panel Surya Monokristalin 36W & Baterai Lithium Ternary 80Wh Terintegrasi Smart BMS',
      'Konektivitas Nirkabel 4G LTE (Slot Micro SIM): Transmisi Data Real-Time Tanpa Tarikan Kabel Listrik & Jaringan',
      'Kamera 4 MP ColorVu Full-Color 24/7 (Lensa Super F1.0) Menghasilkan Visual Berwarna Terang di Tengah Pit Gelap',
      'Manajemen Daya Cerdas (BMS): Baterai Bertahan hingga 5 Hari Operasional Tanpa Panas Matahari (Cuaca Hujan/Mendung)',
      'Sertifikasi IP67, Tahan Badai Angin Kecepatan 120 km/jam, Memori Onboard 64 GB eMMC + Slot Kartu MicroSD 256 GB'
    ],
    desc: 'Paket sistem kamera CCTV mandiri 100% off-grid bertenaga surya dari Hikvision. Dilengkapi panel surya fotovoltaik 36W efisiensi tinggi, modul baterai lithium ternary 80Wh, serta modem transmisi 4G LTE terintegrasi. Kamera mengusung teknologi ColorVu beresolusi 4 MP dengan bukaan F1.0 super-aperture untuk menghasilkan rekaman visual berwarna asli 24 jam penuh di lokasi penambangan aktif (pit), settling pond, dan disposal area terpencil tanpa infrastruktur listrik PLN maupun kabel data.',
    detailedSpecs: {
      'Spesifikasi Kamera': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS 4 MP (2688 × 1520 @ 15 fps)',
        'Teknologi Visual': 'Hikvision ColorVu 24/7 Full-Color (F1.0 Super-Aperture)',
        'Sudut Pandang (FOV)': '2.8 mm: Horisontal 109°, Vertikal 56° | 4 mm: Horisontal 92°, Vertikal 48°',
        'Penerangan Tambahan': 'Warm White Light jangkauan hingga 30 meter'
      },
      'Sistem Panel Surya': {
        'Daya Puncak Panel': '36 W Monocrystalline Photovoltaic Panel',
        'Penyesuaian Sudut': 'Kemiringan sudut panel dapat diatur 20°, 40°, atau 60° menghadap matahari'
      },
      'Sistem Baterai (Battery Storage)': {
        'Tipe Baterai': 'Lithium Ternary Rechargable Battery terintegrasi',
        'Kapasitas Baterai': '80 Wh (Dapat dilepas/diganti)',
        'Manajemen Baterai (BMS)': 'Proteksi over-charge, over-discharge, dan kontrol suhu pemanasan baterai',
        'Daya Tahan Operasional': 'Bertahan hingga 5 hari dalam mode Proactive saat cuaca mendung/hujan terus-menerus'
      },
      'Transmisi Nirkabel Seluler': {
        'Koneksi Seluler': 'Modem 4G LTE internal (LTE-FDD/LTE-TDD/WCDMA)',
        'Tipe Kartu SIM': 'Micro SIM card slot'
      },
      'Penyimpanan Data': {
        'Memori Internal': 'Terpasang chip eMMC 64 GB onboard tahan getaran',
        'Slot Memori Tambahan': 'Slot kartu MicroSD/SDHC/SDXC hingga 256 GB'
      },
      'Proteksi & Ketahanan Fisik': {
        'Ketahanan Cuaca': 'IP67 Weatherproof',
        'Ketahanan Angin': 'Mampu menahan terpaan angin badai topan kecepatan hingga 120 km/jam',
        'Suhu Kerja': '-15 °C hingga 55 °C'
      }
    }
  },
  {
    id: 'ds-2xs6a46g1-izs-c36s80',
    name: 'Hikvision DS-2XS6A46G1-IZS/C36S80 4 MP Varifocal Solar Kit',
    category: 'solar-powered',
    categoryName: 'CCTV Solar Powered',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP Motorized Zoom Solar 4G',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Lensa Motorized Varifocal (Pilihan Jarak Jauh 2.8 - 12 mm / 8 - 32 mm) dengan Autofokus Presisi Remote',
      'Teknologi DarkFighter Ultra Low-Light & Smart IR Jangkauan 50 Meter untuk Pengawasan Malam Hari di Pit',
      'Sistem Mandiri Terpadu C36S80: Panel Surya 36W & Baterai Lithium Rechargable 80Wh Tahan Siklus Panjang',
      'Transmisi Data Nirkabel 4G LTE Terintegrasi: Pengawasan Jarak Jauh Tanpa Penarikan Kabel di Jalur Hauling',
      'Deteksi AI Target Manusia & Kendaraan (PIR + Deep Learning), Casing Logam IP67 Tahan Debu Kering Tambang'
    ],
    desc: 'Sistem pengawasan tenaga surya 4G mandiri yang dilengkapi lensa motorized varifocal. Memberikan fleksibilitas bagi operator untuk mengatur sudut pandang (FOV) dan jarak perbesaran optik secara remote langsung melalui software iVMS-4200 atau smartphone tanpa perlu menaiki tiang tower di lapangan. Didukung teknologi DarkFighter untuk pengawasan malam hari di persimpangan jalan hauling, gerbang pos timbang, dan area batas IUP tambang.',
    detailedSpecs: {
      'Spesifikasi Kamera': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS DarkFighter 4 MP (2688 × 1520 @ 15 fps)',
        'Lensa Motorized Zoom': 'Motorized Varifocal 2.8 mm s/d 12 mm (atau opsi 8 mm s/d 32 mm)',
        'Autofokus': 'Remote Auto-Focus via aplikasi/software',
        'Penerangan Malam': 'Smart IR jangkauan hingga 50 meter (850 nm)'
      },
      'Sistem Surya & Baterai': {
        'Panel Fotovoltaik': '36 W Monocrystalline Solar Panel',
        'Modul Baterai': 'Baterai Lithium Ternary 80 Wh dengan Smart BMS',
        'Ketahanan Baterai': 'Hingga 5 hari dalam mode hemat daya tanpa sinar matahari langsung'
      },
      'Transmisi Seluler': {
        'Konektivitas 4G': 'Modul LTE-FDD/LTE-TDD internal kompatibel operator GSM Indonesia',
        'Slot SIM': 'Micro SIM'
      },
      'Analitik Cerdas': {
        'Deteksi Gerak': 'Sensor PIR sudut lebar + Analisis Deep Learning target manusia & kendaraan'
      },
      'Fisik & Proteksi': {
        'Standar Proteksi': 'IP67 Weatherproof',
        'Ketahanan Suhu': '-15 °C s/d 55 °C',
        'Penyimpanan': '64 GB eMMC terpasang + Slot MicroSD hingga 256 GB'
      }
    }
  },
  {
    id: 'ds-2de5425iwg-k-4g-solar',
    name: 'Hikvision DS-2DE5425IWG-K/4G Solar-Ready 4 MP 25× Speed Dome',
    category: 'solar-powered',
    categoryName: 'CCTV Solar Powered',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP (2560 × 1440) Solar PTZ 25×',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Kombinasi Kamera PTZ Speed Dome 25× Optical Zoom (4.8 - 120 mm) dengan Konfigurasi Sistem Tenaga Surya',
      'Modem Seluler 4G LTE Terintegrasi: Kontrol PTZ 360 Derajat & Live View Full HD Tanpa Infrastruktur Kabel',
      'Smart IR Night Vision Jarak Jauh hingga 150 Meter dengan Penyesuaian Sudut Sorot Otomatis',
      'Profil Konsumsi Daya Efisien (Low-Power Standby & Wake-Up Mode) Menjaga Ketahanan Baterai Solar Trailer',
      'AcuSense AI Klasifikasi Manusia/Kendaraan, Proteksi Standar IP66, IK10 Vandal-Proof, dan TVS 6000V Surge'
    ],
    desc: 'Solusi kamera PTZ Speed Dome berkinerja tinggi yang dioptimalkan untuk integrasi pada Mobile CCTV Solar Trailer dan Menara Pantau Bertenaga Surya di site tambang. Menghadirkan kemampuan rotasi pan 360 derajat tanpa batas dan pembesaran optik 25× dengan transmisi data nirkabel 4G LTE mandiri. Dilengkapi manajemen daya pintar untuk memperpanjang daya tahan baterai trailer pada malam hari atau saat cuaca mendung berkepanjangan.',
    detailedSpecs: {
      'Sensor & Perbesaran': {
        'Sensor Gambar': '1/2.8″ Progressive Scan CMOS DarkFighter 4 MP (2560 × 1440 @ 30 fps)',
        'Zoom Optik': '25× Optical Zoom (4.8 mm - 120 mm), 16× Digital Zoom',
        'Sensitivitas': 'Color: 0.005 Lux @ (F1.6, AGC ON), B/W: 0.001 Lux @ (F1.6, AGC ON)'
      },
      'Mekanisme PTZ': {
        'Rotasi': 'Pan 360° endless, Tilt -15° s/d 90° (auto flip)',
        'Penerangan IR': 'Smart IR hingga 150 meter'
      },
      'Integrasi Tenaga Surya': {
        'Optimalisasi Daya': 'Mendukung profil konsumsi daya rendah (Low Power Standby)',
        'Kompatibilitas': 'Dirancang untuk paket Solar Mobile Mast / Trailer CCTV Tambang'
      },
      'Transmisi Nirkabel': {
        'Jaringan': '4G LTE FDD/TDD Dual SIM failover, 1 RJ45 Ethernet'
      },
      'Proteksi & Fisik': {
        'Rating': 'IP66 Weatherproof, IK10 Vandal Resistance',
        'Suhu Kerja': '-30 °C s/d 65 °C, suplai daya 12 VDC'
      }
    }
  },

  // ==========================================
  // 5. CCTV Explosion Proof (3 Model)
  // ==========================================
  {
    id: 'ds-2df4420wg-xey',
    name: 'Hikvision DS-2DF4420WG-XEY 4 MP 20× Explosion-Proof Speed Dome',
    category: 'explosion-proof',
    categoryName: 'CCTV Explosion Proof',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP 20× ATEX / IECEx Zone 1/21',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Sertifikasi Ledakan Resmi ATEX & IECEx: Gas (Zone 1, Zone 2: Ex db IIC T6 Gb) & Debu (Zone 21, 22: Ex tb IIIC T80°C Db)',
      'Housing Paduan Aluminium Khusus Tahan Ledakan (Explosion-Proof Die-Cast Aluminum) Menahan Percikan Api Internal',
      'Resolusi 4 MP (2560 × 1440 @ 30 fps) & 20× Optical Zoom (4.7 mm - 94 mm) Pantau Detail dari Jarak Aman',
      'Tingkat Proteksi Maksimal IP68 (Kedap Debu Total & Tahan Perendaman Air Bertekanan) Suhu Kerja -40 °C s/d 60 °C',
      'Rotasi Pan 360° Endless, 120 dB True WDR, Kompresi H.265+, dan Deteksi Cerdas untuk Gudang Handak & Refinery'
    ],
    desc: 'Kamera PTZ Speed Dome bersertifikasi Explosion-Proof resmi ATEX dan IECEx untuk area berbahaya berisiko ledakan tinggi (Hazardous Zone 1 & 21). Dibungkus housing aluminium padat khusus yang dirancang untuk mencegah terjadinya rambatan percikan api internal ke atmosfer udara luar yang mengandung gas metana, uap bahan bakar, atau debu batubara pekat. Sangat direkomendasikan untuk gudang penyimpanan bahan peledak (handak), stasiun pengisian bahan bakar tambang (fuel farm), dan area kiln smelter.',
    detailedSpecs: {
      'Sertifikasi Anti-Ledakan': {
        'Sertifikasi ATEX Gas': 'II 2 G Ex db IIC T6 Gb (Hazardous Area Zone 1 & Zone 2)',
        'Sertifikasi ATEX Debu': 'II 2 D Ex tb IIIC T80°C Db IP68 (Hazardous Area Zone 21 & Zone 22)',
        'Sertifikasi IECEx': 'Ex db IIC T6 Gb / Ex tb IIIC T80°C Db IP68',
        'Standar Pengujian': 'EN 60079-0, EN 60079-1, EN 60079-31, IEC 60079'
      },
      'Material & Bodi': {
        'Material Casing': 'Die-Cast Aluminum Alloy Anti-Ledakan Khusus',
        'Tingkat Proteksi': 'IP68 (Kedap debu total dan tahan perendaman air)'
      },
      'Kamera & Optik': {
        'Sensor Gambar': '1/2.8″ Progressive Scan CMOS 4 MP (2560 × 1440 @ 30 fps)',
        'Zoom Optik': '20× Optical Zoom (focal length 4.7 mm hingga 94 mm)',
        'Zoom Digital': '16×',
        'Sensitivitas': 'Color: 0.05 Lux @ (F1.6, AGC ON), B/W: 0.01 Lux',
        'WDR': '120 dB True WDR'
      },
      'Mekanisme PTZ': {
        'Rentang Pergerakan': 'Pan 360° rotasi tanpa batas (endless); Tilt: -5° hingga 90°',
        'Kecepatan Putar': 'Pan speed 0.1°/s s/d 50°/s; Tilt speed 0.1°/s s/d 40°/s',
        'Preset': '300 presets terkonfigurasi'
      },
      'Fisik & Kelistrikan': {
        'Suhu Operasional': '-40 °C hingga 60 °C',
        'Suplai Daya': '100-240 VAC / PoE+ (802.3at), konsumsi maks. 25 W',
        'Penyimpanan': 'Slot kartu MicroSD/SDHC/SDXC hingga 256 GB'
      }
    }
  },
  {
    id: 'ds-2dy9236i-cwx-t5-316l',
    name: 'Hikvision DS-2DY9236I-CWX(T5/316L) 2 MP 36× Explosion-Proof System',
    category: 'explosion-proof',
    categoryName: 'CCTV Explosion Proof',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '2 MP 36× Zoom Stainless 316L',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Konstruksi Baja Tahan Karat Murni Stainless Steel 316L Tahan Korosi Asam Kimia, Gas Metana, & Air Garam',
      'Sertifikasi Anti-Ledakan Tertinggi ATEX & IECEx Certified untuk Lingkungan Ekstrem Zone 1, 2 serta 21, 22',
      'Sensor 1/1.8″ CMOS DarkFighter 2 MP (1920 × 1080 @ 60 fps) dengan 36× Super Optical Zoom (6 mm - 216 mm)',
      'Smart IR Night Vision Jangkauan Jauh hingga 150 Meter Dilengkapi Wiper Pembersih Kaca Otomatis',
      'Heavy-Duty Positioning System Rotasi Pan 360° Kontinu, Rating Proteksi IP68 & NEMA 4X, Suhu -40 °C s/d 60 °C'
    ],
    desc: 'Sistem penentuan posisi kamera (Positioning System) kelas berat berkonstruksi baja tahan karat Stainless Steel 316L. Dirancang untuk lingkungan paling berbahaya dan korosif di dunia industri, seperti kilang peleburan nikel (smelter), tambang bawah tanah (underground), pabrik amonia, dan terminal tangki bahan bakar cair. Dilengkapi perbesaran optik 36× jarak jauh, wiper otomatis pembersih kaca depan, dan sertifikasi explosion-proof resmi ATEX/IECEx untuk keandalan surveilans tanpa henti.',
    detailedSpecs: {
      'Sertifikasi Anti-Ledakan': {
        'Sertifikasi ATEX / IECEx Gas': 'Zone 1, Zone 2 (Ex db IIC T6 Gb)',
        'Sertifikasi ATEX / IECEx Debu': 'Zone 21, Zone 22 (Ex tb IIIC T80°C Db)',
        'Sertifikasi Lingkungan': 'NEMA 4X Anti-Corrosion Standard'
      },
      'Material & Konstruksi': {
        'Material Casing': 'Baja Tahan Karat Khusus Stainless Steel 316L',
        'Tingkat Proteksi': 'IP68 (Waterproof & Dust-tight total)'
      },
      'Kamera & Perbesaran': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS DarkFighter',
        'Resolusi Maksimal': '1920 × 1080 (Full HD 2 MP @ 60 fps)',
        'Zoom Optik': '36× Optical Zoom (focal length 6 mm hingga 216 mm)',
        'Zoom Digital': '16×',
        'Sensitivitas': 'Color: 0.002 Lux @ (F1.5, AGC ON), B/W: 0.0002 Lux'
      },
      'Mekanisme Positioning System': {
        'Rentang Pan & Tilt': 'Pan 360° rotasi kontinu; Tilt: -90° hingga 90°',
        'Penerangan IR': 'Smart IR jangkauan hingga 150 meter',
        'Wiper Pembersih': 'Wiper kaca karet fluor otomatis terintegrasi'
      },
      'Fisik & Daya': {
        'Suhu Operasional': '-40 °C hingga 60 °C, kelembapan ≤ 95%',
        'Suplai Daya': '100-240 VAC / 24 VAC, konsumsi maks. 60 W'
      }
    }
  },
  {
    id: 'ds-2xe6845g0-izhs-b',
    name: 'Hikvision DS-2XE6845G0-IZHS(B) 4 MP Explosion-Proof Bullet Camera',
    category: 'explosion-proof',
    categoryName: 'CCTV Explosion Proof',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP Stainless 316L Ex-Proof',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Material Casing Baja Tahan Karat Stainless Steel 316L Bersertifikasi Resmi ATEX & IECEx Zone 1/21 Anti-Ledakan',
      'Built-in Junction Box Terintegrasi pada Bodi Belakang Memudahkan Pemasangan Pipa Conduit Besi Anti-Ledakan',
      'Lensa Motorized Vari-Focal 2.8 mm - 12 mm dengan Autofokus Tajam dan Resolusi Tinggi 4 MP (2688 × 1520)',
      'Powered-by-DarkFighter, 120 dB True WDR, serta Smart IR Jangkauan 80 Meter untuk Penerangan di Area Berbahaya',
      'Proteksi Cuaca & Debu Ekstrem IP68, Ketahanan NEMA 4X terhadap Gas Korosif Tambang, Suhu Kerja -40 °C s/d 60 °C'
    ],
    desc: 'Kamera bullet explosion-proof 4 MP yang dibekali built-in junction box terintegrasi pada bodi belakangnya. Fitur ini sangat memudahkan teknisi lapangan saat melakukan terminasi kabel conduit pipa besi fleksibel berstandar tahan ledakan di area pabrik pengolahan tambang dan tangki minyak. Terbuat dari baja tahan karat Stainless Steel 316L murni dengan sertifikasi ATEX/IECEx Zone 1/21 serta lensa motorized zoom 2.8–12 mm yang dapat diatur fokusnya secara remote.',
    detailedSpecs: {
      'Sertifikasi & Standar': {
        'Sertifikasi Ledakan ATEX': 'Ex db IIC T6 Gb (Gas) / Ex tb IIIC T80°C Db (Debu)',
        'Sertifikasi IECEx': 'IECEx Zone 1, Zone 2, Zone 21, Zone 22',
        'Material Casing': 'Baja Tahan Karat Murni Stainless Steel 316L'
      },
      'Fitur Khusus Instalasi': {
        'Built-in Junction Box': 'Kotak sambungan kabel terintegrasi langsung pada bodi untuk memudahkan terminasi pipa conduit tahan ledakan'
      },
      'Kamera & Lensa': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS DarkFighter 4 MP (2688 × 1520 @ 30 fps)',
        'Lensa Motorized': '2.8 mm hingga 12 mm Motorized Zoom Lens dengan Remote Autofocus',
        'Sensitivitas': 'Color: 0.003 Lux @ (F1.4, AGC ON), B/W: 0 Lux dengan IR',
        'Smart IR': 'Jangkauan hingga 80 meter'
      },
      'Video & Analitik': {
        'WDR': '120 dB True WDR',
        'Analisis Cerdas': 'AcuSense AI perlindungan perimeter, klasifikasi manusia dan kendaraan'
      },
      'Fisik & Lingkungan': {
        'Tingkat Proteksi': 'IP68 & NEMA 4X Anti-Corrosion',
        'Suhu Kerja': '-40 °C hingga 60 °C, kelembapan ≤ 95%',
        'Suplai Daya': 'PoE (802.3at) / 100-240 VAC / 12 VDC, konsumsi maks. 12 W'
      }
    }
  },

  // ==========================================
  // 6. CCTV ANPR / LPR (3 Model)
  // ==========================================
  {
    id: 'ids-2cd7a26g0-p-izhs-y',
    name: 'Hikvision DeepinView iDS-2CD7A26G0/P-IZHS(Y) 2 MP ANPR Bullet',
    category: 'anpr-lpr',
    categoryName: 'CCTV ANPR / LPR',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '2 MP (1920 × 1080) ANPR AI 60 fps',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Algoritma DeepinView ANPR Khusus Pengenalan Pelat Nomor Kendaraan Otomatis dengan Akurasi Tangkapan >98%',
      'Mampu Membaca Pelat Nomor Truk Tambang pada Kecepatan Laju Kendaraan hingga 120 km/jam Siang dan Malam Hari',
      '140 dB True WDR Meniadakan Efek Silau Lampu Tembak Depan Truk (Headlight Anti-Glare) Secara Sempurna',
      'Lensa Motorized Varifocal (Pilihan 2.8 - 12 mm / 8 - 32 mm) Khusus Gerbang Pos Timbang (Weighbridge)',
      'Manajemen Database Daftar Kendaraan (Blocklist & Allowlist 10.000 Unit) Terhubung Relai Palang Barrier Gate Otomatis'
    ],
    desc: 'Kamera Automatic Number Plate Recognition (ANPR / LPR) generasi Hikvision DeepinView beresolusi 2 MP frame rate tinggi (60 fps). Menggunakan algoritma kecerdasan buatan Deep Learning untuk membaca nomor registrasi pelat kendaraan secara otomatis dengan tingkat akurasi di atas 98%. Dilengkapi WDR 140 dB ultra-tinggi yang mampu meniadakan silau lampu sorot depan dump truck saat malam hari. Terintegrasi relai kontrol untuk membuka palang pintu gerbang timbang (weighbridge) secara otomatis bagi kendaraan yang terdaftar dalam allowlist.',
    detailedSpecs: {
      'Kamera & Sensor': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS DarkFighter',
        'Resolusi Maksimal': '1920 × 1080 (2 Megapixel @ 60 fps Frame Rate Tinggi)',
        'Sensitivitas': 'Color: 0.0005 Lux @ (F1.2, AGC ON), B/W: 0.0001 Lux, 0 Lux dengan IR',
        'Rentang Dinamis (WDR)': '140 dB WDR (Meredam silau lampu utama truk tambang)',
        'Shutter Speed': '1/25 s hingga 1/100,000 s'
      },
      'Lensa & Sudut Pandang': {
        'Tipe Lensa': 'Motorized Varifocal Lens (Pilihan 2.8-12 mm FOV 114.5°-41.8° atau 8-32 mm FOV 42.5°-15.1°)',
        'Kontrol Fokus': 'Autofokus remote P-Iris'
      },
      'Fungsi ANPR / LPR': {
        'Tingkat Akurasi': '>98% akurasi pembacaan karakter pelat nomor',
        'Kecepatan Kendaraan': 'Mendukung kecepatan laju kendaraan hingga 120 km/jam',
        'Deteksi Atribut': 'Nomor pelat, negara/wilayah, arah pergerakan kendaraan',
        'Database Kendaraan': 'Manajemen daftar hingga 10.000 nomor pelat (Blocklist / Allowlist)'
      },
      'Iluminasi Malam': {
        'Smart IR': 'Jarak hingga 50 meter (lensa 2.8-12mm) / 100 meter (lensa 8-32mm)'
      },
      'Antarmuka Hardware (Varian -Y)': {
        'Relai Output': '2 output relai pemicu palang gerbang otomatis (barrier gate)',
        'Input Alarm': '2 input sensor loop detektor magnetik tanah',
        'Audio & Komunikasi': '1 input audio, 1 output audio, port Wiegand, RS-485'
      },
      'Fisik & Proteksi': {
        'Standar Perlindungan': 'IP67 Weatherproof, IK10 Vandal-Resistant, Lapisan Anti-Korosi NEMA 4X (-Y)',
        'Pemanas Internal': 'Built-in heater pemanas kaca depan anti-embun',
        'Suhu Operasional': '-40 °C s/d 60 °C, suplai daya 12 VDC / PoE+ (802.3at)'
      }
    }
  },
  {
    id: 'ids-2cd7a46g0-p-izhs-y',
    name: 'Hikvision DeepinView iDS-2CD7A46G0/P-IZHS(Y) 4 MP ANPR Bullet',
    category: 'anpr-lpr',
    categoryName: 'CCTV ANPR / LPR',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP (2688 × 1520) ANPR High-Res',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Resolusi Tinggi 4 MP (2688 × 1520 @ 30/60 fps) Memberikan Detail Sangat Tajam Pelat Nomor & Karakter Huruf Kecil',
      'Analisis Metadata Kendaraan Lengkap: Mengenali Nomor Pelat, Jenis Kendaraan, Warna Bodi, dan Arah Lajur Perjalanan',
      'Teknologi 140 dB WDR & P-Iris untuk Kedalaman Fokus Bidang Optimal di Bawah Terik Matahari Site Maupun Malam Hari',
      'Lensa Motorized Zoom Jarak Jauh (Pilihan 2.8 - 12 mm / 8 - 32 mm) Menangkap Kendaraan dari Jarak Puluhan Meter',
      'Casing Logam Heavy-Duty IP67, IK10, Pemanas Internal Tahan Embun, dan Slot Kartu Memori MicroSD hingga 1 TB'
    ],
    desc: 'Kamera ANPR 4 MP generasi DeepinView dengan kemampuan analisis metadata kendaraan terlengkap dari Hikvision. Selain mengenali karakter pelat nomor dengan akurasi sangat tinggi, kamera ini mampu mengekstrak informasi detail atribut fisik kendaraan seperti warna bodi truk, kategori tipe kendaraan (dump truck, tangki bahan bakar, light vehicle LV, atau trailer kontainer), serta arah lajur perjalanannya. Sangat ideal untuk gerbang utama kawasan konsesi tambang batubara dan jembatan timbang terintegrasi.',
    detailedSpecs: {
      'Sensor & Resolusi': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS DarkFighter',
        'Resolusi Maksimal': '2688 × 1520 (4 Megapixel @ 60 fps)',
        'Sensitivitas': 'Color: 0.0005 Lux @ (F1.2, AGC ON), B/W: 0.0001 Lux @ (F1.2, AGC ON)',
        'Rentang Dinamis (WDR)': '140 dB True WDR dengan algoritma Headlight Anti-Glare'
      },
      'Lensa & Optik': {
        'Tipe Lensa': 'Motorized Varifocal Lens (2.8 - 12 mm atau 8 - 32 mm)',
        'Aperture Control': 'P-Iris untuk kedalaman ruang dan fokus optimal sepanjang waktu'
      },
      'Analisis Metadata Cerdas': {
        'Pengenalan Pelat Nomor': 'Akurasi >98% siang dan malam hari',
        'Atribut Kendaraan': 'Mengenali tipe kendaraan, warna bodi kendaraan, logo merk truk, arah lajur',
        'Daftar Kendaraan': 'Internal Allowlist & Blocklist hingga 10.000 nomor pelat'
      },
      'Penerangan Malam': {
        'Smart IR': 'Jangkauan hingga 50 meter (lensa 2.8-12mm) / 100 meter (lensa 8-32mm)'
      },
      'Antarmuka & Jaringan': {
        'Relai Barrier Gate': '2 output relai palang gerbang, 2 input alarm',
        'Audio & Port': 'Audio I/O, Wiegand, RS-485, slot memori MicroSD hingga 1 TB (1024 GB)'
      },
      'Proteksi & Lingkungan': {
        'Rating Ketahanan': 'IP67 Weatherproof, IK10 Vandal-Resistant, Lapisan NEMA 4X Anti-Corrosion',
        'Heater': 'Built-in heater pemanas kaca depan anti-embun dan kondensasi',
        'Suhu Kerja': '-40 °C hingga 60 °C, daya 12 VDC / PoE+ (802.3at)'
      }
    }
  },
  {
    id: 'ids-2cd7a47g0-p-xzhs-y',
    name: 'Hikvision DeepinView iDS-2CD7A47G0/P-XZHS(Y) 4 MP ColorVu ANPR',
    category: 'anpr-lpr',
    categoryName: 'CCTV ANPR / LPR',
    brand: 'hikvision',
    brandName: 'Hikvision Industrial',
    res: '4 MP DarkFighterS ColorVu ANPR',
    price: 'Hubungi Penawaran',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Teknologi Unggulan ColorVu ANPR: Menghasilkan Tangkapan Pelat Nomor & Warna Asli Kendaraan 24 Jam Penuh Tanpa Monokrom',
      'Fitur Self-Cleaning Kaca Depan dengan Pelapis Hidrofobik Mencegah Penempelan Debu Batubara & Cipratan Air Hujan',
      'Sensor Canggih 1/1.8″ DarkFighterS Resolusi 4 MP (2688 × 1520 @ 30 fps) dengan Bukaan Lensa Super F1.2',
      'Algoritma Deep Learning ANPR Terbaru: Mendukung Pengenalan Multi-Lajur (Multi-Lane) Sekaligus Secara Akurat',
      'Casing Logam Kokoh IP67, IK10, Pelapisan Anti-Korosi NEMA 4X, Built-in Heater, dan Slot Kartu Memori 512 GB'
    ],
    desc: 'Kamera ANPR tercanggih dari keluarga Hikvision DeepinView yang memadukan teknologi DarkFighterS dan ColorVu. Mampu menyajikan visual pelat nomor dan detail fisik kendaraan dalam warna asli selama 24 jam penuh tanpa beralih ke mode hitam-putih monokrom di malam hari. Dilengkapi fitur Self-Cleaning pada kaca depan dengan pelapisan hidrofobik yang mencegah penumpukan debu batubara, cipratan lumpur, dan air hujan di pos jembatan timbang (weighbridge) pertambangan.',
    detailedSpecs: {
      'Teknologi Utama': {
        'Konsep Produk': 'Hikvision DeepinView ColorVu ANPR with Self-Cleaning Glass',
        'Teknologi Warna': 'Full-Color ANPR Capture 24/7 (DarkFighterS + ColorVu)'
      },
      'Sensor & Resolusi': {
        'Sensor Gambar': '1/1.8″ Progressive Scan CMOS DarkFighterS',
        'Resolusi Maksimal': '2688 × 1520 (4 Megapixel @ 30 fps)',
        'Sensitivitas': 'Color: 0.0005 Lux @ (F1.2, AGC ON), 0 Lux dengan lampu penerangan aktif',
        'WDR': '140 dB True WDR'
      },
      'Lensa & Fitur Self-Cleaning': {
        'Tipe Lensa': 'Motorized Varifocal 2.8 mm hingga 12 mm Autofokus',
        'Kaca Depan Self-Cleaning': 'Lapisan kaca pelindung depan hidrofobik pembersih mandiri anti-debu dan air hujan'
      },
      'Kapabilitas ANPR Multi-Lajur': {
        'Multi-Lane Capture': 'Mampu membaca pelat nomor pada multi-lajur sekaligus secara simultan',
        'Tingkat Akurasi': '>98% pengenalan nomor registrasi pelat kendaraan',
        'Database Internal': 'Blocklist & Allowlist hingga 10.000 nomor kendaraan'
      },
      'Iluminasi Hybrid': {
        'Penerangan Tambahan': 'Kombinasi cerdas Warm White Light dan Smart IR'
      },
      'Antarmuka & Jaringan': {
        'Kontrol Palang Gate': '2 Output relai alarm pemicu palang barrier otomatis',
        'Port Komunikasi': '1 RJ45 10M/100M Ethernet, Wiegand, RS-485, slot microSD 512 GB'
      },
      'Proteksi & Lingkungan': {
        'Standar Ketahanan': 'IP67 Weatherproof, IK10 Vandal-Proof, NEMA 4X Anti-Corrosion (-Y)',
        'Pemanas': 'Built-in heater pemanas kaca depan',
        'Suhu Operasional': '-40 °C s/d 60 °C, suplai daya 12 VDC / PoE+ (802.3at)'
      }
    }
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
                          item.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.id.toLowerCase().includes(searchTerm.toLowerCase());
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

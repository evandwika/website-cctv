/**
 * CAHAYA MUSTIKA INTERNESIA - Live Surveillance Monitor Simulator
 * Interactive CCTV feed features:
 * - Real-time camera clock
 * - Camera channel switcher
 * - Night Vision IR Toggle
 * - AI Human & Vehicle Detection Overlay
 * - PTZ Pan/Tilt Simulation
 */

document.addEventListener('DOMContentLoaded', () => {
  const feedImg = document.getElementById('liveCamFeed');
  if (!feedImg) return;

  const clockEl = document.getElementById('liveCamClock');
  const camPill = document.getElementById('liveCamName');
  const camButtons = document.querySelectorAll('.cam-btn');
  const nightToggleBtn = document.getElementById('toggleNightVision');
  const aiToggleBtn = document.getElementById('toggleAiDetect');
  const aiBoxesContainer = document.getElementById('aiTrackingContainer');
  const ptzLeft = document.getElementById('ptzLeft');
  const ptzRight = document.getElementById('ptzRight');
  const ptzReset = document.getElementById('ptzReset');

  // Camera Channel Feeds Data (Curated CCTV Surveillance Real-world Scenes)
  const cameraFeeds = {
    'cam1': {
      name: 'CAM 01 // GERBANG UTAMA',
      url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      tag: 'OUTDOOR 4K HDR',
      fps: '30 FPS',
      aiTargets: [
        { label: 'MOBIL #B-1945-JK', top: '55%', left: '42%', width: '130px', height: '90px', color: '#38bdf8' },
        { label: 'ORANG #01 (98%)', top: '48%', left: '25%', width: '45px', height: '95px', color: '#10b981' }
      ]
    },
    'cam2': {
      name: 'CAM 02 // GUDANG LOGISTIK',
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      tag: 'INDORE WIDE ANGLE',
      fps: '30 FPS',
      aiTargets: [
        { label: 'FORKLIFT (99%)', top: '50%', left: '60%', width: '120px', height: '100px', color: '#f59e0b' },
        { label: 'STAFF LOGISTIK', top: '42%', left: '32%', width: '50px', height: '110px', color: '#10b981' }
      ]
    },
    'cam3': {
      name: 'CAM 03 // LOBI EKSEKUTIF',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      tag: 'COLORVU 24/7',
      fps: '25 FPS',
      aiTargets: [
        { label: 'TAMU TERVERIFIKASI', top: '40%', left: '46%', width: '60px', height: '125px', color: '#10b981' }
      ]
    },
    'cam4': {
      name: 'CAM 04 // AREA PARKIR B1',
      url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
      tag: 'NIGHT VISION IR',
      fps: '30 FPS',
      aiTargets: [
        { label: 'KENDARAAN PARKIR', top: '45%', left: '20%', width: '140px', height: '80px', color: '#38bdf8' },
        { label: 'AREA TERKUNCI', top: '25%', left: '72%', width: '80px', height: '60px', color: '#ef4444' }
      ]
    }
  };

  let currentCam = 'cam1';
  let isNightVision = false;
  let isAiEnabled = true;
  let ptzOffsetX = 0;

  // Realtime Live Clock
  function updateLiveClock() {
    if (!clockEl) return;
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const yyyy = now.getFullYear();
    const mm = pad(now.getMonth() + 1);
    const dd = pad(now.getDate());
    const hh = pad(now.getHours());
    const min = pad(now.getMinutes());
    const ss = pad(now.getSeconds());
    clockEl.textContent = `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss} WIB`;
  }
  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  // Render AI bounding boxes
  function renderAiTargets() {
    if (!aiBoxesContainer) return;
    aiBoxesContainer.innerHTML = '';
    if (!isAiEnabled) return;

    const data = cameraFeeds[currentCam];
    if (!data || !data.aiTargets) return;

    data.aiTargets.forEach(target => {
      const box = document.createElement('div');
      box.className = 'ai-target-box';
      box.style.top = target.top;
      box.style.left = target.left;
      box.style.width = target.width;
      box.style.height = target.height;
      box.style.borderColor = target.color;
      box.style.background = `${target.color}15`;

      const tag = document.createElement('span');
      tag.className = 'ai-tag-label';
      tag.style.background = target.color;
      tag.textContent = target.label;

      box.appendChild(tag);
      aiBoxesContainer.appendChild(box);
    });
  }

  // Camera switcher tabs
  camButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const camKey = btn.getAttribute('data-cam');
      if (!cameraFeeds[camKey]) return;

      camButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCam = camKey;
      const camData = cameraFeeds[camKey];

      feedImg.src = camData.url;
      if (camPill) camPill.textContent = camData.name;

      ptzOffsetX = 0;
      feedImg.style.transform = `scale(1.08) translate(${ptzOffsetX}px, 0)`;

      renderAiTargets();
    });
  });

  // Night Vision IR Toggle
  if (nightToggleBtn) {
    nightToggleBtn.addEventListener('click', () => {
      isNightVision = !isNightVision;
      nightToggleBtn.classList.toggle('active', isNightVision);
      feedImg.classList.toggle('night-mode', isNightVision);

      const nightTag = document.getElementById('nightVisionIndicator');
      if (nightTag) {
        nightTag.style.display = isNightVision ? 'inline-block' : 'none';
      }
      showToast(isNightVision ? 'Mode Night Vision IR Aktif' : 'Mode Warna Normal Aktif');
    });
  }

  // AI Detection Toggle
  if (aiToggleBtn) {
    aiToggleBtn.addEventListener('click', () => {
      isAiEnabled = !isAiEnabled;
      aiToggleBtn.classList.toggle('active', isAiEnabled);
      renderAiTargets();
      showToast(isAiEnabled ? 'AI Smart Recognition Aktif' : 'AI Smart Recognition Dinonaktifkan');
    });
  }

  // PTZ Control Simulation
  if (ptzLeft && ptzRight && ptzReset) {
    ptzLeft.addEventListener('click', () => {
      if (ptzOffsetX < 40) ptzOffsetX += 15;
      feedImg.style.transform = `scale(1.15) translate(${ptzOffsetX}px, 0)`;
      showToast(`PTZ Geser Kiri (${ptzOffsetX}px)`);
    });

    ptzRight.addEventListener('click', () => {
      if (ptzOffsetX > -40) ptzOffsetX -= 15;
      feedImg.style.transform = `scale(1.15) translate(${ptzOffsetX}px, 0)`;
      showToast(`PTZ Geser Kanan (${ptzOffsetX}px)`);
    });

    ptzReset.addEventListener('click', () => {
      ptzOffsetX = 0;
      feedImg.style.transform = `scale(1) translate(0, 0)`;
      showToast('Posisi Lensa Direset');
    });
  }

  // Initial Render
  renderAiTargets();
});

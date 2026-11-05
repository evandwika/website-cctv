/**
 * CAHAYA MUSTIKA INTERNESIA - CCTV Storage & Bandwidth Calculator
 * Calculates estimated Hard Drive capacity and bandwidth requirements
 */

document.addEventListener('DOMContentLoaded', () => {
  const camSlider = document.getElementById('calcCamCount');
  const camValLabel = document.getElementById('calcCamVal');
  const resSelect = document.getElementById('calcResolution');
  const daysSlider = document.getElementById('calcDays');
  const daysValLabel = document.getElementById('calcDaysVal');
  const modeSelect = document.getElementById('calcRecordMode');
  const codecSelect = document.getElementById('calcCodec');

  const resultStorage = document.getElementById('calcResultStorage');
  const resultHddRec = document.getElementById('calcResultHdd');
  const resultBandwidth = document.getElementById('calcResultBandwidth');
  const resultNvr = document.getElementById('calcResultNvr');

  if (!camSlider || !resultStorage) return;

  function calculate() {
    const cameras = parseInt(camSlider.value, 10);
    const days = parseInt(daysSlider.value, 10);
    const res = resSelect.value; // '1080p', '2k', '4k'
    const mode = modeSelect.value; // 'continuous', 'motion'
    const codec = codecSelect.value; // 'h265', 'h264'

    // Update labels
    if (camValLabel) camValLabel.textContent = `${cameras} Unit`;
    if (daysValLabel) daysValLabel.textContent = `${days} Hari`;

    // Base Bitrate per camera in Mbps (standard surveillance stream)
    let bitrateMbps = 2.0; // 1080p default
    if (res === '2k') bitrateMbps = 4.0;
    if (res === '4k') bitrateMbps = 8.0;

    // Codec efficiency factor
    if (codec === 'h264') {
      bitrateMbps *= 1.8; // H.264 consumes ~80% more storage than H.265+
    }

    // Recording hours per day
    const hoursPerDay = mode === 'motion' ? 9 : 24;

    // Total bits = bitrate (Mbps) * 3600 sec/hr * hours * days * cameras
    // Convert Megabits to Terabytes:
    // 1 Megabit = 125,000 bytes = 0.000000125 TB (approx / 8 / 1,000,000)
    const gigabytes = (bitrateMbps * 3600 * hoursPerDay * days * cameras) / (8 * 1024);
    const terabytes = gigabytes / 1024;

    // Round for display
    const tbDisplay = terabytes < 1 ? `${(terabytes * 1000).toFixed(0)} GB` : `${terabytes.toFixed(1)} TB`;
    resultStorage.textContent = tbDisplay;

    // Recommend standard HDD capacity
    const standardDrives = [1, 2, 4, 6, 8, 10, 12, 16, 24, 32, 64];
    let recommendedHdd = 1;
    for (const size of standardDrives) {
      if (size >= terabytes * 1.15) { // 15% safety buffer
        recommendedHdd = size;
        break;
      }
    }
    if (terabytes * 1.15 > 64) {
      resultHddRec.textContent = `SAN / NAS Enterprise Cluster (>64TB)`;
    } else {
      resultHddRec.textContent = `HDD Khusus CCTV ${recommendedHdd}TB`;
    }

    // Recommended NVR
    if (cameras <= 4) {
      resultNvr.textContent = 'NVR 4-Channel 4K PoE';
    } else if (cameras <= 8) {
      resultNvr.textContent = 'NVR 8-Channel 4K PoE';
    } else if (cameras <= 16) {
      resultNvr.textContent = 'NVR 16-Channel 4K PoE AI';
    } else {
      resultNvr.textContent = 'NVR 32-Channel Enterprise Server';
    }

    // Streaming Upload Bandwidth Estimation (Substream / remote view)
    const remoteStreamMbps = (cameras * 0.5).toFixed(1);
    resultBandwidth.textContent = `Min. ${remoteStreamMbps} Mbps`;
  }

  // Bind Events
  [camSlider, daysSlider].forEach(slider => {
    slider.addEventListener('input', calculate);
  });

  [resSelect, modeSelect, codecSelect].forEach(select => {
    select.addEventListener('change', calculate);
  });

  // Initial calculation
  calculate();
});

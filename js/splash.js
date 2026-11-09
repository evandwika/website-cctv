/**
 * CAHAYA MUSTIKA INTERNESIA - Page Transition & Splash Screen
 * Menampilkan logo CMI diamond saat halaman dibuka (tampil 1 kali dengan halus, tidak double)
 */

(function () {
  'use strict';

  var DISPLAY_DURATION = 600; // Durasi tampil splash yang pas dan elegan

  function hideSplash() {
    var splash = document.getElementById('splash');
    if (splash && !splash.classList.contains('fade-out')) {
      splash.classList.add('fade-out');
    }
  }

  // Jalankan saat halaman siap
  if (document.readyState === 'complete') {
    setTimeout(hideSplash, DISPLAY_DURATION);
  } else {
    window.addEventListener('load', function () {
      setTimeout(hideSplash, DISPLAY_DURATION);
    });
  }

  // Failsafe cadangan agar splash tidak pernah tertahan lama
  setTimeout(hideSplash, 1200);

  // Penanganan browser back/forward cache (bfcache)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      hideSplash();
    }
  });
})();

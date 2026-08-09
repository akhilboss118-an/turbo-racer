// Firebase Auth stub - PC game mode only (guest login)
// No Android/Capacitor dependencies

let __firebaseUser = null;
window.__firebaseUser = null;
window.__lastFetchedScore = 0;

let _guestMode = false;
window._guestMode = false;

function skipLogin() {
  _guestMode = true;
  window._guestMode = true;
  var overlay = document.getElementById('login-overlay');
  if (overlay) {
    overlay.classList.remove('show');
    overlay.style.display = 'none';
  }
  var loadingEl = document.getElementById('loading');
  if (loadingEl) {
    loadingEl.classList.add('hide');
    setTimeout(function() { loadingEl.style.display = 'none' }, 500);
  }
  if (typeof initUsername === 'function') {
    initUsername();
  }
}
window.skipLogin = skipLogin;

function renderCloudLeaderboard() {
  var container = document.getElementById('lb-cloud-data');
  if (!container) return;
  container.innerHTML = '<div style="color:#555;font-size:0.6rem;padding:10px;text-align:center;border:1px dashed rgba(0,212,255,0.08);border-radius:6px">Cloud sync available on web version (login required)</div>';
}
window.renderCloudLeaderboard = renderCloudLeaderboard;

function savePlayerHighScore() {
  return Promise.resolve(false);
}
window.savePlayerHighScore = savePlayerHighScore;

function fetchTopTenLeaderboard() {
  return Promise.resolve([]);
}
window.fetchTopTenLeaderboard = fetchTopTenLeaderboard;

function fetchPlayerHighScore() {}
window.fetchPlayerHighScore = fetchPlayerHighScore;

function signInWithGoogle() { return null; }
window.signInWithGoogle = signInWithGoogle;

function signOut() { return Promise.resolve(false); }
window.signOut = signOut;

document.addEventListener('DOMContentLoaded', function() {
  var skipBtn = document.getElementById('skip-login-btn');
  if (skipBtn) {
    skipBtn.addEventListener('click', skipLogin);
  }
});

console.log('[FB] Auth stub loaded (PC mode)');

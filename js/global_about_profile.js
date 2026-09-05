/* =========================================================
   CYBERM — shared front-end utilities
   Loaded on every page before the page-specific script.
   Keeps a single namespace (window.CyberM) so pages can
   share helpers without polluting globals.
   ========================================================= */

window.CyberM = (function () {
  /**
   * Placeholder for the shared navbar/header.
   * Once the team's navbar component exists, drop its markup
   * into #app-header (present on every page) either by fetching
   * a partial HTML file or rendering it here. Left as a no-op
   * for now since this build intentionally ships without a navbar.
   */
  function mountHeader() {
    const slot = document.getElementById("app-header");
    if (!slot) return;
    // Example for later:
    // fetch("partials/header.html").then(r => r.text()).then(html => slot.innerHTML = html);
  }

  /**
   * Small helper so page scripts can fetch JSON from a future
   * backend endpoint the same way everywhere, with a graceful
   * fallback to local mock data while there's no API yet.
   */
  async function loadData(endpoint, fallback) {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("bad response");
      return await res.json();
    } catch (err) {
      return fallback;
    }
  }

  document.addEventListener("DOMContentLoaded", mountHeader);

  return { mountHeader, loadData };
})();

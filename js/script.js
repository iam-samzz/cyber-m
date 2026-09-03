/* ==========================================
   AUTOMATIC FOOTER YEAR
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
window.CyberM = (function () {
  let toastTimer = null;
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('error');
    if (type === 'error') toast.classList.add('error');
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
  function bindPlaceholderLinks() {
    document.querySelectorAll('.nav-links [data-nav]').forEach((btn) => {
      btn.addEventListener('click', () => {
        showToast(`"${btn.textContent.trim()}" — coming soon.`);
      });
    });

    document.querySelectorAll('[data-nav="terms"], [data-nav="privacy"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showToast(`${link.textContent.trim()} page — coming soon.`);
      });
    });
  }
  function bindPageSwitchLinks() {
    const navLogin = document.getElementById('navLogin');
    if (navLogin) {
      navLogin.addEventListener('click', () => {
        window.location.href = 'login.html';
      });
    }

    const goToLogin = document.getElementById('goToLogin');
    if (goToLogin) {
      goToLogin.addEventListener('click', () => {
        window.location.href = 'login.html';
      });
    }

    const goToSignup = document.getElementById('goToSignup');
    if (goToSignup) {
      goToSignup.addEventListener('click', () => {
        window.location.href = 'signup.html';
      });
    }
  }
  function setFieldError(fieldId, hasError) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.toggle('has-error', hasError);
    const input = field.querySelector('input');
    if (input) input.classList.toggle('field-error', hasError);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function init() {
    bindPlaceholderLinks();
    bindPageSwitchLinks();
  }

  document.addEventListener('DOMContentLoaded', init);
  return {
    showToast,
    setFieldError,
    isValidEmail,
  };
})();

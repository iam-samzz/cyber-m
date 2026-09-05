// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const googleBtn = document.getElementById('googleBtn');
  const rememberCheckbox = document.getElementById('remember');

  // Initialize remember me from localStorage
  const savedEmail = localStorage.getItem('savedEmail');
  const savedRemember = localStorage.getItem('rememberMe');

  if (savedRemember === 'true' && savedEmail) {
    document.getElementById('email').value = savedEmail;
    rememberCheckbox.checked = true;
  }

  // Form submission
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const remember = rememberCheckbox.checked;

    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Save remember me preference
    if (remember) {
      localStorage.setItem('savedEmail', email);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('savedEmail');
      localStorage.removeItem('rememberMe');
    }

    // Simulate login process
    console.log('Login attempt:', {
      email: email,
      password: '••••••••',
      remember: remember
    });

    // Show success message and redirect (simulated)
    alert('Login successful! Redirecting to dashboard...');
    // In a real application, you would redirect to the dashboard
    // window.location.href = '/dashboard';
  });

  // Google login
  googleBtn.addEventListener('click', function() {
    console.log('Google login clicked');
    alert('Google login functionality would be implemented here');
    // In a real application, you would initialize Google OAuth here
  });

  // Toggle password visibility
  setupPasswordToggle('password');
});

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password visibility toggle
function setupPasswordToggle(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const container = input.parentElement;
  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'password-toggle';
  toggleBtn.textContent = 'Show';
  toggleBtn.style.cssText = `
    position: absolute;
    right: 12px;
    top: 38px;
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
  `;

  container.style.position = 'relative';
  container.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    toggleBtn.textContent = isPassword ? 'Hide' : 'Show';
  });
}

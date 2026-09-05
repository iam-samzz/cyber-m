// Signup Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');
  const roleButtons = document.querySelectorAll('.role-btn');
  const signupBtn = document.getElementById('signupBtn');
  let selectedRole = null;

  // Role selection
  roleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active class from all buttons
      roleButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      this.classList.add('active');
      selectedRole = this.dataset.role;

      console.log('Selected role:', selectedRole);
    });
  });

  // Form submission
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const termsAccepted = document.getElementById('terms').checked;

    // Validation
    if (!fullname || !email || !username || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (username.length < 3) {
      alert('Username must be at least 3 characters long');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    if (!selectedRole) {
      alert('Please select a role that describes you');
      return;
    }

    if (!termsAccepted) {
      alert('Please accept the Terms and Privacy Policy');
      return;
    }

    // Show success message
    console.log('Signup data:', {
      fullname: fullname,
      email: email,
      username: username,
      password: '••••••••',
      role: selectedRole,
      termsAccepted: termsAccepted
    });

    alert('Account created successfully! Redirecting to login...');
    // In a real application, you would send this data to your backend
    // and then redirect to login page
    // window.location.href = '/login.html';
  });

  // Real-time username validation
  const usernameInput = document.getElementById('username');
  usernameInput.addEventListener('input', function() {
    let value = this.value;
    // Only allow alphanumeric and underscore
    value = value.replace(/[^a-zA-Z0-9_]/g, '');
    this.value = value;
  });

  // Setup password visibility toggle
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

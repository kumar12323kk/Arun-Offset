// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('showing');
});

// Scroll to section function for buttons
function scrollToSection(id) {
  const el = document.getElementById(id);
  if(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form validation & submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Check if at least one service checkbox is checked
  const checkedServices = form.querySelectorAll('input[name="service"]:checked');
  if (checkedServices.length === 0) {
    alert('Please select at least one service you are interested in.');
    return;
  }

  // Simple mobile number pattern validation (basic)
  const mobile = form.mobile.value.trim();
  const mobilePattern = /^\+?\d{10,15}$/;
  if (!mobilePattern.test(mobile)) {
    alert('Please enter a valid mobile number with country code if needed.');
    form.mobile.focus();
    return;
  }

  // If all good, simulate form submission
  alert('Thank you for contacting Arun Offset! We will get back to you soon.');

  form.reset();
});
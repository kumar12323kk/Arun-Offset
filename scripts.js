// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('showing');
});

// Scroll to section function for buttons
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form validation & WhatsApp submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const mobile = form.mobile.value.trim();
  const message = form.message.value.trim();

  // Validate mobile number
  const mobilePattern = /^\+?\d{10,15}$/;
  if (!mobilePattern.test(mobile)) {
    alert('Please enter a valid mobile number with country code if needed.');
    form.mobile.focus();
    return;
  }

  // Collect selected services (optional now)
  const services = Array.from(form.querySelectorAll("input[name='service']:checked"))
    .map(el => el.value)
    .join(", ") || "Not specified";

  // Create WhatsApp message
  const whatsappMessage = `Hi, my name is ${name}.\nPhone: ${mobile}\nServices interested in: ${services}\nMessage: ${message}`;

  const whatsappURL = `https://wa.me/918973120153?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL, '_blank');

  form.reset();
});

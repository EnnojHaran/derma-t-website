// Simple routing system
function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  // Show the selected page
  const targetPage = document.getElementById(page);
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Initialize routing on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set home as default page
  navigateTo('home');

  // Handle browser back/forward
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(2) || 'home';
    navigateTo(hash);
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const role = document.getElementById('role').value;
      const message = document.getElementById('message').value;

      // Create mailto link with form data
      const subject = `Derma-T Interest - ${role}`;
      const body = `Name: ${name}\nEmail: ${email}\nInterested In: ${role}\n\nMessage:\n${message}`;
      
      window.location.href = `mailto:projectdermat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Reset form
      contactForm.reset();
    });
  }
});

// Fun facts flip animation
function toggleFact(element) {
  element.classList.toggle('flipped');
}

// Smooth scroll for navigation
document.querySelectorAll('a[onclick*="navigateTo"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.topbar').classList.remove('active-menu');
  });
});

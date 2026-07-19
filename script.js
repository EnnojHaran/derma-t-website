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

  // Add scroll animations for benefit cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Observe animated elements
  document.querySelectorAll('.benefit-card, .activity-card, .role-card, .stat-card').forEach(el => {
    observer.observe(el);
  });

  // Handle browser back/forward
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(2) || 'home';
    navigateTo(hash);
  });

  // Form submission with enhanced feedback
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

  // Add hover effects to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Fun facts flip animation with smooth transitions
function toggleFact(element) {
  element.classList.toggle('flipped');
}

// Add smooth transitions when navigating
const style = document.createElement('style');
style.textContent = `
  * {
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
`;
document.head.appendChild(style);

// Smooth scroll for navigation
document.querySelectorAll('a[onclick*="navigateTo"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.topbar')?.classList.remove('active-menu');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      let hash = this.getAttribute('href');
      if (hash.length > 1 && document.querySelector(hash)) {
        e.preventDefault();
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Simple form feedback
  document.getElementById("contact-form").addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById("form-status").textContent = "Message sent! (Demo only)";
    this.reset();
  });
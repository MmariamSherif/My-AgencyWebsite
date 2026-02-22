// Simple mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Load header and footer dynamically
document.getElementById("header-placeholder").innerHTML = `
  <header>
    <div class="container">
      <div class="logo">
        <a href="index.html">MyAgency</a>
      </div>
      <nav>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about_us.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="our_clients.html">Our Clients</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact_us.html">Contact</a></li>
        </ul>
        <div class="menu-toggle" id="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
`;
window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");

  if (window.scrollY > 50) {
    header.style.padding = "10px 0";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.padding = "18px 0";
    header.style.boxShadow = "none";
  }
});

document.getElementById("footer-placeholder").innerHTML = `
  <footer>
    <div class="container">
      <p>&copy; 2026 MyAgency. All Rights Reserved.</p>
      <div class="social-icons">
        <a href="#"><img src="icons/facebook.svg" alt="Facebook"></a>
        <a href="#"><img src="icons/twitter.svg" alt="Twitter"></a>
        <a href="#"><img src="icons/linkedin.svg" alt="LinkedIn"></a>
      </div>
    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Hamburger menu toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav ul');
  
    toggle.addEventListener('change', function () {
      if (toggle.checked) {
        nav.classList.add('show');
      } else {
        nav.classList.remove('show');
      }
    });
  });

  document.addEventListener('scroll', function () {
    const rows = document.querySelectorAll('.content-section > .row');
    const triggerPoint = window.innerHeight / 1.5;

    rows.forEach(row => {
        const rowPosition = row.getBoundingClientRect().top;

        if (rowPosition < triggerPoint) {
            row.classList.add('visible');
        }
    });
});

  

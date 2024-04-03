function toggleSearch() {
    var searchBox = document.getElementById("searchBox");
    var searchIcon = document.getElementById("searchIcon");
    if (searchBox.style.display === "none") {
        searchBox.style.display = "inline-block";
        searchBox.style.opacity = 1;
        searchIcon.style.color = "var(--little-light)";
    } else {
        searchBox.style.opacity = 0;
        setTimeout(function() {
            searchBox.style.display = "none";
        }, 300); // Adjust the delay to match the transition duration
        searchIcon.style.color = "var(--dark)";
    }
    searchBox.classList.toggle("show");
    if (searchBox.classList.contains("show")) {
        searchBox.focus();
    }
}



let lastScrollTop = 0;
const navbar = document.querySelector('header');
const heroSection = document.querySelector('.hero');

function toggleNavbar() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = heroSection.offsetHeight;
    if (currentScroll > lastScrollTop && currentScroll > (heroHeight) * 0.75) {
        // Scrolling down and past 75% of the hero section
        navbar.classList.add('hidden');
    } else {
        // Scrolling up or still in the hero section
        navbar.classList.remove('hidden');
    }
    // Check if the user is in the hero section
    if (currentScroll <= heroHeight) {
        navbar.classList.remove('not-in-hero');
    } else {
        navbar.classList.add('not-in-hero');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

window.addEventListener('scroll', toggleNavbar);



document.addEventListener("DOMContentLoaded", function() {
    var recipes = document.querySelectorAll('.recipe');
    var revealOnScroll = function() {
        recipes.forEach(function(recipe) {
            if (isElementInViewport(recipe)) {
                recipe.classList.add('visible');
            }
        });
    };
    
    var isElementInViewport = function(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Initial reveal on load
    revealOnScroll();

    // Reveal on scroll
    window.addEventListener('scroll', revealOnScroll);
});

function toggleMenu() {
    var checkbox = document.getElementById("menu-toggle");
    checkbox.checked = !checkbox.checked;
  }


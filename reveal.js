// Fade sections in as they scroll into view.
// Anything with class="reveal" starts hidden (see styles.css) and gets "is-visible" the first time it appears.

const revealItems = document.querySelectorAll('.reveal');

// IntersectionObserver calls this function whenever a watched element enters or leaves the screen.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.15 }); // 0.15 = start when 15% of the element is showing

revealItems.forEach((item) => observer.observe(item));

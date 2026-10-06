// Underline the top-bar link for the section that is on screen right now.

const navLinks = document.querySelectorAll('.site-nav a');

// For each link, find the section it points to: href="#menu" points to the element with id="menu".
const navTargets = [...navLinks].map((link) => document.querySelector(link.getAttribute('href')));

function markCurrentSection() {
  const middle = window.innerHeight / 2;
  let current = null;

  // The current section is the one that crosses the middle of the screen.
  navTargets.forEach((section) => {
    const box = section.getBoundingClientRect();
    if (box.top <= middle && box.bottom >= middle) {
      current = section;
    }
  });

  // The footer is short and never reaches the middle, so treat the very bottom of the page as "Contact".
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) {
    current = navTargets[navTargets.length - 1];
  }

  navLinks.forEach((link, index) => {
    if (navTargets[index] === current) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

// "passive" tells the browser this function never blocks scrolling, which keeps scrolling smooth.
window.addEventListener('scroll', markCurrentSection, { passive: true });
markCurrentSection();

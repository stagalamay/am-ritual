// Menu tabs: on a phone, show one part of the price list at a time instead of one long list.
// styles.css switches the tabs off on wide screens, where all four parts fit side by side.

const tabs = document.querySelector('.menu-tabs');
const buttons = tabs.querySelectorAll('button');
const groups = document.querySelectorAll('.menu-group');

function showGroup(name) {
  // Hide every group except the one whose id matches the button that was pressed.
  groups.forEach((group) => {
    group.classList.toggle('is-hidden', group.id !== name);
  });

  // aria-pressed tells screen readers which button is on. The CSS underlines it too.
  buttons.forEach((button) => {
    button.setAttribute('aria-pressed', button.dataset.group === name);
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => showGroup(button.dataset.group));
});

// The four photo cards above the price list are links such as href="#pastries".
// Open the matching group first, so the browser has something visible to jump to.
document.querySelectorAll('.category a').forEach((link) => {
  link.addEventListener('click', () => showGroup(link.dataset.group));
});

// The buttons start hidden in the HTML, so a visitor without JavaScript never sees dead buttons.
tabs.hidden = false;
showGroup('coffee');

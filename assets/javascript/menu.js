document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item .item-level-1');

  menuItems.forEach(item => {
    item.innerHTML = `<span class="first-letter">${item.textContent.charAt(0)}</span>${item.textContent.slice(1)}`;
  });
});
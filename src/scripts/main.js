'use strict';

const style = document.createElement('style');

style.textContent = `
.active {
display: none;}`;
document.head.append(style);

// write code here
const tree = document.querySelector('.tree');

tree.addEventListener('click', function () {
  const target = event.target.closest('LI');

  if (target.childElementCount !== 0) {
    const innertarger = target.querySelector('UL');

    innertarger.classList.toggle('active');
  }
});

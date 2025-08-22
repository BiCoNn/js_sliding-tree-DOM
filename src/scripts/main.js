'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const li = e.target;
  const span = document.createElement('span');
  const header = li.firstChild;
  const headerText = header.textContent.trim();
  const innerUL = li.querySelector('ul');

  if (e.target.tagName === 'LI') {
    span.textContent = headerText;
    li.insertBefore(span, header);

    if (innerUL) {
      innerUL.hidden = true;
      header.remove();
    }
  }

  if (e.target.tagName === 'SPAN') {
    li.insertBefore(span, headerText);
    innerUL.hidden = false;
    span.remove();
  }
});

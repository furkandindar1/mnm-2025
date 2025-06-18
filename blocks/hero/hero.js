export default function decorate(block) {
  const rows = [...block.children];
  const content = document.createElement('div');
  content.className = 'hero-content';

  rows.forEach((row) => {
    content.appendChild(row);
  });

  block.innerHTML = '';
  block.appendChild(content);
}
export default function decorate(block) {
  block.classList.add('hero');
}

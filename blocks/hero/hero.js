export default function decorate(block) {
  block.classList.add('hero');

  const title = block.querySelector('div:nth-child(1)');
  const description = block.querySelector('div:nth-child(2)');
  const button = block.querySelector('div:nth-child(3)');
  const image = block.querySelector('div:nth-child(4)');

  if (image) {
    const imageUrl = image.textContent.trim();
    block.style.backgroundImage = `url(${imageUrl})`;
    block.style.backgroundSize = 'cover';
    block.style.backgroundPosition = 'center';
    image.remove(); // metin olarak görünmesin
  }

  if (button) {
    const btn = document.createElement('a');
    btn.href = '#'; // veya gerçek bir link
    btn.className = 'hero-button';
    btn.textContent = button.textContent.trim();
    button.replaceWith(btn);
  }
}

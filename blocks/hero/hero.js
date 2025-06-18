export default function decorate(block) {
  const title = block.querySelector('div:nth-child(1) > div:last-child');
  const description = block.querySelector('div:nth-child(2) > div:last-child');
  const button = block.querySelector('div:nth-child(3) > div:last-child a');
  const imagePath = block.querySelector('div:nth-child(4) > div:last-child')?.textContent;

  const section = document.createElement('section');
  section.classList.add('hero');

  if (imagePath) {
    const img = document.createElement('img');
    img.src = imagePath;
    section.appendChild(img);
  }

  if (title) {
    const h1 = document.createElement('h1');
    h1.textContent = title.textContent;
    section.appendChild(h1);
  }

  if (description) {
    const p = document.createElement('p');
    p.textContent = description.textContent;
    section.appendChild(p);
  }

  if (button) {
    section.appendChild(button.cloneNode(true));
  }

  block.innerHTML = '';
  block.appendChild(section);
}

export default function decorate(block) {
  block.classList.add('hero');

  const rows = [...block.children];

  let titleText = '';
  let descriptionText = '';
  let buttonText = '';
  let imageUrl = '';

  rows.forEach((row) => {
    const cells = [...row.children];
    const label = cells[0]?.textContent?.toLowerCase()?.trim();
    const value = cells[1]?.textContent?.trim();

    switch (label) {
      case 'title':
        titleText = value;
        break;
      case 'description':
        descriptionText = value;
        break;
      case 'button':
        buttonText = value;
        break;
      case 'image':
        imageUrl = value;
        break;
    }
  });

  if (imageUrl) {
    block.style.backgroundImage = `url(${imageUrl})`;
    block.style.backgroundSize = 'cover';
    block.style.backgroundPosition = 'center';
  }

  if (titleText) {
    const title = document.createElement('h1');
    title.textContent = titleText;
    block.append(title);
  }

  if (descriptionText) {
    const desc = document.createElement('p');
    desc.textContent = descriptionText;
    block.append(desc);
  }

  if (buttonText) {
    const btn = document.createElement('a');
    btn.href = '#';
    btn.className = 'hero-button';
    btn.textContent = buttonText;
    block.append(btn);
  }
}

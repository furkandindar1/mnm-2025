// utils.js - Utility for loading blocks

export function loadBlocks() {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(async (block) => {
    const name = block.dataset.blockName;
    try {
      const mod = await import(`/blocks/${name}/${name}.js`);
      if (mod.default) {
        mod.default(block);
      }
    } catch (err) {
      console.error(`Block "${name}" failed to load:`, err);
    }
  });
}

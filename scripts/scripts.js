// scripts.js - Global AEM script entry point

import { loadBlocks } from './utils.js';

window.hlx = window.hlx || {};
window.hlx.init = () => {
  loadBlocks();
};

window.hlx.init();

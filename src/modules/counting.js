/* eslint-disable no-plusplus */

import { cards } from './module1.js';

const counting = document.getElementById('supy');

function arrayLength(a) {
  let length = 0;
  while (a[length] !== undefined) {
    length++;
  }
  counting.innerHTML = `(${length})`;
}

arrayLength(cards);
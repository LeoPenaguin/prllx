import { reactive } from 'vue';
import type { Layer } from '@/types/interfaces';

import img1Url from '@/assets/card3/1.png';
import img2Url from '@/assets/card3/2.png';
import img3Url from '@/assets/card3/3.png';
import img4Url from '@/assets/card3/4.png';
import img5Url from '@/assets/card3/5.png';
import frame from '@/assets/frames/1.png';

const card = reactive({
  perspectiveRange: 2000,
  frame,
  isFrameDisplayed: false,
  layers: [
    { position: 1, name: 'lol0', depth: 0, img: img1Url },
    { position: 2, name: 'lol1', depth: 50, img: img2Url },
    { position: 3, name: 'lol2', depth: 100, img: img3Url },
    { position: 4, name: 'lol3', depth: 150, img: img4Url },
    { position: 5, name: 'lol4', depth: 200, img: img5Url },
  ] as Layer[],
  originRange: { x: 50, y: 50 },
  backgroundColor: '#212121',
  isOverflowMode: false,
});

export function useCard() {
  function setOrigin(x: number, y: number) {
    card.originRange = { x, y };
  }

  function toggleIsOverflowMode() {
    card.isOverflowMode = !card.isOverflowMode;
  }

  function toggleIsFrameDisplayed() {
    card.isFrameDisplayed = !card.isFrameDisplayed;
  }

  return { card, setOrigin, toggleIsOverflowMode, toggleIsFrameDisplayed };
}

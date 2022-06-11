import { defineStore } from 'pinia';
import type { Layer } from '@/types/interfaces';

import img1Url from '@/assets/card3/1.png';
import img2Url from '@/assets/card3/2.png';
import img3Url from '@/assets/card3/3.png';
import img4Url from '@/assets/card3/4.png';
import img5Url from '@/assets/card3/5.png';
import frame from '@/assets/frames/1.png';

export default defineStore('card', {
  state: () => ({
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
    aspectRatio: '2.5 / 3.5',
    originRange: { x: 50, y: 50 },
    backgroundColor: '#212121',
    isOverflowMode: false,
  }),
  actions: {
    setOrigin(x: number, y: number) {
      this.originRange = { x, y };
    },
    toggleisOverflowMode() {
      this.isOverflowMode = !this.isOverflowMode;
    },
    toggleIsFrameDisplayed() {
      this.isFrameDisplayed = !this.isFrameDisplayed;
    },
    updateLayer(layer: Layer) {
      this.layers[this.layers.findIndex((l) => l.position === layer.position)] = layer;
    },
    calcCardRotation(xPostion: number, yPostion: number, component: HTMLInputElement) {
      const box = component.getBoundingClientRect();
      const calcX = -(yPostion - box.y - box.height / 2) / 20;
      const calcY = (xPostion - box.x - box.width / 2) / 20;

      return `rotateX(${calcX}deg) rotateY(${calcY}deg) `;
    },
  },
});

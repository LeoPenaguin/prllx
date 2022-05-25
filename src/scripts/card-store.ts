import { reactive, readonly } from 'vue';
import type { Layer, AspectRatio, PerpectiveDepth } from '../types/interfaces';
import img1Url from '../assets/card2/1.png';
import img2Url from '../assets/card2/2.png';
import img3Url from '../assets/card2/3.png';
import img4Url from '../assets/card2/4.png';
import img5Url from '../assets/card2/5.png';

console.log('yes');

const state = reactive({
  perspectiveRange: 2000,
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
  isDevMode: false,
});

function setAspectRatio(value: AspectRatio) {
  state.aspectRatio = value;
}

function setPerspectiveDepth(value: PerpectiveDepth) {
  state.perspectiveRange = value;
}

function setOrigin(x: number, y: number) {
  state.originRange = { x, y };
}

function setBackgroundColor(value: string) {
  state.backgroundColor = value;
}

function setIsDevMode(value: boolean) {
  state.isDevMode = value;
}

function updateLayer(layer: Layer) {
  state.layers[state.layers.findIndex((l) => l.position === layer.position)] = layer;
}

function calcCardRotation(xPostion: number, yPostion: number, component: HTMLInputElement) {
  const box = component.getBoundingClientRect();
  const calcX = (yPostion - box.y - box.height / 2) / 500;
  const calcY = -(xPostion - box.x - box.width / 2) / 500;

  return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg) `;
}

export default readonly({
  state,
  setAspectRatio,
  setPerspectiveDepth,
  setOrigin,
  setBackgroundColor,
  setIsDevMode,
  calcCardRotation,
  updateLayer,
});

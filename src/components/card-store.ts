import { reactive, computed, readonly } from "vue";
import { Layer } from "../types/interfaces";

const state = reactive({
  perspectiveRange: 2000,
  layers: [
    { position: 1, name: "lol0", depth: 0, img: "/src/assets/1.png" },
    { position: 2, name: "lol1", depth: 50, img: "/src/assets/2.png" },
    { position: 3, name: "lol2", depth: 100, img: "/src/assets/3.png" },
    { position: 4, name: "lol3", depth: 150, img: "/src/assets/4.png" },
    { position: 5, name: "lol4", depth: 200, img: "/src/assets/5.png" },
  ] as Layer[],
  aspectRatio: "2.5 / 3.5",
  originRange: { x: 50, y: 50 },
  backgroundColor: "#000000",
});

function setAspectRatio(value: string) {
  state.aspectRatio = value;
}

function setOrigin(x: number, y: number) {
  state.originRange = { x, y };
}

function setPerspectiveRange(value: number) {
  state.perspectiveRange = value;
}

function setBackgroundColor(value: string) {
  state.backgroundColor = value;
}

function updateLayer(layer: Layer) {
  state.layers[state.layers.findIndex((l) => l.position === layer.position)] =
    layer;
}

function calcCardRotation(
  xPostion: number,
  yPostion: number,
  component: HTMLInputElement
) {
  const box = component.getBoundingClientRect();
  const calcX = (yPostion - box.y - box.height / 2) / 500;
  const calcY = -(xPostion - box.x - box.width / 2) / 500;

  return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg) `;
}

export default readonly({
  state,
  // totalLength,
  setAspectRatio,
  setOrigin,
  setPerspectiveRange,
  setBackgroundColor,
  calcCardRotation,
  updateLayer,
  // removeItem,
});

export interface Layer {
  position: number;
  name: string;
  img: string;
  depth: number;
}

export enum AspectRatio {
  'square' = '1 / 1',
  'card' = '2.5 / 3.5',
  '4:3' = '4 / 3',
  '16:9' = '16 / 9'
}
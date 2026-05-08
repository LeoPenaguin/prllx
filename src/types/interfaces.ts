export interface Layer {
  position: number;
  name: string;
  img: string;
  depth: number;
}

export enum PerspectiveDepth {
  'big' = 1200,
  'medium' = 1500,
  'small' = 2000,
}

export interface PerspectiveDepthChoice {
  name: string;
  label: string;
  icon: string;
  value: number;
}

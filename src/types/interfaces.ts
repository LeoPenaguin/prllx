export interface Layer {
  position: number;
  name: string;
  img: string;
  depth: number;
}

export enum PerpectiveDepth {
  'big' = 1200,
  'medium' = 1500,
  'small' = 2000,
}

export interface PerpectiveDepthChoice {
  name: string;
  label: string;
  icon: string;
  value: number;
}

import { defineStore } from 'pinia';
import type { PerpectiveDepthChoice } from '@/types/interfaces';

import iconDepth1 from '@/assets/icons/depth-1.png';
import iconDepth2 from '@/assets/icons/depth-2.png';
import iconDepth3 from '@/assets/icons/depth-3.png';
import iconDepth4 from '@/assets/icons/depth-4.png';

export default defineStore('form', {
  state: () => ({
    perspectiveDepthChoices : [
      {
        name: 'very-large',
        label: 'Very large',
        icon: iconDepth4,
        value: 1000,
      },
      {
        name: 'large',
        label: 'Large',
        icon: iconDepth3,
        value: 1300,
      },
      {
        name: 'medium',
        label: 'Medium',
        icon: iconDepth2,
        value: 1600,
      },
      {
        name: 'small',
        label: 'Small',
        icon: iconDepth1,
        value: 2000,
      },
    ] as PerpectiveDepthChoice[]
  }),
});

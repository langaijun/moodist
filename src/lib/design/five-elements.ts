export type WuXingElement = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export interface ElementPalette {
  accent: string;
  bar: string;
  bg: string;
  border: string;
  icon: string;
  label: string;
}

export const fiveElements: Record<WuXingElement, ElementPalette> = {
  earth: {
    accent: '#7A6F52',
    bar: '#C8B998',
    bg: '#F4F2E9',
    border: '#E5E0D0',
    icon: '🏔',
    label: '土',
  },
  fire: {
    accent: '#8B6B69',
    bar: '#C6A5A3',
    bg: '#F5EFEE',
    border: '#E8D8D6',
    icon: '🔥',
    label: '火',
  },
  metal: {
    accent: '#6B7280',
    bar: '#B5B8BC',
    bg: '#F5F5F5',
    border: '#E5E7EB',
    icon: '✦',
    label: '金',
  },
  water: {
    accent: '#5A7A8F',
    bar: '#9EB8C9',
    bg: '#E8EFF4',
    border: '#D4E2EC',
    icon: '💧',
    label: '水',
  },
  wood: {
    accent: '#4A6B48',
    bar: '#9BB094',
    bg: '#F0F4EF',
    border: '#D8E4D6',
    icon: '🌿',
    label: '木',
  },
};

export const categoryElementMap: Record<string, WuXingElement> = {
  animals: 'wood',
  nature: 'wood',
  noise: 'water',
  places: 'earth',
  rain: 'water',
  things: 'fire',
  transport: 'metal',
  urban: 'metal',
};

export function getElementForCategory(
  categoryId: string,
): WuXingElement | undefined {
  return categoryElementMap[categoryId];
}

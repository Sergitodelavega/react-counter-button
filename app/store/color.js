import { create } from zustand;

export const useColor = create((set) => ({
  text: 'blue',
  color: 'blue',

  setText: (text) => set({ text }),

  setColor: (color) => set({ color }),
}));


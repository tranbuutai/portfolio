import { create } from "zustand";

type HomeStore = {
  text: string;
};

type HomeAction = {
  changeText: () => void;
  initializeState: () => void;
};

const useHomeStore = create<HomeStore & HomeAction>((set) => ({
  text: "Default",
  changeText: () => set((state) => ({ text: state.text })),
  initializeState: () => set({}, true),
}));

import create from "zustand";

interface State {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkMode = create<State>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useDarkMode;

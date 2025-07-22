import { create } from "zustand";
import type { ThemeStore } from "../service/type";
import { persist } from "zustand/middleware";

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    {
      name: "task-management-theme",
    }
  )
);

export default useThemeStore;

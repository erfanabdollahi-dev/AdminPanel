import { create } from "zustand";
interface UIState {
    sidebarOpen: boolean;
    theme: "light" | "dark"; // Union type for theme options
}
interface UIActions {
    toggleSidebar: () => void;
    setSidebar: (status: boolean) => void;
    setTheme: (theme: "light" | "dark") => void;
    toggleTheme: () => void;
}

type UIStore = UIState & UIActions;
// Helper functions with TypeScript
const loadFromStorage = <T>(key: string, defaultValue: T): T => {
    const stored = localStorage.getItem(key);
    if (stored === null) return defaultValue;
    try {
        return JSON.parse(stored) as T;
    } catch {
        return defaultValue;
    }
};

const saveToStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

const useUIStore = create<UIStore>((set) => ({
    // ========== SIDEBAR STATE ==========
    sidebarOpen: true,
    // sidebar actions

    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    setSidebar: (status: boolean) => set(() => ({ sidebarOpen: status })),

    // ========== THEME STATE ==========
    theme: loadFromStorage("theme", "light"),

    // theme actions
    toggleTheme: () =>
        set((state) => {
            const newTheme = state.theme === "light" ? "dark" : "light";
            saveToStorage("theme", newTheme);
            return { theme: newTheme };
        }),
    setTheme: (theme: "light" | "dark") => set({ theme }),
}));

export default useUIStore;

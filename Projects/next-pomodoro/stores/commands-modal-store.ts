import { create } from 'zustand';
interface CommandsMenuState {
    display: boolean;
    toggle: () => void;
}

export const useCommandsMenuStore = create<CommandsMenuState>((set) => ({
    display: false,
    toggle: () =>
        set((state) => ({
            display: !state.display,
        })),
}));

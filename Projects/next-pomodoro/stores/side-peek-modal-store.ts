import { create } from 'zustand';
interface SidePeekState {
    display: boolean;
    toggle: () => void;
}

export const useSidePeekStore = create<SidePeekState>((set) => ({
    display: false,
    toggle: () =>
        set((state) => ({
            display: !state.display,
        })),
}));

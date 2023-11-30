import { create } from "zustand";

interface UseProjectsModal {
    isOpen: boolean;
    Close: () => void;
    Open: () => void;
}

const useProjectsModal = create<UseProjectsModal>((set) => ({
    isOpen: false,
    Close: () => set({ isOpen: false }),
    Open: () => set({ isOpen: true }),
}))

export default useProjectsModal
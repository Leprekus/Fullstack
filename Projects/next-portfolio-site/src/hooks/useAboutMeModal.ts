import { create } from "zustand";

interface UseAboutMeModal {
    isOpen: boolean;
    Close: () => void;
    Open: () => void;
}

const useAboutMeModal = create<UseAboutMeModal>((set) => ({
    isOpen: false,
    Close: () => set({ isOpen: false }),
    Open: () => set({ isOpen: true }),
}))

export default useAboutMeModal
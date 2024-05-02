import { create } from 'zustand'

interface AuthModalStore {
    isOpen: boolean;
    Open: () => void;
    Close: () => void;


}

const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    Open: () => set({ isOpen: true }),
    Close: () => set({ isOpen: false }),

}))

export default useAuthModal
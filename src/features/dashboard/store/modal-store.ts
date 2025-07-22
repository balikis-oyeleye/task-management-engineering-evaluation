import { create } from "zustand";
import type { ModalState } from "../service/type";

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useModalStore;

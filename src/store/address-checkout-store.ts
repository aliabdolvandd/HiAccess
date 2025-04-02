import { IAddress } from "@/api/server-api/type";
import { create } from "zustand";

type SelectedAddressState = {
  selectedAddress: IAddress | null;
  setSelectedAddress: (address: IAddress) => void;
  clearSelectedAddress: () => void;
};

export const useSelectedAddressStore = create<SelectedAddressState>((set) => ({
  selectedAddress: null,
  setSelectedAddress: (address) => set({ selectedAddress: address }),
  clearSelectedAddress: () => set({ selectedAddress: null }),
}));

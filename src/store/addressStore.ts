import { IAddress } from "@/api/server-api/type";
import { createStore } from "zustand";
import { persist } from "zustand/middleware";

export type AddressState = {
  addresses: IAddress[];
};

export type AddressActions = {
  addAddress: (newAddress: IAddress) => void;
  editAddress: (id: string, updateAddress: Partial<IAddress>) => void;
  removeAddress: (id: string) => void;
};
export type AddressStore = AddressState & AddressActions;

export const defaultAddressState: AddressState = {
  addresses: [],
};

export const createAddressStore = (
  initState: AddressState = defaultAddressState
) => {
  return createStore<AddressStore>()(
    persist(
      (set) => ({
        ...initState,

        addAddress: (newAddress) =>
          set((state) => ({
            addresses: [...state.addresses, newAddress],
          })),

        editAddress: (id, updatedAddress) =>
          set((state) => ({
            addresses: state.addresses.map((addr) =>
              addr._id === id ? { ...addr, ...updatedAddress } : addr
            ),
          })),

        removeAddress: (id) =>
          set((state) => ({
            addresses: state.addresses.filter((addr) => addr._id !== id),
          })),
      }),
      {
        name: "address-storage",
      }
    )
  );
};

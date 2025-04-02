"use client";

import { createContext, useRef, useContext } from "react";
import type { ReactNode } from "react";
import { useStore } from "zustand";
import {
  AddressStore,
  createAddressStore,
  defaultAddressState,
} from "./addressStore";

export type AddressStoreApi = ReturnType<typeof createAddressStore>;

export const AddressStoreContext = createContext<AddressStoreApi | undefined>(
  undefined
);

export interface AddressStoreProviderProps {
  children: ReactNode;
}

export const AddressStoreProvider = ({
  children,
}: AddressStoreProviderProps) => {
  const storeRef = useRef<AddressStoreApi | null>(null);
  if (!storeRef.current) {
    storeRef.current = createAddressStore(defaultAddressState);
  }

  return (
    <AddressStoreContext.Provider value={storeRef.current}>
      {children}
    </AddressStoreContext.Provider>
  );
};

export const useAddressStore = <T,>(
  selector: (store: AddressStore) => T
): T => {
  const addressStoreContext = useContext(AddressStoreContext);
  if (!addressStoreContext) {
    throw new Error(`useAddressStore must be used within AddressStoreProvider`);
  }
  return useStore(addressStoreContext, selector);
};

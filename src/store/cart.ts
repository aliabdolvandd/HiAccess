import { IShopProducts, SellerInfo } from "@/api/server-api/type";
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type OrderItem = { product: IShopProducts; productSeller: SellerInfo };
type OrderItemWithQuantity = OrderItem & { quantity: number };

export type CartState = {
  items: OrderItemWithQuantity[];
};

export type CartActions = {
  decrementItemCount: (sellerId: string) => void;
  incrementItemCount: (orderItem: OrderItem) => void;
  clearCart: () => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  items: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(
    persist(
      (set) => ({
        ...initState,
        decrementItemCount: (sellerId) =>
          set((state) => decrement(state, sellerId)),
        incrementItemCount: (orderItem) =>
          set((state) => increment(state, orderItem)),
        clearCart: () => set({ items: [] }),
      }),
      {
        name: "cart-storage",
      }
    )
  );
};

function increment(state: CartState, orderItem: OrderItem): CartState {
  const isExist = !!state.items.find(
    (item) =>
      item.productSeller.id === orderItem.productSeller.id &&
      item.product.id === orderItem.product.id
  );
  if (isExist) {
    return {
      ...state,
      items: state.items.map((item) =>
        item.productSeller.id === orderItem.productSeller.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  }
  return {
    ...state,
    items: [...state.items, { ...orderItem, quantity: 1 }],
  };
}

function decrement(state: CartState, sellerId: string): CartState {
  const item = state.items.find((item) => item.productSeller.id === sellerId);
  if (!item) {
    throw new Error("item not in basket");
  }
  const shouldRemove = item.quantity <= 1;
  if (shouldRemove) {
    return {
      ...state,
      items: state.items.filter((item) => item.productSeller.id !== sellerId), // `!==` درست شد
    };
  }
  return {
    ...state,
    items: state.items.map((item) =>
      item.productSeller.id === sellerId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  };
}

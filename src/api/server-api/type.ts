import { ReactNode } from "react";
export type RegisterResponse = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: IUser;
  profile: IProfile;
};
export interface IProfile {
  user: string;
  addressList: IAddress[];
  createdAt: string;
  updatedAt: string;
  id: string;
}
export interface IAddress {
  location: [number, number];
  street: string;
  city: string;
  postalCode: string;
  _id: string;
}
export type LoginResponse = Omit<RegisterResponse, "profile">;

interface Timestamp {
  createdAt: string;
  updatedAt: string;
}
export interface IPropertyOption {
  id: string;
  value: string;
  label: string;
}
export interface IProperty extends Timestamp {
  id: string;
  name: string;
  type: string;
  label: string;
  options?: IPropertyOption[];
}

export interface ICity {
  name: string;
  code: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface PaginatedResultApi<T> {
  results: Array<T>;
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
}
export type ServerPageProps = {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export interface Column<T extends { id?: string; _id?: string }> {
  title: string;
  render: (row: T) => ReactNode;
}
export interface ICategory extends Timestamp {
  titleEn: string;
  titleFa: string;
  slug: string;
  returnReasonAlert: string;
  properties: IProperty[];
  parent?: ICategory;
  id: string;
  icon?: string;
}
export interface IBrand extends Timestamp {
  titleFa: string;
  titleEn: string;
  slug: string;
  logo: string;
  id: string;
}
export interface IBadge extends Timestamp {
  icon: string;
  title: string;
  id: string;
}

export interface IColor extends Timestamp {
  title: string;
  hexCode: string;
  id: string;
}

export interface IPropertyValue {
  name: string;
  title: string;
  value: string;
  id: string;
}
export interface IProduct extends Timestamp {
  images: {
    main: string;
    list: string[];
  };
  colors: IColor[];
  code: number;
  titleFa: string;
  titleEn: string;
  status: "marketable" | "unmarketable";
  badges: [];
  category: ICategory;
  brand: IBrand;
  review: string;
  specifications: IPropertyValue[];
  expert_review: string;
  id: string;
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: 1 | 2 | 3;
  isActive: boolean;
  id: string;
}
export interface ISeller extends Timestamp {
  user: IUser;
  name: string;
  slug: string;
  id: string;
}

export enum OrderStatus {
  Pending = "pending",
  Processing = "processing",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}
export interface IOrder {
  shippingAddress: {
    street: string;
    city: string;
    postalCode: string;
    location: [number, number];
  };
  user: IUser;
  deliveryDate: string;
  orderStatus: OrderStatus;
  orderItems: [IOrderItem];
  createdAt: string;
  updatedAt: string;
  id: string;
}
export interface IOrderItem {
  id: string;
  productSeller: {
    product: IProduct;
    seller: string;
    price: number;
    count: number;
    discount: number;
    id: string;
  };
  quantity: number;
  order: string;
  seller: ISeller;
}
export interface SellerInfo {
  lastPrice: number;
  price: number;
  createdAt: string;
  discount: number;
  count: number;
  id: string;
  seller: ISeller;
}

export interface IShopProducts extends Timestamp {
  images: {
    main: string;
    list: string[];
  };
  colors: IColor[];
  code: number;
  titleFa: string;
  titleEn: string;
  status: "marketable" | "unmarketable";
  badges: IBadge;
  category: ICategory;
  brand: IBrand;
  review: string;
  specifications: IPropertyValue[];
  expert_review: string;
  id: string;
  bestSeller?: SellerInfo;
}

export interface IComments extends Timestamp {
  product: number;
  user: IUser;
  text: string;
  rating: number;
  id: string;
}
interface IUserProfile {
  firstName: string;
  lastName: string;
  email: string;
  role: 1 | 2 | 3;
  isActive: boolean;
  id: string;
}
interface IUserProfile {
  user: string;
  addressList: IAddress[];
  nationCode: string;
  mobile: string;
  birthday: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
export interface IUserShop extends Timestamp {
  user: IUserProfile;
  profile: IUserProfile;
}
export interface IGetProductsBySeller extends Timestamp {
  lastPrice: number;
  discount: number;
  count: number;
  id: string;
  seller: ISeller;
}

export interface ISellerOrders {
  shippingAddress: {
    street: string;
    city: string;
    postalCode: string;
    location: [number, number];
  };
  user: IUser;
  deliveryDate: string;
  orderStatus: OrderStatus;
  orderItems: [ISellerOrderItem];
  createdAt: string;
  updatedAt: string;
  id: string;
}
export interface ISellerOrderItem {
  id: string;
  productSeller: {
    product: string;
    seller: string;
    price: number;
    count: number;
    discount: number;
    id: string;
  };
  quantity: number;
  order: string;
  seller: ISeller;
}

export interface ICreateOrder {
  shippingAddress: {
    street: string;
    city: string;
    postalCode: string;
    location: [number, number];
  };
  deliveryDate: string;
  orderItems: {
    productSeller: string;
    quantity: number;
  }[]; // 👈 حتماً اینجا باید [] باشه
}

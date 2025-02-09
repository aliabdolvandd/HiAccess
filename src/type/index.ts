import { ReactNode } from "react";

// for testing section best discount in home page
export interface IDiscount {
  id: number;
  image: string;
  title: string;
  discount?: string;
  rating?: number;
  originalPrice: string;
  discountedPrice: string;
  price?: string;
}

export interface IUsefulLink {
  label: string;
  href: string;
}

export interface ISocialMedia {
  icon: ReactNode;
  href: string;
}
export interface IProductCard {
  code: number;
  image: string;
  price: number;
  discount: number;
  discountPrice: number;
  badge: string;
  rate: number;
  title: string;
}

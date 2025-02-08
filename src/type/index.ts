import { ReactNode } from "react";

export interface IBanner {
  id: number;
  image: string;
  title: string;
  description?: string;
  buttonText: string;
}
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
export interface AuthProps {
  role: number;
}

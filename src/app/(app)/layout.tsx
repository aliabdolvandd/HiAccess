import { AppLayout } from "@/components/layout";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;

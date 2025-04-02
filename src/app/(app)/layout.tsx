import { AppLayout } from "@/components/layout";
import React, { ComponentProps } from "react";

const layout = ({ children }: ComponentProps<"div">) => {
  return <AppLayout> {children} </AppLayout>;
};
export default layout;

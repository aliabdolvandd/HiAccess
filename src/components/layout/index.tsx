import { ComponentProps } from "react";
import Header from "../Header/Header";
import { Box } from "@mui/material";

export const AppLayout = ({ children }: ComponentProps<"div">) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
    </>
  );
};

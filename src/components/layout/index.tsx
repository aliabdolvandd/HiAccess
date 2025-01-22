import { ComponentProps } from "react";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import Footer from "../Footer";

export const AppLayout = ({ children }: ComponentProps<"div">) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

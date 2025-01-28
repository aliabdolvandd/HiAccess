import { ComponentProps } from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer";

export const AppLayout = ({ children }: ComponentProps<"div">) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}

      <Header />

      <Box>{children}</Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

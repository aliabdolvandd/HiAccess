import { ComponentProps } from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer";

export const AppLayout = ({ children }: ComponentProps<"div">) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Header />

      <Box
        sx={{
          flex: 1,
          padding: 2,
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

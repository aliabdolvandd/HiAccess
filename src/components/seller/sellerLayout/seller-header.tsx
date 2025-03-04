"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Search from "./seller-search";
import MenuButton from "./menuButton";
import NavbarBreadcrumbs from "./NavbarBreadcrumbs";

export default function SellerHeader() {
  return (
    <Stack
      direction="row-reverse"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        height: "64px",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "Complementary2.main",
        paddingX: 2,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row-reverse" sx={{ gap: 2 }}>
        <Search />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
      </Stack>
    </Stack>
  );
}

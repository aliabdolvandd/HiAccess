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
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: "primary.main",
        padding: "10px 8px",
      }}
      spacing={105}
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

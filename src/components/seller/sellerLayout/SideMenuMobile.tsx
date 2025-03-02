"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MenuButton from "./menuButton";
import MenuContent from "./MenuContent";
import CardAlert from "./CardAlert";
import { useDrawer } from "./seller-drawer-provider";
import { Slide } from "@mui/material";

export default function SideMenuMobile() {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Drawer
      disableScrollLock
      variant="temporary"
      anchor="right"
      onClose={toggleDrawer}
      open={isDrawerOpen}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: "none",
          backgroundColor: "background.paper",
          transition: "ease-in-out 300ms",
        },
      }}
    >
      <Slide direction="right" in={isDrawerOpen}>
        <Stack
          sx={{
            maxWidth: "300px",
            height: "100%",
          }}
        >
          <Stack direction="row-reverse" sx={{ p: 2, pb: 0, gap: 1 }}>
            <Stack
              direction="row-reverse"
              sx={{ gap: 1, alignItems: "center", flexGrow: 1, p: 1 }}
            >
              <Avatar
                sizes="small"
                alt="dashboard"
                src="/static/images/avatar/7.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <Typography component="p" variant="h6">
                پنل فروشنده
              </Typography>
            </Stack>
            <Button sx={{ mr: "auto" }} onClick={toggleDrawer}>
              بستن منو
            </Button>
            <MenuButton showBadge>
              <NotificationsRoundedIcon />
            </MenuButton>
          </Stack>
          <Divider />

          {/* Menu Content */}
          <Stack sx={{ flexGrow: 1 }}>
            <MenuContent />
            <Divider />
          </Stack>

          {/* Alerts & Logout */}
          <CardAlert />
          <Stack sx={{ p: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<LogoutRoundedIcon />}
            >
              Logout
            </Button>
          </Stack>
        </Stack>
      </Slide>
    </Drawer>
  );
}

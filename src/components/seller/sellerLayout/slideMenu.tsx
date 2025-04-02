import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MenuContent from "./MenuContent";
import CardAlert from "./CardAlert";
import { Button, Typography } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { logoutUserAction } from "@/action/auth/logout";
const drawerWidth = 300;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  zIndex: 1100,
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  return (
    <Drawer variant="permanent">
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuContent />
        <CardAlert />
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 2,
          gap: 1,
        }}
      >
        <Button
          onClick={() => logoutUserAction()}
          color="error"
          fullWidth
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            textTransform: "none",
          }}
        >
          <LogoutRoundedIcon fontSize="small" />
          <Typography>خروج از حساب کاربری</Typography>
        </Button>
      </Box>
    </Drawer>
  );
}

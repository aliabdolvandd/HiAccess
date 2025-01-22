import React from "react";
import { Box, Stack, Typography, Menu, MenuItem } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import theme from "@/theme";

interface NavbarProps {
  navItems: { label: string; submenu: string[] }[];
  anchor: HTMLElement | null;
  currentSubmenu: string[];
  handleClick: (
    event: React.MouseEvent<HTMLElement>,
    submenu: string[]
  ) => void;
  handleClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  navItems,
  anchor,
  currentSubmenu,
  handleClick,
  handleClose,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" justifyContent="center">
        {navItems.map((item, index) => (
          <Box key={index}>
            <Typography
              component="span"
              sx={{
                color: "black",
                fontSize: 14,
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                mx: 1,
                cursor: "pointer",
              }}
              onClick={(event) => handleClick(event, item.submenu)}
            >
              {item.label}
              <ExpandMoreRounded />
            </Typography>
          </Box>
        ))}
      </Stack>
      <Box
        sx={{
          borderBottom: "1px solid black",
          width: 600,
          position: "absolute",
          bottom: -10,
          px: 15,
          bgcolor: theme.palette.Complementary.main,
        }}
      ></Box>

      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
        sx={{ mt: 1 }}
      >
        {currentSubmenu.map((subItem, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {subItem}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Navbar;

"use client";

import theme from "@/theme";
import {
  PersonOutline,
  SearchOutlined,
  ProductionQuantityLimitsOutlined,
  ExpandMoreRounded,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const navItems = ["موبایل و تبلت", "لپ تاپ", "لوازم جانبی", "فعلا مشخص نیست"];
const iconList = [
  { ariaLabel: "search", Icon: SearchOutlined },
  { ariaLabel: "cart", Icon: ProductionQuantityLimitsOutlined },
  { ariaLabel: "account", Icon: PersonOutline },
];

const Header = () => {
  return (
    <AppBar
      component="nav"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        boxShadow: "none",
        pt: 1,
        height: 98,
        position: "relative",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src={"/logo.png"} width={130} height={40} alt="" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction="row" justifyContent="center">
            {navItems.map((item) => (
              <Typography
                key={item}
                component="span"
                sx={{
                  color: "black",
                  fontSize: 14,
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  mx: 1,
                }}
              >
                {item}
                <ExpandMoreRounded />
              </Typography>
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
        </Box>
        <Box sx={{ display: "flex" }}>
          {iconList.map((icon, item) => (
            <IconButton
              key={item}
              aria-label={icon.ariaLabel}
              sx={{
                color: "black",
              }}
            >
              <icon.Icon />
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

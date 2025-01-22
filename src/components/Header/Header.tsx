"use client";

import theme from "@/theme";
import {
  PersonOutline,
  SearchOutlined,
  ProductionQuantityLimitsOutlined,
} from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./Navbar";

interface NavItem {
  label: string;
  submenu: string[];
}

const navItems: NavItem[] = [
  { label: "موبایل و تبلت", submenu: ["گوشی موبایل", "تبلت", "سیم کارت"] },
  { label: "لپ تاپ", submenu: ["لپ تاپ ایسوس", "لپ تاپ لنوو", "لپ تاپ اپل"] },
  { label: "لوازم جانبی", submenu: ["هدفون", "ماوس", "کیبورد"] },
  { label: "فعلا مشخص نیست", submenu: [] },
];

const iconList = [
  { ariaLabel: "search", Icon: SearchOutlined },
  { ariaLabel: "cart", Icon: ProductionQuantityLimitsOutlined },
  { ariaLabel: "account", Icon: PersonOutline },
];

const Header: React.FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [currentSubmenu, setCurrentSubmenu] = useState<string[]>([]);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    submenu: string[]
  ) => {
    setAnchor(event.currentTarget);
    setCurrentSubmenu(submenu);
  };

  const handleClose = () => {
    setAnchor(null);
    setCurrentSubmenu([]);
  };

  return (
    <AppBar
      component="nav"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(8px)",
        boxShadow: "none",
        pt: 1,
        height: 98,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.drawer + 1,
        "&:hover": { bgcolor: "rgba(255, 255, 255, 0.8)" },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src={"/logo.png"} width={130} height={40} alt="" />

        <Navbar
          navItems={navItems}
          anchor={anchor}
          currentSubmenu={currentSubmenu}
          handleClick={handleClick}
          handleClose={handleClose}
        />

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

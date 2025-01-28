"use client";

import React, { useState } from "react";
import theme from "@/theme";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import {
  SearchOutlined,
  ProductionQuantityLimitsOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const navItems = [
  {
    label: "موبایل و تبلت",
    submenu: ["گوشی موبایل", "تبلت", "سیم کارت", "برند سامسونگ", "برند اپل"],
  },
  {
    label: "لپ تاپ",
    submenu: [
      "لپ تاپ ایسوس",
      "لپ تاپ لنوو",
      "لپ تاپ اپل",
      "برند دل",
      "برند اچ‌پی",
    ],
  },
  {
    label: "لوازم جانبی",
    submenu: ["هدفون", "ماوس", "کیبورد", "پاوربانک", "کابل شارژ"],
  },
  { label: "فعلا مشخص نیست", submenu: [] },
];

const iconList = [
  { ariaLabel: "search", Icon: SearchOutlined },
  { ariaLabel: "cart", Icon: ProductionQuantityLimitsOutlined, href: "/cart" },
  { ariaLabel: "account", Icon: PersonOutline, href: "/profile" },
];

function Header() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
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
        <Link href={"/"} passHref>
          <Image src={"/logo.png"} width={130} height={40} alt="Logo" />
        </Link>
        <Navbar
          navItems={navItems}
          anchor={anchor}
          currentSubmenu={currentSubmenu}
          handleClick={handleClick}
          handleClose={handleClose}
        />

        <Box sx={{ display: "flex" }}>
          {iconList.map((icon, index) => (
            <React.Fragment key={index}>
              {icon.href ? (
                <Link href={icon.href} passHref>
                  <IconButton
                    aria-label={icon.ariaLabel}
                    sx={{
                      color: "black",
                    }}
                  >
                    <icon.Icon />
                  </IconButton>
                </Link>
              ) : (
                <IconButton
                  aria-label={icon.ariaLabel}
                  sx={{
                    color: "black",
                  }}
                >
                  <icon.Icon />
                </IconButton>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

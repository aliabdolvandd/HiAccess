"use client";

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Drawer,
  useTheme,
} from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

import profileIcon from "@/svg/profileIcon";
import CartPopover from "@/components/shop/Cart/CartPopover";
import SearchDialog from "@/components/shop/search";
import SearchIcon from "@/svg/searchIcon";
import NavbarMobile from "./NavbarMobile";

const iconList = [
  { type: "search", Icon: SearchIcon },
  { Popover: <CartPopover />, href: "/cart" },
  { Icon: profileIcon, href: "/profile" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          bgcolor: isScrolled ? "Complementary2.main" : "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(8px)",
          boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s ease",
          pt: { xs: 0.5, md: 1 },
          height: { xs: 60, md: 98 },
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, md: 1 },
            }}
          >
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "Complementary2.main",
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                }}
                onClick={toggleMobile}
              >
                <MenuRounded />
              </IconButton>
            </Box>

            <Link href={"/"} passHref>
              <Box
                sx={{
                  width: { xs: 100, md: 130 },
                  height: 40,
                  position: "relative",
                }}
              >
                <Image
                  src={"/logo.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Logo"
                />
              </Box>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Navbar />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, md: 1 },
            }}
          >
            {iconList.map((icon, index) => (
              <React.Fragment key={index}>
                {icon.type === "search" && icon.Icon ? (
                  <IconButton
                    sx={{
                      color: "white",
                      "&:hover": { color: "Complementary2.main" },
                    }}
                    onClick={() => setSearchOpen(true)}
                  >
                    <icon.Icon />
                  </IconButton>
                ) : icon.Popover ? (
                  icon.Popover
                ) : icon.href && icon.Icon ? (
                  <Link href={icon.href} passHref>
                    <IconButton
                      sx={{
                        color: "white",
                        "&:hover": { color: "Complementary2.main" },
                      }}
                    >
                      <icon.Icon />
                    </IconButton>
                  </Link>
                ) : null}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={mobileOpen}
        onClose={toggleMobile}
        ModalProps={{ keepMounted: true }}
        sx={{
          zIndex: theme.zIndex.drawer + 2,
          "& .MuiDrawer-paper": {
            left: 0,
            right: "auto",
            width: 280,
            boxSizing: "border-box",
            position: "fixed",
            top: 0,
            bottom: 0,
            overflowX: "hidden",
            transform: "none !important",
          },
          "& .MuiDrawer-root": {
            // direction: "rtl",
            left: 0,
            right: "auto",
          },
          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <NavbarMobile onClose={toggleMobile} />
      </Drawer>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Header;

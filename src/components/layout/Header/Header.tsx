"use client";

import React, { useEffect, useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Drawer } from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Image from "next/image";
import Link from "next/link";
import theme from "@/theme";
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
          bgcolor: isScrolled
            ? "Complementary2.main"
            : "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
          pt: 1,
          height: 98,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.drawer + 1,
          "&:hover": { bgcolor: "Complementary2.main" },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton sx={{ color: "black" }} onClick={toggleMobile}>
                <MenuRounded />
              </IconButton>
            </Box>

            <Link href={"/"} passHref>
              <Image src={"/logo.png"} width={130} height={40} alt="Logo" />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Navbar />
          </Box>

          <Box sx={{ display: "flex" }}>
            {iconList.map((icon, index) => (
              <React.Fragment key={index}>
                {icon.type === "search" && icon.Icon ? (
                  <IconButton
                    sx={{ color: "black" }}
                    onClick={() => setSearchOpen(true)}
                  >
                    <icon.Icon />
                  </IconButton>
                ) : icon.Popover ? (
                  icon.Popover
                ) : icon.href && icon.Icon ? (
                  <Link href={icon.href} passHref>
                    <IconButton sx={{ color: "black" }}>
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
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobile}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          zIndex: theme.zIndex.drawer + 2,
        }}
      >
        <NavbarMobile onClose={toggleMobile} />
      </Drawer>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Header;

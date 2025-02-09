"use client";

import React, { useEffect, useState } from "react";
import theme from "@/theme";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import profileIcon from "@/svg/profileIcon";
import cartIcon from "@/svg/cartIcon";
import searchIcon from "@/svg/searchIcon";

const iconList = [
  { ariaLabel: "search", Icon: searchIcon },
  { ariaLabel: "cart", Icon: cartIcon, href: "/cart" },
  { ariaLabel: "profile", Icon: profileIcon, href: "/profile" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
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
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href={"/"} passHref>
          <Image src={"/logo.png"} width={130} height={40} alt="Logo" />
        </Link>
        <Navbar />

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

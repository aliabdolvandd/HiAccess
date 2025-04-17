"use client";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import { ExpandLess, ExpandMore, CloseRounded } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "موبایل و تبلت",
    slug: "mobile-tablet",
    submenu: [
      { label: "گوشی هوشمند", slug: "smartphones" },
      { label: "تبلت", slug: "tablet" },
      { label: "ساعت هوشمند", slug: "smartwatches" },
      { label: "لوازم جانبی موبایل", slug: "mobile-accessories" },
    ],
  },
  {
    label: "لپ تاپ",
    slug: "lp",
    submenu: [
      { label: "لپ تاپ دانشجویی", slug: "student-laptops" },
      { label: "لپ تاپ گیمینگ", slug: "gaming-laptops" },
      { label: "لپ تاپ اداری", slug: "office-laptops" },
      { label: "لوازم جانبی لپ تاپ", slug: "laptop-accessories" },
    ],
  },
  {
    label: "لوازم جانبی",
    slug: "accessories",
    submenu: [
      { label: "هدفون و هندزفری", slug: "headphones-earphones" },
      { label: "ماوس و کیبورد", slug: "mouse-keyboard" },
      { label: "پاوربانک", slug: "powerbanks" },
      { label: "کابل و شارژر", slug: "cables-chargers" },
    ],
  },
  {
    label: "صوتی و تصویری",
    slug: "audio-video",
    submenu: [
      { label: "تلویزیون", slug: "tv" },
      { label: "سینمای خانگی", slug: "home-theater" },
      { label: "اسپیکر", slug: "speakers" },
      { label: "هدفون", slug: "headphones" },
    ],
  },
];

interface NavbarMobileProps {
  onClose: () => void;
}

const NavbarMobile = ({ onClose }: NavbarMobileProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleClick = (slug: string) => {
    setOpenItem((prev) => (prev === slug ? null : slug));
  };

  return (
    <Box
      sx={{
        width: 280,
        px: 2,
        pt: 2,
        bgcolor: "Complementary2.main",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography fontWeight={600}>منو</Typography>
        <IconButton onClick={onClose}>
          <CloseRounded />
        </IconButton>
      </Box>
      <Divider />

      <List component="nav">
        {navItems.map((item, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick(item.slug)}>
                <ListItemText primary={item.label} />
                {openItem === item.slug ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openItem === item.slug} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.submenu.map((sub, subIndex) => (
                  <ListItem key={subIndex} sx={{ pl: 4 }}>
                    <Link
                      href={`/category/${sub.slug}`}
                      passHref
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItemButton onClick={onClose}>
                        <ListItemText primary={sub.label} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default NavbarMobile;

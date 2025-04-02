"use client";

import { useState } from "react";
import { Box, Stack, Typography, Menu, MenuItem } from "@mui/material";
import { ExpandMoreRounded, ExpandLessRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import theme from "@/theme";

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

const Navbar = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [currentSubmenu, setCurrentSubmenu] = useState<
    { label: string; slug: string }[]
  >([]);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    submenu: { label: string; slug: string }[]
  ) => {
    setAnchor(event.currentTarget);
    setCurrentSubmenu(submenu);
  };

  const handleClose = () => {
    setAnchor(null);
    setCurrentSubmenu([]);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
                transition: "color 0.3s",
                "&:hover": { color: theme.palette.primary.main },
              }}
              onClick={(event) => handleClick(event, item.submenu)}
            >
              {item.label}
              {anchor && currentSubmenu === item.submenu ? (
                <ExpandLessRounded sx={{ transition: "transform 0.3s" }} />
              ) : (
                <ExpandMoreRounded sx={{ transition: "transform 0.3s" }} />
              )}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* sub menu*/}
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
        sx={{
          mt: 1,
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 600,
            overflow: "hidden",
            borderRadius: 2,
            bgcolor: "Complementary2.main",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              p: 2,
              maxHeight: 300,
              overflowY: "auto",
            }}
          >
            {currentSubmenu.map((subItem, index) => (
              <MenuItem
                key={index}
                onClick={handleClose}
                sx={{
                  flex: "0 0 calc(50% - 8px)",
                  fontSize: 14,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <Link
                  href={`/category/${subItem.slug}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {subItem.label}
                </Link>
              </MenuItem>
            ))}
          </Box>
        </motion.div>
      </Menu>
    </Box>
  );
};

export default Navbar;

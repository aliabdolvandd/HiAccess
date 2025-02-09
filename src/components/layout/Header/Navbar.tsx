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
  {
    label: "هدفون",
    submenu: ["هدفون بی‌سیم", "هدفون گیمینگ", "هدفون ورزشی"],
  },
];
const Navbar = () => {
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
                  href={`/category/${subItem}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {subItem}
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

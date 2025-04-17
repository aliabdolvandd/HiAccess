"use client";

import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  ExpandMoreRounded,
  ExpandLessRounded,
  MenuRounded,
} from "@mui/icons-material";
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* دسکتاپ */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
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
                  transition: "color 0.3s",
                  "&:hover": { color: theme.palette.primary.main },
                }}
                onClick={(event) => handleClick(event, item.submenu)}
              >
                {item.label}
                {anchor && currentSubmenu === item.submenu ? (
                  <ExpandLessRounded />
                ) : (
                  <ExpandMoreRounded />
                )}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* sub menu (desktop) */}
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

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton onClick={toggleMobile}>
          <MenuRounded />
        </IconButton>

        <Drawer anchor="left" open={mobileOpen} onClose={toggleMobile}>
          <Box sx={{ width: 250, p: 2 }}>
            <List>
              {navItems.map((item, index) => (
                <Box key={index}>
                  <ListItem
                    component="button"
                    onClick={() => setExpandedIndex(index)}
                  >
                    <ListItemText primary={item.label} />
                    {expandedIndex === index ? (
                      <ExpandLessRounded />
                    ) : (
                      <ExpandMoreRounded />
                    )}
                  </ListItem>
                  <Collapse
                    in={expandedIndex === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.submenu.map((subItem, subIndex) => (
                        <ListItem
                          key={subIndex}
                          sx={{ pl: 4 }}
                          onClick={toggleMobile}
                        >
                          <Link
                            href={`/category/${subItem.slug}`}
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                              fontSize: 14,
                            }}
                          >
                            {subItem.label}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;

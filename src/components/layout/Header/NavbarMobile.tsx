import {
  Box,
  IconButton,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  List,
} from "@mui/material";
import {
  CloseRounded,
  ExpandLess,
  ExpandMore,
  Smartphone,
  Laptop,
  Headphones,
  Tv,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

import {
  StyledContainer,
  StyledHeader,
  StyledDivider,
  StyledList,
  StyledListItemButton,
  StyledSubListItemButton,
  StyledIconWrapper,
} from "./NavbarMobileStyle";
import { useState } from "react";

const navItems = [
  {
    label: "موبایل و تبلت",
    slug: "mobile-tablet",
    icon: <Smartphone />,
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
    icon: <Laptop />,
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
    icon: <Headphones />,
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
    icon: <Tv />,
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
    <StyledContainer>
      <StyledHeader>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Image src="/logo.png" width={100} height={30} alt="Logo" />
          <Typography variant="h6" fontWeight={600}>
            منو
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <CloseRounded />
        </IconButton>
      </StyledHeader>
      <StyledDivider />

      <List component="nav">
        {navItems.map((item, index) => (
          <Box key={index}>
            <ListItem>
              <StyledListItemButton onClick={() => handleClick(item.slug)}>
                {item.icon && (
                  <StyledIconWrapper>{item.icon}</StyledIconWrapper>
                )}
                <ListItemText primary={item.label} />
                {openItem === item.slug ? <ExpandLess /> : <ExpandMore />}
              </StyledListItemButton>
            </ListItem>
            <Collapse in={openItem === item.slug} timeout="auto" unmountOnExit>
              <StyledList as="div">
                {item.submenu.map((sub, subIndex) => (
                  <ListItem key={subIndex} sx={{ pr: 4 }}>
                    <Link
                      href={`/category/${sub.slug}`}
                      passHref
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <StyledSubListItemButton onClick={onClose}>
                        <ListItemText primary={sub.label} />
                      </StyledSubListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </StyledList>
            </Collapse>
          </Box>
        ))}
      </List>
    </StyledContainer>
  );
};

export default NavbarMobile;

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import {
  Category as CategoryIcon,
  ShoppingBasket as ShoppingBasketIcon,
  Smartphone as SmartphoneIcon,
  Money,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainListItems = [
  { title: "داشبورد", icon: <SmartphoneIcon />, href: "/seller" },
  {
    title: "مدیریت محصولات",
    icon: <SmartphoneIcon />,
    href: "/seller/manage-products",
  },
  { title: "سفارشات", icon: <ShoppingBasketIcon />, href: "/seller/orders" },
  { title: "تعیین قیمت", icon: <Money />, href: "/seller/set-price" },
  {
    title: "دسته‌بندی کالاها",
    icon: <CategoryIcon />,
    href: "/seller/category",
  },
];

const secondaryListItems = [
  { text: "تنظیمات", icon: <SettingsRoundedIcon /> },
  { text: "درباره ما", icon: <InfoRoundedIcon /> },
  { text: "انتقادات و پیشنهادات", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const pathname = usePathname();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between", pt: 2 }}>
      <List dense>
        {mainListItems.map((item, index) => {
          const isSelected = pathname === item.href;

          return (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                href={item.href}
                selected={isSelected}
                sx={{
                  borderRadius: "8px",
                  "&.Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: isSelected ? "white" : "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

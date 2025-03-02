"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Category as CategoryIcon,
  ShoppingBasket as ShoppingBasketIcon,
  Smartphone as SmartphoneIcon,
  Money,
} from "@mui/icons-material";
import { useDrawer } from "./seller-drawer-provider";
import SellerHeader from "./seller-header";

const menuItems = [
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
const SellerNavbar = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "primary.main", color: "#fff" }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            داشبورد مدیریت
          </Typography>
          <Avatar alt="user" src="/prof.png" />
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="persistent"
        anchor="right"
        open={isDrawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            left: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            backgroundColor: "primary.main",
            color: "#fff",
          }}
        >
          <Typography variant="h6">منوی مدیریت</Typography>
          <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* User details */}
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <Avatar
            alt="user photo"
            src="/prof.png"
            sx={{ width: 64, height: 64, margin: "0 auto" }}
          />
          <Typography variant="h6" sx={{ marginTop: 1 }}>
            user name
          </Typography>
          <Typography variant="body2" color="textSecondary">
            user mail
          </Typography>
        </div>

        {/* List */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.title}
              component="a"
              href={item.href}
              sx={{
                color: "#000",
                cursor: "pointer",
                "&:hover": { bgcolor: "neutral.main" },
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SellerNavbar;

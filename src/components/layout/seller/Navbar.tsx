"use client";
import React, { useState } from "react";
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
} from "@mui/icons-material";

const menuItems = [
  {
    title: "مدیریت محصولات",
    icon: <SmartphoneIcon />,
    href: "/seller/manage-products",
  },
  { title: "سفارشات", icon: <ShoppingBasketIcon />, href: "/seller/orders" },
  {
    title: "دسته‌بندی کالاها",
    icon: <CategoryIcon />,
    href: "/seller/category",
  },
];

const SellerNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Navbar*/}
      <AppBar position="static" sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            داشبورد مدیریت
          </Typography>
          <Avatar alt="user" src="/images/avatar/man.png" />
        </Toolbar>
      </AppBar>

      {/* Menu*/}
      <Drawer
        variant="persistent"
        anchor="right"
        open={isDrawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            overflowX: "hidden",
            transition: "transform 0.3s ease",
            transform: isDrawerOpen ? "translateX(0)" : "translateX(240px)",
            left: 0,
            top: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          <Typography variant="h6">منوی مدیریت</Typography>
          <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* use details*/}
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <Avatar
            alt="user photo"
            src="/images/avatar/man.png"
            sx={{ width: 64, height: 64, margin: "0 auto" }}
          />
          <Typography variant="h6" sx={{ marginTop: 1 }}>
            user name
          </Typography>
          <Typography variant="body2" color="textSecondary">
            user mail
          </Typography>
        </div>

        {/*list*/}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.title}
              component="a"
              href={item.href}
              sx={{
                color: "#000",
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#fff",
                  cursor: "pointer",
                },
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

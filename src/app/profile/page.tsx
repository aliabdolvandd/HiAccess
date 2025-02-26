"use client";
import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Profile from "@/components/ProfileSection/profile";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Link from "next/link";

const menuItems = [
  { text: "حساب کاربری", icon: <AccountCircleIcon />, href: "/profile/detail" },
  { text: "سفارش‌ها", icon: <ShoppingCartIcon />, href: "/profile/order" },
  { text: "آدرس‌ها", icon: <LocationOnIcon />, href: "/profile/address" },
  { text: "علاقه‌مندی‌ها", icon: <FavoriteIcon />, href: "/profile/wishList" },
  { text: "نظرات", icon: <CommentIcon />, href: "/profile/comments" },
];

const UserProfilePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        width: "100%",
        maxWidth: 330,
        bgcolor: "#fff",
        boxShadow: 2,
        borderRadius: 2,
        mt: 15,
      }}
    >
      <Profile />
      <List sx={{ width: "100%" }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href}
              color="black"
              style={{ textDecoration: "none" }}
            >
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {item.icon}
                  <Typography variant="body1" fontWeight="bold">
                    {item.text}
                  </Typography>
                </Box>
                <IconButton color="default">
                  <NavigateBeforeIcon />
                </IconButton>
              </ListItem>
            </Link>
            <Divider />
          </React.Fragment>
        ))}
      </List>

      <Button
        variant="outlined"
        color="error"
        sx={{ width: "100%", marginTop: 3, border: "none" }}
      >
        <ExitToAppIcon sx={{ marginRight: 1 }} />
        خروج از حساب کاربری
      </Button>
    </Box>
  );
};

export default UserProfilePage;

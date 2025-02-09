import { Box, Typography } from "@mui/material";
import React from "react";
import UsefulLink from "./UsefulLinks";
import SocialMediaList from "./SocialMedia";
import EmailIcon from "@/svg/emailIcon";
import TellIcon from "@/svg/tellIcon";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "#fff",
        padding: "2rem 1rem",
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          padding: "20px 50px",
        }}
      >
        {/* About us*/}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" gutterBottom pb={6}>
            درباره ما
          </Typography>
          <Typography variant="body2">
            ما یک فروشگاه آنلاین هستیم که بهترین محصولات را با بهترین قیمت‌ها
            ارائه می‌دهیم.
          </Typography>
          <SocialMediaList />
        </Box>

        <UsefulLink />

        {/* Contact us*/}
        <Box>
          <Typography variant="h6" gutterBottom pb={8}>
            تماس با ما
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <EmailIcon />
            <Typography variant="body2"> info@example.com</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TellIcon />
            <Typography variant="body2">۰۲۱ - ۱۲۳۴۵۶۷۸۹</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #ddd",
          marginTop: "2rem",
          paddingTop: "1rem",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} تمام حقوق محفوظ است.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

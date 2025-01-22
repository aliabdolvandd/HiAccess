import { Box, Typography } from "@mui/material";
import React from "react";
const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        color: "#333",
        padding: "2rem 1rem",
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* About us*/}
        <Box>
          <Typography variant="h6" gutterBottom>
            درباره ما
          </Typography>
          <Typography variant="body2">
            ما یک فروشگاه آنلاین هستیم که بهترین محصولات را با بهترین قیمت‌ها
            ارائه می‌دهیم.
          </Typography>
        </Box>

        {/* Contact us*/}
        <Box>
          <Typography variant="h6" gutterBottom>
            تماس با ما
          </Typography>
          <Typography variant="body2">ایمیل: info@example.com</Typography>
          <Typography variant="body2">تلفن : 021-123456789</Typography>
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
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} تمام حقوق محفوظ است.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

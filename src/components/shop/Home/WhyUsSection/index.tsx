"use client";
import SendIcon from "@/svg/sendIcon";
import { Box, Typography } from "@mui/material";
import WarrantyIcon from "@/svg/warrantyIcon";
import PaymentIcon from "@/svg/paymentIcon";
import SupportIcon from "@/svg/supportIcon";
import { motion } from "framer-motion";

const options = [
  { icon: <SendIcon />, title: "ارسال رایگان" },
  { icon: <WarrantyIcon />, title: "1 هفته گارانتی بازگشت کالا" },
  { icon: <PaymentIcon />, title: "پرداخت امن" },
  { icon: <SupportIcon />, title: "پشتیبانی 24 ساعته" },
];

export default function WhyUsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        bgcolor: "#fff",
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 4 },
          width: "90%",
          flexWrap: "wrap",
        }}
      >
        {options.map((option, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
              bgcolor: "#f9f9f9",
              borderRadius: 3,
              padding: 3,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              width: {
                xs: "calc(50% - 8px)",
                sm: "calc(33.33% - 16px)",
                md: "220px",
              },
              height: { xs: "150px", md: "160px" },
              textAlign: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
                bgcolor: "#fff",
              },
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Box
              sx={{
                fontSize: { xs: "28px", md: "32px" },
                color: "primary.main",
              }}
            >
              {option.icon}
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "13px", md: "14px" },
                fontWeight: 500,
                wordWrap: "break-word",
                overflow: "hidden",
                color: "text.primary",
              }}
            >
              {option.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

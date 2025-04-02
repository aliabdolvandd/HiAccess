"use client";
import SendIcon from "@/svg/sendIcon";
import { Box, Typography } from "@mui/material";
import WarrantyIcon from "@/svg/warrantyIcon";
import PaymentIcon from "@/svg/paymentIcon";
import SupportIcon from "@/svg/supportIcon";

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
        py: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
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
              borderRadius: 2,
              padding: 3,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              width: "220px",
              height: "150px",
              textAlign: "center",
            }}
          >
            <Box sx={{ fontSize: "32px", color: "primary.main" }}>
              {option.icon}
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                wordWrap: "break-word",
                overflow: "hidden",
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

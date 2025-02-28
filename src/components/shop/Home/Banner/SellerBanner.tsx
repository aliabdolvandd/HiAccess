"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function SellerBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "440px",
        overflow: "hidden",
      }}
    >
      <Image
        src={"/sellerBanner.png"}
        alt="seller-banner"
        fill
        style={{ objectFit: "cover" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "8%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "50px",
            lineHeight: "50px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            marginBottom: "15px",
          }}
        >
          با ما
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: "60px",
            lineHeight: "50px",
            marginLeft: "50px",
            marginBottom: "15px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          فروشنده
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "50px",
            lineHeight: "45px",
            marginLeft: "220px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          شوید
        </Typography>
      </Box>
      <Link href={"/auth/register/seller"}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "primary.main",
            width: "214px",
            height: "60px",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "36px",
            borderRadius: "8px",
            position: "absolute",
            left: "10%",
            bottom: "10%",
          }}
        >
          <Typography>ثبت نام فروشنده</Typography>
        </Button>
      </Link>
    </Box>
  );
}

"use client";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AdminBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imgSrc = isMobile ? "/admin-mobile.jpg" : "/admin.jpg";
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "200px", sm: "380px", md: "440px" },
        overflow: "hidden",
      }}
    >
      <Image
        src={imgSrc}
        alt="seller-banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <Box
        sx={{
          position: "absolute",
          top: { xs: "12%", sm: "15%" },
          left: { xs: "5%", sm: "8%" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "28px", sm: "38px", md: "50px" },
            lineHeight: { xs: "34px", md: "50px" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            mb: 1,
          }}
        >
          ورود
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: { xs: "34px", sm: "44px", md: "60px" },
            lineHeight: { xs: "40px", md: "50px" },
            ml: { xs: 0, sm: "30px", md: "50px" },
            mb: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          ادمین
        </Typography>
      </Box>

      <Link href={"/auth/login/admin"}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "primary.main",
            width: { xs: "160px", sm: "180px", md: "214px" },
            height: { xs: "50px", md: "60px" },
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "500",
            borderRadius: "8px",
            position: "absolute",
            left: { xs: "5%", sm: "10%" },
            bottom: { xs: "8%", sm: "10%" },
          }}
        >
          <Typography>ورود ادمین</Typography>
        </Button>
      </Link>
    </Box>
  );
}

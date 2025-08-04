"use client";

import { Box, Button, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BtnBack from "@/svg/btnBack";
import BtnNext from "@/svg/btnNext";

const banners = [
  {
    id: 1,
    image: "/ban1.jpg",
    title1: "بروزترین ها را ",
    title2: "از ما بخواهید",
    buttonText: "همین حالا خرید کنید",
  },
  {
    id: 2,
    image: "/ban2.jpg",
    title1: "صدای موسیقی ",
    title2: "همراه با بهترین‌ها",
    description: "بهترین تجربه‌ها رو با ما رقم بزنید",
    buttonText: "همین حالا خرید کنید",
  },
  {
    id: 3,
    image: "/ban32.jpg",
    title1: "جدیدترین مدل‌ها",
    title2: "برای تمام نیازها",
    buttonText: "همین حالا خرید کنید",
  },
];

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "50vh", sm: "60vh", md: "100vh" },
        position: "relative",
      }}
    >
      <Swiper
        loop
        autoplay={{ delay: 8000 }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        style={{ width: "100%", height: "100%" }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
                  zIndex: 1,
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  left: { xs: "5%", sm: "8%", md: "10%" },
                  top: { xs: "15%", sm: "20%", md: "25%" },
                  fontWeight: 700,
                  fontSize: { xs: "20px", sm: "32px", md: "48px" },
                  lineHeight: "1.3",
                  zIndex: 2,
                  color: "white",
                  maxWidth: { xs: "80%", sm: "60%", md: "40%" },
                  textAlign: "left",
                  animation: "fadeIn 1s ease-in-out",
                }}
              >
                {banner.title1}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  left: { xs: "5%", sm: "8%", md: "10%" },
                  top: { xs: "30%", sm: "35%", md: "40%" },
                  fontSize: { xs: "20px", sm: "32px", md: "48px" },
                  lineHeight: "1.3",
                  zIndex: 2,
                  color: "white",
                  maxWidth: { xs: "80%", sm: "60%", md: "40%" },
                  textAlign: "left",
                  animation: "fadeIn 1.2s ease-in-out",
                }}
              >
                {banner.title2}
              </Typography>

              {banner.description && (
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    bottom: { xs: "20%", sm: "20%", md: "25%" },
                    left: { xs: "5%", sm: "8%", md: "10%" },
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    fontWeight: 400,
                    color: "primary.main",
                    zIndex: 2,
                    textAlign: "left",
                    maxWidth: { xs: "80%", sm: "60%", md: "30%" },
                    animation: "fadeIn 1.4s ease-in-out",
                  }}
                >
                  {banner.description}
                </Typography>
              )}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  position: "absolute",
                  bottom: { xs: "5%", sm: "8%", md: "10%" },
                  left: { xs: "5%", sm: "8%", md: "10%" },
                  width: { xs: 160, sm: 180, md: 214 },
                  height: { xs: 40, sm: 50, md: 60 },
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  fontWeight: 500,
                  zIndex: 2,
                  borderRadius: "25px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  },
                  animation: "fadeIn 1.6s ease-in-out",
                }}
              >
                {banner.buttonText}
              </Button>
            </Box>
          </SwiperSlide>
        ))}

        <IconButton
          className="prev-btn"
          sx={{
            position: "absolute",
            left: { xs: 8, sm: 16 },
            top: "50%",
            zIndex: 10,
            color: "white",
            transform: "translateY(-50%)",
            // backgroundColor: "rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <BtnNext />
        </IconButton>
        <IconButton
          className="next-btn"
          sx={{
            position: "absolute",
            right: { xs: 8, sm: 16 },
            top: "50%",
            zIndex: 10,
            color: "white",
            transform: "translateY(-50%)",
            // backgroundColor: "rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <BtnBack />
        </IconButton>
      </Swiper>
    </Box>
  );
};

export default Banner;

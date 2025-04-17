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
    image: "/banner-1.png",
    title1: "بروزترین ها را ",
    title2: "از ما بخواهید",
    buttonText: "همین حالا خرید کنید",
  },
  {
    id: 2,
    image: "/banner2.png",
    title1: "صدای موسیقی ",
    title2: "همراه با بهترین‌ها",
    description: "بهترین تجربه‌ها رو با ما رقم بزنید",
    buttonText: "همین حالا خرید کنید",
  },
  {
    id: 3,
    image: "/banner-3.png",
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
        height: { xs: "80vh", md: "100vh" },
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
                  bgcolor: "rgba(0, 0, 0, 0.3)",
                  zIndex: 1,
                }}
              />

              {/* Title 1 */}
              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  left: { xs: "5%", md: "10%" },
                  top: { xs: "20%", md: "30%" },
                  fontWeight: 700,
                  fontSize: { xs: "26px", md: "48px" },
                  lineHeight: "1.3",
                  zIndex: 2,
                  color: "white",
                  maxWidth: { xs: "90%", md: "40%" },
                  textAlign: "left",
                }}
              >
                {banner.title1}
              </Typography>

              {/* Title 2 */}
              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  left: { xs: "10%", md: "20%" },
                  top: { xs: "35%", md: "50%" },
                  fontWeight: 700,
                  fontSize: { xs: "26px", md: "48px" },
                  lineHeight: "1.3",
                  zIndex: 2,
                  color: "white",
                  maxWidth: { xs: "90%", md: "40%" },
                  textAlign: "left",
                }}
              >
                {banner.title2}
              </Typography>

              {/* Description */}
              {banner.description && (
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    bottom: { xs: "25%", md: "25%" },
                    right: { xs: "5%", md: "75%" },
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 400,
                    color: "primary.main",
                    zIndex: 2,
                    textAlign: "right",
                    maxWidth: { xs: "90%", md: "20%" },
                  }}
                >
                  {banner.description}
                </Typography>
              )}

              {/* Button */}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  position: "absolute",
                  bottom: { xs: "10%", md: "10%" },
                  right: { xs: "5%", md: "75%" },
                  width: { xs: 180, md: 214 },
                  height: { xs: 50, md: 60 },
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 500,
                  zIndex: 2,
                }}
              >
                {banner.buttonText}
              </Button>
            </Box>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <IconButton
          className="prev-btn"
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            zIndex: 10,
            color: "white",
            transform: "translateY(-50%)",
          }}
        >
          <BtnNext />
        </IconButton>
        <IconButton
          className="next-btn"
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            zIndex: 10,
            color: "white",
            transform: "translateY(-50%)",
          }}
        >
          <BtnBack />
        </IconButton>
      </Swiper>
    </Box>
  );
};

export default Banner;

"use client";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const banners = [
  {
    id: 1,
    image: "/banner-1.png",
    title: "بروزترین ها را از ما بخواهید",
    buttonText: "همین حالا خرید کنید",
  },
  {
    id: 2,
    image: "/banner2.png",
    title: "لذت شنیدن موسیقی با بهترین کیفیت",
    description: "بهترین تجربه ها رو با ما رقم یزنید",
    buttonText: "همین حالا خرید کنید",
  },
  {
    id: 3,
    image: "/banner-3.png",
    title: "انواع برند های لپ تاپ",
    buttonText: "همین حالا خرید کنید",
  },
];

const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
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

      {/* banner images*/}
      <Box
        sx={{
          backgroundImage: `url(${banners[activeIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "56px",
            color: "white",
            position: "absolute",
            right: "65%",
          }}
        >
          {banners[activeIndex].title}
        </Typography>
        {banners[activeIndex].description && (
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: "16px",
              lineHeight: "36px",
              fontWeight: 400,
              color: "primary.main",
              position: "absolute",
              right: "75%",
              bottom: "10%",
            }}
          >
            {banners[activeIndex].description}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            width: "214px",
            height: "60px",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "36px",
            borderRadius: "8px",
            position: "absolute",
            right: "75%",
            bottom: "20%",
          }}
        >
          {banners[activeIndex].buttonText}
        </Button>
      </Box>

      {/*change button*/}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          },
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <NavigateNextIcon />
      </IconButton>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 100,
        }}
      >
        {banners.map((_, index) => (
          <Paper
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: index === activeIndex ? "primary.main" : "#ccc",
              cursor: "pointer",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Banner;

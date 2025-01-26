"use client";
import { Box, Typography } from "@mui/material";

const Feature = [
  { title: "سری پردازنده", value: "Celeron" },
  { title: "حافظه داخلی", value: "512 گیگابایت" },
  { title: "باتری", value: "6 سلولی" },
  { title: "اندازه صفحه نمایش", value: "15.6 اینچ" },
  { title: "وزن", value: "1.8 کیلوگرم" },
  { title: "ابعاد", value: "360x235x20 میلی‌متر" },
];

const FeatureProduct = () => {
  return (
    <Box sx={{}}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "black",
        }}
      >
        ویژگی‌ها
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "flex-start",
        }}
      >
        {Feature.map((item) => (
          <Box
            key={item.title}
            sx={{
              minWidth: "150px",
              padding: "12px",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: "neutral.main",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "dark",
                mt: 1,
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureProduct;

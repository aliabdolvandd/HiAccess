"use client";
import { IPropertyValue } from "@/api/server-api/type";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

type FeatureProps = {
  Feature: IPropertyValue[];
};

const FeatureProduct = ({ Feature }: FeatureProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 3,
          color: "text.primary",
        }}
      >
        ویژگی‌ها
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {Feature.map((item) => (
          <Box
            key={item.title}
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.06)",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "flex-start" : "center",
              textAlign: isMobile ? "right" : "center",
              height: "100%",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="primary.main"
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureProduct;

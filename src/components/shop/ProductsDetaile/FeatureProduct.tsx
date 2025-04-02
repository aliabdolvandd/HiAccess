"use client";
import { IPropertyValue } from "@/api/server-api/type";
import { Box, Typography } from "@mui/material";

type FeatureProps = {
  Feature: IPropertyValue[];
};

const FeatureProduct = ({ Feature }: FeatureProps) => {
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
              gap: 2,
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

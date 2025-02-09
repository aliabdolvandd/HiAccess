"use client";
import { Box, Button, Typography } from "@mui/material";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "primary.main",
        height: "68px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: "10px",
        mb: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, fontSize: 36, color: "white" }}
      >
        {title}
      </Typography>
      <Button sx={{ bgcolor: "white", padding: "8px 16px" }}>
        <Typography fontSize={"16px"} fontWeight={700}>
          مشاهده بیشتر
        </Typography>
      </Button>
    </Box>
  );
};

export default SectionTitle;

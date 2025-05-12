"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface SectionTitleProps {
  title: string;
  href: string;
}

const SectionTitle = ({ title, href }: SectionTitleProps) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 3, md: 4 },
        py: 1,
        mb: 4,
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
            md: "1.8rem",
          },
          color: "white",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          flexShrink: 1,
          minWidth: 0,
        }}
      >
        {title}
      </Typography>

      <Link href={href} passHref>
        <Button
          sx={{
            bgcolor: "white",
            px: { xs: 2, sm: 3 },
            py: { xs: 0.5, sm: 1 },
            fontSize: { xs: "0.8rem", sm: "1rem" },
            fontWeight: 700,
            borderRadius: "8px",
            ":hover": {
              bgcolor: "#f1f1f1",
            },
          }}
        >
          مشاهده بیشتر
        </Button>
      </Link>
    </Box>
  );
};

export default SectionTitle;

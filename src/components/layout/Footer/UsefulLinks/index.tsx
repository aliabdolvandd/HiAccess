import Link from "next/link";
import { Typography, Box } from "@mui/material";
import { IUsefulLink } from "@/type";

const usefulLinks: IUsefulLink[] = [
  { label: "خانه", href: "/" },
  { label: "محصولات", href: "/products" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

const UsefulLink = () => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    {usefulLinks.map((link) => (
      <Typography
        key={link.href}
        component={Link}
        href={link.href}
        sx={{
          color: "#fff",
          textDecoration: "none",
          transition: "color 0.2s ease, text-decoration 0.2s ease",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        {link.label}
      </Typography>
    ))}
  </Box>
);

export default UsefulLink;

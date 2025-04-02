import Link from "next/link";
import { Typography, Box } from "@mui/material";
import { IUsefulLink } from "@/type";

const usefulLinks: IUsefulLink[] = [
  { label: "خانه", href: "/" },
  { label: "محصولات", href: "/products" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

const UsefulLink: React.FC = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      لینک‌های مفید
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {usefulLinks.map((link) => (
        <Typography
          key={link.href}
          component={Link}
          href={link.href}
          sx={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {link.label}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default UsefulLink;

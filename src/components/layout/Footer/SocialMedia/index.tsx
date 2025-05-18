import { Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { ISocialMedia } from "@/type";
const socialLinks: ISocialMedia[] = [
  { icon: <Facebook />, href: "https://facebook.com" },
  { icon: <Twitter />, href: "https://twitter.com" },
  { icon: <Instagram />, href: "https://instagram.com" },
  { icon: <LinkedIn />, href: "https://linkedin.com" },
];
const SocialMediaList = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
      {socialLinks.map((link, index) => (
        <IconButton
          key={index}
          href={link.href}
          target="_blank"
          sx={{
            color: "#fff",
            transition: "transform 0.2s ease, color 0.2s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialMediaList;

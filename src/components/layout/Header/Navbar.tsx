import { Box, Stack, Typography, Menu, MenuItem } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import theme from "@/theme";
import Link from "next/link";

interface NavbarProps {
  navItems: { label: string; submenu: string[] }[];
  anchor: HTMLElement | null;
  currentSubmenu: string[];
  handleClick: (
    event: React.MouseEvent<HTMLElement>,
    submenu: string[]
  ) => void;
  handleClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  navItems,
  anchor,
  currentSubmenu,
  handleClick,
  handleClose,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" justifyContent="center">
        {navItems.map((item, index) => (
          <Box key={index}>
            <Typography
              component="span"
              sx={{
                color: "black",
                fontSize: 14,
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                mx: 1,
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: theme.palette.primary.main },
              }}
              onClick={(event) => handleClick(event, item.submenu)}
            >
              {item.label}
              <ExpandMoreRounded />
            </Typography>
          </Box>
        ))}
      </Stack>

      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
        sx={{
          mt: 1,
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 600,
            overflow: "hidden",
            borderRadius: 2,
            bgcolor: " Complementary2.main",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            p: 2,
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          {currentSubmenu.map((subItem, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              sx={{
                flex: "0 0 calc(50% - 8px)",
                fontSize: 14,
                "&:hover": {
                  color: " primary.main",
                },
              }}
            >
              <Link
                href={`/category/${subItem}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {subItem}
              </Link>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};

export default Navbar;

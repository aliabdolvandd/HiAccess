"use client";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import TellIcon from "@mui/icons-material/Phone";
import SocialMediaList from "./SocialMedia";
import UsefulLink from "./UsefulLinks";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "#fff",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 6 },
        mt: 4,
      }}
    >
      {isMobile ? (
        <>
          <Accordion sx={{ backgroundColor: "transparent", color: "#fff" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography variant="h6">درباره ما</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ textAlign: "justify", mb: 2 }}>
                ما یک فروشگاه آنلاین هستیم که بهترین محصولات را با بهترین
                قیمت‌ها ارائه می‌دهیم.
              </Typography>
              <SocialMediaList />
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "transparent", color: "#fff" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography variant="h6">لینک‌های مفید</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <UsefulLink />
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "transparent", color: "#fff" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography variant="h6">تماس با ما</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <EmailIcon fontSize="small" />
                <Typography variant="body2">info@example.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TellIcon fontSize="small" />
                <Typography variant="body2">۰۲۱ - ۱۲۳۴۵۶۷۸۹</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              درباره ما
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, textAlign: "justify" }}>
              ما یک فروشگاه آنلاین هستیم که بهترین محصولات را با بهترین قیمت‌ها
              ارائه می‌دهیم.
            </Typography>
            <SocialMediaList />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              لینک‌های مفید
            </Typography>
            <UsefulLink />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              تماس با ما
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">info@example.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TellIcon fontSize="small" />
              <Typography variant="body2">۰۲۱ - ۱۲۳۴۵۶۷۸۹</Typography>
            </Box>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          mt: 4,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: "13px", color: "#ccc" }}>
          © {new Date().getFullYear()} تمام حقوق محفوظ است.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

import { styled } from "@mui/material/styles";
import { Box, Divider, List, ListItemButton } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  direction: "rtl",

  width: 280,
  padding: theme.spacing(2),
  background: "linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)",
  height: "100%",
  color: "white",
  boxShadow: "0 0 15px rgba(0,0,0,0.3)",
}));

export const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
}));

export const StyledDivider = styled(Divider)(() => ({
  backgroundColor: "rgba(255,255,255,0.2)",
}));

export const StyledList = styled(List)(() => ({
  "& .MuiCollapse-wrapperInner": {
    animation: "slideIn 0.3s ease-in-out",
    "@keyframes slideIn": {
      from: { transform: "translateX(20px)", opacity: 0 },
      to: { transform: "translateX(0)", opacity: 1 },
    },
  },
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
    transform: "translateX(-5px)",
    transition: "all 0.3s ease",
  },
}));

export const StyledSubListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
    transform: "translateX(-5px)",
    transition: "all 0.3s ease",
  },
}));

export const StyledIconWrapper = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  display: "flex",
  alignItems: "center",
}));

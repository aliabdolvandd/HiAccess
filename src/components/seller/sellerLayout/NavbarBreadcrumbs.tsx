import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}));

export default function NavbarBreadcrumbs() {
  const pathName = usePathname();
  const path = pathName.split("/").filter((path) => path);
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {path.length > 0 && (
        <Typography variant="body1">{path[path.length - 1]}</Typography>
      )}

      <Link href={"/seller"} style={{ textDecoration: "none" }}>
        <Typography variant="body1" sx={{ color: "black", fontWeight: 600 }}>
          Dashboard
        </Typography>
      </Link>
    </StyledBreadcrumbs>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

export default function CardAlert() {
  return (
    <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0 }}>
      <CardContent>
        <AutoAwesomeRoundedIcon fontSize="small" />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          طرح شما رو به پایان است.
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          همین امروز با ۱۰٪ تخفیف تمدید کنید!
        </Typography>
        <Button variant="contained" size="small" fullWidth>
          <Typography>دریافت تخفیف</Typography>
        </Button>
      </CardContent>
    </Card>
  );
}

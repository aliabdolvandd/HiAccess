import RegisterForm from "@/components/forms/RegisterForm";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

function AdminRegister() {
  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5"> ثبت نام ادمین</Typography>
          <MuiLink
            sx={{ textDecorationLine: "none" }}
            component={Link}
            href="/auth/login/admin"
          >
            <Typography>قبلا ثبت نام کرده‌اید؟</Typography>
          </MuiLink>
        </Stack>
        <RegisterForm role={3} />
      </CardContent>
    </Card>
  );
}

export default AdminRegister;

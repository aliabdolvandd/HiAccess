import LoginForm from "@/components/forms/LoginForm";
import { Stack, Typography, Link as MuiLink, Box } from "@mui/material";
import Link from "next/link";

export default async function Login() {
  return (
    <Box sx={{ width: 500 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={3}
      >
        <Typography variant="h5">ورود</Typography>
        <MuiLink
          sx={{ textDecorationLine: "none" }}
          component={Link}
          href="/auth/register"
        >
          <Typography>ساخت اکانت</Typography>
        </MuiLink>
      </Stack>
      <LoginForm role={1} />
    </Box>
  );
}

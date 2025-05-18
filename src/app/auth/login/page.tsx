import LoginForm from "@/components/forms/LoginForm";
import {
  Stack,
  Typography,
  Link as MuiLink,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 12,
          p: 4,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          backgroundColor: "#fff",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5" fontWeight="bold">
            ورود
          </Typography>
          <MuiLink
            component={Link}
            href="/auth/register"
            underline="none"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              fontSize: "0.9rem",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            ساخت اکانت
          </MuiLink>
        </Stack>

        <LoginForm role={1} />
      </Box>
    </Container>
  );
}

"use client";
import { loginAction } from "@/action/auth/login";
import { AuthProps } from "@/type";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import React, { useActionState } from "react";

export default function LoginForm({ role }: AuthProps) {
  const [state, action, pending] = useActionState(loginAction, {
    message: "",
    errors: {},
  });
  return (
    <>
      <form action={action}>
        <Stack gap={2}>
          {state.message && <Alert severity="warning">{state.message}</Alert>}
          <input type="hidden" readOnly name="role" value={role} />
          <TextField
            fullWidth
            error={!!state?.errors?.email}
            helperText={state?.errors?.email}
            label="رایانامه"
            name="email"
            size="small"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            error={!!state?.errors?.password}
            label="کلمه عبور"
            name="password"
            size="small"
            type="password"
            variant="outlined"
            helperText={state?.errors?.password?.map((e: string) => (
              <Box key={e} component="span" display="block">
                {e}
              </Box>
            ))}
          />
          <Button
            disableElevation
            disabled={pending}
            type="submit"
            variant="contained"
          >
            ورود
          </Button>
        </Stack>
      </form>
    </>
  );
}

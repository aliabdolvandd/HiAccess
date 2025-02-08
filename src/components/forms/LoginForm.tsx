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
        <input type="text" name="role" hidden readOnly value={role} />
        <Stack gap={3}>
          {state.message && <Alert severity="warning">{state.message}</Alert>}

          <TextField
            error={!!state?.errors?.email}
            helperText={state?.errors?.email}
            size="small"
            fullWidth
            name="email"
            label="رایانامه"
            variant="outlined"
            type="email"
          />
          <TextField
            error={!!state?.errors?.password}
            helperText={state?.errors?.password?.map((e: string) => (
              <Box component="span" display="block" key={e}>
                {e}
              </Box>
            ))}
            size="small"
            fullWidth
            name="password"
            type="password"
            label="کلمه عبور"
            variant="outlined"
          />
          <Button
            type="submit"
            disabled={pending}
            disableElevation
            variant="contained"
          >
            ورود
          </Button>
        </Stack>
      </form>
    </>
  );
}

"use client";
import { sellerRegister } from "@/action/auth/seller-register";
import { AuthProps } from "@/type";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useActionState } from "react";

function SellerRegisterForm({ role }: AuthProps) {
  const [state, action, pending] = useActionState(sellerRegister, {
    message: "",
    errors: {},
  });
  console.log(role);
  return (
    <form action={action}>
      <input type="number" name="role" readOnly hidden value={role}></input>
      <Stack gap={3}>
        <Stack
          mt={2}
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <TextField
            error={!!state?.errors?.firstName}
            helperText={state?.errors?.firstName}
            size="small"
            fullWidth
            name="firstName"
            label="نام"
            variant="outlined"
          />
          <TextField
            error={!!state?.errors?.lastName}
            helperText={state?.errors?.lastName}
            size="small"
            fullWidth
            name="lastName"
            label="نام خانوادگی"
            variant="outlined"
          />
        </Stack>
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
        <TextField
          size="small"
          fullWidth
          name="shopName"
          type="text"
          label="نام فروشگاه"
          variant="outlined"
          error={!!state.errors?.shopName}
          helperText={state.errors?.shopName}
        />
        <TextField
          size="small"
          fullWidth
          name="shopSlug"
          type="text"
          label="نشانه فروشگاه"
          variant="outlined"
          error={!!state.errors?.shopSlug}
          helperText={state.errors?.shopSlug}
        />
        <Typography variant="caption">
          با ثبت نام در سرویس ما شما با همه قوانین سرویس موافقت خود را اعلام
          میدارید.
        </Typography>
        <Button
          type="submit"
          disabled={pending}
          disableElevation
          variant="contained"
        >
          ثبت نام
        </Button>
      </Stack>
    </form>
  );
}

export default SellerRegisterForm;

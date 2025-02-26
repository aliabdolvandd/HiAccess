"use client";
import { IAddress } from "@/api/server-api/type";
import { createOrUpdateAddressAction } from "@/api/shop-api/server-shop/update-action";
import SubmitButton from "@/components/SubmitButton";
import { Box, Stack, TextField } from "@mui/material";
import { useActionState } from "react";

type AddressFormProps = {
  value: IAddress | null;
};

export const AddressForm = ({ value }: AddressFormProps) => {
  const [state, action] = useActionState(createOrUpdateAddressAction, {
    success: false,
    message: "",
    errors: {},
  });
  return (
    <Stack spacing={2}>
      <form action={action}>
        {value?._id && <input type="hidden" name="_id" value={value._id} />}
        <input type="hidden" name="locationLat" value="13.478" />
        <input type="hidden" name="locationLng" value="-47.258" />
        <Stack spacing={2}>
          <TextField
            label="شهر"
            name="city"
            defaultValue={value?.city || ""}
            error={!!state?.errors?.city}
            helperText={state?.errors?.city?.[0]}
            fullWidth
            required
          />
          <TextField
            label="خیابان"
            name="street"
            defaultValue={value?.street || ""}
            error={!!state?.errors?.street}
            helperText={state?.errors?.street?.[0]}
            fullWidth
            required
          />
          <TextField
            label="کد پستی"
            name="postalCode"
            defaultValue={value?.postalCode || ""}
            error={!!state?.errors?.postalCode}
            helperText={state?.errors?.postalCode?.[0]}
            fullWidth
            required
          />
          <Box sx={{ pb: "16px" }}>
            <SubmitButton
              sx={{
                bgcolor: "primary.main",
                color: "#FFF",
                alignSelf: "flex-start",
                padding: "10px 40px",
              }}
            >
              {value ? "ویرایش آدرس" : "افزودن آدرس"}
            </SubmitButton>
          </Box>
        </Stack>
      </form>
    </Stack>
  );
};

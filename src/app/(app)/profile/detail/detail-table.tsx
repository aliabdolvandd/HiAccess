"use client";

import {
  Card,
  CardContent,
  Grid2,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { IUserShop } from "@/api/server-api/type";

interface UserProfileProps {
  user: IUserShop;
}
const UserProfileTable = ({ user }: UserProfileProps) => {
  return (
    <Card
      sx={{
        maxWidth: 800,
        mx: "auto",
        p: 3,
        borderRadius: 3,
        boxShadow: 2,
        mt: 20,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        حساب کاربری
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        color="text.secondary"
        mb={2}
      >
        اطلاعات حساب کاربری
      </Typography>

      <CardContent>
        <Grid2 container spacing={3}>
          {/* نام و نام خانوادگی */}
          {user.user.firstName && (
            <Grid2>
              <Typography variant="body2" color="text.secondary">
                نام و نام خانوادگی
              </Typography>
              <TextField fullWidth value={user.user.firstName} />
            </Grid2>
          )}

          {/* کد ملی */}
          <Grid2>
            <Typography variant="body2" color="text.secondary">
              کد ملی
            </Typography>
            <TextField fullWidth value="207798546285" disabled />
          </Grid2>

          {/* شماره موبایل */}
          <Grid2>
            <Typography variant="body2" color="text.secondary">
              شماره موبایل
            </Typography>
            <TextField fullWidth value="09123456789" />
          </Grid2>

          {/* جنسیت */}
          <Grid2>
            <Typography variant="body2" color="text.secondary">
              جنسیت
            </Typography>
            <RadioGroup row value="مرد">
              <FormControlLabel value="زن" control={<Radio />} label="زن" />
              <FormControlLabel value="مرد" control={<Radio />} label="مرد" />
            </RadioGroup>
          </Grid2>

          {/* تاریخ تولد */}
          <Grid2>
            <Typography variant="body2" color="text.secondary">
              تاریخ تولد
            </Typography>
            <TextField fullWidth value="۱۳۷۸/۰۷/۳۰" disabled />
          </Grid2>

          {/* ایمیل */}
          <Grid2>
            <Typography variant="body2" color="text.secondary">
              ایمیل
            </Typography>
            <TextField fullWidth value={user.user.email} />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default UserProfileTable;

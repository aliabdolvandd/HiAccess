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
  Box,
  Divider,
} from "@mui/material";
import { IUserShop } from "@/api/server-api/type";
import {
  CalendarToday,
  Email,
  PermIdentity,
  Phone,
  Wc,
} from "@mui/icons-material";
interface UserProfileProps {
  user: IUserShop;
}

const UserProfileTable = ({ user }: UserProfileProps) => {
  return (
    <Card
      sx={{
        minWidth: 1000,
        mx: "34px",
        p: 3,
        mt: 20,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#f8f8f8",
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" color="black" mb={10}>
          اطلاعات حساب کاربری
        </Typography>

        <Grid2 container spacing={30}>
          <Grid2>
            <Box display="flex" alignItems="center" gap={1}>
              <PermIdentity fontSize="small" color="disabled" />
              <Typography color="neutral.main">نام و نام خانوادگی</Typography>
            </Box>
            <TextField
              fullWidth
              variant="standard"
              value={`${user.user.firstName} ${user.user.lastName}`}
              disabled
            />
          </Grid2>

          <Grid2>
            <Box display="flex" alignItems="center" gap={1}>
              <PermIdentity fontSize="small" color="disabled" />
              <Typography variant="body2" color="neutral.main">
                کد ملی
              </Typography>
            </Box>
            <TextField
              fullWidth
              variant="standard"
              value={user.profile.nationCode}
              disabled
            />
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 4 }} />

        <Grid2 container spacing={30}>
          <Grid2>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone fontSize="small" color="disabled" />
              <Typography variant="body2" color="neutral.main">
                شماره موبایل
              </Typography>
            </Box>
            <TextField
              fullWidth
              variant="standard"
              value={user.profile.mobile}
              disabled
            />
          </Grid2>

          <Grid2>
            <Box display="flex" alignItems="center" gap={1}>
              <Wc fontSize="small" color="disabled" />
              <Typography variant="body2" color="neutral.main">
                جنسیت
              </Typography>
            </Box>
            <RadioGroup row value="مرد">
              <FormControlLabel value="زن" control={<Radio />} label="زن" />
              <FormControlLabel value="مرد" control={<Radio />} label="مرد" />
            </RadioGroup>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 4 }} />

        <Grid2 container spacing={30}>
          <Grid2>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarToday fontSize="small" color="disabled" />
              <Typography variant="body2" color="neutral.main">
                تاریخ تولد
              </Typography>
            </Box>
            <TextField
              fullWidth
              variant="standard"
              value={user.profile.birthday}
              disabled
            />
          </Grid2>

          <Grid2>
            <Box display="flex" alignItems="center" gap={1}>
              <Email fontSize="small" color="disabled" />
              <Typography variant="body2" color="neutral.main">
                ایمیل
              </Typography>
            </Box>
            <TextField
              fullWidth
              variant="standard"
              value={user.user.email}
              disabled
            />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default UserProfileTable;

"use client";
import { useState } from "react";
import { Box, TextField, Button, Typography, Grid2 } from "@mui/material";
import { useCartStore } from "@/store/cart-provider";
import { FormatPrice } from "@/components/shop/FormatPrice";

const PaymentGatewayPage = () => {
  const cart = useCartStore((state) => state.items);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = () => {
    console.log("پرداخت انجام شد");
  };

  const handleCancel = () => {
    console.log("پرداخت لغو شد");
  };
  const amount = cart.reduce((total, item) => {
    const itemPrice = item.product.bestSeller?.lastPrice || 0;
    const discount = item.product.bestSeller?.discount || 0;

    const discountAmount = (itemPrice * discount) / 100;
    const finalPrice = itemPrice - discountAmount;
    const itemTotal = finalPrice * item.quantity;

    return total + itemTotal;
  }, 0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        backgroundColor: "#f7f7f7",
        borderRadius: "12px",
        maxWidth: "600px",
        margin: "auto",
        mt: 25,
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        درگاه پرداخت اینترنتی
      </Typography>

      <Box sx={{ marginBottom: "24px" }}>
        <Typography variant="h6">اطلاعات پذیرنده</Typography>
        <Typography>نام فروشگاه: فروشگاه نمونه</Typography>
        <Typography>آدرس فروشگاه: تهران، خیابان انقلاب</Typography>
        <Typography>کد پذیرنده: 267895351</Typography>
        <Typography>شماره ترمینال: 68723549</Typography>
        <Typography sx={{ fontWeight: "bold", marginTop: "8px" }}>
          مبلغ قابل پرداخت: {FormatPrice(amount)}
        </Typography>
      </Box>

      <Grid2 container spacing={2} sx={{ marginBottom: "24px" }}>
        <Grid2>
          <TextField
            label="شماره کارت"
            variant="outlined"
            fullWidth
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="رمز دوم (CVV2)"
            variant="outlined"
            fullWidth
            value={cvv2}
            onChange={(e) => setCvv2(e.target.value)}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="ماه"
            variant="outlined"
            fullWidth
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="سال"
            variant="outlined"
            fullWidth
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="کد امنیتی"
            variant="outlined"
            fullWidth
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="ایمیل (اختیاری)"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid2>
      </Grid2>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="error" onClick={handleCancel}>
          انصراف
        </Button>
        <Button variant="contained" color="success" onClick={handlePayment}>
          پرداخت
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentGatewayPage;

"use client";
import { useState } from "react";
import { Box, TextField, Button, Typography, Grid2 } from "@mui/material";
import { useCartStore } from "@/store/cart-provider";
import { FormatPrice } from "@/components/shop/FormatPrice";
import { paymentSchema } from "@/lib/validations";
import { useSelectedAddressStore } from "@/store/address-checkout-store";
import { createOrderAction } from "@/action/order";

const PaymentGatewayPage = () => {
  const cart = useCartStore((state) => state.items);
  const { selectedAddress } = useSelectedAddressStore();
  const [cardNumber, setCardNumber] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const amount = cart.reduce((total, item) => {
    const itemPrice = item.product.bestSeller?.lastPrice || 0;
    const discount = item.product.bestSeller?.discount || 0;

    const discountAmount = (itemPrice * discount) / 100;
    const finalPrice = itemPrice - discountAmount;
    const itemTotal = finalPrice * item.quantity;

    return total + itemTotal;
  }, 0);
  console.log("selectedAddress", selectedAddress);
  const handlePayment = async () => {
    const data = {
      cardNumber,
      cvv2,
      expiryMonth,
      expiryYear,
      securityCode,
    };

    const validationResult = paymentSchema.safeParse(data);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.formErrors.fieldErrors;
      setErrors(errorMessages);
      return;
    }

    console.log("پرداخت انجام شد");
    if (validationResult.success) {
      const orderData = {
        shippingAddress: {
          city: selectedAddress?.city,
          street: selectedAddress?.street,
          postalCode: selectedAddress?.postalCode,
          location: selectedAddress?.location,
        },
        deliveryDate: "2025-01-30T12:12:29.041Z",
        orderItems: cart.map((item) => ({
          productSeller: item.product.bestSeller?.id,
          quantity: item.quantity, //
        })),
      };
      try {
        await createOrderAction(orderData);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleCancel = () => {
    console.log("پرداخت لغو شد");
  };
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
        mt: 10,
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
            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.[0]}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="رمز دوم (CVV2)"
            variant="outlined"
            fullWidth
            value={cvv2}
            onChange={(e) => setCvv2(e.target.value)}
            error={!!errors.cvv2}
            helperText={errors.cvv2?.[0]}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="ماه"
            variant="outlined"
            fullWidth
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
            error={!!errors.expiryMonth}
            helperText={errors.expiryMonth?.[0]}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="سال"
            variant="outlined"
            fullWidth
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
            error={!!errors.expiryYear}
            helperText={errors.expiryYear?.[0]}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="کد امنیتی"
            variant="outlined"
            fullWidth
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            error={!!errors.securityCode}
            helperText={errors.securityCode?.[0]}
          />
        </Grid2>
        <Grid2>
          <TextField
            label="ایمیل (اختیاری)"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email?.[0]}
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

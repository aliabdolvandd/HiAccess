"use client";
import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useCartStore } from "@/store/cart-provider";
import PaymentMethod from "./payment";
import CartTotal from "../cart/TotalCart";
import Link from "next/link";

const Checkout = () => {
  const cart = useCartStore((state) => state.items);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discountCode, setDiscountCode] = useState("");

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleDiscountCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDiscountCode(event.target.value);
  };

  const handleSubmit = () => {
    console.log({ address, paymentMethod, discountCode, cart });
  };

  return (
    <Box
      sx={{
        padding: "24px",
        backgroundColor: "#f7f7f7",
        borderRadius: "12px",
        maxWidth: "800px",
        margin: "auto",
        mt: 13,
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: "24px", fontWeight: "bold" }}
      >
        مرحله پرداخت
      </Typography>

      <Box sx={{ marginBottom: "24px" }}>
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          محصولات موجود در سبد خرید
        </Typography>
        {cart.length === 0 ? (
          <Typography>سبد خرید شما خالی است.</Typography>
        ) : (
          cart.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <Typography>{item.product.titleFa}</Typography>
            </Box>
          ))
        )}
        <Typography component="div">
          <CartTotal cartItems={cart} />
        </Typography>
      </Box>

      <TextField
        label="آدرس ارسال"
        variant="outlined"
        fullWidth
        value={address}
        onChange={handleAddressChange}
        sx={{ marginBottom: "16px" }}
      />

      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      <TextField
        label="کد تخفیف"
        variant="outlined"
        fullWidth
        value={discountCode}
        onChange={handleDiscountCodeChange}
        sx={{ marginBottom: "16px" }}
      />
      <Link href={"/paymentGateway"}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          پرداخت
        </Button>
      </Link>
    </Box>
  );
};

export default Checkout;

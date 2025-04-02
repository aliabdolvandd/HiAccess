"use client";
import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useCartStore } from "@/store/cart-provider";
import PaymentMethod from "./payment";
import CartTotal from "../cart/TotalCart";
import Link from "next/link";
import AddressField from "./field-address";

const Checkout = () => {
  const cart = useCartStore((state) => state.items);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discountCode, setDiscountCode] = useState("");

  const handleDiscountCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDiscountCode(event.target.value);
  };

  const handleSubmit = () => {
    console.log({ paymentMethod, discountCode, cart });
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

      <AddressField />

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
          disabled={cart.length === 0}
        >
          پرداخت
        </Button>
      </Link>
    </Box>
  );
};

export default Checkout;

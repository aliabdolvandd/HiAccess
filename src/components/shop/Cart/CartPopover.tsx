"use client";
import React, { useState } from "react";
import { Popover, Box, Typography, Button, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "@/svg/cartIcon";
import { useCartStore } from "@/store/cart-provider";
import { Add, Delete, Remove } from "@mui/icons-material";
import ProductPrice from "@/app/(app)/cart/productPrice";
import { OrderItemWithQuantity } from "@/store/cart";

const CartPopover = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const cartItems = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const incrementItemCount = useCartStore((state) => state.incrementItemCount);
  const decrementItemCount = useCartStore((state) => state.decrementItemCount);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleIncrease = (item: OrderItemWithQuantity) => {
    incrementItemCount(item);
  };

  const handleDecrease = (item: OrderItemWithQuantity) => {
    if (item.quantity > 1) {
      decrementItemCount(item.productSeller.id, item.product.id, item.color);
    } else {
      removeItem(item.productSeller.id, item.product.id, item.color);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "cart-popover" : undefined;

  return (
    <>
      <IconButton onMouseEnter={handlePopoverOpen}>
        <CartIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: 1 }}
        disableRestoreFocus
        onMouseLeave={handlePopoverClose}
      >
        <Box sx={{ p: 2, minWidth: 300 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            سبد خرید
          </Typography>

          {cartItems.length === 0 ? (
            <Typography variant="body2" sx={{ color: "gray", pb: 2 }}>
              هنوز محصولی اضافه نکرده‌اید
            </Typography>
          ) : (
            <>
              <Box
                sx={{
                  maxHeight: 300,
                  overflowY: "auto",
                  pr: 1,
                }}
              >
                {cartItems.map((item) => {
                  return (
                    <Box
                      key={item.product.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 1,
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <Image
                        src={item.product.images.main}
                        alt={item.product.titleFa}
                        width={60}
                        height={60}
                        style={{ borderRadius: "8px" }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography fontSize="14px" fontWeight="600">
                          {item.product.titleFa}
                        </Typography>
                        <Box display="flex" alignItems="center">
                          <ProductPrice
                            price={item.productSeller.lastPrice}
                            discount={item.productSeller.discount}
                          />
                        </Box>
                      </Box>

                      {item.color && (
                        <Box
                          sx={{
                            bgcolor: item.color,
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            border: "1px solid #ccc",
                          }}
                        />
                      )}

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          bgcolor: "#f7f7f7",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "8px",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => handleIncrease(item)}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                        <Typography fontSize="14px" fontWeight="500">
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleDecrease(item)}
                        >
                          {item.quantity > 1 ? (
                            <Remove fontSize="small" />
                          ) : (
                            <Delete color="primary" fontSize="small" />
                          )}
                        </IconButton>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </>
          )}

          <Box
            sx={{
              position: "sticky",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "white",
              p: 1,
              boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              component={Link}
              href="/cart"
            >
              مشاهده سبد خرید
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default CartPopover;

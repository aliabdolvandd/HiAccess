"use client";

import React, { useCallback, useState } from "react";
import { Popover, Box, Typography, Button, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "@/svg/cartIcon";
import { useCartStore } from "@/store/cart-provider";
import { Add, Delete, Remove } from "@mui/icons-material";
import { OrderItemWithQuantity } from "@/store/cart";
const CartPopover = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const cartItems = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const incrementItemCount = useCartStore((state) => state.incrementItemCount);
  const decrementItemCount = useCartStore((state) => state.decrementItemCount);
  const removeItemFromCart = useCartStore((state) => state.removeItem);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleIncrease = useCallback(
    (item: OrderItemWithQuantity) => {
      incrementItemCount(item);
    },
    [incrementItemCount]
  );

  const handleDecrease = useCallback(
    (item: OrderItemWithQuantity) => {
      if (item.quantity > 1) {
        decrementItemCount(item.productSeller.id, item.product.id, item.color);
      } else {
        removeItemFromCart(item.productSeller.id, item.product.id, item.color);
      }
    },
    [decrementItemCount, removeItemFromCart]
  );

  const open = Boolean(anchorEl);
  const id = open ? "cart-popover" : undefined;

  return (
    <>
      <IconButton aria-label="cart" onMouseEnter={handlePopoverOpen}>
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
        <Box sx={{ p: 2, minWidth: 300, maxHeight: 400, overflowY: "auto" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            سبد خرید
          </Typography>

          {cartItems.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              هنوز محصولی اضافه نکرده‌اید
            </Typography>
          ) : (
            <Box>
              {cartItems.map((item) => (
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
                    <Typography variant="caption" color="gray">
                      {item.productSeller?.lastPrice?.toLocaleString()} تومان
                    </Typography>
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
                      sx={{ ":hover": { bgcolor: "#ccc" } }}
                    >
                      <Add fontSize="small" />
                    </IconButton>

                    <Typography fontSize="14px" fontWeight="500">
                      {item.quantity}
                    </Typography>

                    {item.quantity > 1 ? (
                      <IconButton
                        size="small"
                        onClick={() => handleDecrease(item)}
                        sx={{
                          ":hover": { bgcolor: "#ccc" },
                        }}
                      >
                        <Remove fontSize="small" />
                      </IconButton>
                    ) : (
                      <IconButton
                        size="small"
                        onClick={() =>
                          removeItem(
                            item.productSeller.id,
                            item.product.id,
                            item.color
                          )
                        }
                        sx={{
                          // bgcolor: "black",
                          color: "black",
                        }}
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          )}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, py: 1 }}
            component={Link}
            href="/cart"
          >
            مشاهده سبد خرید
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default CartPopover;

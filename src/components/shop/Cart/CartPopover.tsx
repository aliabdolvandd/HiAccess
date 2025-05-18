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
import { AnimatePresence, motion } from "framer-motion";

const CartPopover = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
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
    if (item.quantity < item.productSeller.count) incrementItemCount(item);
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
        disableScrollLock
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          mt: 1,
          "& .MuiPaper-root": {
            borderRadius: 2,
            background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          },
        }}
        disableRestoreFocus
        onMouseLeave={handlePopoverClose}
      >
        <Box sx={{ p: { xs: 1.5, md: 2 }, minWidth: { xs: 250, md: 300 } }}>
          {cartItems.length >= 1 ? (
            <Button
              variant="text"
              color="error"
              onClick={() => clearCart()}
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                textAlign: "center",
                display: "block",
                mx: "auto",
              }}
            >
              حذف سبد خرید
            </Button>
          ) : (
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 1, md: 2 },
                fontWeight: 600,
                color: "primary.main",
                textAlign: "center",
              }}
            >
              سبد خرید
            </Typography>
          )}

          {cartItems.length === 0 ? (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                pb: { xs: 1, md: 2 },
                textAlign: "center",
              }}
            >
              هنوز محصولی اضافه نکرده‌اید
            </Typography>
          ) : (
            <>
              <Box
                sx={{
                  maxHeight: { xs: 200, md: 300 },
                  overflowY: "auto",
                  pr: 1,
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888",
                    borderRadius: "3px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555",
                  },
                }}
              >
                <AnimatePresence>
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: { xs: 1, md: 2 },
                          p: { xs: 1, md: 1.5 },
                          borderBottom: "1px solid #eee",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#f5f5f5",
                            transform: "translateX(5px)",
                          },
                        }}
                      >
                        <Image
                          src={item.product.images.main}
                          alt={item.product.titleFa}
                          width={60}
                          height={60}
                          style={{ borderRadius: "8px", objectFit: "cover" }}
                        />
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography
                            fontSize={{ xs: "12px", md: "14px" }}
                            fontWeight="600"
                            noWrap
                          >
                            {item.product.titleFa}
                          </Typography>
                          <Box display="flex" alignItems="center" mt={0.5}>
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
                              width: { xs: 14, md: 18 },
                              height: { xs: 14, md: 18 },
                              borderRadius: "50%",
                              border: "1px solid #ccc",
                            }}
                          />
                        )}

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 0.5, md: 1 },
                            bgcolor: "#f7f7f7",
                            px: { xs: 1, md: 1.5 },
                            py: { xs: 0.5, md: 0.5 },
                            borderRadius: "8px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                            },
                          }}
                        >
                          <IconButton
                            disabled={item.quantity >= item.productSeller.count}
                            size="small"
                            onClick={() => handleIncrease(item)}
                            sx={{ "&:hover": { color: "primary.main" } }}
                          >
                            <Add fontSize="small" />
                          </IconButton>
                          <Typography
                            fontSize={{ xs: "12px", md: "14px" }}
                            fontWeight="500"
                          >
                            {item.quantity}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() => handleDecrease(item)}
                            sx={{ "&:hover": { color: "error.main" } }}
                          >
                            {item.quantity > 1 ? (
                              <Remove fontSize="small" />
                            ) : (
                              <Delete fontSize="small" />
                            )}
                          </IconButton>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </AnimatePresence>
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
              p: { xs: 1, md: 1.5 },
              boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
              mt: 1,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              component={Link}
              href="/cart"
              sx={{
                py: { xs: 0.8, md: 1 },
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              }}
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

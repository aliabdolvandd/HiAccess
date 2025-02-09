import WishIcon from "@/svg/wishIcon";
import { IProductCard } from "@/type";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
interface ProductProps {
  product: IProductCard;
}

const MotionCard = motion(Card); // تبدیل کارت به کامپوننت متحرک

const ProductCard = ({ product }: ProductProps) => {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }} // شروع: مخفی و کمی پایین
      animate={{ opacity: 1, y: 0 }} // نمایش: حرکت به بالا و شفاف
      transition={{ duration: 0.5, ease: "easeOut" }} // زمان و نوع حرکت
      whileHover={{ scale: 1.05, boxShadow: "5px 5px 15px rgba(0,0,0,0.2)" }} // هنگام هاور
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "446px",
        width: "334px",
        margin: "auto",
        boxShadow: 3,
        position: "relative",
        borderRadius: "16px",
        padding: "8px 16px",
        cursor: "pointer", // نشانگر موس تغییر کند
      }}
    >
      {product.discountPrice && (
        <Chip
          label={`% ${product.discount}  تخفیف`}
          size="medium"
          sx={{
            fontSize: "12px",
            position: "absolute",
            top: 10,
            left: 10,
            bgcolor: "Accent.main",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        />
      )}

      <CardMedia
        component="img"
        height={"228px"}
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", padding: "10px" }}
      />

      <Button
        variant="contained"
        sx={{
          padding: "12px 56px",
          mt: 2,
          bgcolor: "primary.main",
          color: "white",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "1rem",
          textTransform: "none",
          ":hover": {
            backgroundColor: "#2563eb",
          },
        }}
      >
        افزودن به سبد
      </Button>

      <Rating
        name="read-only"
        value={product.rate}
        precision={0.5}
        readOnly
        size="small"
        sx={{ textAlign: "center", marginTop: "20px", color: "black" }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          position: "absolute",
          bottom: 8,
          right: 15,
        }}
      >
        {product.price && (
          <Typography
            variant="body2"
            sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 2 }}
          >
            {product.discountPrice} تومان
          </Typography>
        )}
        <Typography
          variant="h6"
          sx={{
            textDecoration: "line-through",
            textDecorationColor: "red",
            fontWeight: "bold",
            color: "gray",
            fontSize: "0.9rem",
          }}
        >
          {product.price} تومان
        </Typography>
      </Box>

      <Typography
        variant="subtitle1"
        component="span"
        sx={{ fontSize: "1rem", fontWeight: "bold" }}
      >
        {product.title}
      </Typography>

      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "white",
          borderRadius: "50%",
          width: 32,
          height: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <WishIcon />
      </Box>
    </MotionCard>
  );
};

export default ProductCard;

import { Button } from "@mui/material";
import { IShopProducts, SellerInfo } from "@/api/server-api/type";
import { useCartStore } from "@/store/cart-provider";

type Props = {
  product: IShopProducts;
  seller: SellerInfo;
  color: string;
  quantity: number;
};

const AddToCartButton = ({ product, seller, color, quantity }: Props) => {
  const { incrementItemCount } = useCartStore((state) => state);

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        height: { xs: 48, sm: 50 },
        fontSize: { xs: "0.9rem", sm: "1rem" },
        borderRadius: 2,
        mt: 2,
      }}
      onClick={() =>
        incrementItemCount({
          product,
          productSeller: seller,
          color,
          quantity,
        })
      }
    >
      افزودن به سبد خرید
    </Button>
  );
};

export default AddToCartButton;

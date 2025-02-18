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
  console.log("Rendered AddToCartButton - Received Quantity:", quantity);

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{ height: "50px", minWidth: "292px" }}
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

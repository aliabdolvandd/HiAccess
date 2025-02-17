import { Button } from "@mui/material";
import { IShopProducts, SellerInfo } from "@/api/server-api/type";
import { useCartStore } from "@/store/cart-provider";

type Props = {
  product: IShopProducts;
  seller: SellerInfo;
};

const AddToCartButton = ({ product, seller }: Props) => {
  const { incrementItemCount } = useCartStore((state) => state);

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
        })
      }
    >
      افزودن به سبد خرید
    </Button>
  );
};

export default AddToCartButton;

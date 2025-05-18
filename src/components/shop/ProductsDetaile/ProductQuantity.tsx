import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ProductQuantityProps {
  quantity: number;
  maxQuantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ProductQuantity = ({
  quantity,
  maxQuantity,
  onIncrement,
  onDecrement,
}: ProductQuantityProps) => {
  const isMaxQuantity = quantity >= maxQuantity;
  const isMinQuantity = quantity <= 0;

  return (
    <Box
      sx={{
        width: "176px",
        height: "50px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 1,
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <IconButton
        onClick={onIncrement}
        size="small"
        disabled={isMaxQuantity}
        sx={{
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <AddIcon />
      </IconButton>
      <Typography sx={{ fontWeight: "600", fontSize: "1rem" }}>
        {quantity}
      </Typography>

      <IconButton
        onClick={onDecrement}
        size="small"
        disabled={isMinQuantity}
        sx={{
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <RemoveIcon />
      </IconButton>
    </Box>
  );
};

export default ProductQuantity;

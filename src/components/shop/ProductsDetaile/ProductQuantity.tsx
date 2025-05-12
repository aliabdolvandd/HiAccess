import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ProductQuantityProps {
  quantity: number;
  setQuantity: (value: number) => void;
}

const ProductQuantity = ({ quantity, setQuantity }: ProductQuantityProps) => {
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
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        size="small"
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

      <Typography sx={{ fontWeight: "600", fontSize: "1rem" }}>
        {quantity}
      </Typography>

      <IconButton
        onClick={() => setQuantity(quantity + 1)}
        size="small"
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
    </Box>
  );
};

export default ProductQuantity;

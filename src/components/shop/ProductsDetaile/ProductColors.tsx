import { IColor } from "@/api/server-api/type";
import { Check } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface ProductColorsProps {
  colors: IColor[];
  onColorSelect: (color: string) => void;
}

const ProductColors = ({ colors, onColorSelect }: ProductColorsProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(
    colors[0].hexCode
  );
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
  };
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        انتخاب رنگ:
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {colors.map((color, index) => (
          <Button
            key={index}
            variant={selectedColor === color.hexCode ? "outlined" : "contained"}
            onClick={() => handleColorSelect(color.hexCode)}
            sx={{
              minWidth: "40px",
              height: "40px",
              backgroundColor: color.hexCode,
              color: "white",
              borderRadius: "50%",
              border:
                selectedColor === color.hexCode ? "2px solid blue" : "none",
              transition: "all 0.3s ease",
              position: "relative",
            }}
          >
            {selectedColor === color.hexCode && (
              <Check
                fontSize="small"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "blue",
                }}
              />
            )}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ProductColors;

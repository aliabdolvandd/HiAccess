import { IColor } from "@/api/server-api/type";
import { Check } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface ProductColorsProps {
  colors: IColor[];
  onColorSelect: (color: string) => void;
}

const ProductColors = ({ colors, onColorSelect }: ProductColorsProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0].hexCode);
  useEffect(() => {
    if (colors.length > 0) {
      onColorSelect(colors[0].hexCode);
    }
  }, [colors, onColorSelect]);
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
      >
        انتخاب رنگ:
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
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
              boxShadow:
                selectedColor === color.hexCode
                  ? "0 0 6px rgba(0, 0, 255, 0.5)"
                  : "none",
              "&:hover": {
                boxShadow:
                  selectedColor === color.hexCode
                    ? "0 0 10px rgba(0, 0, 255, 0.8)"
                    : "0 0 8px rgba(0, 0, 0, 0.1)",
              },
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

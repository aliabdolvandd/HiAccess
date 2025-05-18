import { useState } from "react";
import Image from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface ProductImagesProps {
  images: { main: string; list: string[] };
  title: string;
}

const ProductImages = ({ images, title }: ProductImagesProps) => {
  const [mainImage, setMainImage] = useState(images.main);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        pt: 1,
        maxWidth: { xs: "100%", md: "500px" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Image
          src={mainImage}
          alt={title}
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        {images.list.map((img, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: 1,
              border: mainImage === img ? "2px solid" : "1px solid #ddd",
              borderColor: mainImage === img ? "primary.main" : "#ddd",
              boxShadow:
                mainImage === img
                  ? "0 0 8px rgba(0, 0, 255, 0.3)"
                  : "0px 2px 6px rgba(0, 0, 0, 0.06)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onClick={() => setMainImage(img)}
          >
            <Image
              src={img}
              alt={`تصویر ${index + 1}`}
              width={isMobile ? 80 : 100}
              height={isMobile ? 60 : 80}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductImages;

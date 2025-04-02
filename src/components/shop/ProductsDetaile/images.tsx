import { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

interface ProductImagesProps {
  images: { main: string; list: string[] };
  title: string;
}

const ProductImages = ({ images, title }: ProductImagesProps) => {
  const [mainImage, setMainImage] = useState(images.main);

  return (
    <Box sx={{ pt: 1, maxWidth: "500px" }}>
      <Image
        src={mainImage}
        alt={title}
        width={400}
        height={400}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        {images.list.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`تصویر ${index + 1}`}
            width={120}
            height={100}
            onClick={() => setMainImage(img)}
            style={{
              borderRadius: "4px",
              cursor: "pointer",
              border: mainImage === img ? "2px solid blue" : "1px solid #ddd",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductImages;

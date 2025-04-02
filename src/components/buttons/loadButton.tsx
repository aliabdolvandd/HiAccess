"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface LoadMoreProps {
  review: string;
}

export default function LoadMore({ review }: LoadMoreProps) {
  const [load, setLoad] = useState(false);
  const maxLength = 200;

  const toggleMore = () => {
    return setLoad(!load);
  };
  const displayedText = load ? review : review.slice(0, maxLength);
  return (
    <Box>
      <Typography sx={{ lineHeight: "2" }}>
        {displayedText}
        {!load && review.length > maxLength && (
          <>
            <Button onClick={toggleMore} sx={{ color: "primary.main" }}>
              <Typography>...</Typography>
              <Typography> مشاهده بیشتر</Typography>
            </Button>
          </>
        )}
      </Typography>
      {load && review.length > maxLength && (
        <Button onClick={toggleMore} sx={{ color: "primary.main" }}>
          <Typography>مشاهده کمتر</Typography>
        </Button>
      )}
    </Box>
  );
}

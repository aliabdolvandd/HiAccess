"use client";

import { useActionState, useEffect, useState } from "react";
import {
  Stack,
  TextField,
  Rating,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { createOrUpdateCommentAction } from "@/api/shop-api/server-shop/comment-action";
import { IComments } from "@/api/server-api/type";
import { useQueryClient } from "@tanstack/react-query";
import SubmitButton from "@/components/SubmitButton";
import { useTheme } from "@mui/material/styles";

type CommentFormProps = {
  value: IComments;
};

export const CommentForm = ({ value }: CommentFormProps) => {
  const [state, action] = useActionState(createOrUpdateCommentAction, {
    success: false,
    message: "",
    errors: {},
  });
  const [rating, setRating] = useState<number | null>(0);
  const [text, setText] = useState<string>("");
  const queryClient = useQueryClient();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRatingChange = (newValue: number | null) => {
    setRating(newValue);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (state.success) {
      setText("");
      setRating(0);
      queryClient.invalidateQueries({ queryKey: ["comments", value.product] });
    }
  }, [state.success, queryClient, value.product]);

  return (
    <Box
      sx={{ backgroundColor: "#fafafa", borderRadius: 2, p: { xs: 2, sm: 3 } }}
    >
      <form action={action}>
        <input type="hidden" name="product" value={value.product} />
        <Stack spacing={2}>
          <Typography fontWeight="bold" fontSize="1.1rem">
            ثبت دیدگاه شما
          </Typography>
          <TextField
            error={!!state?.errors?.text}
            helperText={state?.errors?.text}
            multiline
            fullWidth
            minRows={4}
            name="text"
            placeholder="دیدگاه خود را اینجا بنویسید..."
            value={text}
            onChange={handleTextChange}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
            }}
          />
          <Box>
            <Typography variant="subtitle1" mb={1}>
              امتیاز شما:
            </Typography>
            <Rating
              name="rate"
              value={rating}
              onChange={(_, newValue) => handleRatingChange(newValue)}
              sx={{ direction: "rtl" }}
            />
          </Box>
          <Box>
            <SubmitButton
              sx={{
                bgcolor: "primary.main",
                color: "#FFF",
                px: 5,
                py: 1.5,
                fontSize: isMobile ? "0.9rem" : "1rem",
                alignSelf: "flex-start",
              }}
            >
              ثبت نظر
            </SubmitButton>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

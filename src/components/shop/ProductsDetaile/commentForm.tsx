"use client";

import { useActionState, useEffect, useState } from "react";
import { Stack, TextField, Rating, Typography, Box } from "@mui/material";
import { createOrUpdateCommentAction } from "@/api/shop-api/server-shop/comment-action";
import { IComments } from "@/api/server-api/type";
import { useQueryClient } from "@tanstack/react-query";
import SubmitButton from "@/components/SubmitButton";

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
    <Stack spacing={2}>
      <form action={action}>
        <input type="hidden" name="product" value={value.product} />
        <Stack spacing={2}>
          <TextField
            error={!!state?.errors?.text}
            helperText={state?.errors?.text}
            multiline
            fullWidth
            name="text"
            placeholder="دیدگاه خود را اینجا بنویسید..."
            value={text}
            onChange={handleTextChange}
            sx={{
              marginBottom: "16px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          />
          <Typography>امتیاز:</Typography>
          <Rating
            name="rate"
            value={rating}
            onChange={(_, newValue) => handleRatingChange(newValue)}
            sx={{ direction: "rtl" }}
          />
          <Box sx={{ pb: "16px" }}>
            <SubmitButton
              sx={{
                bgcolor: "primary.main",
                color: "#FFF",
                alignSelf: "flex-start",
                padding: "10px  40px",
              }}
            >
              ثبت نظر
            </SubmitButton>
          </Box>
        </Stack>
      </form>
    </Stack>
  );
};

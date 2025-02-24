"use client";
import { UseAllComments } from "@/api/shop-api/shop-comments";
import { Box, Typography, Rating } from "@mui/material";
import { CommentForm } from "./commentForm";
import { IComments } from "@/api/server-api/type";

interface Props {
  value: Partial<IComments>;
}
const Comments = ({ value }: Props) => {
  const {
    data: comments,
    isError,
    isLoading,
  } = UseAllComments(value.product as number);

  if (isError) return <Typography>خطا در دریافت اطلاعات</Typography>;
  if (isLoading) return <Typography>در حال دریافت اطلاعات...</Typography>;

  return (
    <Box
      sx={{
        padding: "24px",
        backgroundColor: "#f7f7f7",
        borderRadius: "12px",
        mt: 12,
      }}
    >
      {value.product && <CommentForm value={value as IComments} />}
      {comments!.results.length > 0 && (
        <Typography
          variant="h6"
          sx={{
            marginTop: "32px",
            marginBottom: "16px",
            fontWeight: "bold",
          }}
        >
          {comments?.total} دیدگاه
        </Typography>
      )}

      {comments?.results.length === 0 ? (
        <Typography>هیچ کامنتی برای این محصول ثبت نشده است</Typography>
      ) : (
        comments?.results.map((comment) => (
          <Box
            key={comment.id}
            sx={{
              padding: "16px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginBottom: "8px" }}
            >
              {comment.user.firstName} {comment.user.lastName}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "8px" }}>
              {comment.text}
            </Typography>
            <Typography variant="body2" sx={{ color: "gold" }}>
              <Rating value={comment.rating} readOnly />
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Comments;

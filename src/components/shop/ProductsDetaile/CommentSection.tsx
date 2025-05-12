"use client";
import { UseAllComments } from "@/api/shop-api/shop-comments";
import {
  Box,
  Typography,
  Rating,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isError)
    return <Typography color="error">خطا در دریافت اطلاعات</Typography>;
  if (isLoading) return <Typography>در حال دریافت اطلاعات...</Typography>;

  return (
    <Box
      sx={{
        mt: 12,
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 4 },
        backgroundColor: "#f7f7f7",
        borderRadius: 3,
      }}
    >
      <CommentForm value={value as IComments} />

      {comments!.results.length > 0 && (
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          sx={{
            mt: 4,
            mb: 2,
            fontWeight: "bold",
          }}
        >
          {comments?.total} دیدگاه ثبت شده
        </Typography>
      )}

      {comments?.results.length === 0 ? (
        <Typography color="text.secondary">
          هنوز هیچ دیدگاهی برای این محصول ثبت نشده است.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {comments?.results.map((comment) => (
            <Box
              key={comment.id}
              sx={{
                p: { xs: 2, sm: 3 },
                backgroundColor: "#fff",
                borderRadius: 2,
              }}
            >
              <Typography
                fontWeight="bold"
                fontSize={isMobile ? "0.95rem" : "1.05rem"}
                mb={1}
              >
                {comment.user.firstName} {comment.user.lastName}
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                mb={1}
                sx={{ whiteSpace: "pre-line" }}
              >
                {comment.text}
              </Typography>
              <Rating value={comment.rating} readOnly size="small" />
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Comments;

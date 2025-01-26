import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

const Comments = () => {
  const [comments] = useState([
    {
      id: 1,
      name: "علی عبدالوند",
      comment: "این یک نظر آزمایشی است.",
      rating: 5,
    },
    { id: 2, name: "محمد یوسفی", comment: "خیلی محصول خوبی بود.", rating: 4 },
    { id: 3, name: "سارا احمدی", comment: "ممنون از کیفیت خوبتون.", rating: 5 },
    { id: 4, name: "مهدی رضایی", comment: "کاش تخفیف بیشتری داشت.", rating: 3 },
  ]);
  const [visibleComments, setVisibleComments] = useState(3);

  const handleShowMore = () => {
    setVisibleComments((prev) => prev + 3);
  };

  return (
    <Box
      sx={{
        padding: "24px",
        backgroundColor: "#f7f7f7",
        borderRadius: "12px",
        mt: 12,
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginBottom: "16px", fontWeight: "bold" }}
      >
        دیدگاه‌های شما
      </Typography>
      <TextField
        multiline
        rows={3}
        placeholder="دیدگاه خود را اینجا بنویسید..."
        fullWidth
        sx={{
          marginBottom: "16px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ alignSelf: "flex-start" }}
        >
          ثبت نظر
        </Button>
      </Box>
      <Typography
        variant="h6"
        sx={{ marginTop: "32px", marginBottom: "16px", fontWeight: "bold" }}
      >
        11 دیدگاه
      </Typography>
      {comments.slice(0, visibleComments).map((comment) => (
        <Box
          key={comment.id}
          sx={{
            padding: "16px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            marginBottom: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginBottom: "8px" }}
          >
            {comment.name}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "8px" }}>
            {comment.comment}
          </Typography>
          <Typography variant="body2" sx={{ color: "gold" }}>
            {"⭐".repeat(comment.rating)}
          </Typography>
        </Box>
      ))}
      {visibleComments < comments.length && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        >
          <Button variant="outlined" onClick={handleShowMore}>
            مشاهده بیشتر
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Comments;

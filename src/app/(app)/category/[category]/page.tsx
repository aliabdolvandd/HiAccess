"use client";

import { Container, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const params = useParams();
  //   const { category } = params;
  console.log(params);
  return (
    <Container maxWidth={"xl"}>
      <Typography variant="h1" sx={{ pt: 15 }}>
        hiiiiiii
      </Typography>
    </Container>
  );
}

export default Page;

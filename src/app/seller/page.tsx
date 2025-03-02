"use client";
import ChartUserByCountry from "@/components/seller/seller-chart/ChartUserByCountry";
import CustomizedTreeView from "@/components/seller/seller-chart/CustomizedTreeView";
import PageViewsBarChart from "@/components/seller/seller-chart/PageViewsBarChart";
import SessionsChart from "@/components/seller/seller-chart/SessionsChart";
import { Grid2, Stack } from "@mui/material";
import React from "react";

export default function Page() {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <PageViewsBarChart />
        <SessionsChart />
      </Stack>

      <Grid2 container spacing={2}>
        <Grid2>
          <ChartUserByCountry />
        </Grid2>
        <Grid2>
          <CustomizedTreeView />
        </Grid2>
      </Grid2>
    </Stack>
  );
}

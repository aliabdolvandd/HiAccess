"use client";

import { IBrand } from "@/api/server-api/type";
import React from "react";
import AsyncListField from "../../admin/fields/async-list-filed";
import { useSellerBrandsQuery } from "@/api/seller-api/seller-client/seller-brands";

type Props = {
  name: string;
  defaultValue?: IBrand;
};

export default function SellerBrandField({ name, defaultValue }: Props) {
  const { data, isLoading } = useSellerBrandsQuery("");
  return (
    <AsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.titleFa}
      isLoading={isLoading}
      label="برند"
      name={name}
      setQuery={() => {}}
      defaultValue={defaultValue}
    />
  );
}

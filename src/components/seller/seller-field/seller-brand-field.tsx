"use client";

import { IBrand } from "@/api/server-api/type";
import React from "react";
import { useSellerBrandsQuery } from "@/api/seller-api/seller-client/seller-brands";
import AsyncListField from "@/components/admin/fields/async-list-filed";

type Props = {
  name: string;
  defaultValue?: IBrand;
};

export default function BrandField({ name, defaultValue }: Props) {
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

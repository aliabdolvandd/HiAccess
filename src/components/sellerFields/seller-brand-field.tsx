"use client";

import { IBrand } from "@/api/server-api/type";
import React from "react";
import { useBrandsQuery } from "@/api/client-api/brand";
import AsyncListField from "../fields/async-list-filed";

type Props = {
  name: string;
  defaultValue?: IBrand;
};

export default function BrandField({ name, defaultValue }: Props) {
  const { data, isLoading } = useBrandsQuery("");
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

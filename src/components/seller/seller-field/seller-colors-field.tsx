"use client";
import { IColor } from "@/api/server-api/type";
import React, { useState } from "react";

import { useSellerColorsQuery } from "@/api/seller-api/seller-client/seller-colors";
import MultiAsyncListField from "@/components/admin/fields/multi-async-list-field";

type ColorFieldProps = {
  name: string;
  defaultValue?: IColor[];
};

export default function ColorsField({ defaultValue, name }: ColorFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSellerColorsQuery(query);
  return (
    <MultiAsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.title}
      isLoading={isLoading}
      label="رنگ ها"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}

"use client";
import { IBadge } from "@/api/server-api/type";
import React, { useState } from "react";

import { useSellerBadgesQuery } from "@/api/seller-api/seller-client/seller-badge";
import MultiAsyncListField from "@/components/admin/fields/multi-async-list-field";

type BadgeFieldProps = {
  name: string;
  defaultValue?: IBadge[];
};

export default function BadgeField({ defaultValue, name }: BadgeFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSellerBadgesQuery(query);
  return (
    <MultiAsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.title}
      isLoading={isLoading}
      label="برچسب ها"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}

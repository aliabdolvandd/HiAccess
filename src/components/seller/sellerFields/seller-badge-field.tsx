import { IBadge } from "@/api/server-api/type";
import React, { useState } from "react";
import MultiAsyncListField from "../../admin/fields/multi-async-list-field";
import { useSellerBadgesQuery } from "@/api/seller-api/seller-client/seller-badge";

type BadgeFieldProps = {
  name: string;
  defaultValue?: IBadge[];
};

export default function SellerBadgeField({
  defaultValue,
  name,
}: BadgeFieldProps) {
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

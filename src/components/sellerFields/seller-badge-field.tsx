import { IBadge } from "@/api/server-api/type";
import React, { useState } from "react";
import { useBadgesQuery } from "@/api/client-api/badges";
import MultiAsyncListField from "../fields/multi-async-list-field";

type BadgeFieldProps = {
  name: string;
  defaultValue?: IBadge[];
};

export default function BadgeField({ defaultValue, name }: BadgeFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useBadgesQuery(query);
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

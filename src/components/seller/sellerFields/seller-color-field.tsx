import { IColor } from "@/api/server-api/type";
import React, { useState } from "react";
import MultiAsyncListField from "../../admin/fields/multi-async-list-field";
import { useSellerColorsQuery } from "@/api/seller-api/seller-client/seller-colors";

type ColorFieldProps = {
  name: string;
  defaultValue?: IColor[];
};

export default function SellerColorsField({
  defaultValue,
  name,
}: ColorFieldProps) {
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

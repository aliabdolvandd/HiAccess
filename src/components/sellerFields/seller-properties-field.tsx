import { IProperty } from "@/api/server-api/type";
import React, { useState } from "react";
import MultiAsyncListField from "../fields/multi-async-list-field";
import { useSellerPropertiesQuery } from "@/api/seller-api/seller-client/seller-propertis";

type PropertiesFieldProps = {
  name: string;
  defaultValue?: IProperty[];
};

export default function SellerPropertiesField({
  defaultValue,
  name,
}: PropertiesFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSellerPropertiesQuery(query);
  return (
    <MultiAsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.label}
      groupBy={(o) => o.type}
      isLoading={isLoading}
      label="ویژگی ها"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}

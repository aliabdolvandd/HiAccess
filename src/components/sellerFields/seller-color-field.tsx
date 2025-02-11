import { IColor } from "@/api/server-api/type";
import React, { useState } from "react";
import { useColorsQuery } from "@/api/client-api/colors";
import MultiAsyncListField from "../fields/multi-async-list-field";

type ColorFieldProps = {
  name: string;
  defaultValue?: IColor[];
};

export default function ColorsField({ defaultValue, name }: ColorFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useColorsQuery(query);
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

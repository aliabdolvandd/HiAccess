import { ServerPageProps } from "@/api/server-api/type";
import { TableContainer } from "@/components/tables/TableContainer";
import { BrandsTable } from "./brands-table";
import { getBrands } from "@/api/server-api/brands";

export default async function BrandsPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const brands = getBrands(params);
  console.log(brands);
  return (
    <TableContainer title="برند" createLink="/dashboard/brands/create">
      <BrandsTable brands={brands} />
    </TableContainer>
  );
}

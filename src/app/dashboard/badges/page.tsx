import { ServerPageProps } from "@/api/server-api/type";
import { TableContainer } from "@/components/tables/TableContainer";
import { BadgesTable } from "./badges-table";
import { getBadges } from "@/api/server-api/badges";

export default async function BadgesPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  console.log(params);
  const badges = getBadges(params);
  return (
    <TableContainer title="برچسب ها" createLink="/dashboard/badges/create">
      <BadgesTable badges={badges} />
    </TableContainer>
  );
}

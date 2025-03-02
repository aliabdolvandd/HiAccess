"use client";

import { IShopProducts, PaginatedResultApi } from "@/api/server-api/type";
import AITable from "@/components/tables/AITable";
import { Edit, ExpandLess, ExpandMore } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export function ProductTable({
  products,
}: {
  products: PaginatedResultApi<IShopProducts>;
}) {
  // const [expandedRow, setExpandedRow] = useState<string | null>(null);

  // const handleToggleRow = (id: string) => {
  //   setExpandedRow(expandedRow === id ? null : id);
  // };
  return (
    <>
      <AITable
        actions={(p) => (
          <Stack direction={"row"}>
            <Tooltip title="ویرایش">
              <IconButton
                color="secondary"
                component={Link}
                href={"/seller/manage-products/update/" + p.code}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            {/* <Tooltip title="مشاهده جزئیات">
              <IconButton onClick={() => handleToggleRow(p.id)}>
                {expandedRow === p.id ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Tooltip> */}
            {/* <Tooltip title="حذف">
            <DeleteAlertDialog onConfirm={async () => deleteBadgeAction(p.id)}>
              <IconButton color="error">
                <Delete />
              </IconButton>
            </AlertDialog>
          </Tooltip> */}
          </Stack>
        )}
        subTable={{
          header: "اطلاعات محصول",
          key: "specifications",
          schema: [
            // {
            //   title: "دسته بندی محصول",
            //   render: (row: IShopProducts) => row.category.titleFa,
            // },
            // {
            //   title: "برند محصول",
            //   render: (row) => row.brand.titleFa,
            // },
            {
              title: "تعداد محصول",
              render: (row: IShopProducts) => row.bestSeller?.count,
            },
          ],
        }}
        data={products}
        schema={[
          {
            title: "کد",
            render: (row: IShopProducts) => row.code,
          },
          {
            title: "نام محصول",
            render: (row) => row.titleFa,
          },
          {
            title: "قیمت محصول",
            render: (row) => row.bestSeller?.price,
          },
        ]}
      />
    </>
  );
}

"use client";

import { ICategory, PaginatedResultApi } from "@/api/server-api/type";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import { deleteSellerCategoryAction } from "@/action/seller/seller-category";

type Props = {
  categories: PaginatedResultApi<ICategory>;
  onEdit: (category: ICategory) => void;
};

export default function CategoryTable({ categories, onEdit }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>نام فارسی</TableCell>
          <TableCell>نام انگلیسی</TableCell>
          <TableCell>عملیات</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {categories?.results.length ? (
          categories.results.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.titleFa}</TableCell>
              <TableCell>{category.titleEn}</TableCell>
              <TableCell>
                <IconButton
                  // variant="contained"
                  color="primary"
                  onClick={() => onEdit(category)}
                >
                  <Edit />
                </IconButton>
                <DeleteAlertDialog
                  onConfirm={async () =>
                    deleteSellerCategoryAction(category.id)
                  }
                >
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </DeleteAlertDialog>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} align="center">
              دسته‌بندی‌ای یافت نشد!
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

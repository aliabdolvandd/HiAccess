"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { IAddress } from "@/api/server-api/type";

import { useAddressStore } from "@/store/address-provider";
import { AddressForm } from "./Address-form";

export const AddressTable = () => {
  const addresses = useAddressStore((state) => state.addresses);
  const removeAddress = useAddressStore((state) => state.removeAddress);
  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState<string | null>(null);

  const handleDeleteClick = (addressId: string) => {
    setAddressToDelete(addressId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    if (addressToDelete) {
      removeAddress(addressToDelete);
      setOpenDeleteDialog(false);
      setAddressToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
    setAddressToDelete(null);
  };
  console.log(addresses);
  return (
    <Paper sx={{ mt: 10, width: "80%", padding: 4 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
        لیست آدرس‌ها
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenForm(true)}
        sx={{
          mb: 2,
          backgroundColor: "primary.main",
        }}
      >
        افزودن آدرس جدید
      </Button>

      {addresses.length === 0 ? (
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "center" }}
        >
          هیچ آدرسی ثبت نشده است.
        </Typography>
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>خیابان</TableCell>
                <TableCell>شهر</TableCell>
                <TableCell>کد پستی</TableCell>
                <TableCell>عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addresses.map((addr) => (
                <TableRow key={addr._id}>
                  <TableCell>{addr.street}</TableCell>
                  <TableCell>{addr.city}</TableCell>
                  <TableCell>{addr.postalCode}</TableCell>
                  <TableCell>
                    <IconButton
                      color="secondary"
                      onClick={() => setSelectedAddress(addr)}
                      sx={{ mr: 1 }}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteClick(addr._id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Edit Address Dialog */}
      <Dialog open={!!selectedAddress} onClose={() => setSelectedAddress(null)}>
        <DialogTitle>ویرایش آدرس</DialogTitle>
        <DialogContent>
          {selectedAddress && (
            <AddressForm
              editAddress={selectedAddress}
              onClose={() => setSelectedAddress(null)}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedAddress(null)}>بستن</Button>
        </DialogActions>
      </Dialog>

      {/* Add Address Dialog */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogTitle>افزودن آدرس جدید</DialogTitle>
        <DialogContent>
          <AddressForm onClose={() => setOpenForm(false)} editAddress={null} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)}>بستن</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleDeleteCancel}>
        <DialogTitle>تأیید حذف</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            آیا از حذف این آدرس اطمینان دارید؟
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>لغو</Button>
          <Button onClick={handleDeleteConfirm} color="error">
            تایید
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

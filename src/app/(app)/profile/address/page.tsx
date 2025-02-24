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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import { Edit, Delete, AddLocation } from "@mui/icons-material";

interface Address {
  id: number;
  title: string;
  city: string;
  street: string;
  postalCode: string;
}

const AddressTable = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      title: "خانه",
      city: "تهران",
      street: "خیابان ولیعصر، کوچه ۱۲",
      postalCode: "1234567890",
    },
    {
      id: 2,
      title: "محل کار",
      city: "اصفهان",
      street: "خیابان مطهری، پلاک ۵",
      postalCode: "9876543210",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Partial<Address>>({});
  const [editMode, setEditMode] = useState(false);

  const handleOpen = (address?: Address) => {
    if (address) {
      setCurrentAddress(address);
      setEditMode(true);
    } else {
      setCurrentAddress({});
      setEditMode(false);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentAddress({});
  };

  const handleSave = () => {
    if (editMode) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === currentAddress.id ? { ...addr, ...currentAddress } : addr
        )
      );
    } else {
      setAddresses((prev) => [
        ...prev,
        { ...currentAddress, id: prev.length + 1 } as Address,
      ]);
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 2 }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddLocation />}
        sx={{ mb: 2 }}
        onClick={() => handleOpen()}
      >
        افزودن آدرس جدید
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>عنوان</TableCell>
            <TableCell>شهر</TableCell>
            <TableCell>خیابان</TableCell>
            <TableCell>کد پستی</TableCell>
            <TableCell align="center">عملیات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.map((address) => (
            <TableRow key={address.id}>
              <TableCell>{address.title}</TableCell>
              <TableCell>{address.city}</TableCell>
              <TableCell>{address.street}</TableCell>
              <TableCell>{address.postalCode}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" onClick={() => handleOpen(address)}>
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(address.id)}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog برای افزودن یا ویرایش آدرس */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editMode ? "ویرایش آدرس" : "افزودن آدرس جدید"}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="عنوان"
            value={currentAddress.title || ""}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, title: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="شهر"
            value={currentAddress.city || ""}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, city: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="خیابان"
            value={currentAddress.street || ""}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, street: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="کد پستی"
            value={currentAddress.postalCode || ""}
            onChange={(e) =>
              setCurrentAddress({
                ...currentAddress,
                postalCode: e.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>لغو</Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            ذخیره
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default AddressTable;

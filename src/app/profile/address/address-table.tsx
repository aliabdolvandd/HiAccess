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
  IconButton,
  Stack,
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
} from "@mui/material";
import { Edit, Delete, AddLocation } from "@mui/icons-material";
import { IAddress } from "@/api/server-api/type";
import { AddressForm } from "./Addres-form";

interface AddressProps {
  address: IAddress[];
}
const AddressTable = ({ address }: AddressProps) => {
  const [currentAddress, setCurrentAddress] = useState<IAddress | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (addr: IAddress | null) => {
    setCurrentAddress(addr);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentAddress(null);
  };

  return (
    <Stack
      spacing={3}
      sx={{ maxWidth: "100vw", width: "70vw", p: 3, flexGrow: 1, mt: 20 }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddLocation />}
        onClick={() => handleOpen(null)}
        sx={{
          alignSelf: "end",
          px: 3,
          py: 1.5,
          fontSize: "1rem",
          borderRadius: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        افزودن آدرس جدید
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
          {currentAddress ? "ویرایش آدرس" : "افزودن آدرس جدید"}
        </DialogTitle>
        <DialogContent>
          <AddressForm value={currentAddress} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="error"
            sx={{ fontWeight: "bold" }}
          >
            بستن
          </Button>
        </DialogActions>
      </Dialog>

      {/* جدول ریسپانسیو با طراحی زیبا */}
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          overflowX: "auto",
          borderRadius: 3,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                شهر
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                خیابان
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                کد پستی
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                عملیات
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {address.map((addr, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-of-type(odd)": { bgcolor: "#f9f9f9" },
                  "&:hover": { bgcolor: "#f1f1f1" },
                }}
              >
                <TableCell>{addr.city}</TableCell>
                <TableCell>{addr.street}</TableCell>
                <TableCell>{addr.postalCode}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleOpen(addr)}
                    sx={{
                      mx: 0.5,
                      transition: "0.2s",
                      "&:hover": { scale: "1.1" },
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    sx={{
                      mx: 0.5,
                      transition: "0.2s",
                      "&:hover": { scale: "1.1" },
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default AddressTable;

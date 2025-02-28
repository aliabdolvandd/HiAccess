import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface PaymentMethodProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: "16px" }}>
      <InputLabel>نحوه پرداخت</InputLabel>
      <Select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        label="نحوه پرداخت"
      >
        <MenuItem value="creditCard">کارت اعتباری</MenuItem>
        <MenuItem value="paypal">پی‌پال</MenuItem>
        <MenuItem value="cashOnDelivery">پرداخت در محل</MenuItem>
        <MenuItem value="bankTransfer">انتقال بانکی</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PaymentMethod;

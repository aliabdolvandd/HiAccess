import { useAddressStore } from "@/store/address-provider";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

interface AddressProps {
  address: string;
  setAddress: (address: string) => void;
}
export default function AddressField({ address, setAddress }: AddressProps) {
  const addressList = useAddressStore((state) => state.addresses);
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  return (
    <Box sx={{ marginBottom: "16px" }}>
      <Typography variant="h6" sx={{ marginBottom: "8px" }}>
        انتخاب آدرس
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={address} onChange={handleAddressChange}>
          {addressList.map((addr, index) => {
            const addrString = `${addr.city}, ${addr.street}, ${addr.postalCode}, ${addr.location[0]}, ${addr.location[1]}`;
            return (
              <FormControlLabel
                key={index}
                value={addrString}
                control={<Radio color="primary" />}
                label={`${addr.city}, ${addr.street} - کدپستی: ${addr.postalCode}`}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

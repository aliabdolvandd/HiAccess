import { useSelectedAddressStore } from "@/store/address-checkout-store";
import { useAddressStore } from "@/store/address-provider";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export default function AddressField() {
  const addressList = useAddressStore((state) => state.addresses);
  const { selectedAddress, setSelectedAddress } = useSelectedAddressStore();

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAddr = addressList.find(
      (addr) =>
        `${addr.city}, ${addr.street}, ${addr.postalCode}, ${addr.location[0]}, ${addr.location[1]}` ===
        event.target.value
    );

    if (selectedAddr) {
      setSelectedAddress(selectedAddr);
    }
  };
  return (
    <Box sx={{ marginBottom: "16px" }}>
      <Typography variant="h6" sx={{ marginBottom: "8px" }}>
        انتخاب آدرس
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          value={
            selectedAddress
              ? `${selectedAddress.city}, ${selectedAddress.street}, ${selectedAddress.postalCode}, ${selectedAddress.location[0]}, ${selectedAddress.location[1]}`
              : ""
          }
          onChange={handleAddressChange}
        >
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

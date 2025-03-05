"use client";
import { IAddress } from "@/api/server-api/type";
import { useAddressStore } from "@/store/address-provider";
import { Box, Stack, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
type AddressFormProps = {
  editAddress: IAddress | null;
  onClose: () => void;
};

export const AddressForm = ({ editAddress, onClose }: AddressFormProps) => {
  const [formData, setFormData] = useState<IAddress>(
    editAddress || {
      _id: "",
      street: "",
      city: "",
      postalCode: "",
      location: [35.6892, 51.389],
    }
  );

  const addAddress = useAddressStore((state) => state.addAddress);
  const updateAddress = useAddressStore((state) => state.editAddress);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const defaultLocation: [number, number] = formData.location;

    mapInstanceRef.current = L.map(mapContainerRef.current, {
      center: defaultLocation,
      zoom: 15,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      mapInstanceRef.current
    );
    const markerIcon = L.icon({
      iconUrl: "/marker.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
    markerRef.current = L.marker(defaultLocation, {
      draggable: true,
      icon: markerIcon,
    }).addTo(mapInstanceRef.current);

    markerRef.current.on("dragend", (e) => {
      const { lat, lng } = e.target.getLatLng();
      setFormData((prev) => ({ ...prev, location: [lat, lng] }));
    });
    mapInstanceRef.current.on("moveend", () => {
      const center = mapInstanceRef.current?.getCenter();
      if (center && markerRef.current) {
        markerRef.current.setLatLng([center.lat, center.lng]);
        setFormData((prev) => ({
          ...prev,
          location: [center.lat, center.lng],
        }));
      }
    });

    setTimeout(() => {
      mapInstanceRef.current?.invalidateSize();
    }, 300);

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, [formData.location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editAddress) {
      updateAddress(editAddress._id, formData);
    } else {
      addAddress({ ...formData, _id: Date.now().toString() });
    }

    onClose();
  };

  return (
    <Box
      sx={{
        width: "90vw",
        maxWidth: "500px",
        mx: "auto",
        p: 3,
        borderRadius: "12px",
        bgcolor: "#fff",
        boxShadow: 3,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        {/* map */}
        <Box
          ref={mapContainerRef}
          sx={{
            height: "400px",
            width: "100%",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: 2,
          }}
        />

        <Stack spacing={2}>
          {formData?._id && (
            <input type="hidden" name="_id" value={formData._id} />
          )}
          <TextField
            onChange={handleChange}
            label="شهر"
            name="city"
            value={formData.city}
            fullWidth
            required
          />
          <TextField
            onChange={handleChange}
            label="خیابان"
            name="street"
            value={formData.street}
            fullWidth
            required
          />
          <TextField
            onChange={handleChange}
            label="کد پستی"
            name="postalCode"
            value={formData.postalCode}
            fullWidth
            required
          />

          <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#1976D2",
                color: "#FFF",
                padding: "12px 50px",
                borderRadius: "8px",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              {editAddress ? "ویرایش آدرس" : "افزودن آدرس"}
            </button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

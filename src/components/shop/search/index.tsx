import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  DialogTitle,
} from "@mui/material";
import { useShopProductsQuery } from "@/api/shop-api/shop-products";
import { Delete } from "@mui/icons-material";
import { useSearchHistory } from "./searchHistory";
import { useDebounce } from "use-debounce";
import Link from "next/link";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const SearchDialog = ({ open, onClose }: SearchDialogProps) => {
  const { history, addHistory, removeFromHistory, clearHistory } =
    useSearchHistory();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  const { data: products, isError, isLoading } = useShopProductsQuery();

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  }, []);

  useEffect(() => {
    if (debouncedQuery && !history.includes(debouncedQuery)) {
      addHistory(debouncedQuery);
    }
  }, [debouncedQuery, addHistory, history]);
  if (isError) return <Typography>خطا در دریافت اطلاعات</Typography>;
  if (isLoading) return <Typography>در حال بارگذاری...</Typography>;

  const filteredProducts = products?.results.filter(
    (product) =>
      product.titleFa.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      product.brand.titleFa.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>جستجو</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="نام محصول یا برند را وارد کنید..."
          value={query}
          onChange={handleSearch}
          autoFocus
        />

        {history.length > 0 && !query && (
          <Box mt={2}>
            <Typography variant="subtitle1">تاریخچه جستجو</Typography>
            <List>
              {history.map((item) => (
                <ListItem
                  key={item}
                  onClick={() => setQuery(item)}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromHistory(item);

                        if (query === item) {
                          setQuery("");
                        }
                      }}
                    >
                      <Delete />
                    </IconButton>
                  }
                >
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Box textAlign="center">
              <IconButton color="error" onClick={clearHistory}>
                <Delete />
                <Typography variant="body2">پاک کردن همه</Typography>
              </IconButton>
            </Box>
          </Box>
        )}

        {/* search result */}
        {debouncedQuery && (
          <List>
            {filteredProducts?.map((product) => (
              <ListItem key={product.id}>
                <Link
                  href={`/products/${product.code}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => onClose()}
                >
                  <ListItemText
                    primary={product.titleFa}
                    secondary={product.brand.titleFa}
                    sx={{ color: "black" }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;

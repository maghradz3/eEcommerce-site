import { Autocomplete, Box, TextField } from "@mui/material";
import { Link, Loading, Text } from "../atoms";
import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import classes from "./SearchBar.module.css";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getData, data, loading, setState } = useFetchData();
  const { products } = data;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(searchValue);
      if (searchValue) {
        getData(
          `https://eecommerce-back.onrender.com/products/search?name=${searchValue}`
        );
      } else {
        setState((prev) => ({ ...prev, data: [] }));
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);
  return (
    <Autocomplete
      freeSolo
      className={classes.searchInput}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "orange",
          },
          "&:hover fieldset": {
            borderColor: "orange",
          },
          "&:not(:hover) fieldset": {
            borderColor: "orange",
          },
        },
      }}
      disableClearable
      loading={loading}
      loadingText={<Loading size={50} />}
      options={products || []}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { name, category, _id, price, image } = option;
        return (
          <Link to={`/products/categories/${category}/${_id}`} key={_id}>
            <Box style={{ display: "flex" }}>
              <img
                style={{ widht: 50, height: 50, objectFit: "cover" }}
                src={image}
              />
              <Text>{name}</Text>
              <Text>{price}</Text>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            label="Search Products"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            sx={{ input: { color: "#FF9900" } }}
            InputLabelProps={{
              style: { color: "#FF9900" },
            }}
          ></TextField>
        );
      }}
    />
  );
};

import { MenuItem, Select } from "@mui/material";
import React from "react";

export const Sort = ({ sort, changeSort }) => {
  return (
    <Select
      value={sort ?? "price,desc"}
      onChange={(e) => {
        changeSort("sort", e.target.value);
      }}
    >
      <MenuItem value="price,desc">Price decreasing</MenuItem>
      <MenuItem value="price,asc">Price increasing</MenuItem>
      <MenuItem value="name,desc">Name decreasing</MenuItem>
      <MenuItem value="name,asc">Name decreasing</MenuItem>
    </Select>
  );
};

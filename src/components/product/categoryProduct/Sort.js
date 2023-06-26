import { MenuItem, Select, styled } from "@mui/material";

import React from "react";

const CustomSelect = styled(Select)(() => ({
  border: " 1px solid rgb(235, 171, 98)",
  color: "orange",
  outline: "none",
}));

const CustomMenuItem = styled(MenuItem)`
  // color: "rgb(235, 171, 98)",

  &:hover {
    background-color: #fee8b0;
  }
`;

export const Sort = ({ sort, changeSort }) => {
  return (
    <CustomSelect
      value={sort ?? "price,desc"}
      onChange={(e) => {
        changeSort("sort", e.target.value);
      }}
    >
      <CustomMenuItem value="price,desc">Price decreasing</CustomMenuItem>
      <CustomMenuItem value="price,asc">Price increasing</CustomMenuItem>
      <CustomMenuItem value="name,desc">Name decreasing</CustomMenuItem>
      <CustomMenuItem value="name,asc">Name decreasing</CustomMenuItem>
    </CustomSelect>
  );
};

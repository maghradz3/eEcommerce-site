import { Pagination } from "@mui/material";
import React from "react";

export const Paginate = ({ total, page, changePage }) => {
  return (
    <Pagination
      count={total}
      page={Number(page)}
      variant="outlined"
      color="primary"
      onChange={(_, value) => {
        changePage("page", value);
      }}
      sx={{
        "& .MuiPaginationItem-root": {
          "&:hover": {
            backgroundColor: "#f2c994",
            color: "white",
          },
        },
        "& .Mui-selected": {
          backgroundColor: "#f0b351",
          color: "white",
        },
      }}
    />
  );
};

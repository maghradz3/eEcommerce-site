import React from "react";
import { FormControl } from "@mui/material";

export const FormContainer = ({ children }) => {
  return <FormControl sx={{ marginTop: "15px" }}>{children}</FormControl>;
};

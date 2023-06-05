import React from "react";
import { FormControl } from "@mui/material";

export const FormContainer = ({ children }) => {
  return (
    <FormControl fullWidth sx={{ margitTop: "15px" }}>
      {children}
    </FormControl>
  );
};

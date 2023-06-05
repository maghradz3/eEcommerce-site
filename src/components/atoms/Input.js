import React from "react";
import { TextField } from "@mui/material";

export const Input = ({
  type = "text",
  name,
  lable,
  onChange,
  error,
  value,
}) => {
  return (
    <TextField
      type={type}
      name={name}
      lable={lable}
      onChange={onChange}
      value={value}
      error={Boolean(error)}
      helperText={error}
      sx={{
        marginTop: 2,
        "& fieldset": { borderRadius: "20px" },
      }}
    />
  );
};

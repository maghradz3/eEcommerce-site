import React from "react";
import { TextField } from "@mui/material";

export const Input = ({
  type = "text",
  name,
  label,
  onChange,
  error,
  value,
}) => {
  return (
    <TextField
      type={type}
      name={name}
      label={label}
      onChange={onChange}
      value={value}
      error={Boolean(error)}
      helperText={error}
      InputLabelProps={{
        style: { color: "orange" },
      }}
      sx={{
        marginTop: 2,
        "& fieldset": { borderRadius: "20px" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "orange",
          },
          "&:hover fieldset": {
            borderColor: "orange",
          },
          "&:not(:hover) fieldset": {
            borderColor: "rgb(235, 171, 98)",
          },
        },
      }}
    />
  );
};

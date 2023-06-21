import React from "react";
import { Button as MUIButton, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "orange",
          "&:hover": {
            color: "black",
            "& .MuiTouchRipple-root": {
              color: "orange", // Replace with your desired color
            },
          },
        },
      },
    },
  },
});

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <MUIButton onClick={onClick} {...rest}>
        {children}
      </MUIButton>
    </ThemeProvider>
  );
};

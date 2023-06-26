import React from "react";
import { Button as MUIButton, createTheme, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";

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

const StyledMuiButton = styled(MUIButton)(() => ({}));

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledMuiButton onClick={onClick} {...rest}>
        {children}
      </StyledMuiButton>
    </ThemeProvider>
  );
};

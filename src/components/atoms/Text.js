import React from "react";
import { styled, Typography } from "@mui/material";

const StyledTypography = styled(Typography)(() => ({
  fontSize: "1.1rem",

  "@media only screen and (max-width:650px)": {
    fontSize: "0.8rem ",
  },

  "@media only screen and (max-width:550px)": {
    fontSize: "0.7rem ",
  },
}));

export const Text = ({ children, variant = "body1", ...rest }) => {
  return (
    <StyledTypography variant={variant} {...rest}>
      {children}
    </StyledTypography>
  );
};

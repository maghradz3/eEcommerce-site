import { Grid } from "@mui/material";
import React from "react";

export const GridContainer = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        justifyContent: "center",
        "& > .MuiGrid-item": {
          paddingRight: 0,
        },
        "@media only screen and (max-width: 899px)": {
          padding: "50px",
        },
        "@media only screen and (max-width: 450px)": {
          padding: "20px",
        },
      }}
      rowGap={2}
      columnGap={3}
    >
      {children}
    </Grid>
  );
};

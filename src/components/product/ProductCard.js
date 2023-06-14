import React from "react";

import { styled, Grid, Card, Box } from "@mui/material";
import { Link, Text } from "../atoms";

const StyledImage = styled("img")(() => ({
  objectFit: "cover",
  width: "100%",
  height: "270px",
}));

const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "15px 10px",
}));

export const ProductCard = ({ product }) => {
  const { name, image, category, price } = product;
  console.log(product);
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card sx={{ borderRadius: 8 }}>
        <Link to="/singleProductPage">
          <StyledImage
            src={image}
            alt={`${category}-${name}`}
            style={{ objectFit: "cover", width: "100%", height: "270px" }}
          />
          <StyledInfoContainer>
            <Text>{name}</Text>
            <Text>${price}</Text>
          </StyledInfoContainer>
        </Link>
      </Card>
    </Grid>
  );
};

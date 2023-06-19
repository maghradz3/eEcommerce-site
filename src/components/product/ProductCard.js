import React from "react";

import { styled, Grid, Card, Box, CardActions } from "@mui/material";
import { Link, Text } from "../atoms";
import { ProductCardActions } from "./ProductCardActions";
import { useUser } from "../../hooks";

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
  const { name, image, category, price, _id } = product;
  const { userInfo } = useUser();
  console.log(product);
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card sx={{ borderRadius: 8 }}>
        <Link to={`/products/categories/${category}/${_id}`}>
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
        <CardActions>
          <ProductCardActions userInfo={userInfo} product={product} />
        </CardActions>
      </Card>
    </Grid>
  );
};

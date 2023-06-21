import React from "react";

import { styled, Grid, Card, Box, CardActions } from "@mui/material";
import { Link, Text } from "../atoms";
import { ProductCardActions } from "./ProductCardActions";
import { useCart, useUser } from "../../hooks";
import classes from "./ProductCard.module.css";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
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
  const { cartItems } = useCart();
  console.log(product);
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card className={classes.Card} sx={{ borderRadius: 8 }}>
        <Link to={`/products/categories/${category}/${_id}`}>
          <StyledImage
            src={image}
            alt={`${category}-${name}`}
            style={{ objectFit: "cover", width: "100%", height: "270px" }}
          />
          <StyledInfoContainer>
            <Text className={classes.CardText}>
              {name}
              <span>
                <MdOutlineProductionQuantityLimits color="orange" />
              </span>{" "}
            </Text>
            <Text className={classes.CardText}>
              {price}
              <span>
                <HiCurrencyDollar color="green" size={20} />
              </span>{" "}
            </Text>
          </StyledInfoContainer>
        </Link>
        <CardActions>
          <ProductCardActions
            className={classes.ProductCardActions}
            userInfo={userInfo}
            product={product}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

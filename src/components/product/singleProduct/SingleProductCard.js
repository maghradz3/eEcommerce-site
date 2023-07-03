import React from "react";

import { styled, Box } from "@mui/material";
import { Text } from "../../atoms";
import { ProductCardActions } from "../ProductCardActions";
import { useCart, useUser } from "../../../hooks";
import classes from "./SingleProductCard.module.css";

const StyledContainer = styled(Box)(() => ({
  border: "1px solid rgb(238,153,74)",
  width: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // margin: "20px 30px",
  padding: "30px",
  margin: "0 auto",

  "@media only screen and (max-width: 868px)": {
    padding: "10px",
    width: "90%",
  },
}));

const StyledImageBox = styled(Box)(() => ({
  width: "70%",
  height: "350px",
  borderRadius: "8px",
  overflow: "hidden",

  "@media only screen and (max-width: 598px)": {
    height: "270px",
    width: "95%",
  },
}));

const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
  objectPosition: "center",
  // overflow: "hidden",
}));

const StyledDescription = styled("div")(() => ({
  display: "flex",
  alignItems: "center",

  margin: "20px 0",
  "@media only screen and (max-width: 598px)": {
    margin: "10px 0",
  },
}));

export const SingleProductCard = ({ product }) => {
  const { image, name, brand, description } = product;
  const { cartItems } = useCart();
  const { userInfo } = useUser();
  console.log(product);
  return (
    <StyledContainer className={classes.MainCont}>
      <StyledImageBox>
        <StyledImage src={image} className={classes.image} />
      </StyledImageBox>
      <Box className={classes.Description}>
        <StyledDescription>
          <Text variant="h4" size={40} className={classes.keyName}>
            Product Name:
          </Text>
          <Text variant="h4" size={20} className={classes.fontSize}>
            {name}
          </Text>
        </StyledDescription>
        <StyledDescription>
          <Text variant="h4" size={20} className={classes.keyName}>
            Brand:
          </Text>
          <Text variant="h4" size={20} className={classes.fontSize}>
            {brand}
          </Text>
        </StyledDescription>
        <StyledDescription>
          <Text variant="h4" size={20} className={classes.keyName}>
            Description:
          </Text>
          <Text variant="h4" size={20} className={classes.fontSize}>
            {description}
          </Text>
        </StyledDescription>
        <ProductCardActions
          userInfo={userInfo}
          product={product}
          cartItems={cartItems}
        />
      </Box>
    </StyledContainer>
  );
};

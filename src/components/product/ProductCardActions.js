import React from "react";
import { isUserAdmin } from "../../helper";
import { Button } from "../atoms";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Text } from "../atoms";
import classes from "./ProductCardActions.module.css";

import {
  addToCart,
  deleteProduct,
  removeFormCart,
  setSelectedProduct,
} from "../../redux";
import { Box } from "@mui/material";
import { useCart } from "../../hooks";

export const ProductCardActions = ({ userInfo, product }) => {
  const { name, _id } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useCart();

  if (isUserAdmin(userInfo)) {
    return (
      <>
        <Button
          onClick={() => {
            dispatch(setSelectedProduct(product));
            navigate(`/product/${name}/edit`);
          }}
        >
          edit
        </Button>
        <Button onClick={() => dispatch(deleteProduct(_id))}>delete</Button>
      </>
    );
  }
  const productInCart = cartItems?.find((item) => item.product._id === _id);
  return (
    <Box className={classes.CardBox}>
      {productInCart ? (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={() => dispatch(removeFormCart(_id))}>-</Button>
          <Text sx={{ color: "orange" }}>{productInCart?.quantity}</Text>
          <Button onClick={() => dispatch(addToCart({ product }))}>+</Button>
        </Box>
      ) : (
        <Button
          className={classes.CardButton}
          onClick={() => dispatch(addToCart({ product }))}
        >
          Add To Cart
        </Button>
      )}
    </Box>
  );
};

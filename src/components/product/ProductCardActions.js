import React from "react";
import { isUserAdmin } from "../../helper";
import { Button } from "../atoms";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Text } from "../atoms";

import {
  addToCart,
  deleteProduct,
  removeFormCart,
  setSelectedProduct,
} from "../../redux";
import { Box } from "@mui/material";
import { useCart } from "../../hooks";

export const ProductCardActions = ({ userInfo, product, cartItems }) => {
  const { name, _id } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const productInCart = cartItems.find((item) => item.product._id === _id);
  return (
    <Box>
      {productInCart ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={() => dispatch(removeFormCart(_id))}>-</Button>
          <Text>{productInCart?.quantity}</Text>
          <Button onClick={() => dispatch(addToCart({ product }))}>+</Button>
        </Box>
      ) : (
        <Button onClick={() => dispatch(addToCart({ product }))}>
          Add To Cart
        </Button>
      )}
    </Box>
  );
};

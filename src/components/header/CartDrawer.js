import { Box, Drawer, styled } from "@mui/material";
import { useCart, useUser } from "../../hooks";
import { useDispatch } from "react-redux";

import { clearCart, saveCart } from "../../redux";
import { Button } from "../atoms";
import { ProductCardActions } from "../product/ProductCardActions";
import classes from "./CartDrawer.module.css";

const StyledCartItem = styled(Box)(() => ({
  width: 400,
  display: "flex",
  alignItems: "flex-start",
  paddingLeft: "10px",
  flexDirection: "column",

  "@media only screen and (max-width: 768px)": {
    width: 350,
  },

  "@media only screen and (max-width: 568px)": {
    width: 250,
  },
}));

const StyledButtonContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const StyledImage = styled("img")(() => ({
  width: 70,
  height: 70,
  objectFit: "cover",
  borderRadius: 5,
}));

export const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
  const { userInfo } = useUser();

  const dispatch = useDispatch();
  const { cartItems } = useCart();

  return (
    <Drawer
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      anchor="right"
    >
      {cartItems?.map((item) => {
        const { product, quantity } = item;
        const { price, name, _id, image } = product;
        return (
          <StyledCartItem key={_id} className={classes.MainContainer}>
            <div className={classes.CardActions}>
              <StyledImage src={image} alt={`${name}-img`} />
              <Box sx={{ paddingLeft: 5 }}>
                <h4 className={classes.Text}>{name}</h4>
                <h4 className={classes.Text}>Quantity:{quantity}</h4>
                <h4 className={classes.Text}>Total: ${price * quantity}</h4>
              </Box>
            </div>
            <ProductCardActions userInfo={userInfo} product={product} />
          </StyledCartItem>
        );
      })}
      <StyledButtonContainer>
        <Button
          onClick={() => {
            dispatch(clearCart());
            if (userInfo?._id) {
              dispatch(saveCart({ cartItems: [], userId: userInfo._id }));
            }
          }}
        >
          Clear Cart
        </Button>
        {!!userInfo && (
          <Button
            onClick={() =>
              dispatch(saveCart({ cartItems, userId: userInfo._id }))
            }
          >
            Save Cart
          </Button>
        )}
      </StyledButtonContainer>
    </Drawer>
  );
};

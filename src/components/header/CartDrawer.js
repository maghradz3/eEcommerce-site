import { Box, Button, Drawer, styled } from "@mui/material";
import { useCart, useUser } from "../../hooks";
import { useDispatch } from "react-redux";
import { Text } from "../atoms";
import { clearCart, saveCart } from "../../redux";

const StyledCartItem = styled(Box)(() => ({
  width: 400,
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  marginBottom: 20,
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
          <StyledCartItem key={_id}>
            <StyledImage src={image} alt={`${name}-img`} />
            <Box sx={{ paddingLeft: 5 }}>
              <Text>{name}</Text>
              <Text>Quantity:{quantity}</Text>
              <Text>Total ${price * quantity}</Text>
            </Box>
          </StyledCartItem>
        );
      })}
      <StyledButtonContainer>
        <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helper";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.get(`/users/${userId}/cart`);
      return data;
    } catch (error) {
      return rejectWithValue("could not fetch data");
    }
  }
);

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async ({ userId, cartItems }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.put(`/users/${userId}/cart`, {
        products: cartItems,
      });
      dispatch(fetchCart({ userId }));
    } catch (error) {
      return rejectWithValue("Could not save the cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: null,
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const { _id } = product;
      const itemInCart = state.cartItems.find(
        (item) => item.product._id === _id
      );
      if (itemInCart) {
        const updateCart = state.cartItems.map((item) =>
          item.product._id === _id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        state.cartItems = updateCart;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
    },
    removeFormCart: (state, action) => {
      const id = action.payload;

      const itemInCart = state.cartItems.find(
        (item) => item.product._id === id
      );

      if (itemInCart?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product._id !== id
        );
      } else {
        const updateCart = state.cartItems.map((item) =>
          item.product._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        state.cartItems = updateCart;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.cart;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFormCart, clearCart } = cartSlice.actions;

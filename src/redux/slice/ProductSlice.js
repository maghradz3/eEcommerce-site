import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helper";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, productId }, { dispatch, rejectWithValue }) => {
    try {
      const url = productId ? `/products/${productId}` : "/products";
      const method = productId ? "put" : "post";
      const { data } = await axiosInstance[method](url, { product });
      dispatch(fetchHomePageProducts());
      return data;
    } catch (error) {
      return rejectWithValue("oops");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { dispatch }) => {
    try {
      const { data } = axiosInstance.delete(`/products/${id}`);
      dispatch(fetchHomePageProducts());
      return data;
    } catch (error) {}
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/products");
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue("Couldn't fetch products");
    }
  }
);
export const productSlice = createSlice({
  name: "porduct",
  initialState: {
    loading: true,
    error: null,
    homePageProducts: [],
    selectedProduct: null,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.products;
    });
    builder.addCase(fetchHomePageProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(saveProduct.fulfilled, (state) => {
      state.selectedProduct = null;
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;

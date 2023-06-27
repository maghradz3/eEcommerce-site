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
      return rejectWithValue(
        error?.response?.data?.message,
        "Something went wrong"
      );
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
      const { data } = await axiosInstance.get(
        "/products?page=1&sort=price,asc"
      );

      return data;
    } catch (error) {
      return rejectWithValue("Couldn't fetch products");
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async ({ id, category }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/products/category/${category}/${id}`
      );
      console.log("single product", data);
      return data;
    } catch (error) {
      return rejectWithValue("someting went wrong, coludnot fetch product");
    }
  }
);

const pendingReducer = (state) => {
  state.loading = true;
};

const errorReducer = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const productSlice = createSlice({
  name: "porduct",
  initialState: {
    loading: true,
    error: null,
    homePageProducts: [],
    selectedProduct: null,
    categories: [],

    singleProduct: {},
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageProducts.pending, pendingReducer);
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.products;
      state.categories = action.payload.categories;
    });
    builder.addCase(fetchHomePageProducts.rejected, errorReducer);
    builder.addCase(saveProduct.fulfilled, (state) => {
      state.selectedProduct = null;
    });

    builder.addCase(fetchSingleProduct.pending, pendingReducer);
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload.product;
    });
    builder.addCase(fetchSingleProduct.rejected, errorReducer);
    builder.addCase(saveProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;

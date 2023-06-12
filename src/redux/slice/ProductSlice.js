import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helper";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product }) => {
    try {
      const { data } = await axiosInstance.post("/products", { product });
      console.log(data);
      return data;
    } catch (error) {}
  }
);
export const productSlice = createSlice({
  name: "porduct",
  initialState: {
    loading: true,
    error: null,
  },
  reducers: {},
});

export const productReducer = productSlice.reducer;

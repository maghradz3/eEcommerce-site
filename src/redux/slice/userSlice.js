import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helper";

export const authenticatedUser = createAsyncThunk(
  "user/authenticatedUser",
  async ({ formValues, isLogin }) => {
    try {
      const route = `/users/${isLogin ? "login" : "register"}`;
      const { data } = await axiosInstance.post(route, formValues);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);
      console.log(data.user);
      return data;
    } catch (error) {}
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(authenticatedUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticatedUser.fulfilled, (state, action) => {
      state.userInfo = action.payload.user;
    });
  },
});

export const userReducer = userSlice.reducer;

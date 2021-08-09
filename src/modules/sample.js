import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../lib/api";

export const getUsersAsync = createAsyncThunk("sample/getUsersAsync", api.getUsers);

const initialState = {
  users: null,
  loading: false,
  hasErrors: false,
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersAsync.pending]: (state, { payload: users }) => {
      state.loading = true;
      state.users = users;
    },
    [getUsersAsync.fulfilled]: (state, { payload: users }) => {
      state.loading = false;
      state.users = users;
      state.hasErrors = false;
    },
    [getUsersAsync.rejected]: (state, { payload: users }) => {
      state.loading = false;
      state.users = users;
      state.hasErrors = true;
    },
  },
});

export default sampleSlice.reducer;

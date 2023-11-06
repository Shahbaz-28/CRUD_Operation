import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  createUser from '../services/apis/create_user'

export const createUserApi = createAsyncThunk("createUserApi/create", async (userData) => {
    const response = await createUser(userData);
    console.log("data in thunk", response);
    return response;
});


const createUserSlice = createSlice({
    name: "create",
    initialState: {
      loading: false,
      result: [],
    },
    reducers: {
      
    },
    extraReducers: (builders) => {
      builders
        .addCase(createUserApi.pending, (state) => {
          state.loading = true;
        })
        .addCase(createUserApi.fulfilled, (state, action) => {
          state.loading = false;
          state.result = action.payload;
          console.log("data in payload", action.payload);
        })
        .addCase(createUserApi.rejected, (state) => {
          state.loading = false;
        });
    },
  });

  export default createUserSlice.reducer;
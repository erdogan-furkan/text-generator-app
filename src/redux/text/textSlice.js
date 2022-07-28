import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTextByFilter = createAsyncThunk(
  "text/fetchTextByFilter",
  async (filter) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}?type=all-meat&paras=${filter.number}&format=${filter.format}`
    );
    const data = await res.text();
    return data;
  }
);

const textSlice = createSlice({
  name: "text",
  initialState: {
    content: "",
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchTextByFilter.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTextByFilter.fulfilled]: (state, action) => {
      state.content = action.payload;
      state.status = "succeeded";
    },
    [fetchTextByFilter.rejected]: (state, action) => {
      console.log(action.error.message);
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});

export default textSlice.reducer;

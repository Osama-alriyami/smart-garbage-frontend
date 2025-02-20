import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../services/api";

// Fetch all garbage bins
export const fetchGarbage = createAsyncThunk("garbage/fetchGarbage", async () => {
  const response = await axios.get("/garbage");
  return response.data;
});

// Post new garbage data
export const addGarbage = createAsyncThunk("garbage/addGarbage", async (data) => {
  const response = await axios.post("/garbage", data);
  return response.data;
});

const garbageSlice = createSlice({
  name: "garbage",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGarbage.pending, (state) => { state.loading = true; })
      .addCase(fetchGarbage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGarbage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addGarbage.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export default garbageSlice.reducer;

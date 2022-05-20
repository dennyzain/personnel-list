import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    users: [],
  },
  reducers: {
    addingDataFetching: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addingDataFetching } = dataSlice.actions;

export default dataSlice.reducer;

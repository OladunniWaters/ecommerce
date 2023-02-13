import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    product: []
  },
  reducers: {
////////////////
  },
});

export const ProductReducer = ProductSlice.reducer;
export const {
////////////
} = ProductSlice.actions;
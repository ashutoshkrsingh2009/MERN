import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  }
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    loading: false,
    error: null,
    products: [],
    favourites: [],
  },

  reducers: {
    addFavourite: (state, action) => {
      const exist = state.favourites.find(
        (item) => item.id === action.payload.id
      );

      if (!exist) {
        state.favourites.push(action.payload);
      }
    },

    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addFavourite,
  removeFavourite,
} = productSlice.actions;

export default productSlice.reducer;
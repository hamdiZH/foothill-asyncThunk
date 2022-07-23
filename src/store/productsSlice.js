import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
      const res = await fetch('https://62d6874451e6e8f06f0c0fb0.mockapi.io/products');
      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const res = await fetch('https://62d6874451e6e8f06f0c0fb0.mockapi.io/products', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-type': 'application/json;',
        },
      });
      return await res.json()
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)



const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //----------------------------- Get Products -----------------------------
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //----------------------------- Add Product -----------------------------
    [addProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = [action.payload, ...state.products]
    },
    [addProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default productsSlice.reducer;
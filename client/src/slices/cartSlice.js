import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exitsItem = state.cartItems.find((c) => c._id === item._id);
      if (exitsItem) {
        state.cartItems = state.cartItems.map((c) =>
          c._id === exitsItem._id ? item : c
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return updateCart(state);
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      return updateCart(state);
    },
    saveShipping: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    resetCart: (state) => (state = initialState),
  },
});

export const {
  saveShipping,
  savePaymentMethod,
  clearCartItems,
  resetCart,
  addToCart,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;

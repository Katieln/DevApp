import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/ShopSlice"
import { shopApi } from "../services/ShopService";
import cartReducer from "../features/cart/CartSlice"
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export default store
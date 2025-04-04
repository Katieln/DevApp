import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/ShopSlice"
import { shopApi } from "../services/ShopService";
import cartReducer from "../features/cart/CartSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/user/UserSlice"
import { authApi } from "../services/AuthService";

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
  .concat(shopApi.middleware)
  .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store
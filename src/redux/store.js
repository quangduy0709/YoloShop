import { configureStore } from '@reduxjs/toolkit';

import productModalReducer from './product-modal/productModalSlice';
import cartitemsSlide from './shopping-cart/cartitemsSlide';
export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItem: cartitemsSlide,
    },
});

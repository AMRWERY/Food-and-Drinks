import { createStore } from 'vuex';

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';
import authModule from './auth/index.js';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
    auth: authModule
  },
});

export default store;
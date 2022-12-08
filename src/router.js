import { createRouter, createWebHistory } from 'vue-router';

import RegisterPage from './components/ui/RegisterPage.vue';
import LoginPage from './components/ui/LoginPage.vue';
import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/register', component: RegisterPage },
    { path: '/login', component: LoginPage },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
  ]
});

export default router;
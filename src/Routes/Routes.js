import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Catalog from '../pages/Catalog';
import Payment from '../pages/Payment';

const publicRoutes = [
    { path: '/', components: Home },
    { path: '/catalog', components: Catalog },
    { path: '/catalog/:slug', components: Product },

    { path: '/cart', components: Cart },
    { path: '/payment', components: Payment },
];
export { publicRoutes };

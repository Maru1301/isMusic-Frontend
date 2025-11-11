import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";
import ShopHome from "../views/shop/views/shopHome.vue";
// import ProductItem from "@/views/shop/views/productItem.vue";
// import Cart from "@/views/shop/views/cart.vue";
import Checkout from "@/views/shop/views/checkout.vue";
import ProductItem from "@/views/shop/views/productItem.vue";

const routes = [
    {
        path: "/",
        name: "shop",
        component: ShopHome,
    },
    {
        path: "/productItem/:id",
        name: "prodcut_id",
        component: () => import("@/views/shop/views/productItem.vue"),
    },
    {
        path: "/cart",
        component: () => import("@/views/shop/views/cart.vue"),
    },
    {
        path: "/checkout",
        component: Checkout,
    },
];

const router = createRouter({
    history: createWebHashHistory(),

    // history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

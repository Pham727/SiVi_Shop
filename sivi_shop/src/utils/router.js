export const ADMIN_PATH = "/admin";
export const ROUTERS = {
  USER: {
    HOME: "",
    PROFILE: "/profile",
    PRODUCTS: "/product",
    PRODUCT: "/product/:id",
    SHOPPING_CART: "/cart",
    CHECK_OUT: "/checkout",
  },

  ADMIN: {
    LOGIN: `${ADMIN_PATH}/login`,
    ORDERS: `${ADMIN_PATH}/orders`,
    LOGOUT: `${ADMIN_PATH}/logout`,
  },
};

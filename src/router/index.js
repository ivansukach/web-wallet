import Vue from "vue";
import VueRouter from "vue-router";
import Portfolio from "../views/PagePortfolio.vue";
import Validators from "../views/PageValidators.vue";
import Proposals from "../views/PageProposals.vue";
import Transactions from "../views/PageTransactions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/portfolio",
  },
  {
    path: "/portfolio",
    name: "portfolio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Portfolio,
    meta: {
      networkSpecificRoute: true,
      requiresAuth: true
    },
  },
  {
    path: "/validators",
    name: "validators",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Validators,
    meta: {
      networkSpecificRoute: true,
    },
  },
  {
    path: "/proposals",
    name: "proposals",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Proposals,
    meta: {
      networkSpecificRoute: true,
    },
  },
  {
    path: "/transactions",
    name: "transactions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Transactions,
    meta: {
      networkSpecificRoute: true,
    },
  },
  {
    path: `/create`,
    name: `create`,
    components: {
      auth: () => import(`@/views/modal/ModalSignUpLogin`),
    },
    meta: {
      // feature: "session",
    },
  },
  {
    path: `/create/password`,
    name: `create/password`,
    components: {
      auth: () => import(`@/views/modal/ModalSignUpPassword`),
    },
    meta: {
      // feature: "session",
    },
  },
  {
    path: `/create/confirm`,
    name: `create/confirm`,
    components: {
      auth: () => import(`@/views/modal/ModalSignUpMnemonic`),
    },
    meta: {
      // feature: "session",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Portfolio from "../components/common/PagePortfolio.vue";
import Validators from "../components/common/PageValidators.vue";
import Proposals from "../components/common/PageProposals.vue";
import Transactions from "../components/common/PageTransactions.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

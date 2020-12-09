"use strict"

import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import modules from "./modules";

Vue.use(Vuex);

export default (opts = {}) => {
  return new Vuex.Store({
    getters,
    modules: modules(opts),
  });
}

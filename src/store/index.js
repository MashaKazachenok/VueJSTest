import Vue from 'vue';
import Vuex from 'vuex';

import card from "./card.module"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    card
  }
});

export default store;

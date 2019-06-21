import Vue from 'vue';
import Vuex from 'vuex';
import * as mutationTypes from './mutation-types';
import * as actionTypes  from "./action-types";

Vue.use(Vuex);

 const state = {
    cards: [
      { id: 1, number: 23, title: 'hello' },
      { id: 2, number: 12, title: 'bye' },
      { id: 3, number: 49, title: 'hru' },
      { id: 4, number: 32, title: 'etc' },
      { id: 5, number: 33, title: 'goodbye' }
    ]
  }

 const mutations = {
    [mutationTypes.ADD_CARD]({ cards }, card) {
      cards.push({
        ...card
      });
    }
  };

  const getters = {
    allCards: state => state.cards,
    cardsToRender: state => {
      const cardData = Array.from(state.cards);
      let cardsToRender = [];

      const columnSizes = Array.from(Array(7).keys()).filter(x => x > 2);
      let size;
      columnSizes.every(x => {
        const currentSize = cardData.length / x;
        size = x;
        return currentSize > 8;
      });

      while (cardData.length) {
        cardsToRender.push(cardData.splice(0, size));
      }
      return cardsToRender;
    }
  };

  const actions = {
    [actionTypes.ADD_CARD]({ commit }, payload) {
      commit(mutationTypes.ADD_CARD, payload);
    }
  };

  export default {
    state,
    actions,
    mutations,
    getters
  };

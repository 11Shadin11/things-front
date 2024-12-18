import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const API_URL = 'https://fakestoreapi.com/products'
// const API_URL = 'https://dummyjson.com/products'

export const state = () => ({
  isLoaded: true,
  products: [],
  cart: [],
});

export const getters = {
  cartCount(state) {
    return state.cart.reduce((count, item) => count + item.qty, 0);
  },
};

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },

  ADD_TO_CART(state, product) {
    const itemIndex = state.cart.findIndex(item => item.id === product.id);

    if (itemIndex !== -1) {
      const item = state.cart[itemIndex];
      state.cart[itemIndex] = {
        ...item,
        qty: item.qty + 1,
        sum: (item.qty + 1) * item.price
      };
    } else {
      state.cart.push({ ...product, qty: 1, sum: product.price });
    }
  },

  REMOVE_FROM_CART(state, productId) {
    state.cart = state.cart.filter((item) => item.id !== productId);
  },

  SET_LOADING_STATE(state, flag) {
    state.isLoaded = flag
  }
};

export const actions = {
  async fetchProducts({ commit }) {
    try {
      commit('SET_LOADING_STATE', false)

      const response = await fetch(API_URL)
      const data = await response.json();

      // commit('SET_PRODUCTS', data.products);
      commit('SET_PRODUCTS', data);
      commit('SET_LOADING_STATE', true)
    } catch (error) {
      commit('SET_LOADING_STATE', true)
      console.error('Ошибка при загрузке продуктов:', error);
    }
  },
};

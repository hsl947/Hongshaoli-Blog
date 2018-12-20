import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
/**
 * *
 * @param {[use]}  this.store.commit('delToken');
 * @param {[use]}  this.store.commit('setToken', 'xxx');
 */
export default new Vuex.Store({
  state: {
    token: '',
    num: 0
  },
  mutations: {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
    },
    delToken(state) {
        state.token = ''
        localStorage.setItem('token', '');
    },
    addNum(state){
      state.num++;
    }
  },
  actions: {}
});

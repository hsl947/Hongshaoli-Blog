import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
/**
 * *
 * @param {[use]}  this.$store.commit('delToken');
 * @param {[use]}  this.$store.commit('setToken', 'xxx');
 */
export default new Vuex.Store({
    state: {
        admin_token: localStorage.getItem('admin_token') || ''
    },
    mutations: {
        setToken(state, token) {
            state.admin_token = token;
            localStorage.setItem('admin_token', token);
        },
        delToken(state) {
            state.admin_token = ''
            localStorage.setItem('admin_token', '');
        }
    },
    actions: {}
});
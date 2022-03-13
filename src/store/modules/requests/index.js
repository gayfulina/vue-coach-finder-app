import mutations from './mutations.js';
import actions from './actions';
import getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  getters,
  mutations,
  actions
}
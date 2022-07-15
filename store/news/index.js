import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const state = () => ({
  dummy: null,
});

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

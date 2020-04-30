const state = {
  mainTabNumber: 1
};

const getters = {
  currentTab: (state) => {
      return state.mainTabNumber
  }
};

const mutations = {
    setTabNumber: (state, newNumber) => {
        state.mainTabNumber = newNumber;
    }
};

const actions = {
    changeTabNumber: ({commit}, newNumber) => {
        commit('setTabNumber', newNumber);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
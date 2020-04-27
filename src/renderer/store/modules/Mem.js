let { mem } = require('systeminformation');

const state = {
    memory_usage: 0,
    memory_total: 0,
    memory_interval: null
};

const getters = {
    memUsage: (state) => {
      return state.memory_usage
    },
    memTotal: (state) => {
        return state.memory_total
    },
    memInterval: (state) => {
        return state.memory_interval
    }
};

// mutations
const mutations = {
    setMemoryMemoryUsage(state, memory_usage) {
        state.memory_usage = memory_usage
    },
    setTotalMemory(state, memory_total) {
        state.memory_total = memory_total
    },
    setMemInterval(state, internal) {
        state.memory_interval = internal
    },
    clearMemInterval(state) {
        clearInterval(state.memory_interval)
    }
};

// actions
const actions = {
    initMemData({commit, rootState}) {
        if (!rootState.memory_interval) {
            commit('setMemInterval', setInterval(() => {
                mem().then(data => {
                    commit('setMemoryMemoryUsage', Number((data.used / data.total * 100).toFixed(2)));
                    if (rootState.memory_total === 0) commit('setTotalMemory', (data.total / Math.pow(1024, 3)).toFixed(2));
                })
                .catch(err => {
                    console.log(err)
                })
            }, 2000))
        }
    },
    clearInterval({commit}) {
        commit('clearMemInterval')
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  
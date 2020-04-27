let { mem } = require('systeminformation');

const state = {
    memory_usage: 0,
    memory_total: 0
}

const getters = {
    memUsage: (state) => {
      return {
        memory_usage: state.memory_usage
      }
    },
    memTotal: (state) => {
        return {
            memory_total: state.memory_total
        }
    }
}

// mutations
const mutations = {
    setMemoryMemoryUsage(state, memory_usage) {
        state.memory_usage = memory_usage
    },
    setTotalMemory(state, memory_total) {
        state.memory_total = memory_total
    }
}

// actions
const actions = {
    updateMemoryData({commit}) {
        mem().then(data => {
            commit('setMemoryMemoryUsage', Number((data.used / data.total * 100).toFixed(2)))
            if (state.memory_total === 0) commit('setTotalMemory', (data.total / Math.pow(1024, 3)).toFixed(2))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

this.interval = setInterval(actions.updateMemoryData, 2000);
  
export default {
    state,
    getters
}
  
import th from "element-ui/src/locale/lang/th";

let { currentLoad, cpu } = require('systeminformation');

const state = {
    cpu_currentLoad: 0,
    cpu_currentload_user: 0,
    loadingData_interval: null,
    cpu_speed: null
};

const getters = {
    cpuLoad: (state) => {
        return {
            cpu_currentLoad: state.cpu_currentLoad,
            cpu_currentload_user: state.cpu_currentload_user
        }
    },
    memInterval: (state) => {
        return state.loadingData_interval
    }
};

// mutations
const mutations = {
    setLoadingData(state, [cpu_currentLoad, cpu_currentload_user]) {
        state.cpu_currentLoad = Number(cpu_currentLoad.toFixed(2));
        state.cpu_currentload_user = Number(cpu_currentload_user.toFixed(2));
    },
    setLoadingInterval(state, internal) {
        state.loadingData_interval = internal
    },
    setCpuData(state, cpu_data) {
        state.cpu_data = cpu_data
    },
    clearLoadingInterval(state) {
        clearInterval(state.loadingData_interval)
    }
};

// actions
const actions = {
    initCpuData({commit, rootState}) {
        cpu().then(data => {
            commit('setCpuData', data)
        }).catch(err => {
            console.log(err)
        });
        if (!rootState.loadingData_interval) {
            commit('setLoadingInterval', setInterval(() => {
                currentLoad().then(data => {
                    commit('setLoadingData', [data.currentload, data.currentload_user]);
                })
                .catch(err => {
                    console.log(err)
                })
            }, 2000))
        }
    },
    clearInterval({commit}) {
        commit('clearLoadingInterval')
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

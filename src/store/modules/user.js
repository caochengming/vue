

const state = {
    cound: 5,
    title: ''
}


const mutations = {
    JIA_COUND: state => {
        state.cound++
    },
    JIAN_COUND: state => {
        state.cound--
    },
    CHANGE_TITEL: (state, info) => {
        state.title = info
    }
}

const actions = {
    JiaCound({ commit }) {
        commit('JIA_COUND')
    },
    JianCound({ commit }) {
        commit('JIAN_COUND')
    },
    changTitle({ commit }, info) {
        commit('CHANGE_TITEL', info)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}


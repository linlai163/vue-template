const state = () => ({
    token: null
})

const getters = {
    token: (state) => state.token
}

const mutations = {
    SET_TOKEN (state, payload) {
        state.token = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}

import axios from 'axios'

export const state = () => ({
    placesKinds: []
})

export const getters = {
    placesKinds: state => state.placesKinds
}

export const mutations = {
    setPlacesSearchTerms: (state, placesKinds) => state.placesKinds = placesKinds
}

export const actions = {
    async getPlaceskinds ({ commit }) {
        axios
            .post('/api/get-places-kinds')
            .then(res => commit('setPlacesSearchTerms', res.data))
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

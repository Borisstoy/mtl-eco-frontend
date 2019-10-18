import axios from 'axios'

export const state = () => ({
    places: []
})

export const getters = {
    places: state => state.places
}

export const mutations = {
    setPlaces: (state, places) => {
        state.places = places
    }
}

export const actions = {
    async getPlaces ({ commit }) {
        await axios
            .post('/api/get-places')
            .then((res) => {
                commit('setPlaces', res.data)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

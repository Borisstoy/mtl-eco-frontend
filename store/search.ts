import axios from 'axios'

export const state = () => ({
    placesSearchTerms: []
})

export const getters = {
    placesSearchTerms: state => state.placesSearchTerms
}

export const mutations = {
    setPlacesSearchTerms: (state, term) => {
        const i = state.placesSearchTerms.indexOf(term);
        if (i === -1) {
            state.placesSearchTerms.push(term);
        } else {
            state.placesSearchTerms.splice(i ,1);
        }
     }
}

export const actions = {
    async searchPlaces ({ commit }, query: Object) {
        axios
            .post('/api/search-places', query)
            .then(res => commit('places/setPlaces', res.data, { root: true }))
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

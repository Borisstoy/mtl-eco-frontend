<template lang="pug">
    .layout.wrap
        placesFiltersButton(
            attribute='all',
            cta='All'
        )

        .layout.wrap(v-for="kind in placesKinds")
            placesFiltersButton(
                :attribute="kind"
                term='cafe'
                :cta="kind"
            )
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import placesFiltersButton from "~/components/buttons/places-filters-button.vue"

@Component({
    components: {
        placesFiltersButton
    }
})
export default class PlacesFilters extends Vue {
    @Action('resources/getPlaceskinds') getPlacesKinds: () => Promise<{}>
    @Action('search/searchPlaces') searchPlaces: (query: Object) => Promise<{}>
    @Getter('resources/placesKinds') placesKinds
    @Getter('search/placesSearchTerms') placesSearchTerms: string

    @Watch('placesSearchTerms')
    watchPlacesSearchTerms(terms) {
        this.searchPlaces({ query: { attribute: 'kind', terms }})
    }

    created () {
        this.getPlacesKinds()
    }

    addSearchQueryParameters () {
        if (!Object.keys(this.$route.query).length) {
        } else {
            // console.log(this.$route.query)
        }
    }
}
</script>

<style lang="sass" scoped>
</style>

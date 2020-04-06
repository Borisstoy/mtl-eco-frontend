<template lang="pug">
    .container.py-5.my-5
        .row(v-if="places")
            .col-md-10.col-xs-12.offset-md-1
                .row.py-2.my-2
                    .d-flex.flex-column
                        h1 Contribute to your local shops success
                        p.subtitle Find bulk shops, no packaging, bring your own.

                .row
                    .col-md-12.py-2.my-2.px-0
                        placesFilters

                .row
                    .col-md-3.pa-1(v-for="place in places")
                        v-card(
                            :key="place.id"
                        )
                            v-img(
                                class="white--text align-end"
                                height="200px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            )
                                v-card-title.img-title {{ place.name }}
                            v-card-subtitle {{ place.address }}
                            v-card-text.px-4 {{ place.description | ellipsis(70) }}
                .row
                    .col-md-12.pa-1
                        gmap-map(
                            :zoom="7"
                            :center="center"
                            map-type-id="terrain"
                            style="width: 100%; height: 300px"
                        )
                            gmap-marker(
                                v-for="(p, index) in places"
                                :key="index"
                                :position="{ lat: p.latitude, lng: p.longitude }"
                                :clickable="true"
                                @click="center = { lat: p.latitude, lng: p.longitude }"
                            )
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import axios from 'axios'
import placesFilters from "~/components/filters/places-filters.vue"

@Component({
    components: {
        placesFilters
    }
})
export default class RouteLanding extends Vue {
    searchQuery: Object = {}

    @Action('places/getPlaces') getPlaces: () => Promise<{}>
    @Action('search/searchPlaces') searchPlaces: (query: Object) => Promise<{}>
    @Getter('places/places') places

    @Watch('searchQuery')
    watchSearchQuery () {
        if (!Object.keys(this.searchQuery).length) {
            this.getPlaces()
        }
        // else {
        //     const attribute = Object.keys(this.searchQuery).join()
        //     const term = this.searchQuery[attribute]
        //     this.searchPlaces({query: { attribute, term}})
        // }
    }

    data () {
        return {
            center: { lat: 45.5017, lng: -73.5673 }
        }
    }

    created () {
        this.getSearchQuery()
    }

    updated () {
        this.getSearchQuery()
    }

    getSearchQuery () {
        this.searchQuery = this.$route.query
    }
}
</script>

<style lang="sass" scoped>
.img-title
    background: rgba(53, 73, 94, .5)
    font-size: 18px
</style>

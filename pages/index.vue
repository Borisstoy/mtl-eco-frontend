<template lang="pug">
    .container.py-5.my-5
        .row(v-if="places")
            .col-md-10.col-xs-12.offset-md-1
                .row.mb-4.pb-4
                    .d-flex.flex-column
                        h1 Shops around you
                        p.subtitle Find bulk shops, no packaging, bring your own.

                .row
                    placesFilters(
                        attribute='kind',
                        term='cafe'
                        cta='Cafes'
                    )

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
import { Component, Vue } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'
import axios from 'axios'
import placesFilters from "~/components/filters/places-filters.vue"

@Component({
    components: {
        placesFilters
    }
})
export default class RouteLanding extends Vue {
    @Action('places/getPlaces') getPlaces: () => Promise<{}>
    @Getter('places/places') places

    data () {
        return {
            center: { lat: 45.5017, lng: -73.5673 }
        }
    }

    created () {
        this.getPlaces()
    }

    search (query: Object) {
        axios
            .post('/api/search-places', query)
            .then(res => console.log(res))
    }
}
</script>

<style lang="sass" scoped>
.img-title
    background: rgba(53, 73, 94, .5)
    font-size: 18px
</style>

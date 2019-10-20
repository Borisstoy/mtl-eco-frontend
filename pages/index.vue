<template lang="pug">
    .container
        .row(v-if="places")
            .col-md-10.col-xs-12.offset-md-1
                .row
                    .col-md-3.pa-1(v-for="place in places")
                        v-card(
                            :key="place.id"
                        )
                            v-card-title {{ place.name }}
                            v-card-subtitle {{ place.address }}
                            v-card-text.px-4 {{ place.description }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class RouteLanding extends Vue {
    @Action('places/getPlaces') getPlaces: () => Promise<{}>
    @Getter('places/places') places

    created () {
        this.getPlaces()
    }
}
</script>

<style>
</style>

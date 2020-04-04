<template lang="pug">
    div
        v-btn(
            color="primary"
            depressed
            @click="searchPlaces({ query: { attribute, term }})"
        ) {{ cta }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Action } from 'vuex-class'
import axios from 'axios'

@Component
export default class PlacesFilters extends Vue {
    @Prop({ type: String}) attribute
    @Prop({ type: String}) term
    @Prop({ type: String}) cta

    @Action('places/searchPlaces') searchPlaces: (query: Object) => Promise<{}>
}
</script>

<style lang="sass" scoped>
</style>

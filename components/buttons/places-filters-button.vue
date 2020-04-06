<template lang="pug">
    div
        v-btn.filter-btn.mr-2(
            v-if="attribute.kind === 'all'"
            depressed
            :loading="loading"
            @click="getPlaces(); isAllActive = !isAllActive; isActive = false"
            :class="{ active: isActive }"
        ) {{ cta }}

        v-btn.filter-btn.mr-2(
            v-else
            depressed
            :loading="loading"
            @click="setPlacesSearchTerms(term); isActive = !isActive"
            :class="{ active: isActive }"
        ) {{ cta }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Action, Mutation, Getter } from 'vuex-class'
import axios from 'axios'

@Component
export default class PlacesFiltersButton extends Vue {
    isActive: boolean = false
    isAllActive: boolean = false

    @Prop({ type: String}) attribute
    @Prop({ type: String}) term
    @Prop({ type: String}) cta

    @Action('places/getPlaces') getPlaces: () => Promise<{}>
    @Action('search/searchPlaces') searchPlaces: (query: Object) => Promise<{}>
    @Getter('loading') loading: boolean
    @Mutation('search/setPlacesSearchTerms') setPlacesSearchTerms: (term: string) => Promise<{}>
}
</script>

<style lang="sass" scoped>
.filter-btn
    background: $light-grey

.active
    background: $secondary !important
    color: $white
</style>

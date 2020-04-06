<template lang="pug">
    .layout
        .filter-btn.mr-1.mb-1(
            v-if="attribute.kind === 'all'"
            depressed
            :loading="loading"
            @click="getPlaces(); isAllActive = !isAllActive; isActive = false"
            :class="{ active: isActive }"
        ) {{ cta }}

        .filter-btn.mr-1.mb-1(
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
    font-size: 12px
    padding: 4px 6px!important
    border: 2px solid lighten($grey, 5%)
    border-radius: 6px
    transition: .1s
    cursor: pointer
    font-weight: 700
    width: 100%
    text-align: center
    &:hover
        background: lighten($secondary, 50%)

.active
    background: lighten($secondary, 50%) !important
    color: $secondary
    border: 2px solid $secondary
</style>

<template lang="pug">
    .container
        .row(v-if="auth")
            .col-md-8.col-xs-12.offset-md-2
                h2 You can access the place page
                span User email: {{ userEmail }}
                .row
                    nuxt-link(:to="{path: '/place'}")
                        v-btn(
                            nuxt=true
                        ) Create a place

        .row(v-else)
            .col-md-8.col-xs-12.offset-md-2
                h1 You need to login
                nuxt-link(:to="{path: '/login'}") Login
        .row(v-if="places")
            .col-md-8.col-xs-12.offset-md-2
                .row.pa-3
                    v-card.col-md-4.ma-2(
                        v-for="place in places"
                        :key="place.id"
                    )
                        h2 {{ place.name }}
                        p {{ place.description }}
                        p {{ place.address }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class RouteLanding extends Vue {
    @Action('places/getPlaces') getPlaces: () => Promise<{}>
    @Getter('places/places') places
    @Getter('user/auth') auth
    @Getter('user/userEmail') userEmail

    created () {
        this.getPlaces()
    }
}
</script>

<style>
</style>

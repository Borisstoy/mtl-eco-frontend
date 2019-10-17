<template lang="pug">
    .container
        .row
            .col-md-6.col-xs-12.offset-md-3
                h1 On the secret page
                logout-button
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Mutation } from 'vuex-class'
import logoutButton from "~/components/buttons/logout-button.vue"

@Component({
    middleware: 'authenticated',
    components: {
        logoutButton
    }
})
export default class RouteSecret extends Vue {}
</script>

<style>
</style>

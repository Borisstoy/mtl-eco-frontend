<template lang="pug">
    .container
        .row
            .col-md-6.col-xs-12.offset-md-3
                .row
                    h1 Create a place
                    logout-button
                create-place-form
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Mutation } from 'vuex-class'
import logoutButton from "~/components/buttons/logout-button.vue"
import createPlaceForm from '~/components/forms/create-place-form.vue'

@Component({
    components: {
        logoutButton,
        createPlaceForm
    },
    middleware: 'authenticated'
})
export default class RouteSecret extends Vue {}
</script>

<style>
</style>

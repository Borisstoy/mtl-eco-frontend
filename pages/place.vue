<template lang="pug">
    .container
        .row
            .col-md-6.col-xs-12.offset-md-3
                .row
                    h1 Create a place
                create-place-form
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import createPlaceForm from '~/components/forms/create-place-form.vue'

@Component({
    components: {
        createPlaceForm
    },
    middleware: 'authenticated'
})
export default class RouteSecret extends Vue {}
</script>

<style>
</style>

<template lang="pug">
    .container
        .row
            .col-md-6.col-xs-12.offset-md-3
                .row
                    h1 User profile
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
    middleware: 'authenticated'
})
export default class Profile extends Vue {}
</script>

<style>
</style>

<template lang="pug">
    el-container(direction="vertical")
        el-row
            el-col(
                :xs="{span: 24, offset: 0}"
                :sm="{span: 16, offset: 4}"
                :md="{span: 16, offset: 4}"
            )
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

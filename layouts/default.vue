<template lang="pug">
    div
        nuxt
</template>

<script lang="ts">
import { Getter, Mutation } from 'vuex-class'
import { Component, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class Default extends Vue {
    @Getter('user/auth') auth
    @Mutation('user/setUser') setUser: (auth) => Promise<{}>

    @Watch('auth')
    watchAuth() {
        if (this.auth) {
            this.setUser(this.auth)
        }
    }
}
</script>

<style>
</style>

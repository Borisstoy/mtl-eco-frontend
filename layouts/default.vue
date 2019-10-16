<template lang="pug">
    div
        nuxt
</template>

<script lang="ts">
import { Getter, Mutation } from 'vuex-class'
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Default extends Vue {
    @Getter('auth') auth
    @Mutation('user/setUser') setUser: (auth) => Promise<{}>

    mounted () {
        if (this.auth) {
            this.setUser(this.auth)
        }
    }
}
</script>

<style>
</style>

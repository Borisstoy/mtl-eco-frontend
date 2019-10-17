<template lang="pug">
    v-btn(
        type="danger"
        @click="logout()"
    ) Logout
</template>

<script lang="ts">
import { Mutation } from 'vuex-class'
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class LogoutButton extends Vue {

    @Mutation('user/setAuth') setAuth: (payload) => Promise<{}>

    logout () {
        this.$cookies.remove('accessToken')
        this.setAuth(null)
        this.$router.push('/login')
    }
}
</script>

<style>
</style>

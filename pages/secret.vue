<template lang="pug">
    el-container(direction="vertical")
        el-row
            el-col(
                :xs="{span: 24, offset: 0}"
                :sm="{span: 16, offset: 4}"
                :md="{span: 16, offset: 4}"
            )
                h1 On the secret page
                el-button(
                    type="danger"
                    @click="logout()"
                ) Logout
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Mutation } from 'vuex-class'

@Component({
    middleware: 'authenticated'
})
export default class RouteSecret extends Vue {

    @Mutation('setAuth') setAuth: (payload) => Promise<{}>

    logout () {
        this.$cookies.remove('accessToken')
        this.setAuth(null)
        this.$router.push('/login')
    }
}
</script>

<style>
</style>

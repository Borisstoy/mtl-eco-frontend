<template lang="pug">
    el-container(direction="vertical")
        el-row(v-if="auth")
            h2 You can access the secret
            h3 Your user:
            span | {{ user }}
            nuxt-link(:to="{path: '/secret'}") Secret
        el-row(v-else)
            el-col(
                :xs="{span: 24, offset: 0}"
                :sm="{span: 16, offset: 4}"
                :md="{span: 16, offset: 4}"
            )
                h1 You need to login
                nuxt-link(:to="{path: '/login'}") Login
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class RouteLanding extends Vue {
    @Getter('auth') auth
    @Getter('user/user') user
}
</script>

<style>
</style>

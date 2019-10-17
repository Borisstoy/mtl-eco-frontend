<template lang="pug">
    .container
        .row(v-if="auth")
            .col-md-6.col-xs-12.offset-md-3
                h2 You can access the secret
                h3 Your user:
                span | {{ userEmail }}
                nuxt-link(:to="{path: '/secret'}") Secret
        .row(v-else)
            .col-md-6.col-xs-12.offset-md-3
                h1 You need to login
                nuxt-link(:to="{path: '/login'}") Login
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class RouteLanding extends Vue {
    @Getter('user/auth') auth
    @Getter('user/userEmail') userEmail
}
</script>

<style>
</style>

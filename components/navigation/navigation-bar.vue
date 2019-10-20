<template lang="pug">
    .toolbar
        .container.pa-0
            .row
                .col-md-10.col-xs-12.offset-md-1.px-4
                    .d-flex.justify-space-between
                        .d-flex.align-center
                            nuxt-link(:to="{path: '/'}") Home

                        .d-flex.align-center
                            v-btn.ml-md-3(
                                color="primary"
                                depressed
                                :nuxt="true"
                                to="place"
                                :disabled="auth ? false : true"
                            ) Create a place
                            v-btn.ml-md-3(
                                v-if="!auth"
                                color="success"
                                depressed
                                :nuxt="true"
                                to="login"
                            ) Login
                            logout-button.ml-md-3(v-if="auth")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'
import logoutButton from "~/components/buttons/logout-button.vue"

@Component({
    components: {
        logoutButton
    }
})
export default class NavigationBar extends Vue {
    @Getter('user/auth') auth
}
</script>

<style lang="sass" scoped>
.toolbar
    background: $white
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1)!important
</style>

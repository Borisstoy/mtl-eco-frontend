<template lang="pug">
    v-app
        navigation-bar
        nuxt
</template>

<script lang="ts">
import { Getter, Mutation } from 'vuex-class'
import { Component, Vue, Watch } from "nuxt-property-decorator"
import navigationBar from '~/components/navigation/navigation-bar.vue'

@Component({
    components: {
        navigationBar
    }
})
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

<style lang="sass" scoped>
#app
    background: $white!important
</style>

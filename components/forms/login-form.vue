<template lang="pug">
    v-form
        v-text-field(
            v-model="loginInputs.email"
            label="Email"
            required
        )
        v-text-field(
            v-model="loginInputs.password"
            label="Password"
            required
        )
        v-btn(
            primary
            depressed
            @click="submit()"
        ) Submit
</template>

<script lang="ts">
import axios from "axios";
import { Mutation } from 'vuex-class'
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class LoginForm extends Vue {
    loginInputs: Record<string, any> = {};

    @Mutation('user/setAuth') setAuth: (payload) => Promise<{}>

    async submit() {
        const data = {
            email: this.loginInputs.email,
            password: this.loginInputs.password
        }

        await axios
            .post('/api/authenticate', { data })
            .then((res) => {
                console.log('in the call')
                console.log(res.data.auth_token)
                this.setAuth(res.data.auth_token)
                this.$router.push('/')
            })
    }
}
</script>

<style>
</style>

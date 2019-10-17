<template lang="pug">
    v-form
        v-text-field(
            v-model="loginInput.email"
            label="Email"
            required
        )
        v-text-field(
            v-model="loginInput.password"
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
    loginInput: Record<string, any> = {};

    @Mutation('user/setAuth') setAuth: (payload) => Promise<{}>

    async submit() {
        const data = {
            email: this.loginInput.email,
            password: this.loginInput.password
        }

        await axios
            .post('/api/authenticate', { data })
            .then((res) => {
                this.setAuth(res.data.auth_token)
                this.$router.push('/')
            })
    }
}
</script>

<style>
</style>

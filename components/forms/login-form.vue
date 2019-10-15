<template lang="pug">
  .container
    div
        el-form(label-position="right" label-width="100px")
            el-form-item(label="Name")
                el-input(v-model="loginInput.name")
            el-form-item(label="Email")
                el-input(v-model="loginInput.email")
            el-form-item(label="Password")
                el-input(v-model="loginInput.password")
            el-form-item
                el-button(
                    type="primary"
                    @click="submit('inputs')"
                ) Submit
</template>

<script lang="ts">
import axios from "axios";
import { Mutation } from 'vuex-class'
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class LoginForm extends Vue {
    loginInput: Record<string, any> = {};

    @Mutation('setAuth') setAuth: (payload) => Promise<{}>

    submit(rules) {
        const data = {
            email: this.loginInput.email,
            password: this.loginInput.password
        }

        axios
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

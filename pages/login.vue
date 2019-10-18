<template lang="pug">
    .container
        .row.align-center
            .col-md-6.col-xs-12.offset-md-3
                login-form
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import LoginForm from "~/components/forms/login-form.vue";
import axios from "axios";

@Component({
    components: {
        LoginForm
    },
    middleware: 'notAuthenticated'
})
export default class Login extends Vue {}
</script>

<style>
</style>

<template lang="pug">
    el-container(direction="vertical")
        el-row
            el-col(
                :xs="{span: 24, offset: 0}"
                :sm="{span: 16, offset: 4}"
                :md="{span: 16, offset: 4}"
            )

                el-row(type="flex")
                    el-col(
                        :xs="{span: 24, offset: 0}"
                        :sm="{span: 16, offset: 4}"
                        :md="{span: 16, offset: 4}"
                    )
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
})
export default class Login extends Vue {
    middleware: 'notAuthenticated'
}
</script>

<style>
</style>

<template lang="pug">
    v-form
        v-text-field(
            v-model="placeInputs.name"
            label="Name"
            solo
            required
        )
        v-text-field(
            v-model="placeInputs.description"
            label="Description"
            solo
            required
        )
        v-btn(
            color="primary"
            depressed
            @click="submit()"
        ) Submit
</template>

<script lang="ts">
import axios from "axios"
import { Getter } from 'vuex-class'
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class CreatePlaceForm extends Vue {
    placeInputs: Record<string, any> = {};

    @Getter('user/auth') auth

    async submit() {
        const data = {
            name: this.placeInputs.name,
            description: this.placeInputs.description,
            auth: this.auth.accessToken
        }

        await axios
            .post('/api/create-place', { data })
            .then((res) => {
                console.log(res)
            })
    }
}
</script>

<style>
</style>

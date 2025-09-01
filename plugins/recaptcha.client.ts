import { defineNuxtPlugin } from '#app'
import VueRecaptcha2 from 'vue3-recaptcha2'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VueRecaptcha2', VueRecaptcha2)
})
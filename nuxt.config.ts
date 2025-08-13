import { resolve } from "path"
import { defineNuxtConfig } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "EconoPro | Rastreamento",
            script: []
        }
    },
    css: [
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination',
        // 'swiper/css/free-mode',
        // 'swiper/css/thumbs',
        "public/css/bootstrap.min.css",
        "public/css/style.css",
        "public/css/responsive.css",
    ],
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Chivo: {
                        wght: [400, 700, 900]
                    },
                    "Noto+Sans": {
                        wght: [400, 500, 600, 700,800]
                    },
                    download: true,
                    inject: true
                }
            }
        ],
    ],
})

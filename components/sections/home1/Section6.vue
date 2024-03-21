<template>
    <section class="call-to-action" style="background-image: url(/images/background/2.jpg)">
        <div class="auto-container">
            <div class="outer-box">
                <NuxtLink @click="openVideo" class="play-now lightbox-image"><i class="icon fa fa-play"></i><span
                        class="ripple"></span></NuxtLink>
                <div class="sec-title light mb-0">
                    <div class="sub-title">Um pouco sobre nós</div>
                    <h1>Procurando o melhor <br>serviço de logística para seu negócio?</h1>
                    <NuxtLink to="https://econocargo.com.br/" target="_blank"  class="theme-btn btn-style-one hvr-light"><span class="btn-title">
                      Contato</span></NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from '../../components/elements/ModalVideo.vue'
export default {
    components: {
        ModalVideo
    },
    data: () => {
        return {
            videoIsOpen: false
        }
    },
    methods: {
        openVideo() {
            this.videoIsOpen = !this.videoIsOpen
        }
    },
    computed: {
        videoChannel: function () {
            //Logic to extract based on URL
            return 'youtube'
        },
        videoId: function () {
            //Logic to extract based on URL
            return 'SwF24yymPeM'
        }
    }
}
</script>

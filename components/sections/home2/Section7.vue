<template>
    <section class="why-choose-us-two">
        <div class="bg-image" style="background-image: url(./images/background/6.jpg)"></div>
        <div class="bg-shape">
            <div class="shape" style="background-image: url(./images/icons/bg-shape.png)"></div>
        </div>

        <div class="anim-icons">
            <div class="float-image wow zoomInLeft"><img src="/images/resource/float-img-3.png" alt=""></div>
        </div>

        <div class="auto-container">
            <div class="row">
                <!-- Content Column -->
                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column wow fadeInLeft">
                        <div class="sec-title light">
                            <span class="sub-title">Why Choose Us</span>
                            <h2>We create opportunity <br>to reach potential</h2>
                            <div class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.</div>
                        </div>

                        <div class="row">
                            <!-- Feature Block Four-->
                            <div class="feature-block-four col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <i class="icon flaticon-delivery-box-4"></i>
                                    <h4 class="title">Safety & <br>reliable service</h4>
                                    <p class="text">Nullam mollis elit quis dus is lacinia not efficitur</p>
                                </div>
                            </div>

                            <!-- Feature Block Four -->
                            <div class="feature-block-four col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box">
                                    <i class="icon flaticon-international-shipping-3"></i>
                                    <h4 class="title">Real time <br>tracking system</h4>
                                    <p class="text">Nullam mollis elit quis dus is lacinia not efficitur</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Image Column -->
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image-box hide-desktop"><img src="/images/background/6.jpg" alt=""></div>
                    <div class="inner-column">
                        <div class="info-box bounce-y">
                            <i class="icon flaticon-customer-service"></i>
                            <strong>Meet Our <br>Expert Agents</strong>
                        </div>
                        <div class="video-box">
                            <NuxtLink @click="openVideo" class="play-now-two lightbox-image"><i class="icon fa fa-play"></i>
                            </NuxtLink>
                            <img src="/images/icons/arrow-3.png" alt="" class="arrow">
                        </div>
                    </div>
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
            return 'QiqQoqtnHrk'
        }
    }
}
</script>
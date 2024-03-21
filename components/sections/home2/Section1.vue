<template>
    <section class="banner-section">
        <swiper :slides-per-view="1" :space-between="30" :loop="true" :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }" :pagination="{
    el: '.swiper-pagination',
    clickable: true,
}" :navigation="{
    nextEl: '.h1n',
    prevEl: '.h1p',
}" :modules="modules" class="banner-carousel owl-carousel owl-theme">
            <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                            <div class="content-box">
                                <h2 class="title animate-3">Último Status <span class="colored"> - </span>
                                  Entregue com sucesso
                                </h2>
                                <div class="btn-box animate-4">
                                    <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate"><span
                                            class="btn-title">Explore
                                            More</span></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="image-column col-lg-5 col-md-12 col-sm-12">
                            <div class="image-box">
                                <div class="fact-counter-one bounce-y">
                                    <h4 class="counter-title">Trusted by</h4>
                                    <div class="count-box">
                                        <ElementsCounterUp :end="4890" />
                                    </div>
                                </div>
                                <figure class="image animate-5 animate-x"><img src="/images/resource/truck.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                            <div class="content-box">
                                <h2 class="title animate-3">Most trusted logistics <span class="colored">&</span> delivery
                                    services
                                </h2>
                                <div class="btn-box animate-4">
                                    <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate"><span
                                            class="btn-title">Explore
                                            More</span></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="image-column col-lg-5 col-md-12 col-sm-12">
                            <div class="image-box">
                                <div class="fact-counter-one bounce-y">
                                    <h4 class="counter-title">Trusted by</h4>
                                    <div class="count-box">
                                        <ElementsCounterUp :end="4890" />
                                    </div>
                                </div>
                                <figure class="image animate-5 animate-x"><img src="/images/resource/truck.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>

    </section>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
}
</script>
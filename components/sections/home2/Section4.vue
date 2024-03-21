<template>
    <section class="services-section-two">
        <div class="bg-image" style="background-image: url(./images/background/1.jpg)"></div>

        <div class="auto-container">
            <div class="sec-title text-center">
                <span class="sub-title">SPECIALISE IN THE TRANSPORTATION</span>
                <h2>Specialist logistics services</h2>
            </div>

            <!-- Services Carousel -->
            <swiper :slides-per-view="3" :space-between="30" :loop="true" :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }" :breakpoints="{
    320: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
    575: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    767: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    991: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1199: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1350: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
}" :pagination="{
    el: '.swiper-pagination',
    clickable: true,
}" :navigation="{
    nextEl: '.h1n',
    prevEl: '.h1p',
}" :modules="modules" class="services-carousel owl-carousel owl-theme">
                <!-- Service Block Two-->
                <swiper-slide class="service-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <i class="icon flaticon-air"></i>
                            <figure class="image">
                                <NuxtLink to="/images/resource/service-5.jpg" class="lightbox-image"><img
                                        src="/images/resource/service-5.jpg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">01 Service</span>
                            <h4 class="title">
                                <NuxtLink to="/page-service-details">Air Freight</NuxtLink>
                            </h4>
                            <NuxtLink to="/page-service-details" class="read-more">Read More <i
                                    class="fa fa-angle-right"></i></NuxtLink>
                        </div>
                    </div>
                </swiper-slide>

                <!-- Service Block Two-->
                <swiper-slide class="service-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <i class="icon flaticon-cargo-boat"></i>
                            <figure class="image">
                                <NuxtLink to="/images/resource/service-6.jpg" class="lightbox-image"><img
                                        src="/images/resource/service-6.jpg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">02 Service</span>
                            <h4 class="title">
                                <NuxtLink to="/page-service-details">Sea Transport</NuxtLink>
                            </h4>
                            <NuxtLink to="/page-service-details" class="read-more">Read More <i
                                    class="fa fa-angle-right"></i></NuxtLink>
                        </div>
                    </div>
                </swiper-slide>


                <!-- Service Block Two-->
                <swiper-slide class="service-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <i class="icon flaticon-truck-2"></i>
                            <figure class="image">
                                <NuxtLink to="/images/resource/service-7.jpg" class="lightbox-image"><img
                                        src="/images/resource/service-7.jpg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">03 Service</span>
                            <h4 class="title">
                                <NuxtLink to="/page-service-details">Road Transport</NuxtLink>
                            </h4>
                            <NuxtLink to="/page-service-details" class="read-more">Read More <i
                                    class="fa fa-angle-right"></i></NuxtLink>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide class="service-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <i class="icon flaticon-cargo-boat"></i>
                            <figure class="image">
                                <NuxtLink to="/images/resource/service-6.jpg" class="lightbox-image"><img
                                        src="/images/resource/service-6.jpg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">02 Service</span>
                            <h4 class="title">
                                <NuxtLink to="/page-service-details">Sea Transport</NuxtLink>
                            </h4>
                            <NuxtLink to="/page-service-details" class="read-more">Read More <i
                                    class="fa fa-angle-right"></i></NuxtLink>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
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
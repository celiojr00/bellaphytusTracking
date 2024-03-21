<template>
    <section class="project-section">
        <div class="large-container">
            <div class="sec-title text-center">
                <span class="sub-title">LATEST PROJECTS</span>
                <h2>Works across the world</h2>
            </div>

            <!-- Prject Carousel -->
            <swiper :slides-per-view="4" :space-between="30" :loop="true" :autoplay="{
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
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1199: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
    1350: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
}" :pagination="{
    el: '.swiper-pagination',
    clickable: true,
}" :navigation="{
    nextEl: '.h1n',
    prevEl: '.h1p',
}" :modules="modules" class="project-carousel owl-carousel owl-theme">
                <!-- Project Block -->
                <swiper-slide class="project-block">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/images/resource/project-1.jpg" class="lightbox-image"><img
                                        src="/images/resource/project-1.jpg" alt=""></NuxtLink>
                            </figure>
                            <NuxtLink to="/page-project-details" class="icon"><i class="fa fa-plus"></i></NuxtLink>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">Logistics</span>
                            <h4 class="title">
                                <NuxtLink to="/page-project-details">Special transport</NuxtLink>
                            </h4>
                        </div>
                    </div>
                </swiper-slide>

                <!-- Project Block -->
                <swiper-slide class="project-block">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/images/resource/project-2.jpg" class="lightbox-image"><img
                                        src="/images/resource/project-2.jpg" alt=""></NuxtLink>
                            </figure>
                            <NuxtLink to="/page-project-details" class="icon"><i class="fa fa-plus"></i></NuxtLink>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">Logistics</span>
                            <h4 class="title">
                                <NuxtLink to="/page-project-details">Special transport</NuxtLink>
                            </h4>
                        </div>
                    </div>
                </swiper-slide>

                <!-- Project Block -->
                <swiper-slide class="project-block">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/images/resource/project-3.jpg" class="lightbox-image"><img
                                        src="/images/resource/project-3.jpg" alt=""></NuxtLink>
                            </figure>
                            <NuxtLink to="/page-project-details" class="icon"><i class="fa fa-plus"></i></NuxtLink>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">Logistics</span>
                            <h4 class="title">
                                <NuxtLink to="/page-project-details">Special transport</NuxtLink>
                            </h4>
                        </div>
                    </div>
                </swiper-slide>

                <!-- Project Block -->
                <swiper-slide class="project-block">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/images/resource/project-4.jpg" class="lightbox-image"><img
                                        src="/images/resource/project-4.jpg" alt=""></NuxtLink>
                            </figure>
                            <NuxtLink to="/page-project-details" class="icon"><i class="fa fa-plus"></i></NuxtLink>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">Logistics</span>
                            <h4 class="title">
                                <NuxtLink to="/page-project-details">Special transport</NuxtLink>
                            </h4>
                        </div>
                    </div>
                </swiper-slide>

                <!-- Project Block -->
                <swiper-slide class="project-block">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/images/resource/project-2.jpg" class="lightbox-image"><img
                                        src="/images/resource/project-2.jpg" alt=""></NuxtLink>
                            </figure>
                            <NuxtLink to="/page-project-details" class="icon"><i class="fa fa-plus"></i></NuxtLink>
                        </div>
                        <div class="content-box">
                            <span class="sub-title">Logistics</span>
                            <h4 class="title">
                                <NuxtLink to="/page-project-details">Special transport</NuxtLink>
                            </h4>
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
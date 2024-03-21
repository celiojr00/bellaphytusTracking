<template>
    <section class="testimonial-section pt-0">

        <div class="anim-icons">
            <span class="icon icon-bg-dots"></span>
            <span class="icon icon-plane-2 bounce-y"></span>
        </div>

        <div class="auto-container">
            <div class="sec-title text-center">
                <span class="sub-title">Client’s Testimonials</span>
                <h2>Here are some clients <br>feedbacks</h2>
            </div>

            <div class="outer-box">
                <!-- Testimonial Carousel -->
                <swiper :slides-per-view="3" :space-between="0" :loop="true" :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                }" :breakpoints="{
    320: {
        // slidesPerView: 1,
        spaceBetween: 30,
    },
    575: {
        // slidesPerView: 2,
        spaceBetween: 30,
    },
    767: {
        // slidesPerView: 2,
        spaceBetween: 30,
    },
    991: {
        // slidesPerView: 2,
        spaceBetween: 30,
    },
    1199: {
        // slidesPerView: 3,
        spaceBetween: 30,
    },
    1350: {
        // slidesPerView: 3,
        spaceBetween: 30,
    },
}" :pagination="{
    el: '.swiper-pagination',
    clickable: true,
}" :navigation="{
    nextEl: '.h1n',
    prevEl: '.h1p',
}" :modules="modules" class="testimonial-carousel owl-carousel owl-theme">

                    <!-- Testimonial Block -->
                    <swiper-slide class="testimonial-block">
                        <div class="inner-box">
                            <div class="content-box">
                                <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                        class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-alt"></i>
                                </div>
                                <div class="text">“All of our lorries are fitted with Satellite Tracking and Temperature
                                    Controlled monitoring systems so that the transportation of high value and temperature
                                    sensitive loads can be monitored at all times.</div>
                            </div>
                            <div class="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt=""></div>
                            <span class="designation">Co Founder</span>
                            <h4 class="name">Jhon D. William</h4>
                        </div>
                    </swiper-slide>


                    <!-- Testimonial Block -->
                    <swiper-slide class="testimonial-block">
                        <div class="inner-box">
                            <div class="content-box">
                                <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                        class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-alt"></i>
                                </div>
                                <div class="text">“All of our lorries are fitted with Satellite Tracking and Temperature
                                    Controlled monitoring systems so that the transportation of high value and temperature
                                    sensitive loads can be monitored at all times.</div>
                            </div>
                            <div class="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt=""></div>
                            <span class="designation">Co Founder</span>
                            <h4 class="name">Aleesha Brown</h4>
                        </div>
                    </swiper-slide>

                    <!-- Testimonial Block -->
                    <swiper-slide class="testimonial-block">
                        <div class="inner-box">
                            <div class="content-box">
                                <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                        class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-alt"></i>
                                </div>
                                <div class="text">“All of our lorries are fitted with Satellite Tracking and Temperature
                                    Controlled monitoring systems so that the transportation of high value and temperature
                                    sensitive loads can be monitored at all times.</div>
                            </div>
                            <div class="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt=""></div>
                            <span class="designation">Co Founder</span>
                            <h4 class="name">Mike Hardon</h4>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
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
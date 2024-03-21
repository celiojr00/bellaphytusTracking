<template>
    <section class="testimonial-section-two">
        <div class="bg-image" style="background-image: url(./images/background/7.jpg)"></div>
        <div class="anim-icons">
            <span class="icon icon-plane-1 bounce-y"></span>
            <div class="icon float-image wow fadeInRight"><img src="/images/resource/delivery-boy.png" alt=""></div>
        </div>

        <div class="auto-container">
            <div class="row">
                <!-- Testimonial Column -->
                <div class="testimonial-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="sub-title">Our Testimonial</span>
                            <h2>What they’re talking <br>about company</h2>
                        </div>

                        <!-- Testimonial Carousel -->
                        <swiper :slides-per-view="1" :space-between="30" :loop="true" :autoplay="{
                            delay: 8000,
                            disableOnInteraction: true,
                        }" class="testimonial-carousel-two owl-carousel owl-theme default-dots">
                            <!-- Testimonial Block Two -->
                            <swiper-slide class="testimonial-block-two">
                                <div class="inner-box">
                                    <i class="icon icon-quote"></i>
                                    <div class="text">This is due to their excellent service, and augue homero consectetuer
                                        nam. Eu quo laoreet propriae, malis exerci habemus has vocent persius eum ea.</div>
                                    <div class="info-box">
                                        <div class="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt=""></div>
                                        <h4 class="name">Jessica Brown</h4>
                                        <span class="designation">Customer</span>
                                    </div>
                                </div>
                            </swiper-slide>

                            <!-- Testimonial Block Two -->
                            <swiper-slide class="testimonial-block-two">
                                <div class="inner-box">
                                    <i class="icon icon-quote"></i>
                                    <div class="text">propriae, malis exerci habemus has vocent persius eum ea. This is due
                                        to their excellent service, and augue homero consectetuer nam. Eu quo</div>
                                    <div class="info-box">
                                        <div class="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt=""></div>
                                        <h4 class="name">Jessica Brown</h4>
                                        <span class="designation">Customer</span>
                                    </div>
                                </div>
                            </swiper-slide>

                            <!-- Testimonial Block Two -->
                            <swiper-slide class="testimonial-block-two">
                                <div class="inner-box">
                                    <i class="icon icon-quote"></i>
                                    <div class="text">This is due to their excellent service, propriae, malis exerci habemus
                                        has vocent persius eum ea. and augue homero consectetuer nam. Eu quo</div>
                                    <div class="info-box">
                                        <div class="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt=""></div>
                                        <h4 class="name">Jessica Brown</h4>
                                        <span class="designation">Customer</span>
                                    </div>
                                </div>
                            </swiper-slide>

                        </swiper>
                    </div>
                </div>

                <!-- form Column -->
                <div class="form-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column">
                        <!-- Contact Form -->
                        <div class="contact-form">
                            <h4 class="title">Request a quote</h4>
                            <!--Contact Form-->
                            <form method="post" action="get" id="contact-form">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Your Name:</label>
                                        <input type="text" name="full_name" placeholder="" required>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Your Email:</label>
                                        <input type="text" name="Email" placeholder="" required>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Phone No::</label>
                                        <input type="text" name="Phone" placeholder="" required>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>DIST (Miles):</label>
                                        <div class="range-slider-one">
                                            <input type="text" class="range-amount" name="field-name">
                                            <div
                                                class="distance-range-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                                <div class="ui-slider-range ui-widget-header ui-corner-all"
                                                    style="width: 40.15%; left: 0%;"></div><span
                                                    class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                                                    style="left: 0%;"></span><span
                                                    class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                                                    style="left: 40.15%;"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Freight type:</label>
                                        <select class="custom-select">
                                            <option value="">Select</option>
                                            <option value="">Air Freight</option>
                                            <option value="">Ocean Freight</option>
                                            <option value="">Rail transport</option>
                                            <option value="">Cargo ship</option>
                                            <option value="">Bulk cargo</option>
                                        </select>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Load:</label>
                                        <select class="custom-select">
                                            <option value="">Select</option>
                                            <option value="">Door to Door</option>
                                            <option value="">International shipping</option>
                                            <option value="">Multi Modal</option>
                                        </select>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <button class="theme-btn btn-style-two hvr-light" type="submit"
                                            name="submit-form"><span class="btn-title">Submit Request</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!--End Contact Form -->
                    </div>
                </div>
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
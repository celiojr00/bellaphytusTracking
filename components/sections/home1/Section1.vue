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
      <swiper-slide class="slide-item" >
        <div class="bg-image" style="margin-top: -100px; background-image: url(/images/main-slider/3.jpg);"></div>
        <div class="auto-container" style="margin-top: -40px;">
          <div class="row">
            <div class="content-column col-lg-7 col-md-12 col-sm-12">



              <div class="content-box">
                <div class="btn-box animate-3" style="position:absolute; top: 4ch; right: 66ch">
                  <div class="logo">
                    <NuxtLink @click="$router.push('/track-nota')"><img :src="logoSrc" style="max-width: 250px;" alt=""></NuxtLink>
                  </div>
                </div>

                <h6 class="title animate-3" style="font-size: 30px">
                  <span class="colored "> Status: </span> <br>
                  <span class="font-size-16" style="letter-spacing: 1px;"> Data de Emissão:  {{ dataEmissao }}</span>
                  <br> {{ statusEntrega }} <br> <br>
                  <span class="font-size-16" style="letter-spacing: 1px;"> Previsão de Entrega:  {{ dataPrev }}</span> <br>
                  <span class="font-size-24" style="letter-spacing: 1px;"> {{ descricaoMaxSeq }} </span>
                </h6>
                <!--<span class="font-size-14" style="font-size: 18px; color: #fff"> {{ descricaoMaxSeq }} </span>-->

                <br> <br>

                <div class="btn-box animate-4">
                  <button @click="scrollDown" class="theme-btn btn-style-one alternate" style="font-size: 12px; padding: 5px 10px;"><span
                      class="btn-title">Mais Detalhes</span></button>
                </div>
              </div>
            </div>

            <div class="content-column col-lg-5 col-md-12 col-sm-12">

              <!--<div  class="content-box " style="position:absolute; top:-10ch; right: 1ch">
                <figure class="image animate-5 animate-x"><img src="/images/resource/truck.png" alt="">
                </figure>
              </div>-->
            </div>
          </div>
        </div>
      </swiper-slide>
      <div  ref="targetRef"></div>
      <!-- Slide Item -->
      <!--            <swiper-slide class="slide-item">-->
      <!--                <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>-->
      <!--                <div class="auto-container">-->
      <!--                    <div class="row">-->
      <!--                        <div class="content-column col-lg-7 col-md-12 col-sm-12">-->
      <!--                            <div class="content-box">-->
      <!--                                <h2 class="title animate-3">Most trusted logistics <span class="colored">&</span> delivery-->
      <!--                                    services-->
      <!--                                </h2>-->
      <!--                                <div class="btn-box animate-4">-->
      <!--                                    <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate"><span-->
      <!--                                            class="btn-title">Explore-->
      <!--                                            More</span></NuxtLink>-->
      <!--                                </div>-->
      <!--                            </div>-->
      <!--                        </div>-->
      <!--                        <div class="image-column col-lg-5 col-md-12 col-sm-12">-->
      <!--                            <div class="image-box">-->
      <!--                                <div class="fact-counter-one bounce-y">-->
      <!--                                    <h4 class="counter-title">Trusted by</h4>-->
      <!--                                    <div class="count-box">-->
      <!--                                        <ElementsCounterUp :end="4890" />-->
      <!--                                    </div>-->
      <!--                                </div>-->
      <!--                                <figure class="image animate-5 animate-x"><img src="/images/resource/truck.png" alt="">-->
      <!--                                </figure>-->
      <!--                            </div>-->
      <!--                        </div>-->
      <!--                    </div>-->
      <!--                </div>-->
      <!--            </swiper-slide>-->
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

  props: {
    notaData: {
      type: Object,
      required: false,
    },

    statusEntrega: {
      type: String,
      required: false,
    },

    descricaoMaxSeq: {
      type: String,
      required: false,
    },

    dataPrev: {
      type: String,
      required: false,
    },

    dataEmissao: {
      type: String,
      required: false,
    }
  },

  data() {
    return {
      logoSrc: null,
    }
  },

  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },


  mounted() {
    const img = new Image();
    img.src = '/images/logo_prd.png';
    img.onload = () => {
      this.logoSrc = '/images/logo_prd.png';
    };
    img.onerror = () => {
      this.logoSrc = '/images/logo_econoPro.png';
    };
  },


  methods: {

    scrollDown(){
      console.log('scrollDown')
      this.$refs.targetRef.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
  },
}
</script>

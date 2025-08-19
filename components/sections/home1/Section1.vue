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
        <div class="bg-image" style="background-image: url(/images/main-slider/3.jpg);"></div>
        <div class="auto-container">
          <div class="row">
            <div class="content-column col-lg-7 col-md-12 col-sm-12">



              <div class="content-box">
                <div class="btn-box animate-3" style="position:absolute; top: 4ch; right: 66ch">
                  <div class="logo">
                    <NuxtLink @click="$router.push('/track-nota')"><img :src="logoSrc" style="max-width: 250px;" alt=""></NuxtLink>
                  </div>
                </div>

                <div>
                  <h1 class="text-white">
                    Tracking Externo
                  </h1>
                </div>
                <!--<span class="font-size-14" style="font-size: 18px; color: #fff"> {{ descricaoMaxSeq }} </span>-->

                <br> <br>

                <div class="btn-box animate-4 d-flex gap-5 mt-5">
                  <button
                      @click="$router.push('/track-nota')"
                      class="theme-btn btn-style-one alternate"
                      style="font-size: 18px; padding: 22px 40px; min-width: 150px;"
                  >
                    <span class="btn-title">Tracking</span>
                  </button>

                  <button
                      @click="$router.push('/dashboard')"
                      class="theme-btn btn-style-one alternate"
                      style="font-size: 18px; padding: 22px 40px; min-width: 150px;"
                  >
                    <span class="btn-title">Dashboard</span>
                  </button>
                </div>
              </div>
            </div>

            <div style="margin-top: -17ch; margin-left: 46ch; position: relative;">
              <div>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div  ref="targetRef"></div>
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
  },
}
</script>

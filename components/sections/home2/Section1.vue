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
        <div class="bg-image" style="margin-top: -100px; background-image: url(/images/main-slider/3.jpg);"></div>
        <div class="auto-container" style="margin-top: -40px;">
          <div class="row">
            <div class="content-column col-lg-7 col-md-12 col-sm-12">


              <div class="content-box">
                <div class="btn-box animate-3" style="position:absolute; top: 4ch; right: 66ch">
                  <div class="logo">
                    <NuxtLink @click="$router.push('/track-nota')"><img src="/images/logo_econo_pro.png"
                                                                        style="max-width: 230px; margin-right: 7ch;" alt=""></NuxtLink>
                  </div>
                </div>

                <h6 class="title animate-3" style="right: -2ch; top: -1ch">
                  <span class="colored" style="font-size: 100px"> Produção de</span>
                  <span class="badge badge-soft-white overlay-text" style="top: 70px; right: -268px"> Pedidos</span>
                </h6> <br>

<!--                <h6 class="title animate-3" style="font-size: 30px">
                  <span class="colored "> Status: </span> <br>
                  <span class="font-size-16" style="letter-spacing: 1px;"> Data de Emissão:  {{ dataEmissao }}</span>
                  <br> {{ statusEntrega }} <br> <br>
                  <span class="font-size-16" style="letter-spacing: 1px;"> Previsão de Entrega:  {{ dataPrev }}</span>
                  <br>
                  <span class="font-size-24" style="letter-spacing: 1px;"> {{ descricaoMaxSeq }} </span>
                </h6>-->
                <!--<span class="font-size-14" style="font-size: 18px; color: #fff"> {{ descricaoMaxSeq }} </span>-->

                <br> <br>

                <div class="btn-box animate-4">
                  <div class="badge-soft-orange" style=" max-width: 300px; max-height: 500px; position: absolute; top: 0ch ;left: 0ch">
                    <h5 class="badge badge-soft-white" style="font-size: 30px; padding: 0px 100px;"> Saldo </h5>
                    <span class="color2 font-size-30" style="padding: 0px 70px">128 ped.</span>
                  </div>
                  <div class="badge-soft-orange" style=" max-width: 300px; max-height: 500px; position: absolute; top: 0ch ;left: 30ch">
                    <h5 class="badge badge-soft-white" style="font-size: 30px; padding: 0px 47px;"> Em Produção </h5>
                    <span class="color2 font-size-30" style="padding: 0px 70px">46 ped.</span>
                  </div>
                  <div class="badge-soft-orange" style=" max-width: 300px; max-height: 500px; position: absolute; top: 0ch ;left: 60ch">
                    <h5 class="badge badge-soft-white" style="font-size: 30px; padding: 0px 47px;"> Concluído </h5>
                    <span class="color2 font-size-30" style="padding: 0px 60px">82 ped.</span>
                  </div>


                </div>
              </div>
            </div>

            <div class="content-column col-lg-5 col-md-12 col-sm-12">

              <div class="content-box">
                <div class="btn-box animate-3">
                  <span class="badge badge-soft-white overlay-text" style="position:absolute; font-size: 26px; top: -149px; left: 23ch"> NF Faturadas:</span>
                  <span class="color4" style="position:absolute; font-size: 100px; top: -150px;right: -3ch">1.053</span>
                  <p  class="color4" style="position:absolute; font-size: 45px; top: -79px;right: -315px">NFe's</p>
                </div>

              </div>
              <div  class="content-box " style="position:absolute; max-width: 600px; top:2ch; right: 1ch">
                <figure class="image animate-5 animate-x"><img src="/images/resource/truck.png" alt="">
                </figure>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div ref="targetRef"></div>
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
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/vue"

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
    return {}
  },

  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },


  methods: {

    scrollDown() {
      console.log('scrollDown')
      this.$refs.targetRef.scrollIntoView({behavior: 'smooth', block: "center"});
    }
  },
}
</script>

<style scoped>
.colored {
  //background-color: #f0f0f0;
  position: absolute;
  z-index: 2;
  padding: 5px 10px;
  border-radius: 4px;
  color: #ec5d18;
}

.badge {
  display: inline-block;
  font-size: 1.5ch;
}

.badge-soft-white {
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ccc;
}

.badge-soft-orange {
  z-index: 2;
  padding: 5px 10px;
  background-color: #ffe7d6;
  border-radius: 8px;
  border: 2px solid #ec5d18;
  color: #ec5d18;
}

.overlay-text {
  position: relative;
  z-index: 1;
}
</style>
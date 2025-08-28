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
                <div class="btn-box animate-3" style="position:absolute; top: -20ch; right: 70ch">
                  <div class="logo">
                    <NuxtLink @click="$router.push('/track-nota')">
                      <img :src="blobUrlWhite" alt height="60" style="max-width: 250px; position: relative; left: 3ch; margin-top: 21ch;" v-if="blobUrlWhite"/>
                      <img src="/images/logo_econoPro.png" alt height="60" style="max-width: 250px; position: relative; left: 3ch; margin-top: 21ch;" v-else-if="!loadingData"/>
<!--                    <NuxtLink @click="$router.push('/track-nota')"><img :src="logoSrc" style="max-width: 250px;" alt="">-->
                    </NuxtLink>
                  </div>
                </div>

                <div>
                  <h1 class="text-white">
                    Tracking Externo
                  </h1>
                </div>

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
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
import api from "../../../axios.js";

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
      empreConf: null,
      loadingData: true,
      blobUrlWhite: null,
    }
  },

  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },


  mounted() {
    /*const img = new Image();
    img.src = '/images/logo_prd.png';
    img.onload = () => {
      this.logoSrc = '/images/logo_prd.png';
    };
    img.onerror = () => {
      this.logoSrc = '/images/logo_econoPro.png';
    };*/

    //buscando logo no back
    console.log('mounted page')

    api.get(`api/emprconf`).then((res) => {
      console.log('then axios atualizando emprconf')
      console.log(res.data[0])

      const empreConfData = {
        'cnpj': res.data[0]['cnpj'],
        'nome': res.data[0]['fantasia'],
        'layout': res.data[0]['layout'],
        'width': res.data[0]['width'],
        'sidebar': res.data[0]['sidebar'],
        'logow': res.data[0]['logow'],
        'logob': res.data[0]['logob'],
        'regtrib': res.data[0]['regtrib'],
      }

      localStorage.setItem('emprconf', JSON.stringify(empreConfData))

      this.empreConf = empreConfData
      console.log('empreConf: ' , this.empreConf)
      console.log('empreConf.logow: ' , this.empreConf.logow)

      if (this.empreConf && (this.empreConf.logow || this.empreConf.logob)) {
        console.log('getfile')
        api.get(`api/getfile`, {
          responseType: 'blob',
          params: { pathData: this.empreConf.logow ?? this.empreConf.logob }
        }).then((res) => {
          console.log('baixararq')
          console.log(res)
          if (res.data && res.data.size > 0) {
            this.blobUrlWhite = URL.createObjectURL(res.data)
          }

          this.loadingData = false
        }).catch((err) => {
          console.log('erro logo')
          console.log(err)
          this.loadingData = false
        })
      } else {
        this.loadingData = false
      }
    })
  },


  methods: {
  },
}
</script>

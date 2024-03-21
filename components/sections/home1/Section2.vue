<template>
  <section class="features-section">
    <div class="auto-container">
      <div class="row" style="margin-top: 40px;">

        <div v-for="notaSts in notaStatusData"
             :key="notaSts.id"
             class="feature-block col-lg-4 col-md-6 col-sm-12">
          <div class="inner-box ">
            <div class="icon-box">
              <i :class="notaSts.tipo === 'Entrega' ? 'icon flaticon-checklist'
                              : notaSts.tipo === 'Pre-Entrega' ? 'icon flaticon-checklist'
                              : notaSts.tipo === 'Cliente' ? 'icon flaticon-logistics-delivery-6' : 'icon flaticon-shipping-2'"></i>
              <span class="count"> {{ notaSts.seq }}</span>
            </div>
            <div class="content-box">
              <h4 class="title">
                <NuxtLink to="/page-about"><br> {{ notaSts.ocorrencia }}</NuxtLink>
              </h4>
              <div class="text"> {{ notaSts.descricao }} </div>
            </div>
          </div>
        </div>




        <!--              <div class="feature-block col-lg-4 col-md-6 col-sm-12">-->
        <!--                    <div class="inner-box ">-->
        <!--                        <div class="icon-box">-->
        <!--                            <i class="icon flaticon-logistics-delivery-6"></i>-->
        <!--                            <span class="count">01</span>-->
        <!--                        </div>-->
        <!--                        <div class="content-box">-->
        <!--                            <h4 class="title">-->
        <!--                                <NuxtLink to="/page-about">Cost2<br> optimization</NuxtLink>-->
        <!--                            </h4>-->
        <!--                            <div class="text">Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod.</div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!--                &lt;!&ndash; Feature Block &ndash;&gt;-->
        <!--                <div class="feature-block col-lg-4 col-md-6 col-sm-12">-->
        <!--                    <div class="inner-box ">-->
        <!--                        <div class="icon-box">-->
        <!--                            <i class="icon flaticon-fast-delivery-1"></i>-->
        <!--                            <span class="count">02</span>-->
        <!--                        </div>-->
        <!--                        <div class="content-box">-->
        <!--                            <h4 class="title">-->
        <!--                                <NuxtLink to="/page-about">Reduced<br> transit timing</NuxtLink>-->
        <!--                            </h4>-->
        <!--                            <div class="text">Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod.</div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!--                &lt;!&ndash; Feature Block &ndash;&gt;-->
        <!--                <div class="feature-block col-lg-4 col-md-6 col-sm-12">-->
        <!--                    <div class="inner-box ">-->
        <!--                        <div class="icon-box">-->
        <!--                            <i class="icon flaticon-container-2"></i>-->
        <!--                            <span class="count">03</span>-->
        <!--                        </div>-->
        <!--                        <div class="content-box">-->
        <!--                            <h4 class="title">-->
        <!--                                <NuxtLink to="/page-about">Warehouse operation</NuxtLink>-->
        <!--                            </h4>-->
        <!--                            <div class="text">Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod.</div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->



      </div>
    </div>
  </section>
</template>

<script >


import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

export default {


  props: {
    notaStatusData: {
      type: Object,
      required: false,
    },

  },

  data() {
    return {

    }
  },




  methods: {


  },

  mounted() {
    console.log('mounted_section_2')
    console.log('this.notaStatusData')
    console.log(this.notaStatusData)

  }
}

</script>

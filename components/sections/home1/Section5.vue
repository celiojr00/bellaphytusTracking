<template>
    <section class="tracking-section pull-down">
        <div class="auto-container">
            <div class="outer-box">
                <div class="arrow-box wow fadeInRight">
                    <img src="/images/icons/arrow-2.png" alt="" class="icon">
                    <span class="title">Resultados em <br>poucos segundos</span>
                </div>
                <div class="tracking-form">
                    <h4 class="title">Rastreie <br>Seu Pedido</h4>
                    <!-- Tracking Form -->
                    <form method="post" :action="`/?ch=${chaveNota}`">
                        <div class="row">
                            <div class="form-group col-lg-8 col-md-12 col-sm-12">
                                <span class="icon lnr-icon-file-archive"></span>
                                <input v-model="chaveNota" type="text" name="field_name" placeholder="Chave Nota Fiscal">
                            </div>
                            <!-- Form Group -->
<!--                            <div class="form-group col-lg-4 col-md-12 col-sm-12">-->
<!--                                <span class="icon lnr-icon-envelope1"></span>-->
<!--                                <input type="text" name="field_name" placeholder="Your Email Address">-->
<!--                            </div>-->
                            <!-- Form Group -->
                            <div class="form-group col-lg-4 col-md-12 col-sm-12 text-end">
                                <button type="submit" class="theme-btn btn-style-one"><span class="btn-title">Rastrear
                                        Pedido</span></button>
                            </div>
                        </div>
                    </form>
                    <!-- End Tracking Form -->
                </div>
            </div>
        </div>
    </section>
</template>



<script >


import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

export default {


  data() {
    return {
      chaveNota: null,
    }
  },




  methods: {


  },

  mounted() {


  }
}

</script>
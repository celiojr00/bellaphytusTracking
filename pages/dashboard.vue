<!--<template>-->
<!--  <SectionsHome2Section1 :lista-resultados="listaResultados" :nota-data="notaData" :status-entrega="statusEntrega" :data-Emissao="dataEmissao" :data-Prev="dataPrev" :count-Down="countDown"/>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import {Swiper, SwiperSlide} from "swiper/swiper-vue";-->
<!--</script>-->

<script>
import api from "../axios.js";
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/vue"
import moment from 'moment';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      listaResultados: {
        totalEmitMes: 0,
        totalEmitSem: 0,
        totalEmitDia: 0,
        nfEmAbertoMes: 0,
        nfEmAbertoSem: 0,
        nfEmAbertoDia: 0,
        nfEmProdMes: 0,
        nfEmProdSem: 0,
        nfEmProdDia: 0,
        nfConfMes: 0,
        nfConfSem: 0,
        nfConfDia: 0,
        romaNaoAssocMes: 0,
        romaNaoAssocSem: 0,
        romaNaoAssocDia: 0,
        romaNaoEmbarMes: 0,
        romaNaoEmbarSem: 0,
        romaNaoEmbarDia: 0,
        romaExpedMes: 0,
        romaExpedSem: 0,
        romaExpedDia: 0,
        totalItem: 0,
        totalItemEmProd: 0,
        totalItemExp: 0,
        totalItemEmAb: 0,
        totalItemConf: 0,
      },
    }
  },

  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },

  mounted() {
    this.atualizaList();
  },

  methods: {
    atualizaList() {

      api.get(`api/dashproducao`, {
      }).then((res) => {
        console.log('then axios rastreio nfAbe');
        console.log(res.data);

        if(res.data !== undefined) {
          this.listaResultados = res.data;
          console.log(' this.listaResultados')
          console.log(this.listaResultados)
        }

      }).catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
    },

    scrollDown() {
      console.log('scrollDown')
      this.$refs.targetRef.scrollIntoView({behavior: 'smooth', block: "center"});
    },

    formatInteger(value) {
      if(value){
        let value_n = parseFloat(value)
        return value_n.toLocaleString('pt-BR', {style: 'decimal', minimumFractionDigits: 0});
      }
      return 0.00;
    },

  }
}
</script>
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
        <div class="bg-image" style="margin-top: -750px; background-image: url(/images/main-slider/3.jpg);"></div>
        <div class="auto-container" style="margin-top: -40px;">
          <div class="row">
            <div class="content-column col-lg-7 col-md-12 col-sm-12">
              <div class="content-box">
                <!--Logo EconoPro no topo-->
                <!--                <div class="btn-box animate-3" style="position:absolute; top: 4ch; right: 66ch">
                    <div class="logo">
                      <img src="/images/logo_econo_pro.png" style="max-width: 230px; margin-right: 7ch;" alt="">
                    </div>
                  </div>-->

                <!--Logo Dashboard Produção no topo-->
                <div style=" margin-left: -48ch; margin-top: -10ch">
                  <h6 class="title animate-3" style="right: -90px; top: -84px">
                    <span class="colored" style="font-size: 38px"> Dashboard</span>
                    <span class="badge badge-soft-white overlay-text" style="top: -12px; padding: 5px; right: -190px"> Produção</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <!--Painel Itens Em Pordução-->
          <div class="row btn-box animate-4" style="position: relative; left: 129ch; top: -28ch">
            <div class="title-column col-lg-6 col-md-12"
                 style="position: absolute; top: 12ch; left: -27.9ch">
              <div class="title-box" style="text-align: center">
                <h4 class="badge badge-soft-white font-size-42" style=" padding: 5px 38px;">Produtos<br></h4>
                <div style="text-align: center">
                  <h4 class="font-size-30" style="color: #fff; margin-top: 12px;">Total de Itens</h4> <br>
                  <div class="col-12" style="margin-top: -70px;">
                    <h4 class="color2 font-size-70" style="color: #fdbe41">{{formatInteger(listaResultados.totalItem)}}</h4>
                  </div>
                </div>

                <div style="text-align: center">
                  <h4 class="font-size-30" style="color: #fff; margin-top: 12px;">Em Produção</h4> <br>
                  <div class="col-12" style="margin-top: -70px;">
                    <h4 class="color2 font-size-70" style="color: #fdbe41">{{formatInteger(listaResultados.totalItemEmProd)}}</h4>
                  </div>
                </div>
                <div style="text-align: center">
                  <h4 class="font-size-30" style="color: #fff; margin-top: 12px;">Expedido</h4> <br>
                  <div class="col-12" style="margin-top: -70px;">
                    <h4 class="color2 font-size-70" style="color: #fdbe41">{{formatInteger(listaResultados.totalItemExp)}}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Painel OS de Saída-->
          <div class="row btn-box animate-4" style="position: relative; left: 135ch; top: 50ch">
            <div class="title-column col-lg-6 col-md-12"
                 style="position: absolute; top: -15ch; left: -22ch">
              <div class="title-box">
                <h4 class="badge badge-soft-white font-size-42" style="margin-left: 1ch; padding: 5px 20px">OS de Saída<br></h4>
                <div class="d-flex" style="margin-left: 15ch">


<!--                  <div class="divider" style=" margin-top: -54ch; margin-bottom: 1ch; margin-left: -21.3ch; margin-right: 1ch"></div>-->

                  <div class="d-flex" style="margin-left: -17.5ch">
                    <div>
                      <h4 class="font-size-30" style="color: #fff; margin-top: 16px">Em Aberto</h4> <br>
                      <div class="col-12" style="position: absolute; margin-top: -70px; margin-left: -226px; text-align: center">
                        <h4 class="color2 font-size-70" style="color: #fdbe41">{{formatInteger(listaResultados.totalItemEmAb)}}</h4>
                      </div>
                    </div>

                    <div class="divider">
                      <h4 class="font-size-30" style="color: #fff; margin-top: 0px">Finalizado</h4> <br>
                      <div class="col-12" style="position: absolute; margin-top: -70px; margin-left: -231px; text-align: center">
                        <h4 class="color2 font-size-70" style="color: #fdbe41">{{formatInteger(listaResultados.totalItemConf)}}</h4>
                      </div>
                    </div>
                  </div>
<!--                  <div>-->
<!--                    <h4 class="font-size-30" style="color: #fff; margin-top: 16px">Em Aberto</h4> <br>-->
<!--                    <div class="col-12" style="position: absolute; margin-top: -70px; margin-left: -226px; text-align: center">-->
<!--                      <h4 class="color2 font-size-70" style="color: #fdbe41">{{formatInteger(listaResultados.totalItemEmAb)}}</h4>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                  <div class="divider">-->
<!--                    <h4 class="font-size-30" style="color: #fff; margin-top: 0px">Finalizado</h4> <br>-->
<!--                    <div class="col-12" style="position: absolute; margin-top: -70px; margin-left: -231px; text-align: center">-->
<!--                      <h4 class="color2 font-size-70" style="color: #fdbe41">{{formatInteger(listaResultados.totalItemConf)}}</h4>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
              </div>
            </div>
          </div>

          <!--Painel de Pordução-->
          <div style="margin-top: -17ch; margin-left: 46ch">
            <div>
              <div class="btn-box animate-4">

                <!-- Painel Diario -->
                <div style="position: relative; left: -50ch; top: -26px">
                  <h4 class="badge badge-soft-white" style="color: #d39d02; font-size: 32px; position: absolute; top: -1.15ch ;left: 4.5ch; padding: 0.1ch 3.2ch"> Nota Fiscal </h4>
                  <h4 class="badge badge-soft-white" style="color: #d39d02; font-size: 32px; position: absolute; top: -1.15ch ;left: 33ch; padding: 0.1ch 2.5ch"> Romaneio </h4>
                  <div class="badge badge-soft-white" style=" width: 1580px; height: 202px; position: absolute; top: 1.55ch ;left: -20ch">
                    <div class="d-flex justify-content-center">

                      <!--Total de NF-->
                      <div class="btn-box animate-3" style="position: absolute ; left: 2.3ch">
                        <h4 class="badge badge-soft-warnig font-size-32" style="padding: 3px 100px; margin-left: -20px; margin-right: 20px"> DIA </h4> <br>
                        <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -125px">Notas Emitidas:</p>
                        <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -30ch; text-align: center">
                          <h4 class="font-size-80" style="color: #d39d02; margin-right: -19.5ch; margin-top: 30px">{{formatInteger(listaResultados.totalEmitDia)}}</h4>
                        </div>
                        <p style="color: #d39d02; font-size: 36px; margin-left: 180px; margin-right: -1ch; margin-top: -7px">NF's</p>
                      </div>

                      <!-- Notas -->
                      <div class="d-flex justify-content-center col-12" style="margin-left: -3ch">
                        <div class="col-2" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                            <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.nfEmAbertoDia)}}</h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: absolute; left: 26ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.nfEmProdDia)}}</h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: relative; left: 6ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Conferida </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.nfConfDia)}}</h4>
                          </div>
                        </div>

                        <!-- Pedidos -->
                        <div class="separator-line-warnig" style="position: relative; left: 5.3ch"></div>

                        <div class="col-2" style="position: absolute; left: 47.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.romaNaoAssocDia)}}</h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: absolute ;left: 57.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.romaNaoEmbarDia)}}</h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: absolute; left: 68ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div style="margin-top: 0ch">
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Expedido </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.romaExpedDia)}}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Painel da Semana -->
                <div style="position: relative; left: -50ch; top: -12px">
                  <h4 class="badge badge-soft-white" style="color: #0c5460; font-size: 32px; position: absolute; top: 11.05ch ;left: 4.5ch; padding: 0.1ch 3.2ch"> Nota Fiscal </h4>
                  <h4 class="badge badge-soft-white" style="color: #0c5460; font-size: 32px; position: absolute; top: 11.05ch ;left: 33ch; padding: 0.1ch 2.5ch"> Romaneio </h4>
                  <div class="badge badge-soft-white" style=" width: 1580px; height: 202px; position: absolute; top: 15.5ch ;left: -20ch">
                    <div class="d-flex justify-content-center">

                      <!--Total de NF-->
                      <div class="btn-box animate-3" style="position: absolute ; left: 2.8ch">
                        <h4 class="badge badge-soft-info font-size-32" style="padding: 3px 68px; margin-left: -30px; margin-right: 20px"> SEMANA </h4> <br>
                        <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -155px">Notas Emitidas:</p>
                        <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -33ch; text-align: center">
                          <h4 class="font-size-80" style="color: #0c5460;; margin-right: -21ch; margin-top: 30px">{{formatInteger(listaResultados.totalEmitSem)}}</h4>
                        </div>
                        <p style="color: #0c5460; font-size: 36px; margin-left: 180px; margin-right: 0.5ch; margin-top: -7px">NF's</p>
                      </div>

                      <!-- Notas -->
                      <div class="d-flex justify-content-center col-12" style="margin-left: -3ch">
                        <div class="col-2" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                            <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> {{formatInteger(listaResultados.nfEmAbertoSem)}} </h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: absolute; left: 26ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>

                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> {{formatInteger(listaResultados.nfEmProdSem)}} </h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: relative; left: 6ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>

                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Conferida </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> {{formatInteger(listaResultados.nfConfSem)}} </h4>
                          </div>
                        </div>

                        <!-- Pedidos -->
                        <div class="separator-line-info" style="position: relative; left: 5.3ch"></div>

                        <div class="col-2" style="position: absolute; left: 47.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> {{formatInteger(listaResultados.romaNaoAssocSem)}} </h4>
                          </div>
                        </div>

                        <div  class="col-2" style="position: absolute ;left: 57.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> {{formatInteger(listaResultados.romaNaoEmbarSem)}} </h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: absolute; left: 68ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Expedido </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> {{formatInteger(listaResultados.romaExpedSem)}} </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Painel da Mensal -->
                <div style="position: relative; left: -50ch">
                  <h4 class="badge badge-soft-white" style="color: #155724; font-size: 32px; position: absolute; top: 23.3ch ;left: 4.5ch; padding: 0.1ch 3.2ch"> Nota Fiscal </h4>
                  <h4 class="badge badge-soft-white" style="color: #155724; font-size: 32px; position: absolute; top: 23.3ch ;left: 33ch; padding: 0.1ch 2.5ch"> Romaneio </h4>
                  <div class="badge badge-soft-white" style=" width: 1580px; height: 202px; position: absolute; top: 29.5ch ;left: -20ch">
                    <div class="d-flex justify-content-center">

                      <!--Total de NF-->
                      <div class="btn-box animate-3" style="position: absolute ; left: 2ch">
                        <h4 class="badge badge-soft-success font-size-32" style="padding: 3px 95px; margin-left: -30px; margin-right: 14px"> MÊS </h4> <br>
                        <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -140px">Notas Emitidas:</p>
                        <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -33ch; text-align: center">
                          <h4 class="font-size-80" style="color: #155724;; margin-right: -21ch; margin-top: 30px">{{formatInteger(listaResultados.totalEmitMes)}}</h4>
                        </div>
                        <p style="color: #155724; font-size: 36px; margin-left: 180px; margin-right: 1ch; margin-top: -7px">NF's</p>
                      </div>

                      <!-- Notas -->
                      <div class="d-flex justify-content-center col-12" style="margin-left: -3ch">
                        <div class="col-2" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                            <h4 style="color: #155724; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.nfEmAbertoMes)}}</h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: absolute; left: 26ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.nfEmProdMes)}}</h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: relative; left: 6ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Conferida </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.nfConfMes)}}</h4>
                          </div>
                        </div>

                        <!-- Pedidos -->
                        <div  class="separator-line-success" style="position: relative; left: 5.3ch"></div>

                        <div class="col-2" style="position: absolute; left: 47.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.romaNaoAssocMes)}}</h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: absolute ;left: 57.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.romaNaoEmbarMes)}}</h4>
                          </div>
                        </div>

                        <div class="col-2" style="position: absolute; left: 68ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Expedido </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 75px; margin-top: -34px;">{{formatInteger(listaResultados.romaExpedMes)}}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
              <!--MODELO ANTIGO-->
              <!--<div class="features-column col-lg-6 col-md-12" style="margin-bottom: 0ch; width: 48ch; height: 38ch">
                  <div class="row">
                    <div class="d-flex" style="margin-left: -4ch">
                      <div class="feature-block-three custom-feature-block" style="margin-right: 1ch;">
                        <div class="inner custom-inner" style="background-color: #fff">
                          <i class="icon flaticon-delivery-courier" style=" margin-top: -10px;"></i>
                          <br><br><br>
                          <h4 class="title" style="margin-top: -100px; margin-left: -6px;position: absolute;"> NF Em Aberto </h4>
                          <p class="title" style="color: #111; font-size: 12px; position: absolute; margin-top: -80px; margin-left: -2px">(Não Associadas) </p>
                          <div class="col-12" style="position: absolute; margin-top: -80px; margin-left: -29px; text-align: center">
                            <h4 class="color2 font-size-78">128</h4>
                          </div>
                        </div>
                      </div>
                      <div class="feature-block-three custom-feature-block" style="margin-right: 1ch">
                        <div class="inner custom-inner" style="background-color: #fff">
                          <i class="icon flaticon-delivery-box-3" style=" margin-top: -10px;"></i>
                          <br><br><br>
                          <h4 class="title" style="margin-top: -100px; margin-left: -17px;position: absolute;"> NF Em Produção </h4>
                          <p class="title" style="color: #111; font-size: 12px; position: absolute; margin-top: -80px; margin-left: -5px"><br><br><br><br></p>
                          <div class="col-12" style="position: absolute; margin-top: -80px; margin-left: -32px; text-align: center">
                            <h4 class="color2 font-size-78">46</h4>
                          </div>
                        </div>
                      </div>
                      <div class="feature-block-three custom-feature-block" style="margin-right: 0ch">
                        <div class="inner custom-inner" style="background-color: #fff">
                          <i class="icon flaticon-delivery-insurance-3" style=" margin-top: -10px;"></i>
                          <br><br><br>
                          <h4 class="title" style="margin-top: -100px; margin-left: -4px;position: absolute;"> NF Conferida </h4>
                          <p class="title" style="color: #111; font-size: 12px; position: absolute; margin-top: -80px; margin-left: -5px"><br><br><br><br></p>
                          <div class="col-12" style="position: absolute; margin-top: -80px; margin-left: -34px; text-align: center">
                            <h4 class="color2 font-size-78">82</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>-->
            </div>
          </div>

        </div>
      </swiper-slide>
      <div ref="targetRef"></div>
    </swiper>


  </section>
</template>
<style scoped>

.custom-feature-block {
  width: 160px;
  height: auto;
}

.custom-inner {
  padding: 30px;
}

.colored {
  position: absolute;
  z-index: 2;
  padding: 5px 10px;
  border-radius: 4px;
  color: #ec5d18;
}

.badge {
  display: inline-block;
  font-size: 28px;
}

.badge-soft-white {
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ccc;
}

.badge-soft-success {
  z-index: 2;
  padding: 5px 10px;
  background-color: #d4edda;
  border-radius: 8px;
  border: 1px solid #155724 ;
  color: #155724;
}

.badge-soft-info {
  z-index: 2;
  padding: 5px 10px;
  background-color: #d1ecf1;
  border-radius: 8px;
  border: 1px solid #0c5460 ;
  color: #0c5460;
}

.badge-soft-warnig {
  z-index: 2;
  padding: 5px 10px;
  background-color: #fff3cd;
  border-radius: 8px;
  border: 1px solid #856404 ;
  color: #d39d02;
}

.overlay-text {
  position: relative;
  z-index: 1;
}

.divider {
  margin-left: 40px;
  border-left: 2px solid #ccc;
  padding-left: 40px;
  margin-top: 16px;
}

.separator-line-success {

  border-left: 1.8px solid #155724;
  padding-left: 65px;
  margin-top: 10px;
  margin-bottom: 50px;

}

.separator-line-info {

  border-left: 1.8px solid #0c5460;
  padding-left: 65px;
  margin-top: 10px;
  margin-bottom: 50px;

}

.separator-line-warnig {

  border-left: 1.8px solid #856404;
  padding-left: 65px;
  margin-top: 10px;
  margin-bottom: 50px;

}

</style>

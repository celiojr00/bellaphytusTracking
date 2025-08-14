<script>
import api from "../axios.js";
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/vue"

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
        romaEmAbertoMes: 0,
        romaEmAbertoSem: 0,
        romaEmAbertoDia: 0,
        romaExpedMes: 0,
        romaExpedSem: 0,
        romaExpedDia: 0,
        totalRomaMes: 0,
        totalRomaSem: 0,
        totalRomaDia: 0,
        volRomaAConferirMes: 0,
        volRomaAConferirSem: 0,
        volRomaAConferirDia: 0,
        volRomaConferirMes: 0,
        volRomaConferirSem: 0,
        volRomaConferirDia: 0,
        pedEmElabMes: 0,
        pedEmElabSem: 0,
        pedEmElabDia: 0,
        pedConfMes: 0,
        pedConfSem: 0,
        pedConfDia: 0,
        pedFatMes: 0,
        pedFatSem: 0,
        pedFatDia: 0,
        pedCanMes: 0,
        pedCanSem: 0,
        pedCanDia: 0,
      },

      totalPedDia: null,
      totalPedSem: null,
      totalPedMes: null,
      flagBaseDash: false,
    }
  },

  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },

  mounted() {
    this.atualizaList();
    const savedFlag = localStorage.getItem('flagBaseDash');
    if (savedFlag !== null) {
      this.flagBaseDash = savedFlag === 'true';
    }
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
          this.totalPedDia = Number(this.listaResultados.pedEmElabDia) + Number(this.listaResultados.pedFatDia) + Number(this.listaResultados.pedConfDia)
          this.totalPedSem = Number(this.listaResultados.pedEmElabSem) + Number(this.listaResultados.pedFatSem) + Number(this.listaResultados.pedConfSem)
          this.totalPedMes = Number(this.listaResultados.pedEmElabMes) + Number(this.listaResultados.pedFatMes) + Number(this.listaResultados.pedConfMes)
        }

      }).catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
    },

    saveFlag() {
      localStorage.setItem('flagBaseDash', this.flagBaseDash);
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
                <!--Logo Dashboard Produção no topo-->
                <div style=" margin-left: -41ch; margin-top: -10ch">
                  <h6 class="title animate-3" style="right: -90px; top: -84px">
                    <span class="colored" style="font-size: 38px"> Dashboard</span>

                    <span class="badge badge-soft-white overlay-text" style="top: -12px;
                          padding-top: 8px; padding-bottom: 5px; padding-right: 100px; padding-left: 5px;  right: -190px">
                      Produção


                      <p class="form-check form-switch" style="position: absolute ; left: 110px; color: #111; font-size: 12px; top: -1px">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            size="sm"
                            v-model="flagBaseDash"
                            @change="saveFlag"
                        >
                        <label class="form-check-label" style="position: relative ;right: 2px; top: -2px; letter-spacing: 0.5px;">
                          <strong>{{ flagBaseDash === true ? 'Pedido' : 'Nota Fiscal' }}</strong>
                        </label>
                      </p>

                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <!--Painel de Pordução-->
          <div style="margin-top: -17ch; margin-left: 46ch; position: relative;">
            <div>
              <div class="btn-box animate-4">

                <!-- Painel Diario -->
                <div style="position: relative; left: -55ch; top: -26px;">
                  <h4 class="badge badge-soft-white" style="color: #d39d02; font-size: 32px; position: absolute; top: -1.15ch ;left: 7.5ch; padding: 0.1ch 3.2ch"> Nota Fiscal </h4>
                  <h4 class="badge badge-soft-white" style="color: #d39d02; font-size: 32px; position: absolute; top: -1.15ch ;left: 34ch; padding: 0.1ch 3.2ch"> Romaneio </h4>
                  <h4 class="badge badge-soft-white" style="color: #d39d02; font-size: 32px; position: absolute; top: -1.15ch ;left: 56.7ch; padding: 0.1ch 3.4ch"> Volumes </h4>

                  <!-- Notas -->
                  <div class="badge badge-soft-white" style=" width: 861px; height: 202px; position: absolute; top: 1.55ch ;left: -13ch">
                    <div class="d-flex justify-content-center">
                      <!--Total de NF-->
                      <div class="btn-box animate-3" style="position: absolute ; left: 1.7ch">
                        <h4 class="badge badge-soft-warnig font-size-32" style="padding: 3px 100px; margin-left: -20px; margin-right: 20px"> DIA </h4> <br>
                        <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -150px">{{ flagBaseDash === false ? "Notas Emitidas:" : "Pedidos Emitidos:" }}</p>
                        <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -30ch; text-align: center">
                          <h4 class="font-size-70" style="color: #d39d02; margin-right: -21.6ch; margin-top: 35px">{{ flagBaseDash === false ? formatInteger(listaResultados.totalEmitDia) : formatInteger(totalPedDia)}}
                            <p style="color: #d39d02; font-size: 36px; margin-left: 260px; margin-top: -74px">{{ flagBaseDash === false ? "NF's" : "Ped's" }}</p>
                          </h4>
                        </div>
                      </div>

                      <!-- Pedido -->
                      <div v-if="flagBaseDash === true" class="d-flex justify-content-center col-12" style="position: absolute; margin-left: -7.7ch;">
                        <div class="col-4" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.pedEmElabDia)}}</h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 25.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Faturado </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.pedFatDia)}}</h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 35.2ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Confirmado </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.pedConfDia)}}</h4>
                          </div>
                        </div>
                      </div>

                      <!-- Notas -->
                      <div v-if="flagBaseDash === false" class="d-flex justify-content-center col-12" style="position: absolute; margin-left: -7.7ch;">
                        <div class="col-4" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                            <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.nfEmAbertoDia)}}</h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 25.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.nfEmProdDia)}}</h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 35.2ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Conferida </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.nfConfDia)}}</h4>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <!-- Romaneio -->
                  <div class="badge badge-soft-white" style=" width: 563px; height: 202px; position: absolute; top: 1.55ch ;left: 32ch">
                    <div class="d-flex justify-content-center">
                      <div class="col-4" style="position: absolute; left: 0.3ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Total </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.totalRomaDia)}}</h4>
                        </div>
                      </div>

                      <div class="col-4" style="position: absolute ;left:9.7ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.romaEmAbertoDia)}}</h4>
                        </div>
                      </div>

                      <div class="col-4" style="position: absolute; left: 18.8ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div style="margin-top: 0ch">
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Expedido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.romaExpedDia)}}</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Volumes -->
                  <div class="badge badge-soft-white" style=" width: 400px; height: 202px; position: absolute; top: 1.55ch ;left: 61.9ch">
                    <div class="d-flex justify-content-center">
                      <div class="col-6" style="position: absolute; left: 0.3ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.volRomaAConferirDia)}}</h4>
                        </div>
                      </div>

                      <div class="col-6" style="position: absolute ;left:10ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.volRomaConferirDia)}}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Painel da Semana -->
                <div style="position: relative; left: -55ch; top: -12px">
                  <h4 class="badge badge-soft-white" style="color: #0c5460; font-size: 32px; position: absolute; top: 11.05ch ;left: 7.5ch; padding: 0.1ch 3.2ch"> Nota Fiscal </h4>
                  <h4 class="badge badge-soft-white" style="color: #0c5460; font-size: 32px; position: absolute; top: 11.05ch ;left: 34ch; padding: 0.1ch 3.2ch"> Romaneio </h4>
                  <h4 class="badge badge-soft-white" style="color: #0c5460; font-size: 32px; position: absolute; top: 11.05ch ;left: 56.7ch; padding: 0.1ch 3.4ch"> Volumes </h4>

                  <!-- Notas -->
                  <div class="badge badge-soft-white" style=" width: 861px; height: 202px; position: absolute; top: 15.5ch ;left: -13ch">
                    <div class="d-flex justify-content-center">

                      <!--Total de NF-->
                      <div class="btn-box animate-3" style="position: absolute ; left: 1.7ch">
                        <h4 class="badge badge-soft-info font-size-32" style="padding: 3px 68px; margin-left: -20px; margin-right: 20px"> SEMANA </h4> <br>
                        <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -150px">{{ flagBaseDash === false ? "Notas Emitidas:" : "Pedidos Emitidos:" }}</p>
                        <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -30ch; text-align: center">
                          <h4 class="font-size-70" style="color: #0c5460;; margin-right: -21.6ch; margin-top: 30px">{{ flagBaseDash === false ? formatInteger(listaResultados.totalEmitSem) : formatInteger(totalPedSem)}}
                            <p style="color: #0c5460; font-size: 36px; margin-left: 260px; margin-top: -75px">{{ flagBaseDash === false ? "NF's" : "Ped's" }}</p>
                          </h4>
                        </div>
                      </div>

                      <!-- Pedido -->
                      <div v-if="flagBaseDash === true" class="d-flex justify-content-center col-12" style="position: absolute; margin-left: -7.7ch">
                        <div class="col-4" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.pedEmElabSem)}} </h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 25.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Faturado </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.pedFatSem)}} </h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 35.2ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Confirmado </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.pedConfSem)}} </h4>
                          </div>
                        </div>
                      </div>

                        <!-- Notas -->
                      <div v-if="flagBaseDash === false" class="d-flex justify-content-center col-12" style="position: absolute; margin-left: -7.7ch">
                        <div class="col-4" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                            <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.nfEmAbertoSem)}} </h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 25.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.nfEmProdSem)}} </h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 35.2ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Conferida </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.nfConfSem)}} </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Romaneio -->
                  <div class="badge badge-soft-white" style=" width: 563px; height: 202px; position: absolute; top: 15.5ch ;left: 32ch">
                    <div class="d-flex justify-content-center">

                      <div class="col-4" style="position: absolute; left: 0.3ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Total </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.totalRomaSem)}} </h4>
                        </div>
                      </div>

                      <div  class="col-4" style="position: absolute ;left: 9.7ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.romaEmAbertoSem)}} </h4>
                        </div>
                      </div>

                      <div class="col-4" style="position: absolute; left: 18.8ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Expedido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.romaExpedSem)}} </h4>
                        </div>
                      </div>

                    </div>
                  </div>

                  <!-- Volumes -->
                  <div class="badge badge-soft-white" style=" width: 400px; height: 202px; position: absolute; top: 15.5ch ;left: 61.9ch">
                    <div class="d-flex justify-content-center">

                      <div class="col-6" style="position: absolute; left: 0.3ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.volRomaAConferirSem)}} </h4>
                        </div>
                      </div>

                      <div  class="col-6" style="position: absolute ;left: 10ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #0c5460; font-size: 70px; margin-top: -34px;"> {{formatInteger(listaResultados.volRomaConferirSem)}} </h4>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Painel da Mensal -->
                <div style="position: relative; left: -55ch">
                  <h4 class="badge badge-soft-white" style="color: #155724; font-size: 32px; position: absolute; top: 23.3ch ;left: 7.5ch; padding: 0.1ch 3.2ch"> Nota Fiscal </h4>
                  <h4 class="badge badge-soft-white" style="color: #155724; font-size: 32px; position: absolute; top: 23.3ch ;left: 34ch; padding: 0.1ch 3.2ch"> Romaneio </h4>
                  <h4 class="badge badge-soft-white" style="color: #155724; font-size: 32px; position: absolute; top: 23.3ch ;left: 56.7ch; padding: 0.1ch 3.4ch"> Volumes </h4>

                  <!-- Notas -->
                  <div class="badge badge-soft-white" style=" width: 861px; height: 202px; position: absolute; top: 29.5ch ;left: -13ch">
                    <div class="d-flex justify-content-center">

                      <!--Total de NF-->
                      <div class="btn-box animate-3" style="position: absolute ; left: 1.7ch">
                        <h4 class="badge badge-soft-success font-size-32" style="padding: 3px 95px; margin-left: -20px; margin-right: 20px"> MÊS </h4> <br>
                        <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -150px">{{ flagBaseDash === false ? "Notas Emitidas:" : "Pedidos Emitidos:" }}</p>
                        <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -30ch; text-align: center">
                          <h4 class="font-size-70" style="color: #155724;; margin-right: -21.6ch; margin-top: 30px">{{ flagBaseDash === false ? formatInteger(listaResultados.totalEmitMes) :  formatInteger(totalPedMes)}}
                            <p style="color: #155724; font-size: 36px; margin-left: 260px; margin-top: -74px">{{ flagBaseDash === false ? "NF's" : "Ped's" }}</p>
                          </h4>
                        </div>
                      </div>


                      <!-- Pedido -->
                      <div v-if="flagBaseDash === true" class="d-flex justify-content-center col-12" style="position: absolute;margin-left: -7.7ch">
                        <div class="col-4" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.pedEmElabMes)}}</h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 25.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Faturado </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.pedFatMes)}}</h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 35.2ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Pedido Confirmado </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.pedConfMes)}}</h4>
                          </div>
                        </div>
                      </div>

                      <!-- Notas -->
                      <div v-if="flagBaseDash === false" class="d-flex justify-content-center col-12" style="position: absolute;margin-left: -7.7ch">
                        <div class="col-4" style="position: absolute; left: 16ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                            <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.nfEmAbertoMes)}}</h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 25.5ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.nfEmProdMes)}}</h4>
                          </div>
                        </div>

                        <div class="col-4" style="position: absolute; left: 35.2ch; margin-top: 0.3ch">
                          <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                          <div>
                            <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Conferida </h4>
                            <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                            <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.nfConfMes)}}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Romaneio -->
                  <div class="badge badge-soft-white" style=" width: 563px; height: 202px; position: absolute; top: 29.5ch ;left: 32ch">
                    <div class="d-flex justify-content-center">
                      <div class="col-4" style="position: absolute; left: 0.3ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Total </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.totalRomaMes)}}</h4>
                        </div>
                      </div>

                      <div class="col-4" style="position: absolute ;left: 9.7ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.romaEmAbertoMes)}}</h4>
                        </div>
                      </div>

                      <div class="col-4" style="position: absolute; left: 18.8ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Expedido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.romaExpedMes)}}</h4>
                        </div>
                      </div>

                    </div>
                  </div>

                  <!-- Volumes -->
                  <div class="badge badge-soft-white" style=" width: 400px; height: 202px; position: absolute; top: 29.5ch ;left: 61.9ch">
                    <div class="d-flex justify-content-center">
                      <div class="col-6" style="position: absolute; left: 0.3ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.volRomaAConferirMes)}}</h4>
                        </div>
                      </div>

                      <div class="col-6" style="position: absolute ;left: 10ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>
                        <div>
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #155724; font-size: 70px; margin-top: -34px;">{{formatInteger(listaResultados.volRomaConferirMes)}}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            </div>
          </div>

        </div>
      </swiper-slide>
      <div ref="targetRef"></div>
    </swiper>


  </section>
</template>
<style scoped>

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

</style>

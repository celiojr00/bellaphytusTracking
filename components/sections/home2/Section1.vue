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
                <div style=" margin-left: -42ch; margin-top: -10ch">
                  <h6 class="title animate-3" style="right: -90px; top: -84px">
                    <span class="colored" style="font-size: 38px"> Dashboard</span>
                    <span class="badge badge-soft-white overlay-text" style="top: -12px; padding: 5px; right: -190px"> Produção</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div style="text-align: center; position: absolute; top: 0ch">
            <span style="font-size: 20px; color: #fff; margin-left: 109ch; ">{{ countDown }}</span> <br>
          </div>

          <!--Painel Itens Em Pordução-->
          <div class="row btn-box animate-4" style="position: relative; left: 120ch; top: -28ch">
            <div class="title-column col-lg-6 col-md-12"
                 style="position: absolute; top: 12ch; left: -27.9ch">
              <div class="title-box" style="text-align: center">
                <h4 class="badge badge-soft-white font-size-42" style=" padding: 5px 38px;">Produtos<br></h4>
                <div style="text-align: center">
                  <h4 class="font-size-30" style="color: #fff; margin-top: 12px;">Total de Itens</h4> <br>
                  <div class="col-12" style="margin-top: -70px;">
                    <h4 class="color2 font-size-70" style="color: #fdbe41">128</h4>
                  </div>
                </div>

                <div style="text-align: center">
                  <h4 class="font-size-30" style="color: #fff; margin-top: 12px;">Em Produção</h4> <br>
                  <div class="col-12" style="margin-top: -70px;">
                    <h4 class="color2 font-size-70" style="color: #fdbe41">128</h4>
                  </div>
                </div>
                <div style="text-align: center">
                  <h4 class="font-size-30" style="color: #fff; margin-top: 12px;">Expedido</h4> <br>
                  <div class="col-12" style="margin-top: -70px;">
                    <h4 class="color2 font-size-70" style="color: #fdbe41">128</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Painel Romaneios-->
          <div class="row btn-box animate-4" style="position: relative; left: 126ch; top: 50ch">
            <div class="title-column col-lg-6 col-md-12"
                 style="position: absolute; top: -15ch; left: -22ch">
              <div class="title-box">
                <h4 class="badge badge-soft-white font-size-42" style="margin-left: 1ch; padding: 5px 20px">Romaneios<br></h4>
                <div class="d-flex" style="margin-left: 15ch">


                  <div class="divider" style=" margin-top: -54ch; margin-bottom: 1ch; margin-left: -23.3ch; margin-right: 2ch"></div>

                  <div>
                    <h4 class="font-size-30" style="color: #fff; margin-top: 16px">Em Aberto</h4> <br>
                    <div class="col-12" style="position: absolute; margin-top: -70px; margin-left: -226px; text-align: center">
                      <h4 class="color2 font-size-70" style="color: #fdbe41">128</h4>
                    </div>
                  </div>

                  <div class="divider">
                    <h4 class="font-size-30" style="color: #fff; margin-top: 0px">Finalizado</h4> <br>
                    <div class="col-12" style="position: absolute; margin-top: -70px; margin-left: -231px; text-align: center">
                      <h4 class="color2 font-size-70" style="color: #fdbe41">46</h4>
                    </div>
                  </div>
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
                  <h4 class="badge badge-soft-white" style="color: #d39d02; font-size: 32px; position: absolute; top: -1.15ch ;left: 6ch; padding: 0.1ch 3.2ch"> Nota </h4>
                  <h4 class="badge badge-soft-white" style="color: #d39d02; font-size: 32px; position: absolute; top: -1.15ch ;left: 31ch; padding: 0.1ch 2.5ch"> Pedido </h4>
                  <div class="badge badge-soft-white" style=" width: 1340px; height: 202px; position: absolute; top: 1.55ch ;left: -16ch">
                    <div class="d-flex justify-content-center">

                      <!--Total de NF-->
                      <div class="btn-box animate-3" style="margin-right: 1.5ch">
                        <h4 class="badge badge-soft-warnig font-size-32" style="padding: 3px 100px; margin-left: -30px; margin-right: 15px"> DIA </h4> <br>
                        <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -140px">Notas Emitidas:</p>
                        <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -33ch; text-align: center">
                          <h4 class="font-size-80" style="color: #d39d02;; margin-right: -21ch; margin-top: 30px">1023</h4>
                        </div>
                        <p style="color: #d39d02; font-size: 36px; margin-left: 180px; margin-right: 2ch; margin-top: -7px">NF's</p>
                      </div>

                      <!-- Notas -->
                      <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div style="margin-top: 0ch">
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                          <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;"> 112 </h4>
                        </div>
                      </div>

                      <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div style="margin-top: 0ch">
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;"> 212 </h4>
                        </div>
                      </div>

                      <div style="margin-right: 4.5ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div style="margin-top: 0ch">
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Expedida </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;"> 312 </h4>
                        </div>
                      </div>

                      <!-- Pedidos -->
                      <div  class="separator-line-warnig"></div>

                      <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div style="margin-top: 0ch">
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;"> 412 </h4>
                        </div>
                      </div>

                      <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div style="margin-top: 0ch">
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;"> 512 </h4>
                        </div>
                      </div>

                      <div style="margin-right: 0ch; margin-top: 0.3ch">
                        <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #d39d02"></i>
                        <div style="margin-top: 0ch">
                          <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Finalizado </h4>
                          <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                          <h4 style="color: #d39d02; font-size: 75px; margin-top: -34px;"> 612 </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Painel da Semana -->
                <div style="position: relative; left: -50ch; top: -12px">
                  <h4 class="badge badge-soft-white" style="color: #0c5460; font-size: 32px; position: absolute; top: 11.05ch ;left: 6ch; padding: 0.1ch 3.2ch"> Nota </h4>
                  <h4 class="badge badge-soft-white" style="color: #0c5460; font-size: 32px; position: absolute; top: 11.05ch ;left: 31ch; padding: 0.1ch 2.5ch"> Pedido </h4>
                  <div class="badge badge-soft-white" style=" width: 1340px; height: 202px; position: absolute; top: 15.5ch ;left: -16ch">
                  <div class="d-flex justify-content-center">

                    <!--Total de NF-->
                    <div class="btn-box animate-3" style="margin-right: 1.5ch">
                      <h4 class="badge badge-soft-info font-size-32" style="padding: 3px 60px; margin-left: -30px; margin-right: 15px"> SEMANA </h4> <br>
                      <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -140px">Notas Emitidas:</p>
                      <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -33ch; text-align: center">
                        <h4 class="font-size-80" style="color: #0c5460;; margin-right: -21ch; margin-top: 30px">1023</h4>
                      </div>
                      <p style="color: #0c5460; font-size: 36px; margin-left: 180px; margin-right: 2ch; margin-top: -7px">NF's</p>
                    </div>

                    <!-- Notas -->
                    <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                        <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> 112 </h4>
                      </div>
                    </div>

                    <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> 212 </h4>
                      </div>
                    </div>

                    <div style="margin-right: 4.5ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Expedida </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> 312 </h4>
                      </div>
                    </div>

                    <!-- Pedidos -->
                    <div  class="separator-line-info"></div>

                    <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> 412 </h4>
                      </div>
                    </div>

                    <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> 512 </h4>
                      </div>
                    </div>

                    <div style="margin-right: 0ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #0c5460"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Finalizado </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #0c5460; font-size: 75px; margin-top: -34px;"> 612 </h4>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <!-- Painel da Mensal -->
                <div style="position: relative; left: -50ch">
                  <h4 class="badge badge-soft-white" style="color: #155724; font-size: 32px; position: absolute; top: 23.3ch ;left: 6ch; padding: 0.1ch 3.2ch"> Nota </h4>
                  <h4 class="badge badge-soft-white" style="color: #155724; font-size: 32px; position: absolute; top: 23.3ch ;left: 31ch; padding: 0.1ch 2.5ch"> Pedido </h4>
                  <div class="badge badge-soft-white" style=" width: 1340px; height: 202px; position: absolute; top: 29.5ch ;left: -16ch">
                  <div class="d-flex justify-content-center">

                    <!--Total de NF-->
                    <div class="btn-box animate-3" style="margin-right: 1.5ch">
                      <h4 class="badge badge-soft-success font-size-32" style="padding: 3px 95px; margin-left: -30px; margin-right: 15px"> MÊS </h4> <br>
                      <p class="font-size-20" style="color: #333; margin-top: 10px; margin-left: -140px">Notas Emitidas:</p>
                      <div class="col-12" style="position: absolute; margin-top: -75px; margin-left: -33ch; text-align: center">
                        <h4 class="font-size-80" style="color: #155724;; margin-right: -21ch; margin-top: 30px">1023</h4>
                      </div>
                      <p style="color: #155724; font-size: 36px; margin-left: 180px; margin-right: 2ch; margin-top: -7px">NF's</p>
                    </div>

                    <!-- Notas -->
                    <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Aberto </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> (Não Associadas) </p>
                        <h4 style="color: #155724; font-size: 75px; margin-top: -34px;"> 112 </h4>
                      </div>
                    </div>

                    <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Em Produção </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #155724; font-size: 75px; margin-top: -34px;"> 212 </h4>
                      </div>
                    </div>

                    <div style="margin-right: 4.5ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> NF Expedida </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #155724; font-size: 75px; margin-top: -34px;"> 312 </h4>
                      </div>
                    </div>

                    <!-- Pedidos -->
                    <div  class="separator-line-success"></div>

                    <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-courier" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> A conferir </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #155724; font-size: 75px; margin-top: -34px;"> 412 </h4>
                      </div>
                    </div>

                    <div style="margin-right: 1.8ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-box-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Conferido </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #155724; font-size: 75px; margin-top: -34px;"> 512 </h4>
                      </div>
                    </div>

                    <div style="margin-right: 0ch; margin-top: 0.3ch">
                      <i class="icon flaticon-delivery-insurance-3" style="font-size: 3ch; margin-top: 20px; color: #155724"></i>

                      <div style="margin-top: 0ch">
                        <h4 style="color: #222; font-size: 18.5px; margin-top: -6px;"> Finalizado </h4>
                        <p class="title" style="color: #111; font-size: 12px; margin-top: -22px;"> <br> </p>
                        <h4 style="color: #155724; font-size: 75px; margin-top: -34px;"> 612 </h4>
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
    },

    countDown:{
      type: Number,
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
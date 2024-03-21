<template>
	<!--Contact Details Start-->
	<section class="contact-details">
		<div class="container">
			<div class="row">

        <section class="tracking-section pull-down" style="margin-top: -45px; margin-bottom: 40px;">
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
        <!--<div class="imagem" style="display: flex; align-items: center; ">
            <img src="/images/caminhao1.png" style="max-width: 500px; position: relative; margin-left: 95ch; margin-top: -25ch;" alt="">
        </div>-->
        <div class="col-xl-7 col-lg-6" style="margin-top: 80px;">
          <div class="sec-title">
            <span class="sub-title">Informações do documento</span>
            <h2>Favor inserir </h2>
          </div>
          <!-- Contact Form -->
          <form id="contact_form" name="contact_form" class="" method="post">

            <div class="row">
              <div class="col-sm-12">
                <div class="mb-3">
                  <span style="color: black">CNPJ Destinatário <small style= "color: red">campo obrigatório*</small></span>
                  <input name="cnpj"
                         v-model="cnpj"
                         class="form-control"
                         type="text"
                         placeholder="CNPJ Destinatário" />
                </div>
              </div>
<!--              <div class="col-sm-6">-->
<!--                <div class="mb-3">-->
<!--                  <label>Email <small>*</small></label>-->
<!--                  <input name="form_email" class="form-control required email" type="email" placeholder="Enter Email" />-->
<!--                </div>-->
<!--              </div>-->
            </div>


            <!--<div class="row">
              <h4>e / ou...</h4>
            </div>-->

            <div class="row">



              <div class="col-sm-12">
                <div class="mb-3">
                  <span style="color: black">Número Nota Fiscal</span>
                  <input name="numnf"
                         v-model="numnota"
                         class="form-control required"
                         type="text"
                         placeholder="Número Nota Fiscal" />
                </div>
              </div>

            </div>
            <div class="mb-3 mt-5">
<!--              <label>Message</label>-->
<!--              <textarea name="form_message" class="form-control required" rows="5" placeholder="Enter Message"></textarea>-->
            </div>
            <div class="mb-3">
              <input name="form_botcheck" class="form-control" type="hidden" value="" />
              <button type="button" @click="pesqNota" class="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span class="btn-title">Pesquisar</span></button>
              <button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Limpar</span></button>
            </div>
          </form>
          <!-- Contact Form Validation-->
        </div>



        <div class="col-xl-5 col-lg-6" style="margin-top: 80px;">

          <div class="text-center">

            <loading v-model:active="updating"
                     :can-cancel="false"
                     :is-full-page="false"/>

          </div>

          <div class="contact-details__right">

            <div v-if="!updating">

              <ul class="list-unstyled contact-details__info">

                <li v-for="nota in dataListNotas"
                    :key="nota.id">
                    <div class="icon">
                      <NuxtLink :to="`/?idmov=${nota.id}`">
                        <span class="icon lnr-icon-file-archive theme-btn" style="background-color: rgb(240, 109, 62)"></span>
                      </NuxtLink>
                    </div>
                    <div class="text">
                      <NuxtLink :to="`/?idmov=${nota.id}`">
                        <h6 style=" color: rgb(240, 109, 62)">{{ nota.codigo }}</h6>
                        <span>{{ formatDateTime(nota.dtemissao) }}</span>
                        <span> - R$ {{ formatDecimal(nota.valorliq) }} </span>
                        <br>
                      </NuxtLink>
                    </div>
                </li>

                <li v-if="dataListNotas && dataListNotas.length === 0">
  								<div class="icon">
  									<span class="lnr-icon-search"></span>
  								</div>
  								<div class="text">
  									<h6>Nenhum documento encontrado</h6>
  									<NuxtLink to="tel:980089850"><span></span> Número {{ numnota }} | CNPJ: {{ cnpj }}</NuxtLink>
  								</div>
  							</li>


  <!--							-->
  <!--              <li>-->
  <!--								<div class="icon">-->
  <!--									<span class="lnr-icon-envelope1"></span>-->
  <!--								</div>-->
  <!--								<div class="text">-->
  <!--									<h6>Write email</h6>-->
  <!--									<NuxtLink to="mailto:needhelp@company.com">needhelp@company.com</NuxtLink>-->
  <!--								</div>-->
  <!--							</li>-->
  <!--							-->
  <!--              <li>-->
  <!--								<div class="icon">-->
  <!--									<span class="lnr-icon-location"></span>-->
  <!--								</div>-->
  <!--								<div class="text">-->
  <!--									<h6>Visit anytime</h6>-->
  <!--									<span>66 broklyn golden street. New York</span>-->
  <!--								</div>-->
  <!--							</li>-->


              </ul>



              <!--<div class="sec-title mt-5" v-if="dataListNotas">
                <span class="sub-title">Ainda precisa de ajuda?</span>
                <h2>Entre em contato</h2>
             </div>-->

            </div>

					</div>
				</div>




			</div>
		</div>
	</section>

  <!--<section class="tracking-section pull-down" style="margin-top: -40px; margin-bottom: 20px;">
    <div class="auto-container">
      <div class="outer-box">
        <div class="arrow-box wow fadeInRight">
          <img src="/images/icons/arrow-2.png" alt="" class="icon">
          <span class="title">Resultados em <br>poucos segundos</span>
        </div>
        <div class="tracking-form">
          <h4 class="title">Rastreie <br>Seu Pedido</h4>
          <-- Tracking Form ->
          <form method="post" :action="`/?ch=${chaveNota}`">
            <div class="row">
              <div class="form-group col-lg-8 col-md-12 col-sm-12">
                <span class="icon lnr-icon-file-archive"></span>
                <input v-model="chaveNota" type="text" name="field_name" placeholder="Chave Nota Fiscal">
              </div>
              <div class="form-group col-lg-4 col-md-12 col-sm-12 text-end">
                <button type="submit" class="theme-btn btn-style-one"><span class="btn-title">Rastrear
                                        Pedido</span></button>
              </div>
            </div>
          </form>
          <!- End Tracking Form ->
        </div>
      </div>
    </div>
  </section>-->
	<!--Contact Details End-->

	<!-- Divider: Google Map -->
<!--	<section>-->
<!--		<div class="container-fluid p-0">-->
<!--			<div class="row">-->
<!--				&lt;!&ndash; Google Map HTML Codes &ndash;&gt;-->
<!--				<iframe-->
<!--					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd"-->
<!--					data-tm-width="100%"-->
<!--					height="500"-->
<!--					frameborder="0"-->
<!--					allowfullscreen=""-->
<!--				></iframe>-->
<!--			</div>-->
<!--		</div>-->
<!--	</section>-->
</template>

<script>

import Loading from 'vue-loading-overlay';
import moment from 'moment'
import api from "../../../axios.js";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

export default {

  components: {
    Loading
  },
  data() {
    return {
      updating: false,
      dataListNotas: null,
      chaveNota: null,
      numnota: '',
      cnpj: ''
    }
  },

  mounted() {




    // let instance = this.$toast.open('You did it!');
    //
    // // Force dismiss specific toast
    // instance.dismiss();
    //
    // // Dismiss all opened toast immediately
    // this.$toast.clear();
  },

  methods: {

    abrirNota(){
      console.log('abrirNota')
      //router.push({ path: 'search-page', query: { search: 'number' } })
      //this.$router.push(`/movcte/editar/`)

    },

    pesqNota(){
      console.log('pesqNota')

      if (this.cnpj !== '') {

        this.updating = true
        api.get(`api/consnfsabe`, {
          params: {
            numnota: this.numnota,
            cnpj: this.cnpj
          }
        }).then((res) => {
          console.log('then axios rastreio nfsAbe')
          console.log(res.data)
          this.dataListNotas = res.data[0]
          this.updating = false
          if (this.dataListNotas.length === 0) {
            $toast.open({
              type: "info",
              message: '<span class="text-white">Desculpe, nenhum documento foi encontrado!</span>',
              duration: 3000
            })
          }
        })

      } else {
        $toast.open({
          type: "info",
          message: '<span class="text-white">Favor informar número de CNPJ para pesquisar.</span>',
          duration: 3000
        });
      }

    },

    formatDateTime(value) {
      // console.log('value formatDate')
      // console.log(value)
      // console.log(moment())
      const format = "DD/MM/YYYY HH:mm"
      var date = new Date(value);
      let dateTime = moment(date).format(format);
      // console.log(dateTime1)
      return dateTime
    },

    formatDecimal(value) {
      // console.log('format_value')
      // console.log(value)
      // console.log(typeof value)
      if(value){
        let value_n = parseFloat(value)
        return value_n.toLocaleString('pt-BR', {style: 'decimal', minimumFractionDigits: 2});
      }
      return 0.00;
    }

  }

}

</script>

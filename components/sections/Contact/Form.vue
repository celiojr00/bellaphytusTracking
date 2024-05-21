<template>
	<section class="contact-details">
		<div class="container">
			<div class="row">
        <div class="col-xl-5 col-lg-6" style="margin-top: 10px;">
          <div class="sec-title">
            <span class="sub-title">Informações do documento</span>
            <h2>Favor inserir </h2>
          </div>
          <form id="contact_form" name="contact_form" class="" method="post">

            <div class="row">
              <div class="col-sm-12">
                <div class="mb-3">
                  <span style="color: black">CNPJ/CPF Destinatário <small style= "color: red">campo obrigatório*</small></span>
                  <input name="cnpj"
                         v-model="cnpj"
                         class="form-control"
                         type="text"
                         placeholder="CNPJ/CPF Destinatário" />
                </div>
              </div>
            </div>

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
            </div>
            <div class="mb-3">
              <input name="form_botcheck" class="form-control" type="hidden" value="" />
              <button type="button" @click="pesqNota" class="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span class="btn-title">Pesquisar</span></button>
              <button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Limpar</span></button>
            </div>
          </form>
        </div>

        <div class="col-xl-7 col-lg-6" style="margin-top: 80px;">
          <div class="text-center">
            <loading v-model:active="updating"
                     :can-cancel="false"
                     :is-full-page="false"/>
          </div>

          <div class="contact-details__right">
            <div v-if="!updating">

              <ul class="list-unstyled contact-details__info">
                <li v-for="nota in dataListNotas" :key="nota.id">
                  <div class="text col-xl-9">
                    <div class="d-flex col-xl-12">
                      <div class="col-xl-4">
                        <NuxtLink :to="`/?idmov=${nota.id}`">
                          <h6 style=" color: rgb(240, 109, 62)" ><i class="lnr-icon-file-archive" style="font-size: 20px; margin-right: 10px"> </i>NF {{ nota.codigo }}</h6>
                        </NuxtLink>
                      </div>
                      <p style="margin-left: 5ch; font-size: 16px; color: rgb(240, 109, 62)" class="col-xl-7"> Valor de Nota: R$ {{ formatDecimal(nota.valorliq) }}</p><br>
                    </div>
                    <div class="d-flex">
                      <div>
                        <span style="font-size: 16px">Nome: {{nota.remet_nome}} </span>
                        <p style="font-size: 13px">Dt Emissão: {{ formatDateTime(nota.dtemissao) }}</p>
                      </div>
                      <div style=" margin-left: 3ch">
                        <span  style="font-size: 16px;">Status: {{nota.obsentr}}</span>
                        <p style="font-size: 13px">Dt Status: {{ formatDateTime(nota.dtultocor)}}</p>
                      </div>
                    </div>

                    <div class=" mb-2">
                      <NuxtLink v-if="nota.transportadora === 'JADLOG LOGISTICA S.A'"
                                :to="`https://www.jadlog.com.br/tracking?cpf=${nota.remet_cpf}`"
                                target="_blank" title="Tracking">
                        <span style="font-size: 16px; color: #0a267a">Transp.: {{nota.transportadora}}</span>
                        <button style="border: none; background: none; cursor: pointer;">
                          <i class="fas fa-external-link-alt font-size-14" style="color: #0a267a; margin-left: 15px;"></i>
                        </button>
                      </NuxtLink>
                      <NuxtLink v-else
                                :to="`/?idmov=${nota.id}`"
                                target="_blank" title="Tracking">
                        <span style="font-size: 16px; color: #0a267a">Transp.: {{nota.transportadora}}</span>
                        <button style="border: none; background: none; cursor: pointer;">
                          <i class="fas fa-external-link-alt font-size-14" style="color: #0a267a; margin-left: 15px;"></i>
                        </button>
                      </NuxtLink>
                    </div>
                    <table style="width: 100%; border: 1px solid black;">
                      <thead>
                      <tr style=" border: 1px solid black;">
                        <th class="texto_header_white_1" style="min-width: 100px; text-align: center;" colspan="2">Itens do Pedido</th>
                      </tr>
                      <tr>
                        <th class="texto_header_white_1" style="min-width: 50%; text-align: left;border: 1px solid black; padding-left: 2ch;">Produto</th>
                        <th class="texto_header_white_1" style="min-width: 50%; text-align: center;  border: 1px solid black;">Quant.</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in nota.itens" :key="item.produto">
                        <td class="texto_header_white_1" style="min-width: 50%; text-align: left;  border: 1px solid black; padding-left: 2ch;">{{ item.descprod }}</td>
                        <td class="texto_header_white_1" style="min-width: 50%; text-align: center;  border: 1px solid black;">{{ formatInteger(item.qtd) }}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
					</div>
				</div>
			</div>
		</div>
	</section>
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

          console.log('dataListNotas')
          console.log(this.dataListNotas)

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
    },

    formatInteger(value) {
      if (value) {
        let value_n = parseFloat(value)
        return value_n.toLocaleString('pt-BR', {style: 'decimal', minimumFractionDigits: 0});
      }
      return 0.00;
    },

  }

}

</script>

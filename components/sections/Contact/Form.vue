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
                         v-on:keyup.enter="pesqNota"
                         class="form-control"
                         type="text"
                         placeholder="CNPJ/CPF Destinatário (Não inserir caracteres)" />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="mb-3">
                  <span style="color: black">Número Nota Fiscal <small style= "color: red">campo obrigatório*</small></span>
                  <input name="numnf"
                         v-model="numnota"
                         v-on:keyup.enter="pesqNota"
                         class="form-control required"
                         type="text"
                         placeholder="Número Nota Fiscal" />
                </div>
              </div>
            </div>
            <div class="mb-3 mt-5">
            </div>
            <div class="mb-3">
              <vue-recaptcha2
                  ref="recaptcha"
                  :sitekey="'6LfcQbcrAAAAAIA6V6s3tECSunb6cXL3ypE7QIwa'"
                  @verify="onCaptchaVerified"
                  @expired="onCaptchaExpired"
              ></vue-recaptcha2>
              <input name="form_botcheck" class="form-control" type="hidden" value="" />
              <button type="button" class="theme-btn btn-style-one me-3 mt-5" @click="pesqNota" data-loading-text="Carregando..."><span class="btn-title">Pesquisar</span></button>
              <button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Limpar</span></button>
            </div>
          </form>
        </div>

        <div class="col-xl-7 col-lg-6" style="margin-top: 80px; ">
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
                        <NuxtLink @click="openModal(nota.id)" title="Tracking">
                          <h6 style=" color: rgb(240, 109, 62)" ><i class="lnr-icon-file-archive" style="font-size: 20px; margin-right: 10px"> </i>
                            NF {{ nota.codigo }}
                          </h6>
                        </NuxtLink>
                      </div>
                      <br>
                    </div>
                    <div>
                      <span style="font-size: 16px; color: #6a6969;"><strong style="color: #434242"> Nome: </strong>
                        {{nota.dest_nome}}
                      </span>
                    </div>
                    <div>
                      <span  style="font-size: 16px; color: #6a6969;"><strong style="color: #434242"> Cód. do Objeto: </strong>
                        {{ nota.codobj }}
                      </span>
                    </div>
                    <div>
                      <span  style="font-size: 16px; color: #6a6969;"><strong style="color: #434242"> Status: </strong>
                        {{nota.obsentr}}
                      </span>
                    </div>
                    <div class="d-flex" style=" color: #333;">
                      <div>
                        <p style="font-size: 13px; color: #6a6969;">
                          <strong style="color: #434242"> Dt. Emissão: </strong>
                          <br>
                          {{ formatDateTime(nota.dtemissao) }}
                        </p>
                      </div>
                      <div style=" margin-left: 3ch;">
                        <p style="font-size: 13px; color: #6a6969;;">
                          <strong style="color: #434242"> Dt. Ult.Status: </strong>
                          <br>
                          {{ formatDateTime(nota.dtultocor)}}
                        </p>
                      </div>
		                  <div style=" margin-left: 3ch;">
                        <p style="font-size: 13px; color: #6a6969;">
                          <strong style="color: #434242"> Dt. Prev. Entrega: </strong>
                          <br>
                          {{ nota.dtpreventr !== null ? formatDate(nota.dtpreventr) : 'Sem previsão'}}
                        </p>
                      </div>
                    </div>


                    <div class=" mb-2">
                      <NuxtLink v-if="nota.transportadora === 'JADLOG LOGISTICA S.A'"
                                :to="`https://www.jadlog.com.br/tracking?cpf=${nota.dest_cpf}`"
                                target="_blank" title="Tracking">
                        <span style="font-size: 16px; color: #0a267a">Transp.: {{nota.transportadora}}</span>
                        <button style="border: none; background: none; cursor: pointer;">
                          <i class="fas fa-external-link-alt font-size-14" style="color: #0a267a; margin-left: 15px;"></i>
                        </button>
                      </NuxtLink>
                      <NuxtLink v-else
                        @click="openModal(nota.id)" title="Tracking">
                        <span style="font-size: 16px; color: #0a267a">Transp.: {{nota.transportadora}}</span>
                        <button style="border: none; background: none; cursor: pointer;">
                          <i class="fas fa-external-link-alt font-size-14" style="color: #0a267a; margin-left: 15px;"></i>
                        </button>
                      </NuxtLink>
                    </div>

                    <table style="width: 100%; border: 1px solid black; color: #333;">
                      <thead>
                      <tr style=" border: 1px solid black;">
                        <th class="texto_header_white_1" style="min-width: 100px; text-align: center; color: white;background-color: #ec5d18; font-size: 18px" colspan="2">
                          Itens do Pedido
                        </th>
                      </tr>
                      <tr style="background-color: #dde1e5; color: #333;">
                        <th class="texto_header_white_1" style="min-width: 50%; text-align: left;border: 1px solid black; padding-left: 2ch;">Produto</th>
                        <th class="texto_header_white_1" style="min-width: 50%; text-align: center;  border: 1px solid black; padding: 0px 3px">Quant.</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in nota.itens" :key="item.produto">
                        <td style="min-width: 50%; color: #6a6969;text-align: left;  border: 1px solid black; padding-left: 2ch;">{{ item.descprod }}</td>
                        <td style="min-width: 50%; color: #6a6969;text-align: center;  border: 1px solid black;">{{ formatInteger(item.qtd) }}</td>
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
      <div class="row">
        <div class="col-xl-11 col-lg-8 col-md-10 col-sm-12 col-12" style="margin-top: 80px;">
          <div class="text-center">
            <loading v-model:active="updating"
                     :can-cancel="false"
                     :is-full-page="false"/>
          </div>

          <div v-if="trackingOn" class="modal-overlay d-flex justify-content-center align-items-center" @click="closeModal">
            <div class="modal-content" style="position: relative; max-height: 80vh; min-width: 32ch; overflow-y: auto; padding: 10px">
              <div v-if="!updating">
                  <div class="text col-xl-12">
                    <div class="d-flex justify-content-end align-items-center mb-1" >
                      <b-button type="button" class="close bg-white text-dark border-1px rounded" @click="closeModal" aria-label="Close" style="padding: 0.2ch 1ch">
                        Fechar
                      </b-button>
                    </div>

                    <table style="width: 100%; border: 1px solid black;">
                      <thead>
                      <tr style=" border: 1px solid black;">
                        <th class="texto_header_white_1" style="min-width: 100px; color: white;background-color: #ec5d18; font-size: 24px;
                          text-align: center;" colspan="4">
                          Rastreio do Pedido
                        </th>
                      </tr>

                      <tr style=" border: 1px solid black; background-color: #dde1e5; color: #333; line-height: 2.5;">
                        <th class="texto_header_white_1" style="min-width: 100px; text-align: center; padding: 0ch 1ch;">Emissão: {{ dataEmissao }}</th>
                        <th class="texto_header_white_1" style="min-width: 100px; text-align: center; border-left: 1px solid black; padding: 0ch 2ch;">Previsão: {{ dataPrev }}</th>
                        <th class="texto_header_white_1" style="min-width: 100px; text-align: center; border-left: 1px solid black; padding: 0ch 2ch;" colspan="2">
                          Status de Entrega: {{ statusEntrega }}</th>
                      </tr>

                      <tr style=" border: 1px solid black;color: #333; text-align: center;">
                        <th class="texto_header_white_1" style="min-width: 50%; border: 1px solid black; padding: 0px 1px">Seq.</th>
                        <th class="texto_header_white_1" style="min-width: 50%; border: 1px solid black; padding: 0ch 1ch;">Data</th>
                        <th class="texto_header_white_1" style="min-width: 50%; border: 1px solid black; padding: 0ch 1ch;;">Ocorrência</th>
                        <th class="texto_header_white_1" style="min-width: 50%; border: 1px solid black; padding: 0ch 4ch;">Descrição</th>

                      </tr>
                      </thead>

                      <tbody>
                      <tr v-for="notaSts in notaStatusData"
                          :key="notaSts.id">
                        <td class="texto_header_white_1" style="min-width: 50%; text-align: center; color: #333; border: 1px solid black; padding: 1ch 1ch;">
                          <i :class=" notaSts.tipo === 'Entrega' ? 'icon flaticon-checklist'
                                    : notaSts.tipo === 'Pre-Entrega' ? 'icon flaticon-checklist'
                                    : notaSts.tipo === 'Cliente' ? 'icon flaticon-logistics-delivery-6' : 'icon flaticon-shipping-2'"></i>
                          <span class="count"> {{ notaSts.seq }}</span></td>
                        <td class="texto_header_white_1" style="min-width: 50%; text-align: center; color: #333; border: 1px solid black; padding: 0ch 1ch;">{{ formatDateTime(notaSts.data) }}</td>
                        <td class="texto_header_white_1" style="min-width: 50%; text-align: center; color: #333; border: 1px solid black; padding: 0ch 1ch;">{{ notaSts.ocorrencia }}</td>
                        <td class="texto_header_white_1" style="min-width: 50%; text-align: center; color: #333; border: 1px solid black; padding: 0ch 1ch;">{{ notaSts.descricao }}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
              <div v-else> Carregando ...</div>
              
              <br>
              
            </div>
              
          </div>


        </div>
      </div>
		</div>
	</section>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 40px;
  margin-left: 20ch;
  margin-right: 20ch;
  border-radius: 5px;
}
</style>

<script>

import Loading from 'vue-loading-overlay';
import moment from 'moment'
import api from "../../../axios.js";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import {defineNuxtPlugin} from "#app";

const $toast = useToast();

export default {

  components: {
    Loading
  },
  data() {
    return {
      trackingOn: false,
      updating: false,
      statusEntrega: '',
      notaData: null,
      notaStatusData: null,
      dataEmissao:'',
      dataPrev:'',
      dataListNotas: null,
      chaveNota: null,
      numnota: '',
      cnpj: '',
      tokenRecaptcha: null
    }
  },

  mounted() {
    const {cnpj, numnota} = this.$route.query;

    this.cnpj = cnpj;
    this.numnota = numnota;
  },

  watch: {
    cnpj(newCnpj) {
      this.updateURL();
    },
    numnota(newNumNota) {
      this.updateURL();
    }
  },

  methods: {

    async  openModal(id){
      this.trackingOn = true;
      this.updating = true;

      try{
        api.get(`api/consnfabe`,{
          params: {
          idmov: id,
          }
        }).then((res) => {
          console.log('then axios rastreio nfAbe')
          console.log(res.data)

          if(res.data.length > 0){
            console.log('tratando dados da nota...')

            this.notaData = res.data[0]
            this.notaStatusData = res.data[1]

            if (this.notaData && this.notaData.obsentr && this.notaData.obsentr !== '') {
              this.statusEntrega = this.notaData.obsentr.substring(0, 40) + '...';


              const item = this.notaData;

              this.dataEmissao = moment(item.dtemissao).format('DD/MM/YYYY');
              if(item.dtpreventr === 'SEM PREVISAO'){
                this.dataPrev = item.dtpreventr;
              }else{
                this.dataPrev = moment(item.dtpreventr).format('DD/MM/YYYY');
              }

            } else if (this.notaData && this.notaData.codigo && this.notaData.codigo !== '') {
              this.statusEntrega = 'Documento encontrado, nota fiscal emitida.'


            } else {
              this.statusEntrega = 'Documento não encontrado'
            }

            let contSeq = 0
            this.notaStatusData.forEach((value) => {
              value['seq'] = this.notaStatusData.length - contSeq
              contSeq++
            })
          } else {
            console.log('return null')
          }
        });
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
        $toast.error("Erro ao buscar dados da API");
      } finally {
        this.updating = false;
      }
    },

    closeModal() {
      this.trackingOn = false;
    },

    updateURL() {
      this.$router.push({
        query: {
          ...this.$route.query,
          cnpj: this.cnpj,
          numnota: this.numnota
        }
      });
    },

    onCaptchaVerified(response) {
      // console.log('reCAPTCHA verificado, token:', response);
      console.log("onCaptchaVerified")
      this.tokenRecaptcha = response
    },

    onCaptchaExpired() {
      console.log('reCAPTCHA expirou, por favor, tente novamente.');
      this.$refs.recaptcha.reset();
      this.$toast.open({
        type: "error",
        message: '<span class="text-white">reCAPTCHA expirou. Por favor, tente novamente.</span>',
        duration: 3000
      });
    },

    pesqNota(){
      this.updating = true;
      console.log('pesqNota')

      console.log('testando conexão api...')
      api.get(`api/testarapi`).then((res) => console.log(res))

      if ((this.cnpj.trim() !== '' || this.cnpj) && (this.numnota.trim() !== '' || this.numnota)) {
        this.updating = true
        console.log('get consnfsabe...')
        api.get(`api/consnfsabe`, {
          params: {
            numnota: this.numnota,
            cnpj: this.cnpj,
            tokenRecaptcha: this.tokenRecaptcha
          }
        }).then((res) => {
          console.log('then axios rastreio nfsAbe')
          console.log(res.data)

          this.$refs.recaptcha.reset();

          if(res.data.length > 0) {
            this.dataListNotas = res.data[0]
            this.notaData = res.data[1]
            this.notaStatusData = res.data[2]

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

            if (this.notaData && this.notaData.obsentr && this.notaData.obsentr !== '') {
              this.statusEntrega = this.notaData.obsentr.substring(0, 40) + '...';

              const item = this.notaData;
              this.dataEmissao = moment(item.dtemissao).format('DD/MM/YYYY');
              this.dataPrev = moment(item.dtpreventr).format('DD/MM/YYYY');

            } else if (this.notaData && this.notaData.codigo && this.notaData.codigo !== '') {
              this.statusEntrega = 'Documento encontrado, nota fiscal emitida.'

            } else {
              this.statusEntrega = 'Documento não encontrado'
            }

            if(this.notaStatusData){
              let contSeq = 0
              this.notaStatusData.forEach((value) => {
                value['seq'] = this.notaStatusData.length - contSeq
                contSeq++
              })
            }
          } else{
            console.log('sem dados para processar...')
          }

        })
        .catch(error => {
          console.error('Erro na requisição da API:', error);
          this.updating = false;
          this.$toast.open({
            type: "error",
            message: '<span class="text-white">Falha na validação do reCAPTCHA ou erro na pesquisa. Por favor, tente novamente.</span>',
            duration: 5000
          });
        });
      }
    },

    formatDateTime(value) {
      const format = "DD/MM/YYYY HH:mm"
      var date = new Date(value);
      let dateTime = moment(date).format(format);
      return dateTime
    },

    formatDate(value) {
      const format = "DD/MM/YYYY"
      var date = new Date(value);
      let dateTime = moment(date).format(format);
      return dateTime
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

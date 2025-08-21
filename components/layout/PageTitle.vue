<template>

  <section class="page-title" style="background-image: url(/images/background/tracking.jpg); margin-top: -30ch;">
    <div style="margin-bottom: -7ch">
      <div class="logo" style="display: flex; align-items: center; ">
        <NuxtLink @click="$router.push('/track-nota')">
          <img :src="blobUrlWhite" alt height="60" style="max-width: 250px; position: relative; left: 3ch; margin-top: 21ch;" v-if="blobUrlWhite"/>
          <img src="/images/logo_econoPro.png" alt height="60" style="max-width: 250px; position: relative; left: 3ch; margin-top: 21ch;" v-else-if="!loadingData"/>
<!--          <img :src="logoSrc" style="max-width: 250px; position: relative; left: 3ch; margin-top: 21ch;" alt="">-->

        </NuxtLink>
      </div>
      <div class="auto-container">
          <div class="title-outer">
              <h1 class="title" style="font-size: 44px">{{ title }}</h1>
              <ul class="page-breadcrumb">
                  <!--<li><NuxtLink to="/track-nota">Home</NuxtLink></li>-->
                  <li><NuxtLink to="/track-nota">Tracking</NuxtLink></li>
                  <li>{{ title }}</li>
              </ul>
          </div>
      </div>
    </div>

</section>

</template>

<script>
import api from "../../axios.js";

  export default {
    data() {
      return {
        logoSrc: null,
        empreConf: null,
        loadingData: true,
        blobUrlWhite: null,
      };
    },

    name: "PageTitle",
    props: {
      title: {
        type: String
      }
    },

    mounted() {
      // Verifica se a logo alternativa existe
      /*const img = new Image();
      img.src = '/images/logo_prd.png';
      img.onload = () => {
        this.logoSrc = '/images/logo_prd.png'; // Atualiza para a logo alternativa local se existir
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
    }
  }
</script>
<style scoped>

</style>

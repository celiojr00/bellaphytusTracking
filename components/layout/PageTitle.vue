<template>

  <section class="page-title" style="background-image: url(/images/background/tracking.jpg); margin-top: -30ch;">
    <div style="margin-bottom: -7ch">
      <div class="logo" style="display: flex; align-items: center; ">
        <NuxtLink @click="$router.push('/track-nota')">
          <img :src="logoSrc" style="max-width: 250px; position: relative; left: 3ch; margin-top: 21ch;" alt="">
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
  export default {
    data() {
      return {
        logoSrc: null,
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
      const img = new Image();
      img.src = '/images/logo_prd.png';
      img.onload = () => {
        this.logoSrc = '/images/logo_prd.png'; // Atualiza para a logo alternativa se existir
      };
      img.onerror = () => {
        this.logoSrc = '/images/logo_econoPro.png';
      };
    }
  }
</script>
<style scoped>

</style>

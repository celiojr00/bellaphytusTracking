<template>
  <SectionsHome1Section1 :nota-data="notaData" :status-entrega="statusEntrega" :descricao-Max-Seq="descricaoMaxSeq" :data-Emissao="dataEmissao" :data-Prev="dataPrev"/>
  <SectionsHome1Section2 :nota-status-data="notaStatusData"/>
  <SectionsHome1Section3/>
  <SectionsHome1Section4/>
  <SectionsHome1Section5 :chave-nota="chaveNota"/>
  <SectionsHome1Section6/>
  <SectionsHome1Section7/>
  <SectionsHome1Section8/>
  <!--    <SectionsHome1Section9/>-->
  <!--    <SectionsHome1Section10/>-->
  <!--    <SectionsHome1Section11/>-->
  <!--    <SectionsHome1Section12/>-->
  <!--    <SectionsHome1Section13/>-->
  <!--    <SectionsHome1Section14/>-->
  <!--    <SectionsHome1Section15/>-->
  <SectionsContactForm :nota-status-data="notaStatusData" :status-entrega="statusEntrega" :data-Emissao="dataEmissao"/>
  <SectionsHome1Section16/>
</template>
<script setup lang="ts">
</script>



<script>
import api from "../axios.js";
import moment from 'moment';

export default {
  data() {
    return {
      statusEntrega: '',
      notaData: null,
      notaStatusData: null,
      chaveNota: '',
      descEntrega: '',
      dataEmissao:'',
      dataPrev:'',
    }
  },
  mounted() {
    //this.fetchPosts()

    let urlParams = new URLSearchParams(window.location.search)

    if (urlParams.has('ch')) {
      console.log('possui_chave')
      this.chaveNota = urlParams.get('ch')
    } else {
      console.log('nao_possui_chave')
    }

    let idmov = ''
    if (urlParams.has('idmov')) {
      console.log('possui_idmov')
      idmov = urlParams.get('idmov')
    } else {
      console.log('nao_possui_idmov')
    }


    //console.log(urlParams.has('yourParam')); // true
    //console.log(urlParams.get('yourParam')); // "MyParam"


    api.get(`api/consnfabe`, {
      params: {
        chave: this.chaveNota,
        idmov: idmov,
      }
    }).then((res) => {
      console.log('then axios rastreio nfAbe')
      console.log(res.data)

      this.notaData = res.data[0]
      this.notaStatusData = res.data[1]

      if (this.notaData && this.notaData.obsentr && this.notaData.obsentr !== '') {
        this.statusEntrega = this.notaData.obsentr.substring(0, 40) + '...';

        if (this.notaStatusData.length > 0) {
          const maxSeqItem = this.notaStatusData[0];

          let ultdescricao = maxSeqItem.descricao;
          let lineBreakPosition = ultdescricao.indexOf('\n');

          if (lineBreakPosition !== -1) {
            this.descricaoMaxSeq = ultdescricao.substring(0, lineBreakPosition) +
                '\n' + moment(maxSeqItem.data).format('DD/MM/YYYY', 'HH:mm:ss');
          } else {
            this.descricaoMaxSeq = ultdescricao +
                '\n' + moment(maxSeqItem.data).format('DD/MM/YYYY', 'HH:mm:ss');
          }

          //  this.descricaoMaxSeq = maxSeqItem.descricao;

        } else {
          this.descricaoMaxSeq = "Não encontrado.";
        }

        const item = this.notaData;
        const maxSeqItem = this.notaStatusData[0];
        this.dataEmissao = moment(item.dtemissao).format('DD/MM/YYYY');
        //this.dataPrev = moment(item.dtpreventr).format('DD/MM/YYYY');

        if( maxSeqItem.tipo === "Entrega"){
          this.dataPrev = moment(maxSeqItem.data).format('DD/MM/YYYY') ;
        } else {
          this.dataPrev = moment(item.dtpreventr).format('DD/MM/YYYY') ;
        }

        console.log('maxSeqItem.tipo')
        console.log(maxSeqItem.tipo)

      } else if (this.notaData && this.notaData.codigo && this.notaData.codigo !== '') {
        this.statusEntrega = 'Documento encontrado, nota fiscal emitida.'

        const item = this.notaData;
        // const itemStt = this.notaStatusData;
        this.dataEmissao = moment(item.dtemissao).format('DD/MM/YYYY');

        if( maxSeqItem.tipo === "Entrega"){
          this.dataPrev = moment(maxSeqItem.data).format('DD/MM/YYYY') ;
        } else {
          this.dataPrev = moment(item.dtpreventr).format('DD/MM/YYYY') ;
        }

      } else {
        this.statusEntrega = 'Documento não encontrado'
      }

      let contSeq = 0
      this.notaStatusData.forEach((value) => {
        value['seq'] = this.notaStatusData.length - contSeq
        contSeq++
      })

    })

  },

}

</script>

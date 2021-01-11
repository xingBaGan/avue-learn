<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
<!-- <word-cloud/> -->
    <!-- <print text="pass values  by props"/> -->
    <!-- <expor-excel/> -->
    <curd/>
  </div>
</template>

<script>
import Curd from './components/Curd.vue';

// import Print from '@/components/Print.vue'
// import ExporExcel from './components/ExporExcel.vue';
// import WordCloud from './components/WordCloud.vue';
export default {
  name: "app",
  components: {
    Curd
    // Print,
    // ExporExcel,
    // WordCloud
  },
  data(){
      return {
        type:'',
        box:false
      }
  },
  methods:{
    openBox(type){
        this.type=type;
        this.box=true;
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

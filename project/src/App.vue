<template >
  <div class="container_app">
<button @click="clickChangeLanguage" class="changeLanguage_title">change language:</button>
<div v-show="showLanguages" class="languages"> 
<div  @click="changeLanguage('ger')" class="ger">german</div>
<div @click="changeLanguage('en')" class="eng">english</div>
{{ $t('welcome') }}

</div>


  </div>
  <nav>
    <router-link to="/">main</router-link>
    <router-link to="/Episodes"> Episodes </router-link>
    <router-link to="/locations"> Locations</router-link>
    
  </nav>
  <router-view/>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.changeLanguage_title{
  font-size: 18px;
  font-weight: 400;
  background-color: #f9f9f9;
}
.languages{
  font-size: 18px;
  font-weight: 400;
  background-color: #f9f9f9;
}
.container_app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>


<script>
import { useI18n } from 'vue-i18n';
import i18n from './i18n';
import { ref } from 'vue';
export default{

  setup(){
    const showLanguages = ref(false);
    const {locale} = useI18n
    function clickChangeLanguage(){
      showLanguages.value = !showLanguages.value;     }
    function  changeLanguage(lang) {
     i18n.global.locale = lang
    
    }
  return {
    changeLanguage, 
    showLanguages,
    clickChangeLanguage
  }
  }
 
}

</script>

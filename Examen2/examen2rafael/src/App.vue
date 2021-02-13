<template>
  <div id="app">
    <Header/>    
    <Accueil msg="Bienvenue au Examen 2 - Rafael De Mendonça -"/>
    <Footer/>
  </div>
</template>

<script>
import Accueil from './components/Accueil.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Accueil,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

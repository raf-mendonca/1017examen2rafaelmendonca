<template>
  <div id="app"> 
    <Header/>   
    <router-view />
    <Footer/> 
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { mixinTraducteur } from "./mixins/mixinTraducteur.js";

export default {
  mixins: [mixinTraducteur],
  name: 'App',
  components: { Header , Footer},
  data(){
    return {
    }
  }

}
</script>

<style>
body, html {
  margin: 0;
  background-color: #C6DFDA;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  width: 100%; /* Full-width */
        position: fixed;
        top: 0;
        margin: 0;
        background-color: #555; /* Dark-grey background */
        overflow: auto; /* Overflow due to float */
}

nav a {
  float: left; /* Float links side by side */
        text-align: center; /* Center-align text */
        width: 10%;
        padding: 12px 0; /* Some top and bottom padding */
        transition: all 0.3s ease; /* Add transition for hover effects */
        color: white; /* White text color */
        font-size: 36px; /* Increased font size */
        text-decoration: none; 
}

nav a:hover {
  background-color: #000; /* Add a hover color */
  color: white;
  text-decoration: none; 
}

nav a.router-link-exact-active {
  background-color: #C6DFDA; /* Add an active/current color */
  color: black;
}

</style>

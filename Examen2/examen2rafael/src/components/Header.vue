<template>
  <div id="header">  
    <nav>
        <router-link to="/" >Accueil</router-link> 
        <router-link to="/login">Connecter</router-link>
        <router-link to="/Projet" >Projets</router-link> 
        <router-link to="/Contact" >Contact</router-link>  
    </nav>   
  </div>
</template>

<script>
import { mixinTraducteur } from "../mixins/mixinTraducteur.js";
export default {
    mixins: [mixinTraducteur],
        name:'Header',
        data(){
            return {
                menuItems: [
                    {
                    name: "Accueil",
                    path: "/",
                    component: 'Accueil'
                    },
                    {
                    name: "Project",
                    path: "/projet",
                    component: 'Projet'
                    },
                    {
                    name: "Contact",
                    path: "/contact",
                    component: 'Contact'
                    },
                ]
            }
        }
}

</script>

<style>

</style>
<template>
    <div class="container-fluid">
        <div class="">
            <h2>{{'Réalisations'| traduction }}</h2>
            <ul>
                <li v-for="(projet, i) in projets" :key="i">{{ projet.name | traduction }} 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mixinTraducteur } from "../mixins/mixinTraducteur.js"
export default {
  mixins: [mixinTraducteur],
  name: 'Projet',
  data() {
      return {
          projets: [
              {name:"Portfolio", traductionProjet:"projetPort"},
              {name:"MégaDystopiques", traductionProjet:"projetMega"},
              {name:"SpotBec", traductionProjet:"projetSpot"},
              {name:"Paypall", traductionProjet:"projetPaypall"},
          ]
      }
  }
}
</script>

<style scoled>
.container-fluid {
    background-color: #C6DFDA;
    padding: 20px;
  
}

li {
    list-style-type: none;
}

</style>

<template>
  <div id="about">
    <h1>
        {{ 'Salutations' | traduction }}
        <span v-if="utilisateur">Rafael</span>
        !
    </h1>
    <div class="content img">
      <img
        class="resize"
        src="https://images.freeimages.com/images/large-previews/b77/down-home-1228563.jpg"
      />
    </div>
    <div class="normalize content">
    <p v-if="!utilisateur">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at elementum turpis, id pharetra arcu. Aenean egestas faucibus felis, suscipit tempus felis condimentum consequat. Sed vel dui turpis. Nam vitae dui vitae mi lacinia congue. Donec et magna nec odio iaculis euismod. Sed sit amet pharetra ante. Suspendisse tincidunt pulvinar ligula, pellentesque porta odio sodales sed. Donec iaculis nibh nec lectus pellentesque, vel euismod metus lobortis. Sed tincidunt tortor eget turpis cursus luctus. Mauris vestibulum rhoncus risus, id vulputate orci rutrum nec. Sed eleifend mi sed felis congue pharetra. Integer volutpat dapibus elit, vel feugiat mauris euismod a. Duis eget arcu sed ligula aliquam vestibulum.</p>
    </div>
    <div v-if="utilisateur">
      <ul>
        <li>{{ 'nom' | traduction}}: Rafael</li>
        <li>{{ 'prenom' | traduction}}: De Mendonça</li>
        <li>{{ 'courriel' | traduction}}: rapedrao@hotmail.com</li>
        <li>{{ 'profession' | traduction}}: Dévellopeur web front-end</li>
        <li>{{ 'competences' | traduction}}: HTML, CSS, JavaScript, Bootstrap, React, Angular et Vue</li>
      </ul>
    </div>
  </div>
</template>


<script>
import { mixinTraducteur } from "../mixins/mixinTraducteur.js";
export default {
    mixins: [mixinTraducteur],
    name: 'Accueil',
    data() {
        return {
            utilisateur: true,
        }
    },
    created() {
        let loggedIn = false;
    
        if (loggedIn) {
            this.utilisateur = true;
            console.log(this.utilisateur);
        }
    }
}
</script>

<!-- Ajoutez l'attribut "scoped" pour limiter le CSS à ce composant uniquement -->
<style>
  #about {
    padding: 20px;
    margin: 20px auto auto auto;
    background-color: #C6DFDA;
  }

.h1,
.normalize .h1,
.normalize h1 {
  color: #241c15;
  font-family: Means Web, Georgia, Times, Times New Roman, serif;
  font-weight: 300;
  line-height: 1;
}

  .content {
  color: #403b3b;
  font-family: Means Web, Georgia, Times, Times New Roman, serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.img,
.title {
  text-align: center;
}
img.resize {
  max-width: 50%;
  max-height: 50%;
}
</style>
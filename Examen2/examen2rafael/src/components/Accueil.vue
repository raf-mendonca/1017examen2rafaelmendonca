<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <div>
        <p>Examen Vue 2 professeur Vincent Baylly</p>
    </div>
  </div>
</template>


<script>
export default {
    name: 'Accueil Examen 2',
    props: {
        msg: String
    }
}
</script>

<!-- Ajoutez l'attribut "scoped" pour limiter le CSS à ce composant uniquement -->
<style scoped>
    h3 {
  margin: 40px 0 0;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    display: inline-block;
    margin: 0 10px;
    }
    a {
    color: #42b983;
    }
</style>
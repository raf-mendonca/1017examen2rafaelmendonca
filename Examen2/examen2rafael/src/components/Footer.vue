<template>
    <footer v-copyright></footer>
</template>

<script>
export default {
    name: 'Footer',
    directives: {
    copyright: {
      bind: function (el) {
        var date = new Date();
        var annee = date.getFullYear();
        let copyright = "<p>Copyright &copy;" + annee + " - Rafael Izaias De Mendonça</p>";
        el.insertAdjacentHTML( 'beforeend', copyright );
      }
    }
  }

}
</script>

<!-- Ajoutez l'attribut "scoped" pour limiter le CSS à ce composant uniquement -->
<style> 
    footer {
        width: 100%;
        background-color: #555;
        color: #f2f2f2;
        position: fixed;
        bottom: 0;
    }
   
</style>
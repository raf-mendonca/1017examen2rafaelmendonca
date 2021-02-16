<template>
    <div>
        <form id="contact">
            <h2>{{ 'Rendez-vous' | traduction }}</h2>
            <input type="text" name="prenom" :placeholder="'Prénom' | traduction" />
            <input type="text" name="nom" :placeholder="'Nom' | traduction" />
            <input type="e-mail" name="courriel" :placeholder="'courriel' | traduction" />
            <label><h3>Raison du contact</h3></label>
            <select name="selectDrop">
                <option v-for="(item, i) in dropdown" :key="i"> {{ item | traduction }}</option>
            </select>
        </form>
    </div>
</template>

<script>
import { mixinTraducteur } from "../mixins/mixinTraducteur.js";

export default {
    name: 'Contact',
    mixins: [mixinTraducteur],
    data() {
        return {
            dropdown: [
                        "Informations",
                        "Compétences",
                        "Profession",
                        "Portfolio professionnel",
                        "Projet villes fictives",
                        "Projet SpotBéc",
                        "Projet paypall",
                    ]
        }
    }
}
</script>

<style>
#contact {
    padding: 20px;
    margin: 20px auto auto auto;
    background-color: #C6DFDA;
}

input,
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
</style>
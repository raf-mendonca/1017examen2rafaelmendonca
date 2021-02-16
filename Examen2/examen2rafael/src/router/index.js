import Vue from "vue";
import VueRouter from "vue-router";

import Accueil from "../Views/Accueil.vue";
import Contact from "../Views/Contact.vue";
import Projet from "../Views/Projet.vue";
import Login from "../Views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/Accueil",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/Projet",
    name: "Projet",
    component: Projet,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

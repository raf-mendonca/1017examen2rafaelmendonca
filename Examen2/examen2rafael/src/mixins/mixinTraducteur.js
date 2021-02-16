export const Traductions = {
  fr: {
    accueil: "Accueil",
    Salutations: "Bonjour!",
    Realisations: "Réalisations",
    nom: "Nom",
    prenom: "Prénom",
    courriel: "Courriel",
    age: "Âge",
    rendezvous: "Rendez-vous",
    informations: "Informations",
    competences: "Compétences",
    profession: "Profession",
    projetPort:
      "Portfolio professionnel des projets réalisées pendent le cours.",
    projetMega:
      "Projet sur les villes fictives, créé par plusieurs auteurs au XXe siècle",
    projetSpot: "Projet le spotfy québécois",
    projetPaypall: "Site web de paiment paypall",
  },
  en: {
    accueil: "Home",
    Salutations: "Hi!",
    Realisations: "Achievements",
    nom: "Lastname",
    prenom: "Firstname",
    courriel: "E-mail",
    age: "Age",
    rendezvous: "Appointment",
    informations: "Information",
    competences: "Skils",
    profession: "Profession",
    projetPort:
      "Professional portfolio of projects carried out during the course.",
    projetMega:
      "Project about fictional cities, created by several authors during the twentieth century",
    projetSpot: "The spotfy quebecois",
    projetPaypall: "Paypall payments site",
  },
};

export const mixinTraducteur = {
  filters: {
    traduction: function(value) {
      if (!value) return "";
      let data = Traductions;
      let langue = "fr";
      value = value.toString();

      if (data[langue][value]) {
        return data[langue][value];
      } else {
        return value;
      }
    },
  },
};

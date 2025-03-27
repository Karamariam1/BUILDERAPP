//Store Pinia (useBuilderStore.js)
//Créons un store Pinia pour gérer les composants dynamiques de la page.

//📌 Ce que fait ce store :
//✅ Garde une liste des composants ajoutés
//✅ Ajoute et supprime des composants

import { defineStore } from "pinia";
import { ref } from "vue";

export const useBuilderStore = defineStore("builder", () => {
  const components = ref([]);

  const addComponent = (type) => {
    components.value.push({
      id: Date.now(),
      type,
      content: type === "text" ? "Texte par défaut" : "",
      style: {},
    });
  };

  const removeComponent = (id) => {
    components.value = components.value.filter((c) => c.id !== id);
  };

  return { components, addComponent, removeComponent };
});

<!-- Affichage des composants (ComponentRenderer.vue)
Ce composant permet d'afficher dynamiquement chaque élément ajouté.

📌 Ce que fait ce composant :
✅ Gère l’affichage selon le type de composant
✅ Permet d’éditer du texte directement -->

<!-- src/components/ComponentRenderer.vue -->
<template>
    <div class="p-4 border rounded bg-white shadow my-2 relative">
      <button class="absolute top-0 right-0 text-red-500 p-1" @click="$emit('remove')">❌</button>
  
      <!-- Texte -->
      <input
        v-if="component.type === 'text'"
        v-model="component.content"
        class="w-full border-none outline-none text-lg"
      />
  
      <!-- Image -->
      <img v-if="component.type === 'image'" src="/image.png" class="w-full" />
  
      <!-- Bouton -->
      <button v-if="component.type === 'button'" class="px-4 py-2 bg-blue-500 text-white rounded">
        {{ component.content || "Bouton" }}
      </button>

    </div>
  </template>
  
  <script setup>
  defineProps(["component"]);
  </script>
  
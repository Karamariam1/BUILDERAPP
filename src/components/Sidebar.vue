<!-- Barre latérale (Sidebar.vue)
Cette barre contient les éléments à glisser-déposer.
📌 Ce que fait ce composant :
✅ Affiche une liste de composants disponibles
✅ Permet d’ajouter un composant en cliquant -->


<template>
    <div class="sidebar">
        <button @click="addComponent('text')">📝 Ajouter un Texte</button>
        <button @click="addComponent('image')">🖼️ Ajouter une Image</button>
        <button @click="addComponent('button')">🔘 Ajouter un Bouton</button>
        <button @click="$emit('export-code')">📥 Exporter le Code</button>
   </div>
</template>

<script>
export default {
    methods: {
        addComponent(type) {
            this.$emit('add-component', type); // Émettre un événement pour ajouter un composant
        }
    }
};
</script>

<style scoped>
.sidebar {
    width: 210px;
    padding: 10px;
    background-color: #15161659;
}

button {
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    background-color: #1a1a186d;
    color: white;
    border-radius: 20px;
    border-color: rgba(0, 0, 0, 0.422);
    cursor: pointer;
}

button:hover {
    background-color: #0cb300bc;
}
</style>
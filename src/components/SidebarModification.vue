<template>
    <div class="sidebar-modification">
      <h3>Modifier le composant</h3>
  
      <div v-if="component">
        <div v-if="component.type === 'text'">
          <label>Texte :</label>
          <input v-model="localComponent.content" />
  
          <label>Couleur :</label>
          <input type="color" v-model="localComponent.textColor" />
        </div>
  
        <div v-if="component.type === 'image'">
  <label>URL :</label>
  <input v-model="localComponent.src" />

  <label>Largeur :</label>
  <input type="number" v-model="localComponent.width" min="10" />

  <label>Hauteur :</label>
  <input type="number" v-model="localComponent.height" min="10" />
</div>

  
        <div v-if="component.type === 'button'">
          <label>Texte :</label>
          <input v-model="localComponent.content" />
          <label>Couleur :</label>
          <input type="color" v-model="localComponent.btnColor" />
        </div>
  
        <button @click="saveChanges">Sauvegarder</button>
        <button @click="$emit('delete')">Supprimer</button>
      </div>
  
      <div v-else>
        <p>Aucun composant sélectionné</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      component: Object
    },
    data() {
      return {
        localComponent: { 
      ...this.component, 
      width: this.component?.width || 100,  
      height: this.component?.height || 100 
    }
      };
    },
    watch: {
      component: {
        immediate: true,
        handler(newValue) {
          if (newValue) {
            this.localComponent = { ...newValue };
          } else {
            this.localComponent = null;
          }
        }
      }
    },
    methods: {
      saveChanges() {
        this.$emit("update", this.localComponent);
      }
    }
  };
  </script>
  
  <style>
  /* Sidebar fixée à droite */
  .sidebar-modification {
    width: 210px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #15161659; 
    color: white;
    padding: 10px;
    overflow-y: auto;
    border-left: 1px solid #ddd;
  }
  
  /* Style des boutons */
  button {
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    background-color: #1a1a186d;
    color: white;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.422);
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }
  
  button:hover {
    background-color: #0cb300bc;
  }
  </style>
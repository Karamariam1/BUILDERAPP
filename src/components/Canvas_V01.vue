<!-- Zone de travail (Canvas.vue)
Cette zone affiche les composants ajoutés avec un système de Drag & Drop.

📌 Ce que fait ce composant :
✅ Affiche la liste des composants sur la page
✅ Permet de supprimer un composant -->
<!----
<template>
    <div class="container">
      <!-- Zone de travail --
      <div class="canvas">
        <div 
          v-for="(component, index) in components" 
          :key="index" 
          class="component"
          :style="getComponentStyle(component)"
          @click="selectComponent(index)"
        >
          <!-- Zone de texte --
          <div v-if="component.type === 'text'" class="text-component">
            <p>{{ component.content }}</p>
          </div>
  
          <!-- Zone d'image --
          <div v-if="component.type === 'image'" class="image-component">
            <img :src="component.src" alt="Image" />
          </div>
  
          <!-- Zone de bouton --
          <div v-if="component.type === 'button'" class="button-component">
            <button :style="{ backgroundColor: component.btnColor }">
              {{ component.content }}
            </button>
          </div>
        </div>
      </div>
  
      <!-- Sidebar pour modifier les composants --
      <div class="sidebar" v-if="selectedComponent !== null">
        <h3>Modifier le composant</h3>
  
        <div v-if="currentComponent">
          <div v-if="currentComponent.type === 'text'">
            <label>Texte :</label>
            <input v-model="currentComponent.content" />
  
            <label>Couleur :</label>
            <input type="color" v-model="currentComponent.textColor" />
  
            <label>Taille du texte :</label>
            <input type="number" v-model="currentComponent.fontSize" />
          </div>
  
          <div v-if="currentComponent.type === 'image'">
            <label>URL :</label>
            <input v-model="currentComponent.src" />
  
            <label>Largeur :</label>
            <input type="number" v-model="currentComponent.width" />
  
            <label>Hauteur :</label>
            <input type="number" v-model="currentComponent.height" />
          </div>
  
          <div v-if="currentComponent.type === 'button'">
            <label>Texte du bouton :</label>
            <input v-model="currentComponent.content" />
  
            <label>Couleur :</label>
            <input type="color" v-model="currentComponent.btnColor" />
  
            <label>Taille du texte :</label>
            <input type="number" v-model="currentComponent.fontSize" />
          </div>
        </div>
  
        <button @click="deleteComponent">Supprimer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        components: [], // Liste des composants ajoutés
        selectedComponent: null // Index du composant sélectionné
      };
    },
    computed: {
      currentComponent() {
        return this.selectedComponent !== null ? this.components[this.selectedComponent] : null;
      }
    },
    methods: {
      // Ajouter un composant
      addComponent(type) {
        const newComponent = {
          type,
          content: type === 'button' ? 'Cliquer ici' : 'Texte par défaut',
          textColor: '#000000',
          fontSize: 18,
          src: type === 'image' ? '/image.png' : '',
          width: 150,
          height: 150,
          btnColor: type === 'button' ? '#007bff' : ''
        };
        this.components.push(newComponent);
      },
  
      // Appliquer les styles dynamiques
      getComponentStyle(component) {
        if (component.type === 'text') {
          return { color: component.textColor, fontSize: `${component.fontSize}px` };
        } else if (component.type === 'image') {
          return { width: `${component.width}px`, height: `${component.height}px` };
        } else if (component.type === 'button') {
          return { backgroundColor: component.btnColor, fontSize: `${component.fontSize}px` };
        }
        return {};
      },
  
      // Sélectionner un composant
      selectComponent(index) {
        this.selectedComponent = index;
      },
  
      // Supprimer un composant
      deleteComponent() {
        if (this.selectedComponent !== null) {
          this.components.splice(this.selectedComponent, 1);
          this.selectedComponent = null;
        }
      }
    }
  };
  </script>
  
  <style>
  .container {
    display: flex;
  }
  
  .canvas {
    flex: 3;
    min-height: 500px;
    border: 1px solid #ccc;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .component {
    padding: 10px;
    border: 1px solid #aaa;
    cursor: pointer;
  }
  
  .sidebar {
    flex: 1;
    padding: 20px;
    background: #f4f4f4;
    border-left: 1px solid #ddd;
  }
  </style>
-->
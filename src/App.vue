<template>
  <div id="app">
    <!-- Sidebar gauche pour ajouter des composants -->
    <Sidebar class="sidebar-left" @add-component="addComponentToCanvas" @export-code="exportCode" />
    
    <!-- Canvas fixe au centre -->
    <div class="canvas-container">
      <Canvas ref="canvas" class="canvas" @select-component="setSelectedComponent" />
    </div>

    <!-- Sidebar droite pour modifier un composant sélectionné -->
    <SidebarModification
      class="sidebar-right"
      :component="selectedComponent"
      @update="updateComponent"
      @delete="deleteComponent"
    />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Canvas from './components/Canvas.vue';
import SidebarModification from './components/SidebarModification.vue';

export default {
  components: {
    Sidebar,
    Canvas,
    SidebarModification
  },
  data() {
    return {
      selectedComponent: null, 
    };
  },
  methods: {
    // Ajouter un nouveau composant
    addComponentToCanvas(type) {
      this.$refs.canvas.addComponent(type);
    },

    exportCode() {
      this.$refs.canvas.exportCode(); 
    },

    // Définir le composant sélectionné (depuis le Canvas)
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },

    // Mettre à jour un composant modifié
    updateComponent(updatedComponent) {
      if (this.selectedComponent) {
        Object.assign(this.selectedComponent, updatedComponent);
      }
    },

    // Supprimer un composant et réinitialiser la sélection
    deleteComponent() {
      if (this.selectedComponent) {
        this.$refs.canvas.removeComponent(this.selectedComponent);
        this.selectedComponent = null;
      }
    }
  }
};
</script>

<style>
/* Conteneur principal */
#app {
  display: flex;
  height: 100vh;
}

/* Sidebar gauche (Ajout) */
.sidebar-left {
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #15161659;
  color: white;
  padding: 20px;
  overflow-y: auto;
}

/* Sidebar droite (Modification) */
.sidebar-right {
  width: 250px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #15161659; 
  color: white;
  padding: 20px;
  overflow-y: auto;
}

/* Conteneur du Canvas */
.canvas-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 25px; /* Décalage après la sidebar gauche */
  margin-right: 25px; /* Décalage avant la sidebar droite */
}

/* Canvas avec taille fixe */
.canvas {
  width: 900px; 
  height: 660px; 
  background-color: #f0f0f0; 
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style> 
<!-- Zone de travail (Canvas.vue)
Cette zone affiche les composants ajoutés avec un système de Drag & Drop.

📌 Ce que fait ce composant :
✅ Affiche la liste des composants sur la page
✅ Permet de supprimer un composant -->

<!---- version 01 fct-->
<template>
    <div class="canvas" @click="deselectComponent">
        <div v-for="(component, index) in components" :key="index" class="component"
            :class="{ selected: selectedComponent === component }" :style="{
                left: component.left + 'px',
                top: component.top + 'px'
            }" @mousedown="startDrag($event, component)" 
            @click.stop="selectComponent(component)">
            <!-- Texte -->
            <p v-if="component.type === 'text'" :style="{ color: component.textColor }">
                {{ component.content }}
            </p>

            <!-- Image -->
            <img v-if="component.type === 'image'" :src="component.src"
                :style="{ width: component.width + 'px', height: component.height + 'px' }" alt="Image" />

            <!-- Bouton -->
            <button v-if="component.type === 'button'" :style="{ backgroundColor: component.btnColor }">
                {{ component.content }}
            </button>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            components: [], // Liste des composants ajoutés
            selectedComponent: null,
            dragging: false,
            offsetX: 0,
            offsetY: 0
        };
    },
    methods: {
        addComponent(type) {
            const newComponent = {
                type,
                id: Date.now(),
                left: 50,  
                top: 50,
                width: 100,
                height: 50,
                content: type === 'text' ? 'New Text' : 'Button'
            };
            this.components.push(newComponent);
        },
        selectComponent(component) {
            this.selectedComponent = component;
            this.$emit('select-component', component);
        },
        deselectComponent() {
            this.selectedComponent = null;
            this.$emit('select-component', null);
        },
        removeComponent(component) {
            this.components = this.components.filter(c => c !== component);
            if (this.selectedComponent === component) {
                this.deselectComponent();
            }
        },

        // 🟢 Dragging Functionality
        startDrag(event, component) {
            this.dragging = true;
            this.selectedComponent = component;

            this.offsetX = event.clientX - component.left;
            this.offsetY = event.clientY - component.top;

            document.addEventListener("mousemove", this.onDrag);
            document.addEventListener("mouseup", this.stopDrag);
        },

        onDrag(event) {
            if (!this.dragging || !this.selectedComponent) return;

            this.selectedComponent.left = event.clientX - this.offsetX;
            this.selectedComponent.top = event.clientY - this.offsetY;
        },

        stopDrag() {
            this.dragging = false;
            document.removeEventListener("mousemove", this.onDrag);
            document.removeEventListener("mouseup", this.stopDrag);
        },

        //🟢 save code
        exportCode() {
            let htmlCode = "";
            let cssCode = `
                .component { position: absolute; padding: 10px; border: 1px solid black; background: white; }
            `;

            this.components.forEach(component => {
                if (component.type === "text") {
                    htmlCode += `<p class="component" style="left:${component.left}px; top:${component.top}px; color:${component.textColor};">${component.content}</p>\n`;
                } else if (component.type === "image") {
                    htmlCode += `<img class="component" src="${component.src}" style="left:${component.left}px; top:${component.top}px; width:${component.width}px; height:${component.height}px;" alt="Image">\n`;
                } else if (component.type === "button") {
                    htmlCode += `<button class="component" style="left:${component.left}px; top:${component.top}px; background:${component.btnColor};">${component.content}</button>\n`;
                }
            });

            let fullCode = `<html>\n<head>\n<style>${cssCode}</style>\n</head>\n<body>\n<div class="container">${htmlCode}</div>\n</body>\n</html>`;

            this.downloadFile("export.html", fullCode);
        },

        downloadFile(filename, content) {
            const element = document.createElement("a");
            const file = new Blob([content], { type: "text/html" });
            element.href = URL.createObjectURL(file);
            element.download = filename;
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
    }
};
</script>

<style>
.canvas {
    width: 800px;
    height: 600px;
    background: #f0f0f0;
    border: 2px solid #ccc;
    position: relative; 
    overflow: hidden;
}

.component {
    position: absolute; 
    padding: 10px;
    background: rgba(255, 255, 255, 0);
    cursor: grab;
    user-select: none; 
}

.component.selected {
    border: 2px solid red;
    cursor: grabbing;
}

</style>
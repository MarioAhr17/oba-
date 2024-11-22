<template>
  <div>
    <!-- Encabezado con el diseño original -->
    <v-app-bar class="custom-app-bar" dense flat>
      <!-- Icono para abrir el menú desplegable -->
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <!-- Título del encabezado -->
      <v-toolbar-title>
        <h1 class="custom-title">Refuerzo Matemático</h1>
      </v-toolbar-title>

      <!-- Espaciador -->
      <v-spacer></v-spacer>

      <!-- Botones de acción (notificaciones y perfil) -->
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Menú lateral desplegable -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list dense>
        <v-subheader>Opciones de Navegación</v-subheader>

        <v-list-item-group active-class="deep-purple--text">
          <v-list-item
            v-for="(page, index) in pages"
            :key="index"
            :to="page.to"
          >
            <v-list-item-icon>
              <v-icon>{{ page.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <nuxt />
    </v-main>
  </div>
</template>

---

### Script

```javascript
<script>
export default {
  data() {
    return {
      drawer: false, // Controla la visibilidad del menú lateral
      pages: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "Objetivos", icon: "mdi-target", to: "/objetivos" },
        { title: "Contenidos", icon: "mdi-book", to: "/contenidos" },
        { title: "Actividades", icon: "mdi-pencil", to: "/actividades" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer; // Alterna el estado del menú lateral
    },
  },
};
</script>
<style scoped>
/* Encabezado personalizado */
.custom-app-bar {
  height: 90px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    ),
    url("https://www.ipler.edu.co/wp-content/uploads/2022/08/estudiar_matematicas-1.png");
  background-size: cover;
  background-position: center;
  color: white;
}

/* Título del encabezado */
.custom-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 10px;
}

/* Estilo de iconos y botones */
.v-icon {
  color: #ffffff;
}
.v-btn {
  color: #ffffff;
}

/* Subheader y lista del menú */
.v-subheader {
  font-weight: bold;
  color: #444;
}
</style>

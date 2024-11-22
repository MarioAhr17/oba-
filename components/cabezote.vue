<template>
  <div>
    <v-app-bar
      class="custom-app-bar"
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h1>Refuerzo Matemático</h1>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    productos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
/* Clase personalizada para el app-bar */
.custom-app-bar {
  height: 75px; /* Altura ajustada */
  background-image: url('https://www.ipler.edu.co/wp-content/uploads/2022/08/estudiar_matematicas-1.png');
  background-size: cover;
  background-position: center;
  color: white;
}

/* Estilo para el título */
h1 {
  text-align: left;
  margin: 20px;
  font-size: 32px; /* Texto más grande si es necesario */
}
</style>

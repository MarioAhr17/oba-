<template>
  <div class="index-page">
  <v-container class="text-center my-8">
    <v-card 
      class="mx-auto pa-4 custom-card" 
      elevation="4" 
      max-width="600"
    >
      <v-card-title class="text-h5 text-center">Bienvenidos a nuestro OBA</v-card-title>
      <v-divider class="my-4"></v-divider>

      <v-card-text>
        <v-row class="my-2">
          <v-col>
            <p><strong>Docente:</strong> Marina Bedoya</p>
          </v-col>
        </v-row>
        <v-row class="my-2">
          <v-col>
            <p><strong>Institución:</strong> Cristóbal Colón</p>
          </v-col>
        </v-row>
        <v-row class="my-2">
          <v-col>
            <p><strong>Materia:</strong> Matemáticas</p>
          </v-col>
        </v-row>
        <v-row class="my-2">
          <v-col>
            <p><strong>Grado:</strong> Quinto de Primaria</p>
          </v-col>
        </v-row>
        <v-row class="my-2">
          <v-col>
            <p><strong>Valor actual del contador:</strong> {{ counter }}</p>
          </v-col>
        </v-row>
      </v-card-text> 
      <iframe
      class="video-player"
      src="https://www.youtube.com/watch?v=DLwMMeSh67k&t=264s" 
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    
      <v-divider class="my-4"></v-divider>

      <v-card-actions class="d-flex justify-center">
        <NuxtLink to="/dashboard/">
          <v-btn 
            class="custom-button" 
            outlined 
            elevation="0"
          >
            Continuar
          </v-btn>
        </NuxtLink>
      </v-card-actions>
    </v-card>
  </v-container>
</div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
  },
};
</script>

<style scoped>
/* Fondo y bordes redondeados */
.custom-card {
  background-color: #7afc848e; /* Color de fondo claro */
  border-radius: 12px; /* Bordes redondeados */
  border: 1px solid #e0e0e0; /* Borde sutil */
}

/* Botón blanco */
.custom-button {
  background-color: #ffffff; /* Fondo blanco */
  color: #000000; /* Texto negro para contraste */
  border: 2px solid #e0e0e0; /* Contorno sutil */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15); /* Sombra gris ligera */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.custom-button:hover {
  transform: translateY(-2px); /* Efecto de elevación al pasar el mouse */
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3); /* Sombra más intensa al hover */
}

.video-player {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

</style>

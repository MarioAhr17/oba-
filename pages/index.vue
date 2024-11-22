<template>
  <v-container class="text-center my-8">
    <v-card class="mx-auto pa-4" elevation="4" max-width="600">
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

      <v-divider class="my-4"></v-divider>

      <v-card-actions class="d-flex justify-center">
        <NuxtLink to="/dashboard/">
          <v-btn append-icon="mdi-arrow-right" color="primary" outlined>
            Continuar
          </v-btn>
        </NuxtLink>
      </v-card-actions>
    </v-card>
  </v-container>
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
p {
  margin: 0;
}
</style>

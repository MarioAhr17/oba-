<template>
  <div>
    <h2>Bienvenidos a nuestro OBA</h2>
    <br>
    <p>Docente: Marina Bedoya</p>
    <br>
    <p>Institución: Cristóbal Colón</p>
    <br>
    <p>Materia: Matemáticas</p>
    <br>
    <p>Grado: Quinto de Primaria</p>
    <br>
    <p>Valor actual del contador: {{ counter }}</p>
    <NuxtLink to="/dashboard/">
      <v-btn append-icon="mdi-arrow-right" variant="outlined">
        Continuar
      </v-btn>
    </NuxtLink>
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

<style>
p {
  text-align: center;
}
</style>

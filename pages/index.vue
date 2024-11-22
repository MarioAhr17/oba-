<template>
  <div>
    <h2>Bienvenidos a nuestro Oba</h2>
    <br>
    <p>Docente: Marina Bedoya  </p>
    <br>
    <p>Institución: Cristóbal Colón  </p>
    <br>
    <p>Materia: Matemáticas </p>
    <br>
    <p>Grado: Quinto de Primaria</p>
    <br>
    <br>
    <p></p>

    <p> : {{ this.$store.state.count }} </p>
    <NuxtLink 
      to="/dashboard/">
      <v-btn append-icon="$vuetify" variant="outlined">
        Continuar
      </v-btn>
    </NuxtLink>
    
  </div>
</template>

<script>
export default {
computed: {
  counter() {
    return this.$store.state.count
  }
},
methods: {
  increment() {
    this.$store.commit('increment')
  }
}
}

</script>
<style>


p {
text-align: center;

}
</style>
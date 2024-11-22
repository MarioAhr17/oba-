<template>
  <div>
<<<<<<< Updated upstream
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
    
=======
    <header style="text-align: center; padding: 20px;">
      <h1>Universidad de Córdoba</h1>
      <h2>Proyecto de [Nombre de la Materia]</h2>
      <p><strong>Docente:</strong> [Nombre del Docente]</p>
      <p><strong>Integrantes:</strong> [Nombre del Integrante 1], [Nombre del Integrante 2], ...</p>
    </header>

    <main>
      <h2>Página de Inicio</h2>
      <p>Aquí iría el contenido de la página de inicio.</p>

      <NuxtLink to="/dashboard/">
        <v-btn append-icon="$vuetify" variant="outlined">
          Hello
        </v-btn>
      </NuxtLink>
    </main>

    <footer style="color: green; text-align: center; padding: 200px;">
      <h1>Universidad de Córdoba</h1>
    </footer>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
}

</script>
<style>


p {
text-align: center;

}
</style>
=======
</script>

<style scoped>
header {
  background-color: #f5f5f5;
  border-bottom: 2px solid #4caf50;
  margin-bottom: 20px;
}
footer {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
>>>>>>> Stashed changes

<template>
  <div id="app">
    <!-- Encabezado -->
    <Header />
    
    <!-- Contenido principal -->
    <main class="main-content">
    <p>Bienvenidos al refuerzo de Matemáticas y Pensamiento Lógico.</p>
     <NuxtPage />
    </main>
    
    <!-- Pie de página -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};


</script>

<style>
/* Estilos globales */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  text-align: center;
  background-color: #fafafa;
}

.main-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.main-button:hover {
  background-color: #0056b3;
}
</style>

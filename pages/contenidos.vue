<template>
  <div class="contenidos-page">
      <h1 class="main-title">Contenidos del Curso</h1>
      
      <div class="content-container">
          
          <div class="unit-section">
              <h2 class="unit-title">Aprende y explora:Matemáticas y Pensamiento Lógico </h2>
              <div class="unit-content">
                  <h3 class="topic-title">Operaciones Básicas</h3>
                  <ul class="topic-list">
                      
                      <li>Suma, resta, multiplicación y división.</li>
                      <li>Problemas prácticos interactivos.</li>
                  </ul>

                  <h3 class="topic-title">Pensamiento Lógico</h3>
                  <ul class="topic-list">
                      <li>Patrones, secuencias, y razonamiento lógico.</li>
                      <li>Juegos y acertijos.</li>
                  </ul>
                  <h3 class="topic-title">Geometría Básica</h3>
                  <ul class="topic-list">
                      <li>Figuras, perímetros y tipos de ángulos</li>
                      <li>Actividades visuales.</li>

                  </ul><h3 class="topic-title">Fracciones</h3>
                  <ul class="topic-list">

                      <li>Conceptos básicos, representación y operaciones simples</li>
                      <li>Ejemplos cotidianos</li>
                  </ul>
              </div>
          </div>
      </div>

      <button class="back-button" @click="volverAlIndex">Volver al Dashboard</button>
  </div>
</template>

<script>
export default {
name: 'Contenidospage',
methods: {
  volverAlIndex() {
    this.$router.push('/dashboard');
  }
}
};
</script>

<style scoped>
.contenidos-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5rem;
}

.content-container {
  margin-bottom: 40px;
}

.unit-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.unit-title {
  color: #2c3e50;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.unit-content {
  padding-left: 20px;
}

.topic-title {
  color: #34495e;
  margin: 15px 0;
  font-size: 1.2rem;
}

.topic-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.topic-list li {
  margin: 8px 0;
  color: #555;
}

.topic-description {
  color: #666;
  line-height: 1.6;
  margin: 10px 0;
}


.back-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #45a049;
}
</style>
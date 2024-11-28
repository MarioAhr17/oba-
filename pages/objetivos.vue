<template>
  <div class="objetivos-page">
    <h1>Objetivos</h1>
    <h2>Objetivo General</h2>
    <p class="objetivo-general">{{ objetivoGeneral }}</p>
    <h2>Objetivos Específicos</h2>
    <ul class="objetivos-list">
      <li v-for="(objetivo, index) in objetivosEspecificos" :key="index" class="objetivo-item">
        {{ objetivo }}
      </li>
    </ul>
    <button class="back-button" @click="volverAlDashboard">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'ObjetivosPage',
  data() {
    return {
      objetivoGeneral: 'Fortalecer el aprendizaje de los principios básicos de matemáticas y pensamiento lógico en estudiantes de quinto grado de primaria mediante herramientas interactivas y actividades prácticas, que fomenten el desarrollo de habilidades cognitivas, resolución de problemas y razonamiento lógico.',
      objetivosEspecificos: [
        'Reforzar operaciones matemáticas básicas: Afianzar el conocimiento y la práctica de suma, resta, multiplicación y división en contextos prácticos.',
        'Estimular el pensamiento lógico: Diseñar y aplicar actividades que impliquen el razonamiento lógico, patrones y resolución de problemas.',
        'Desarrollar competencias en geometría básica: Enseñar conceptos fundamentales como formas geométricas, perímetros y tipos de ángulos, adaptados a las necesidades del nivel.',
        'Introducir el concepto de fracciones: Ayudar a los estudiantes a comprender, representar y operar con fracciones simples, relacionándolas con situaciones cotidianas.',
        'Promover el aprendizaje autónomo: Fomentar la exploración y aplicación de estrategias matemáticas en el aprendizaje, motivando el interés y la curiosidad por las matemáticas.',
      ],
    };
  },
  methods: {
    volverAlDashboard() {
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.objetivos-page {
  padding: 20px;
  text-align: left;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 10px;
}

h2 {
  color: #2e2c2c;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.objetivo-general {
  margin-bottom: 30px; /* Separación para el objetivo general */
}

.objetivos-list {
  list-style-type: disc;
  padding-left: 20px;
}

.objetivo-item {
  margin-bottom: 15px; /* Separación entre cada objetivo */
  line-height: 1.5;
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

<template>
  <div class="objetivos-container">
    <h1>Objetivos</h1>
    <p>Esta es la página de objetivos.</p>
    <h2>Objetivo General</h2>
    <p>{{ objetivoGeneral }}</p>
    <h2>Objetivos Específicos</h2>
    <ul>
      <li v-for="(objetivo, index) in objetivosEspecificos" :key="index">
        {{ objetivo }}
      </li>
    </ul>
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
};
</script>

<style scoped>
.objetivos-container {
  max-width: 800px;
  margin: 20px auto; /* Centra el contenedor horizontalmente */
  padding: 20px;
  text-align: left; /* Alinea el texto hacia la izquierda */
}

h1, h2 {
  color: #333;
  font-family: Arial, sans-serif;
}

ul {
  list-style-type: disc; /* Muestra viñetas en los elementos de lista */
  margin-left: 20px; /* Aumenta la sangría de la lista */
}

li {
  margin-bottom: 10px; /* Agrega espacio entre los elementos de la lista */
}
</style>

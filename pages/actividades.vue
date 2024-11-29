<template>
  <v-container>
    <v-card class="pa-6 rounded-lg elevation-3">
      <v-card-title class="text-h4 text-center text-primary">Quiz de Matemáticas</v-card-title>
      <v-divider class="my-4"></v-divider>

      <!-- Mostrar preguntas dinámicamente -->
      <template v-if="!isQuizFinished">
        <v-card outlined class="mb-4 rounded-lg elevation-1">
          <v-card-title class="text-h6">{{ currentQuestion + 1 }}. {{ questions[currentQuestion].text }}</v-card-title>
          <v-card-text>
            <v-row class="mt-3">
              <v-col
                v-for="(option, index) in questions[currentQuestion].options"
                :key="index"
                cols="12"
                md="4"
              >
                <v-btn
                  block
                  :color="option.color"
                  class="rounded-pill"
                  @click="selectAnswer(currentQuestion, option.value)"
                >
                  {{ option.text }}
                </v-btn>
              </v-col>
            </v-row>
            <v-alert
              v-if="feedback[currentQuestion] !== null"
              :type="feedback[currentQuestion] ? 'success' : 'error'"
              class="mt-4 rounded-pill"
            >
              {{ feedbackMessages[currentQuestion] }}
            </v-alert>
          </v-card-text>
        </v-card>

        <!-- Navegación entre preguntas -->
        <v-row justify="space-between" class="mt-3">
          <v-btn @click="prevQuestion" :disabled="currentQuestion === 0" color="secondary">
            Anterior
          </v-btn>
          <v-btn @click="nextQuestion" :disabled="feedback[currentQuestion] === null || currentQuestion === questions.length - 1" color="primary">
            Siguiente
          </v-btn>
          <v-btn v-if="currentQuestion === questions.length - 1" @click="finishQuiz" color="success">
            Finalizar
          </v-btn>
        </v-row>
      </template>

      <!-- Mostrar resultados -->
      <template v-else>
        <v-card class="pa-4 text-center">
          <h3 class="text-success">¡Evaluación Finalizada!</h3>
          <p>
            Respuestas correctas: <strong>{{ score }}</strong><br />
            Respuestas incorrectas: <strong>{{ questions.length - score }}</strong><br />
            Calificación: <strong>{{ grade }}</strong> / 5
          </p>
          <v-list>
            <v-list-item
              v-for="(question, index) in questions"
              :key="index"
              :class="feedback[index] ? 'text-success' : 'text-error'"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ index + 1 }}. {{ question.text }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <strong>Tu respuesta:</strong> {{ userAnswers[index]?.text || 'Sin responder' }}<br />
                  <strong>Correcta:</strong> {{ question.options.find((opt) => opt.value).text }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-btn color="secondary" class="mt-4" @click="resetQuiz">Reiniciar Quiz</v-btn>
        </v-card>
      </template>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentQuestion: 0,
      score: 0,
      grade: 0,
      isQuizFinished: false,
      userAnswers: [],
      feedback: [],
      feedbackMessages: [],
      questions: [
        {
          text: "María tiene una tarta que divide en 8 partes iguales. Si se comió 5 partes, ¿qué fracción representa lo que le queda?",
          options: [
            { text: "1/8", value: false, color: "blue lighten-2" },
            { text: "3/8", value: true, color: "blue lighten-2" },
            { text: "5/8", value: false, color: "blue lighten-2" },
          ],
        },
        {
          text: "Un tren recorre 120 km en 2 horas. Si mantiene la misma velocidad, ¿cuánto recorrerá en 5 horas?",
          options: [
            { text: "200 km", value: false, color: "green lighten-2" },
            { text: "300 km", value: true, color: "green lighten-2" },
            { text: "400 km", value: false, color: "green lighten-2" },
          ],
        },
        {
          text: "Un grupo de 18 niños compra helados. Si cada helado cuesta $3, pero les hacen un descuento de $12 en total, ¿cuánto pagaron?",
          options: [
            { text: "$48", value: true, color: "pink lighten-2" },
            { text: "$54", value: false, color: "pink lighten-2" },
            { text: "$60", value: false, color: "pink lighten-2" },
          ],
        },
        {
          text: "Un rectángulo tiene un largo de 10 cm y un ancho de 5 cm. Si se duplica el largo, ¿cuál será el nuevo perímetro?",
          options: [
            { text: "30 cm", value: false, color: "purple lighten-2" },
            { text: "40 cm", value: false, color: "purple lighten-2" },
            { text: "50 cm", value: true, color: "purple lighten-2" },
          ],
        },
        {
          text: "Un estudiante ahorra $25 cada semana. Si quiere comprar un libro que cuesta $200, ¿cuánto tardará en ahorrar el dinero necesario?",
          options: [
            { text: "6 semanas", value: false, color: "orange lighten-2" },
            { text: "8 semanas", value: false, color: "orange lighten-2" },
            { text: "10 semanas", value: true, color: "orange lighten-2" },
          ],
        },
        {
          text: "Una escalera tiene 15 peldaños. Si se sube uno cada 2 segundos, ¿cuánto tardará en llegar al último peldaño?",
          options: [
            { text: "30 segundos", value: true, color: "red lighten-2" },
            { text: "25 segundos", value: false, color: "red lighten-2" },
            { text: "20 segundos", value: false, color: "red lighten-2" },
          ],
        },
        {
          text: "Una fábrica produce 120 botellas en 6 horas. Si aumenta la producción a 30 botellas por hora, ¿cuántas botellas hará en 8 horas?",
          options: [
            { text: "240 botellas", value: true, color: "teal lighten-2" },
            { text: "300 botellas", value: false, color: "teal lighten-2" },
            { text: "180 botellas", value: false, color: "teal lighten-2" },
          ],
        },
        {
          text: "En un sorteo, 3 de cada 10 boletos son ganadores. Si compras 20 boletos, ¿cuántos son ganadores en promedio?",
          options: [
            { text: "3", value: false, color: "brown lighten-2" },
            { text: "6", value: true, color: "brown lighten-2" },
            { text: "9", value: false, color: "brown lighten-2" },
          ],
        },
      ],
    };
  },
  methods: {
    selectAnswer(questionIndex, value) {
      const selectedOption = this.questions[questionIndex].options.find((opt) => opt.value === value);
      this.userAnswers[questionIndex] = selectedOption;
      this.feedback[questionIndex] = value;
      this.feedbackMessages[questionIndex] = value
        ? "¡Correcto!"
        : `Incorrecto. La respuesta correcta es ${this.questions[questionIndex].options.find((opt) => opt.value).text}.`;
      if (value) this.score++;
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      }
    },
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
    finishQuiz() {
      this.isQuizFinished = true;
      this.grade = Math.ceil((this.score / this.questions.length) * 5);
    },
    resetQuiz() {
      this.currentQuestion = 0;
      this.score = 0;
      this.grade = 0;
      this.isQuizFinished = false;
      this.userAnswers = [];
      this.feedback = [];
      this.feedbackMessages = [];
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.rounded-pill {
  border-radius: 50px;
}
.text-success {
  color: green;
}
.text-error {
  color: red;
}
</style>

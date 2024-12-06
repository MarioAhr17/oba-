<template>
  <v-container>
    <v-card class="pa-6 rounded-lg elevation-3" style="background-color: #f8f9fa">
      <v-card-title class="text-h4 text-center mb-4" style="color: #6c63ff">
        <v-icon large color="primary" class="mr-2">mdi-school</v-icon>
        ¡Aventura Matemática!
      </v-card-title>
      
      <v-card-subtitle class="text-center text-h6 mb-4" style="color: #4caf50">
        ¡Demuestra tus habilidades matemáticas y diviértete aprendiendo!
      </v-card-subtitle>

      <v-divider class="my-4"></v-divider>

      <!-- Mostrar preguntas dinámicamente -->
      <template v-if="!isQuizFinished">
        <v-card outlined class="mb-4 rounded-lg elevation-2" style="background-color: white">
          <v-card-title class="text-h5 py-4" style="background-color: #e3f2fd">
            <v-icon color="primary" class="mr-2">mdi-help-circle</v-icon>
            Pregunta {{ currentQuestion + 1 }} de {{ questions.length }}
          </v-card-title>
          
          <v-card-text class="pa-4">
            <div class="text-h6 mb-4" style="color: #333">
              {{ questions[currentQuestion].text }}
            </div>
            <v-row class="mt-3">
              <v-col
                v-for="(option, index) in questions[currentQuestion].options"
                :key="index"
                cols="12"
                md="4"
              >
                <v-btn
                  block
                  x-large
                  :color="option.color"
                  class="py-4 rounded-lg elevation-2 white--text"
                  style="font-size: 1.1rem"
                  @click="selectAnswer(currentQuestion, option.value)"
                  :disabled="feedback[currentQuestion] !== null"
                >
                  <v-icon left>{{ option.icon }}</v-icon>
                  {{ option.text }}
                </v-btn>
              </v-col>
            </v-row>
            
            <v-alert
              v-if="feedback[currentQuestion] !== null"
              :type="feedback[currentQuestion] ? 'success' : 'error'"
              class="mt-4 rounded-lg"
              dense
            >
              <div class="text-h6">{{ feedbackMessages[currentQuestion] }}</div>
              <div v-if="!feedback[currentQuestion]" class="mt-2">
                ¡No te preocupes! Sigue intentando
                <v-icon>mdi-heart</v-icon>
              </div>
            </v-alert>
          </v-card-text>
        </v-card>

        <!-- Navegación entre preguntas -->
        <v-row justify="space-between" class="mt-6">
          <v-btn 
            @click="prevQuestion" 
            :disabled="currentQuestion === 0" 
            color="secondary"
            class="px-6 rounded-lg"
          >
            <v-icon left>mdi-arrow-left</v-icon>
            Anterior
          </v-btn>
          
          <v-btn 
            @click="nextQuestion" 
            :disabled="feedback[currentQuestion] === null || currentQuestion === questions.length - 1" 
            color="primary"
            class="px-6 rounded-lg"
          >
            Siguiente
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
          
          <v-btn 
            v-if="currentQuestion === questions.length - 1" 
            @click="finishQuiz" 
            color="success"
            class="px-6 rounded-lg"
          >
            <v-icon left>mdi-check-circle</v-icon>
            ¡Terminar!
          </v-btn>
        </v-row>
      </template>

      <!-- Mostrar resultados -->
      <template v-else>
        <v-card class="pa-6 text-center" style="background-color: white">
          <v-icon color="success" size="64" class="mb-4">mdi-trophy</v-icon>
          <h2 class="text-h4 text-success mb-4">¡Felicitaciones!</h2>
          
          <v-card class="mb-4 pa-4" outlined>
            <div class="text-h6 mb-2">Tus Resultados:</div>
            <v-row justify="center" class="mt-2">
              <v-col cols="12" sm="4">
                <div class="success--text text-h5">
                  <v-icon color="success">mdi-check</v-icon>
                  {{ score }} Correctas
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="error--text text-h5">
                  <v-icon color="error">mdi-close</v-icon>
                  {{ questions.length - score }} Incorrectas
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="primary--text text-h5">
                  <v-icon color="primary">mdi-star</v-icon>
                  Nota: {{ grade }}/5
                </div>
              </v-col>
            </v-row>
          </v-card>

          <v-btn 
            color="primary" 
            class="mt-4 px-6" 
            x-large
            @click="resetQuiz"
          >
            <v-icon left>mdi-refresh</v-icon>
            ¡Jugar de nuevo!
          </v-btn>
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
          text: "Juan tiene una pizza y la comparte con sus amigos. Si la corta en 8 pedazos iguales y se come 3, ¿cuántos pedazos quedan?",
          options: [
            { text: "5 pedazos", value: true, color: "#FF7043", icon: "mdi-pizza" },
            { text: "3 pedazos", value: false, color: "#FF7043", icon: "mdi-pizza" },
            { text: "4 pedazos", value: false, color: "#FF7043", icon: "mdi-pizza" },
          ],
        },
        {
          text: "Si tienes 10 dulces y tu mejor amigo te regala 5 más, ¿cuántos dulces tienes ahora?",
          options: [
            { text: "15 dulces", value: true, color: "#EC407A", icon: "mdi-candy" },
            { text: "10 dulces", value: false, color: "#EC407A", icon: "mdi-candy" },
            { text: "5 dulces", value: false, color: "#EC407A", icon: "mdi-candy" },
          ],
        },
        {
          text: "En una fiesta hay 4 grupos de 3 globos cada uno. ¿Cuántos globos hay en total?",
          options: [
            { text: "12 globos", value: true, color: "#7E57C2", icon: "mdi-balloon" },
            { text: "7 globos", value: false, color: "#7E57C2", icon: "mdi-balloon" },
            { text: "10 globos", value: false, color: "#7E57C2", icon: "mdi-balloon" },
          ],
        },
        {
          text: "Si corres 2 vueltas al parque cada día, ¿cuántas vueltas darás en 5 días?",
          options: [
            { text: "10 vueltas", value: true, color: "#42A5F5", icon: "mdi-run" },
            { text: "8 vueltas", value: false, color: "#42A5F5", icon: "mdi-run" },
            { text: "12 vueltas", value: false, color: "#42A5F5", icon: "mdi-run" },
          ],
        },
        {
          text: "María tiene 15 manzanas y quiere repartirlas entre 3 amigos por igual. ¿Cuántas manzanas recibirá cada amigo?",
          options: [
            { text: "5 manzanas", value: true, color: "#66BB6A", icon: "mdi-fruit-apple" },
            { text: "4 manzanas", value: false, color: "#66BB6A", icon: "mdi-fruit-apple" },
            { text: "6 manzanas", value: false, color: "#66BB6A", icon: "mdi-fruit-apple" },
          ],
        },
        {
          text: "Si pintas 3 dibujos cada hora, ¿cuántos dibujos pintarás en 4 horas?",
          options: [
            { text: "12 dibujos", value: true, color: "#FFA726", icon: "mdi-palette" },
            { text: "7 dibujos", value: false, color: "#FFA726", icon: "mdi-palette" },
            { text: "9 dibujos", value: false, color: "#FFA726", icon: "mdi-palette" },
          ],
        },
        {
          text: "Un carro tiene 4 ruedas. ¿Cuántas ruedas tienen 3 carros juntos?",
          options: [
            { text: "12 ruedas", value: true, color: "#26A69A", icon: "mdi-car" },
            { text: "9 ruedas", value: false, color: "#26A69A", icon: "mdi-car" },
            { text: "15 ruedas", value: false, color: "#26A69A", icon: "mdi-car" },
          ],
        },
        {
          text: "En el circo hay 8 payasos. Si cada payaso tiene 2 globos, ¿cuántos globos hay en total?",
          options: [
            { text: "16 globos", value: true, color: "#AB47BC", icon: "mdi-party-popper" },
            { text: "10 globos", value: false, color: "#AB47BC", icon: "mdi-party-popper" },
            { text: "14 globos", value: false, color: "#AB47BC", icon: "mdi-party-popper" },
          ],
        },
        {
          text: "Si nadas 2 vueltas a la piscina por la mañana y 3 por la tarde, ¿cuántas vueltas nadas en total?",
          options: [
            { text: "5 vueltas", value: true, color: "#29B6F6", icon: "mdi-swim" },
            { text: "6 vueltas", value: false, color: "#29B6F6", icon: "mdi-swim" },
            { text: "4 vueltas", value: false, color: "#29B6F6", icon: "mdi-swim" },
          ],
        },
        {
          text: "Tienes 20 minutos para jugar y cada partida dura 5 minutos. ¿Cuántas partidas puedes jugar?",
          options: [
            { text: "4 partidas", value: true, color: "#EF5350", icon: "mdi-gamepad-variant" },
            { text: "5 partidas", value: false, color: "#EF5350", icon: "mdi-gamepad-variant" },
            { text: "3 partidas", value: false, color: "#EF5350", icon: "mdi-gamepad-variant" },
          ],
        }
      ],
    };
  },
  methods: {
    selectAnswer(questionIndex, value) {
      const selectedOption = this.questions[questionIndex].options.find((opt) => opt.value === value);
      this.userAnswers[questionIndex] = selectedOption;
      this.feedback[questionIndex] = value;
      this.feedbackMessages[questionIndex] = value
        ? "¡Correcto! ¡Muy bien hecho!"
        : `No es correcto. La respuesta correcta es ${this.questions[questionIndex].options.find((opt) => opt.value).text}`;
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
.rounded-lg {
  border-radius: 12px !important;
}
.text-success {
  color: #4caf50 !important;
}
.text-error {
  color: #f44336 !important;
}
.v-btn {
  text-transform: none !important;
  font-size: 1.1rem !important;
}
</style>
<template>
  <v-container>
    <!-- Botón superior -->
    <v-btn
      color="primary"
      class="mb-4"
      @click="$router.push('/dashboard')"
    >
      <v-icon left>mdi-arrow-left</v-icon>
      Volver al inicio
    </v-btn>

    <!-- Selección de categoría -->
    <template v-if="!categorySelected">
      <v-card class="pa-6 rounded-lg elevation-3">
        <v-card-title class="text-h4 text-center primary--text mb-6">
          <v-icon large color="primary" class="mr-2">mdi-brain</v-icon>
          Desafío Matemático
        </v-card-title>

        <v-row>
          <v-col cols="12" md="4" v-for="(category, index) in categories" :key="index">
            <v-card
              class="pa-4 text-center category-card"
              elevation="2"
              @click="selectCategory(index)"
              hover
            >
              <v-icon size="48" :color="category.color" class="mb-3">{{ category.icon }}</v-icon>
              <h3 class="text-h5 mb-2">{{ category.name }}</h3>
              <p class="mb-0">{{ category.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </template>

    <!-- Quiz en progreso -->
    <template v-else-if="!isQuizFinished">
      <v-card class="pa-6 rounded-lg elevation-3">
        <v-card-title class="text-h4 text-center mb-4" :class="`${categories[selectedCategory].color}--text`">
          {{ categories[selectedCategory].name }}
        </v-card-title>

        <v-progress-linear
          :value="(currentQuestion + 1) / currentQuestions.length * 100"
          height="10"
          rounded
          :color="categories[selectedCategory].color"
          class="mb-6"
        ></v-progress-linear>

        <v-card outlined class="mb-4 rounded-lg elevation-1">
          <v-card-title class="text-h6 pa-4 question-text">
            Pregunta {{ currentQuestion + 1 }} de {{ currentQuestions.length }}: {{ currentQuestions[currentQuestion].text }}
          </v-card-title>

          <v-card-text>
            <v-row class="mt-3">
              <v-col
                v-for="(option, index) in currentQuestions[currentQuestion].options"
                :key="index"
                cols="12"
                sm="6"
              >
                <v-btn
                  block
                  :color="option.color"
                  class="pa-4 white--text"
                  :disabled="answered"
                  @click="selectAnswer(option)"
                  elevation="2"
                >
                  {{ option.text }}
                </v-btn>
              </v-col>
            </v-row>

            <v-alert
              v-if="answered"
              :type="isCorrect ? 'success' : 'error'"
              class="mt-4"
              dense
            >
              {{ feedbackMessage }}
              <div v-if="currentQuestions[currentQuestion].explanation" class="mt-2">
                {{ currentQuestions[currentQuestion].explanation }}
              </div>
            </v-alert>
          </v-card-text>
        </v-card>

        <v-row justify="space-between">
          <v-btn
            :disabled="currentQuestion === 0"
            @click="prevQuestion"
            :color="categories[selectedCategory].color"
            outlined
          >
            <v-icon left>mdi-arrow-left</v-icon>
            Anterior
          </v-btn>

          <v-btn
            v-if="currentQuestion < currentQuestions.length - 1"
            :disabled="!answered"
            @click="nextQuestion"
            :color="categories[selectedCategory].color"
          >
            Siguiente
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>

          <v-btn
            v-else
            :disabled="!answered"
            @click="finishQuiz"
            color="success"
          >
            Finalizar
            <v-icon right>mdi-check-circle</v-icon>
          </v-btn>
        </v-row>

        <!-- Botón para cancelar al final del quiz -->
        <v-row justify="center" class="mt-6">
          <v-btn
            color="error"
            @click="$router.push('/dashboard')"
          >
            <v-icon left>mdi-close</v-icon>
            Cancelar cuestionario
          </v-btn>
        </v-row>
      </v-card>
    </template>

    <!-- Resultados -->
    <template v-else>
      <v-card class="pa-6 rounded-lg elevation-3">
        <v-card-title class="text-h4 text-center success--text mb-6">
          <v-icon large color="success" class="mr-2">mdi-trophy</v-icon>
          ¡Felicitaciones!
        </v-card-title>

        <v-card class="mb-6 pa-4" outlined>
          <v-row justify="center">
            <v-col cols="12" md="4" class="text-center">
              <div class="text-h6 success--text">
                <v-icon color="success">mdi-check-circle</v-icon>
                {{ score }} Correctas
              </div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <div class="text-h6 error--text">
                <v-icon color="error">mdi-close-circle</v-icon>
                {{ currentQuestions.length - score }} Incorrectas
              </div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <div class="text-h6 primary--text">
                <v-icon color="primary">mdi-star</v-icon>
                Nota: {{ grade }}/5
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-card outlined>
          <v-list>
            <v-list-item
              v-for="(answer, index) in answers"
              :key="index"
              :class="answer.correct ? 'success--text' : 'error--text'"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon :color="answer.correct ? 'success' : 'error'" class="mr-2">
                    {{ answer.correct ? 'mdi-check-circle' : 'mdi-close-circle' }}
                  </v-icon>
                  Pregunta {{ index + 1 }}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-2">
                  {{ currentQuestions[index].text }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mt-1">
                  <strong>Tu respuesta:</strong> {{ answer.selected }}
                </v-list-item-subtitle>
                <v-list-item-subtitle v-if="!answer.correct" class="mt-1">
                  <strong>Respuesta correcta:</strong> {{ answer.correct_answer }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>

        <v-row justify="center" class="mt-6">
          <v-btn
            color="primary"
            class="mr-4"
            @click="$router.push('/dashboard')"
          >
            <v-icon left>mdi-home</v-icon>
            Volver al inicio
          </v-btn>
          <v-btn
            color="primary"
            class="mr-4"
            @click="resetCategory"
          >
            <v-icon left>mdi-format-list-bulleted</v-icon>
            Elegir otra categoría
          </v-btn>
          <v-btn
            :color="categories[selectedCategory].color"
            @click="resetQuiz"
          >
            <v-icon left>mdi-refresh</v-icon>
            Intentar de nuevo
          </v-btn>
        </v-row>
      </v-card>
    </template>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categorySelected: false,
      selectedCategory: null,
      currentQuestion: 0,
      score: 0,
      grade: 0,
      isQuizFinished: false,
      answered: false,
      isCorrect: false,
      feedbackMessage: '',
      answers: [],
      categories: [
        {
          name: "Operaciones Básicas",
          description: "Suma, resta, multiplicación y división",
          icon: "mdi-calculator",
          color: "primary"
        },
        {
          name: "Fracciones",
          description: "Identificación y comparación de fracciones",
          icon: "mdi-chart-pie",
          color: "success"
        },
        {
          name: "Pensamiento Lógico",
          description: "Ejercicios de razonamiento",
          icon: "mdi-brain",
          color: "purple"
        }
      ],
      questionsByCategory: {
        0: [ // Operaciones Básicas
          {
            text: "¿Cuánto es 235 + 167?",
            options: [
              { text: "402", value: true, color: "primary" },
              { text: "392", value: false, color: "primary" },
              { text: "412", value: false, color: "primary" }
            ],
            explanation: "235 + 167 = 402"
          },
          {
            text: "Si tienes 528 y restas 239, ¿cuánto queda?",
            options: [
              { text: "289", value: true, color: "primary" },
              { text: "279", value: false, color: "primary" },
              { text: "299", value: false, color: "primary" }
            ],
            explanation: "528 - 239 = 289"
          },
          {
            text: "¿Cuánto es 12 × 15?",
            options: [
              { text: "180", value: true, color: "primary" },
              { text: "170", value: false, color: "primary" },
              { text: "190", value: false, color: "primary" }
            ],
            explanation: "12 × 15 = 180"
          },
          {
            text: "¿Cuál es el resultado de 144 ÷ 12?",
            options: [
              { text: "12", value: true, color: "primary" },
              { text: "14", value: false, color: "primary" },
              { text: "10", value: false, color: "primary" }
            ],
            explanation: "144 ÷ 12 = 12"
          },
          {
            text: "¿Cuánto es 456 + 789?",
            options: [
              { text: "1,245", value: true, color: "primary" },
              { text: "1,235", value: false, color: "primary" },
              { text: "1,255", value: false, color: "primary" }
            ],
            explanation: "456 + 789 = 1,245"
          }
        ],
        1: [ // Fracciones
          {
            text: "¿Qué fracción es mayor: 3/4 o 2/3?",
            options: [
              { text: "3/4", value: true, color: "success" },
              { text: "2/3", value: false, color: "success" },
              { text: "Son iguales", value: false, color: "success" }
            ],
            explanation: "3/4 = 0.75 y 2/3 = 0.666... Por lo tanto, 3/4 es mayor"
          },
          {
            text: "Si tienes 1/2 de una pizza y comes 1/4, ¿cuánto queda?",
            options: [
              { text: "1/4", value: true, color: "success" },
              { text: "1/3", value: false, color: "success" },
              { text: "2/4", value: false, color: "success" }
            ],
            explanation: "1/2 - 1/4 = 1/4"
          },
          {
            text: "¿Cuál es el resultado de 1/3 + 1/6?",
            options: [
              { text: "1/2", value: true, color: "success" },
              { text: "2/6", value: false, color: "success" },
              { text: "2/3", value: false, color: "success" }
            ],
            explanation: "1/3 + 1/6 = 3/6 + 1/6 = 4/6 = 1/2"
          },
          {
            text: "¿Qué fracción representa 50%?",
            options: [
              { text: "1/2", value: true, color: "success" },
              { text: "1/4", value: false, color: "success" },
              { text: "2/3", value: false, color: "success" }
            ],
            explanation: "50% = 50/100 = 1/2"
          }
        ],
        2: [ // Pensamiento Lógico
          {
            text: "Si un tren viaja a 60 km/h, ¿cuánto recorrerá en 2.5 horas?",
            options: [
              { text: "150 km", value: true, color: "purple" },
              { text: "140 km", value: false, color: "purple" },
              { text: "160 km", value: false, color: "purple" }
            ],
            explanation: "60 km/h × 2.5 h = 150 km"
          },
          {
            text: "Si 3 lápices cuestan $9, ¿cuánto cuestan 7 lápices?",
            options: [
              { text: "$21", value: true, color: "purple" },
              { text: "$18", value: false, color: "purple" },
              { text: "$24", value: false, color: "purple" }
            ],
            explanation: "Si 3 lápices = $9, entonces 1 lápiz = $3. Por lo tanto, 7 lápices = $21"
          },
          {
            text: "Juan tiene el doble de la edad de María. Si María tiene 15 años, ¿cuántos años tendrá Juan en 5 años?",
            options: [
              { text: "35 años", value: true, color: "purple" },
              { text: "30 años", value: false, color: "purple" },
              { text: "40 años", value: false, color: "purple" }
            ],
            explanation: "Juan tiene 30 años (doble de 15). En 5 años tendrá 35 años"
          },
          {
            text: "En una biblioteca, 1/3 de los libros son de historia, 1/4 son de ciencia y el resto son de literatura. ¿Qué fracción son los libros de literatura?",
            options: [
              { text: "5/12", value: true, color: "purple" },
              { text: "1/2", value: false, color: "purple" },
              { text: "7/12", value: false, color: "purple" }
            ],
            explanation: "1/3 + 1/4 = 4/12 + 3/12 = 7/12. Por lo tanto, queda 5/12 para literatura"
          }
        ]
      }
    };
  },
  computed: {
    currentQuestions() {
      return this.questionsByCategory[this.selectedCategory] || [];
    }
  },
  methods: {
    selectCategory(index) {
      this.selectedCategory = index;
      this.categorySelected = true;
      this.resetQuiz();
    },
    selectAnswer(option) {
      if (this.answered) return;
      
      this.answered = true;
      this.isCorrect = option.value;
      
      if (this.isCorrect) {
        this.score++;
        this.feedbackMessage = "¡Correcto! ¡Muy bien!";
      } else {
        this.feedbackMessage = `Incorrecto. La respuesta correcta es: ${
          this.currentQuestions[this.currentQuestion].options.find(opt => opt.value).text
        }`;
      }

      this.answers[this.currentQuestion] = {
        selected: option.text,
        correct: option.value,
        correct_answer: this.currentQuestions[this.currentQuestion].options.find(opt => opt.value).text
      };
    },
    nextQuestion() {
      if (this.currentQuestion < this.currentQuestions.length - 1) {
        this.currentQuestion++;
        this.answered = false;
        this.feedbackMessage = '';
      }
    },
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
        this.answered = this.answers[this.currentQuestion] !== undefined;
        this.feedbackMessage = '';
      }
    },
    finishQuiz() {
      this.isQuizFinished = true;
      this.grade = Math.ceil((this.score / this.currentQuestions.length) * 5);
    },
    resetQuiz() {
      this.currentQuestion = 0;
      this.score = 0;
      this.grade = 0;
      this.isQuizFinished = false;
      this.answered = false;
      this.feedbackMessage = '';
      this.answers = [];
    },
    resetCategory() {
      this.categorySelected = false;
      this.selectedCategory = null;
      this.resetQuiz();
    }
  }
};
</script>

<style scoped>
.category-card {
  cursor: pointer;
  transition: all 0.3s ease;
}
.category-card:hover {
  transform: translateY(-5px);
}
.v-list-item {
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #f5f5f5;
}
.v-btn {
  text-transform: none !important;
}

.question-text {
  white-space: normal !important;
  line-height: 1.5;
  word-wrap: break-word;
  height: auto !important;
  min-height: 64px;
}

.v-card-title {
  display: block !important;
  padding: 16px !important;
}
</style>
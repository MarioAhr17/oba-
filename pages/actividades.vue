<template>
    <v-container>
      <v-card class="pa-6 rounded-lg elevation-3">
        <v-card-title class="text-h4 text-center text-primary">Actividades de Matemáticas</v-card-title>
        <v-divider class="my-4"></v-divider>
  
        <!-- Pregunta 1: Principios de Fracciones -->
        <v-card outlined class="mb-4 rounded-lg elevation-1">
          <v-card-title class="text-h6">1. ¿Qué fracción representa la mitad de 1 entero?</v-card-title>
          <v-card-text>
            <v-row class="mt-3">
              <v-col cols="12" md="4">
                <v-btn block color="blue lighten-2" class="rounded-pill" @click="checkAnswer('fractions', '1/2')">
                  1/2
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="blue lighten-2" class="rounded-pill" @click="checkAnswer('fractions', '1/3')">
                  1/3
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="blue lighten-2" class="rounded-pill" @click="checkAnswer('fractions', '2/3')">
                  2/3
                </v-btn>
              </v-col>
            </v-row>
            <v-alert v-if="feedback.fractions" type="info" class="mt-4 rounded-pill">
              {{ feedback.fractions }}
            </v-alert>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 2: Potenciación -->
        <v-card outlined class="mb-4 rounded-lg elevation-1">
          <v-card-title class="text-h6">2. ¿Cuánto es 2<sup>3</sup>?</v-card-title>
          <v-card-text>
            <v-row class="mt-3">
              <v-col cols="12" md="4">
                <v-btn block color="green lighten-2" class="rounded-pill" @click="checkAnswer('powers', 6)">
                  6
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="green lighten-2" class="rounded-pill" @click="checkAnswer('powers', 8)">
                  8
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="green lighten-2" class="rounded-pill" @click="checkAnswer('powers', 9)">
                  9
                </v-btn>
              </v-col>
            </v-row>
            <v-alert v-if="feedback.powers" type="info" class="mt-4 rounded-pill">
              {{ feedback.powers }}
            </v-alert>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 3: Matemática básica -->
        <v-card outlined class="mb-4 rounded-lg elevation-1">
          <v-card-title class="text-h6">3. Si tienes 8 manzanas y das 3, ¿cuántas quedan?</v-card-title>
          <v-card-text>
            <v-row class="mt-3">
              <v-col cols="12" md="4">
                <v-btn block color="pink lighten-2" class="rounded-pill" @click="checkAnswer('basicMath', 5)">
                  5
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="pink lighten-2" class="rounded-pill" @click="checkAnswer('basicMath', 6)">
                  6
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="pink lighten-2" class="rounded-pill" @click="checkAnswer('basicMath', 4)">
                  4
                </v-btn>
              </v-col>
            </v-row>
            <v-alert v-if="feedback.basicMath" type="info" class="mt-4 rounded-pill">
              {{ feedback.basicMath }}
            </v-alert>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 4: Fracciones -->
        <v-card outlined class="mb-4 rounded-lg elevation-1">
          <v-card-title class="text-h6">4. ¿Qué fracción representa tres cuartos?</v-card-title>
          <v-card-text>
            <v-row class="mt-3">
              <v-col cols="12" md="4">
                <v-btn block color="purple lighten-2" class="rounded-pill" @click="checkAnswer('fractions', '3/4')">
                  3/4
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="purple lighten-2" class="rounded-pill" @click="checkAnswer('fractions', '2/4')">
                  2/4
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="purple lighten-2" class="rounded-pill" @click="checkAnswer('fractions', '1/4')">
                  1/4
                </v-btn>
              </v-col>
            </v-row>
            <v-alert v-if="feedback.fractions" type="info" class="mt-4 rounded-pill">
              {{ feedback.fractions }}
            </v-alert>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 5: Potenciación -->
        <v-card outlined class="mb-4 rounded-lg elevation-1">
          <v-card-title class="text-h6">5. ¿Cuánto es 3<sup>2</sup>?</v-card-title>
          <v-card-text>
            <v-row class="mt-3">
              <v-col cols="12" md="4">
                <v-btn block color="orange lighten-2" class="rounded-pill" @click="checkAnswer('powers', 9)">
                  9
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="orange lighten-2" class="rounded-pill" @click="checkAnswer('powers', 6)">
                  6
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="orange lighten-2" class="rounded-pill" @click="checkAnswer('powers', 12)">
                  12
                </v-btn>
              </v-col>
            </v-row>
            <v-alert v-if="feedback.powers" type="info" class="mt-4 rounded-pill">
              {{ feedback.powers }}
            </v-alert>
          </v-card-text>
        </v-card>
  
        <!-- Pregunta 6: Matemática básica -->
        <v-card outlined class="mb-4 rounded-lg elevation-1">
          <v-card-title class="text-h6">6. Si tienes 10 manzanas y das 7, ¿cuántas quedan?</v-card-title>
          <v-card-text>
            <v-row class="mt-3">
              <v-col cols="12" md="4">
                <v-btn block color="red lighten-2" class="rounded-pill" @click="checkAnswer('basicMath', 3)">
                  3
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="red lighten-2" class="rounded-pill" @click="checkAnswer('basicMath', 2)">
                  2
                </v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block color="red lighten-2" class="rounded-pill" @click="checkAnswer('basicMath', 1)">
                  1
                </v-btn>
              </v-col>
            </v-row>
            <v-alert v-if="feedback.basicMath" type="info" class="mt-4 rounded-pill">
              {{ feedback.basicMath }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        feedback: {
          fractions: null,
          powers: null,
          basicMath: null,
        },
      };
    },
    methods: {
      checkAnswer(category, selectedAnswer) {
        if (category === "fractions") {
          this.feedback.fractions =
            selectedAnswer === "1/2"
              ? "¡Correcto! La mitad de 1 es 1/2."
              : selectedAnswer === "3/4"
              ? "¡Correcto! Tres cuartos es 3/4."
              : "Incorrecto. Piensa en dividir 1 en partes iguales.";
        } else if (category === "powers") {
          this.feedback.powers =
            selectedAnswer === 8
              ? "¡Correcto! 2 elevado a la 3 es 8."
              : selectedAnswer === 9
              ? "¡Correcto! 3 elevado a la 2 es 9."
              : "Incorrecto. Recuerda que 2<sup>3</sup> significa 2 × 2 × 2.";
        } else if (category === "basicMath") {
          this.feedback.basicMath =
            selectedAnswer === 5
              ? "¡Correcto! Si das 3 manzanas de 8, te quedan 5."
              : selectedAnswer === 3
              ? "¡Correcto! Si das 7 manzanas de 10, te quedan 3."
              : "Incorrecto. Resta correctamente: 10 - 7.";
        }
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
  </style>
  
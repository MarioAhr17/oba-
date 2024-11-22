<template>
    <v-container>
      <v-card class="pa-4">
        <v-card-title class="text-h5">Actividades</v-card-title>
        <v-divider class="my-4"></v-divider>
  
        <!-- Contenido de la actividad -->
        <v-card-text>
          <p>Bienvenido a la página de actividades. Resuelve esta pregunta:</p>
          <p><strong>¿Cuánto es 5 x 3?</strong></p>
  
          <v-row>
            <v-col cols="12" md="4">
              <v-btn block color="primary" @click="checkAnswer(15)">15</v-btn>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn block color="primary" @click="checkAnswer(10)">10</v-btn>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn block color="primary" @click="checkAnswer(20)">20</v-btn>
            </v-col>
          </v-row>
  
          <!-- Retroalimentación -->
          <v-alert v-if="feedback" type="info" class="mt-4">
            {{ feedback }}
          </v-alert>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        feedback: null,
      };
    },
    methods: {
      checkAnswer(selectedAnswer) {
        if (selectedAnswer === 15) {
          this.feedback = "¡Correcto! 5 x 3 es 15.";
        } else {
          this.feedback = "Incorrecto, intenta de nuevo.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  
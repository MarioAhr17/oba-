<template>

    <div>
      <v-app-bar 
        image="https://www.ipler.edu.co/wp-content/uploads/2022/08/estudiar_matematicas-1.png"
        dark
        height="150"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title  
        ><h1>Refuerzo Matemático</h1></v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        
      </v-app-bar>
      
    </div>
  </template>
  <script>
  export default {
    props:{
      productos : Array,
    }
  }
  </script>
  <style scoped>

  h1{
    text-align: left;
  }
   
  </style>
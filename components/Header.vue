<template>
    <header class="header">
      <div class="header-content">
        <img src="https://pbs.twimg.com/profile_images/722809829048389633/bH1Tfh8B_400x400.jpg" alt="80 px" class="header-logo" />
        <h1>{{ titulo }}</h1>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
    data() {
      return {
        titulo: "Refuerzo Matemático: Principios y Pensamiento Lógico",
      };
    },
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #f5f5f5;
    padding: 10px 20px;
    text-align: center;
    border-bottom: 2px solid #ccc;
  }
  
  .header-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }
  
  .header-logo {
    width: 60px;
    height: 60px;
  }
  
  h1 {
    font-size: 1.8rem;
    color: #333;
    text-align: center;
  }
  </style>
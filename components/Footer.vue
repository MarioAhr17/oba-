<template>
    <footer class="footer">
      <div class="footer-content">
        <img src="https://www.pikpng.com/pngl/b/430-4309318_university-of-crdoba-escudo-universidad-de-cordoba-clipart.png" alt="70px" class="footer-logo" />
        <p>Universidad De Córdoba - Matemáticas - Docente: Marina Bedoya</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
    border-top: 2px solid #ccc;
  }
  
  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  
  .footer-logo {
    width: 40px;
    height: 40px;
  }
  </style>
<template>
  <div class="layout">
    <nav class="navbar">
      <div class="nav-links">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        <router-link to="/objetivos" class="nav-link">Objetivos</router-link>
        <router-link to="/contenidos" class="nav-link">Contenidos</router-link>
        <router-link to="/operaciones" class="nav-link">Operaciones Básicas</router-link>
        <router-link to="/geometria" class="nav-link">Geometría</router-link>
        <router-link to="/fracciones" class="nav-link">Fracciones</router-link>
        <router-link to="/pensamiento-logico" class="nav-link">Pensamiento Lógico</router-link>
        <router-link to="/actividades" class="nav-link">Evaluación</router-link>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.navbar {
  background-color: #4CAF50;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.nav-link:hover {
  background-color: #45a049;
}

.main-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-link {
    width: 100%;
    text-align: center;
  }
}
</style>

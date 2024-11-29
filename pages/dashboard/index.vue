<template>
  <div class="dashboard">
      <!-- Barra de navegación superior -->
      <nav class="navbar">
          <div class="nav-content">
              <div class="nav-item" @click="$router.push('/actividades')">
                  <i class="fas fa-book"></i>
                  <span>Actividades</span>
              </div>
              <div class="nav-item" @click="$router.push('/objetivos')">
                  <i class="fas fa-bullseye"></i>
                  <span>Objetivos</span>
              </div>
              <div class="nav-item" @click="$router.push('/contenidos')">
                  <i class="fas fa-folder"></i>
                  <span>Contenidos</span>
              </div>
              <div class="nav-item" @click="$router.push('/operaciones')">
                  <i class="fas fa-calculator"></i>
                  <span>Operaciones</span>
              </div>
              <div class="nav-item" @click="$router.push('/geometria')">
                  <i class="fas fa-shapes"></i>
                  <span>Geometría</span>
              </div>
              <div class="nav-item" @click="$router.push('/fracciones')">
                  <i class="fas fa-divide"></i>
                  <span>Fracciones</span>
              </div>
              <div class="nav-item" @click="$router.push('/pensamiento-logico')">
                  <i class="fas fa-brain"></i>
                  <span>P. Lógico</span>
              </div>
          </div>
      </nav>

      <!-- Contenido de bienvenida -->
      <div class="welcome-section">
          <h1>¡Bienvenido al Mundo de las Matemáticas!</h1>
          <p class="welcome-text">
              Aquí podrás aprender y practicar diferentes temas matemáticos de forma divertida.
              Elige una actividad para comenzar tu aventura de aprendizaje.
          </p>
      </div>

      <!-- Sección de información -->
      <div class="info-section">
          <div class="info-card">
              <div class="info-icon">
                  <i class="fas fa-info-circle"></i>
              </div>
              <h3>¿Cómo empezar?</h3>
              <ul class="info-list">
                  <li>Selecciona cualquier actividad que te interese</li>
                  <li>Practica a tu propio ritmo</li>
                  <li>Gana puntos y mejora tus habilidades</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<style scoped>
.navbar {
  background: #4CAF50;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-item {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-item i {
  font-size: 1.5rem;
}

.nav-item span {
  font-size: 0.9rem;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.welcome-section {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.welcome-section h1 {
  color: white;
  margin-bottom: 15px;
  font-size: 2.2rem;
}

.welcome-text {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.info-section {
  margin: 30px 0;
}

.info-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.info-icon {
  color: #4CAF50;
  font-size: 2rem;
  margin-bottom: 15px;
}

.info-card h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.info-list {
  list-style-type: none;
  padding: 0;
}

.info-list li {
  padding: 10px 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-list li::before {
  content: "•";
  color: #4CAF50;
  font-weight: bold;
  font-size: 1.5rem;
}

.help-section {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 12px;
}

.help-text {
  color: #666;
  font-size: 1rem;
}
</style>

<script>
export default {
  name: 'DashboardPage',
}
</script>
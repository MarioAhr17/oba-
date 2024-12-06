<template>
  <div class="landing-page">
      <!-- Hero Section -->
      <div class="hero-section">
          <div class="hero-content">
              <h1 class="hero-title">
                  <span class="highlight">Matemáticas</span> Interactivas
              </h1>
              <p class="hero-subtitle">
                  Aprende y practica matemáticas de una manera divertida y efectiva
              </p>
              
              <div class="project-info">
                <p> Materia: Matematicas</p>
                  <p><strong>Docente:</strong> Marina Bedoya</p>
                  <p><strong>Integrantes:</strong> Mario Hernandez, Moises Bedoya, Luis Gonzalez </p>
              </div>

              <button @click="comenzar" class="cta-button">
                  Comenzar Aventura
                  <i class="fas fa-rocket"></i>
              </button>
          </div>
          <div class="hero-image">
              <div class="math-illustration">
                  <div class="math-symbol plus">+</div>
                  <div class="math-symbol minus">−</div>
                  <div class="math-symbol multiply">×</div>
                  <div class="math-symbol divide">÷</div>
                  <div class="math-symbol equals">=</div>
              </div>
          </div>
      </div>

      <!-- Features Section -->
      <div class="features-section">
          <h2 class="section-title">¿Qué aprenderás?</h2>
          
          <div class="features-grid">
              <div class="feature-card">
                  <div class="feature-icon">
                      <CalculatorIcon class="icon" />
                  </div>
                  <h3>Operaciones Básicas</h3>
                  <p>Suma, resta, multiplicación y división de manera interactiva</p>
              </div>

              <div class="feature-card">
                  <div class="feature-icon">
                      <ChartPieIcon class="icon" />
                  </div>
                  <h3>Fracciones</h3>
                  <p>Aprende a identificar y comparar fracciones visualmente</p>
              </div>

              <div class="feature-card">
                  <div class="feature-icon">
                      <LightBulbIcon class="icon" />
                  </div>
                  <h3>Pensamiento Lógico</h3>
                  <p>Desarrolla tu capacidad de razonamiento con ejercicios prácticos</p>
              </div>
          </div>
      </div>

      <!-- Footer -->
      <div class="footer-section">
          <p>¡Explora el mundo de las matemáticas de una manera diferente!</p>
      </div>
  </div>
</template>

<script>
import { CalculatorIcon, ChartPieIcon, LightBulbIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'LandingPage',
  components: {
      CalculatorIcon,
      ChartPieIcon,
      LightBulbIcon
  },
  methods: {
      comenzar() {
          this.$router.push('/dashboard')
      }
  }
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 8%;
  min-height: 80vh;
  background: linear-gradient(45deg, #4CAF50 0%, #45a049 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.hero-content {
  flex: 1;
  color: white; 
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
}

.highlight {
  color: #FFD700;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.cta-button {
  background: #FFD700;
  color: #333;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  background: #FFE44D;
}

/* Features Section */
.features-section {
  padding: 80px 8%;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.icon {
  width: 100%;
  height: 100%;
  color: white;
}

.feature-card h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Footer Section */
.footer-section {
  text-align: center;
  padding: 40px 8%;
  background: linear-gradient(45deg, #4CAF50 0%, #45a049 100%);
  color: white;
}

.footer-section p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Math Illustration Styles */
.math-illustration {
  position: relative;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
}

.math-symbol {
  position: absolute;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.plus {
  top: 20%;
  left: 20%;
  animation: spin 20s linear infinite;
}

.minus {
  top: 20%;
  right: 20%;
  animation: spin 20s linear infinite -5s;
}

.multiply {
  bottom: 20%;
  left: 20%;
  animation: spin 20s linear infinite -10s;
}

.divide {
  bottom: 20%;
  right: 20%;
  animation: spin 20s linear infinite -15s;
}

.equals {
  font-size: 4rem;
  animation: float 6s ease-in-out infinite;
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-section {
      flex-direction: column;
      text-align: center;
      padding: 40px 5%;
  }

  .hero-image {
      margin: 40px 0 0;
  }

  .hero-title {
      font-size: 2.5rem;
  }

  .features-grid {
      grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
      font-size: 2rem;
  }

  .hero-subtitle {
      font-size: 1.2rem;
  }

  .section-title {
      font-size: 2rem;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg) translateX(50px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(50px) rotate(-360deg);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.project-info {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    color: white;
}

.project-info h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.project-info p {
    margin: 5px 0;
    font-size: 1.1rem;
}
</style>

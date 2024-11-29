<template>
  <div>
      <!-- Barra de navegación -->
      <nav class="navbar">
          <div class="nav-content">
              <NuxtLink to="/dashboard" class="nav-link">
                  <i class="fas fa-home"></i>
                  Dashboard
              </NuxtLink>
              <NuxtLink to="/geometria" class="nav-link">
                  <i class="fas fa-shapes"></i>
                  Geometría
              </NuxtLink>
              <NuxtLink to="/pensamiento-logico" class="nav-link">
                  <i class="fas fa-brain"></i>
                  Pensamiento Lógico
              </NuxtLink>
              <NuxtLink to="/fracciones" class="nav-link">
                  <i class="fas fa-divide"></i>
                  Fracciones
              </NuxtLink>
          </div>
      </nav>

      <!-- Contenido de la página -->
      <slot />
  </div>
</template>

<style scoped>
.navbar {
  background: #4CAF50;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link i {
  font-size: 1.2rem;
}

/* Estilo para el link activo */
.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  font-weight: 500;
}

@media (max-width: 768px) {
  .nav-link {
      flex-direction: column;
      font-size: 0.8rem;
      padding: 8px;
      text-align: center;
  }

  .nav-link i {
      font-size: 1.4rem;
  }
}
</style>

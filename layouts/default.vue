<template>
  <v-layout class="rounded rounded-md">
    <cabezote></cabezote>

    <v-navigation-drawer>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="Objetivos" to="/objetivos"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="Contenidos" to="/contenidos"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="Actividades" to="/actividades"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    
    <v-main class="d-flex align-center justify-center" style="min-height: 10px;">
      <nuxt />
    </v-main>
  </v-layout>
</template>

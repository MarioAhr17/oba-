<template>
  <v-layout class="rounded rounded-md">
    <cabezote></cabezote>

    <v-navigation-drawer>
<<<<<<< Updated upstream
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="Objetivos" to="/objetivos"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="Yo" to="/yo"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 10px;">
      <slot />
=======
    
      <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" ></v-list-item>
          <v-list-item 
  prepend-icon="mdi-forum" 
  title="Objetivos" 
  to="/objetivos"
></v-list-item>

          <v-list-item prepend-icon= "mdi-forum" title="yo" value="yo"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 20px;">
     
      <slot 
      /> 
>>>>>>> Stashed changes
    </v-main>
  </v-layout>
</template>

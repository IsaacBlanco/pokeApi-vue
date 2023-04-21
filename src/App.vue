<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
  <div class="container">
    <RouterLink to="/" class="navbar-brand">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Pokemon API
    </RouterLink>
    <div class="" id="navbarNav">
          <RouterLink class="btn btn-outline-primary m-2" to="/">Home</RouterLink>
          <RouterLink class="btn btn-outline-primary m-2" to="/pokemons">Pokemons</RouterLink>
    </div>
  </div>
</nav>
  <header>
   
  </header>

  <div class="container text-center">
    <RouterView />
  </div>
</template>

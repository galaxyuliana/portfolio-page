<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Profile</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
        <RouterLink to="/company">Company</RouterLink>
        <RouterLink to="/project">Project</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>

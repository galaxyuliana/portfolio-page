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
  <footer>
    <div class="wrapper">
      <a href="mailto:yulianashin613@gmail.com">
        <font-awesome-icon :icon="['far', 'envelope']" />
      </a>
      <a href="https://github.com/galaxyuliana">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="https://github.com/galaxyuliana/portfolio-page">
        <font-awesome-icon :icon="['far', 'file-code']" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/style.module.scss";
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Task Management System</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #243547;
  color: #fff;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 100vh;
}

.wrapper {
  width: 90%;
  margin: 0 auto;
}

nav {
  text-align: center;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>

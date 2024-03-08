<template>
  <div class="home">
    <!-- Use router-link to navigate to the create task page -->
    <router-link class="button" to="/"> Tasks </router-link>
    <TaskItemUpload />
  </div>
</template>

<script setup>
import TaskItemUpload from '@/components/TaskItemUpload.vue';

</script>

<style scoped>
.home {
  padding: 20px;
}

button {
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.create-button {
  margin-bottom: 20px;
}
</style>


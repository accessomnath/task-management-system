<template>
  <div class="home">
  <div class="homeMenulike">
    <!-- Use router-link to navigate to the create task page -->
    <router-link class="create-button" to="/create-task">Create Task</router-link>
    <router-link class="create-button" to="/upload">Upload Task</router-link>
  </div>
    <TaskItemList />
  </div>
</template>

<script setup>
import TaskItemList from '@/components/TaskItemList.vue';
</script>

<style scoped>
.home {
  padding: 20px;
}
.homeMenulike{
  padding-bottom: 20px;
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
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #212661;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>


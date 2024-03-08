<template>
  <div class="edit-task">
    <h2>Edit Task</h2>
    <form @submit.prevent="submitTask">
      <div>
        <label>Title:</label>
        <input type="text" v-model="task.title" required>
      </div>
      <div>
        <label>Description:</label>
        <textarea v-model="task.description" required></textarea>
      </div>
      <div>
        <label>Status:</label>
        <select v-model="task.status" required>
  <option :value="status" v-for="(status, index) in ['Incomplete', 'Completed']" :key="index">{{ status }}</option>
</select>

      </div>
      <div>
        <label>PDF Path:</label>
        <input type="file" @change="handleFileUpload" accept=".pdf">
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button" @click="cancelEdit">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const id = route.params.id;
const task = ref({}); // Initialize task as an empty object

// Function to fetch the task data based on the id
const fetchTask = async () => {
  try {
    const response = await fetch(`http://localhost:5001/task/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch task');
    }
    const data = await response.json();
    task.value = data.task; // Set the fetched task data
  } catch (error) {
    console.error('Error fetching task:', error);
  }
};

// Fetch the task data when the component is mounted
onMounted(() => {
  fetchTask();
});

// Function to handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  task.value.pdf_path = file; // Set the uploaded file to the task object
};

// Function to submit the edited task
const submitTask = async () => {
  try {
    const formData = new FormData();
    formData.append('title', task.value.title);
    formData.append('description', task.value.description);
    formData.append('status', task.value.status);
    formData.append('pdf_path', task.value.pdf_path);

    const response = await fetch(`http://localhost:5001/tasks/${task.value.id}`, {
      method: 'PUT',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to edit task');
    }

    alert('Task updated successfully!');
    router.push('/');
  } catch (error) {
    console.error('Error editing task:', error);
    alert('Failed to edit task. Please try again.');
  }
};

// Function to cancel editing the task
const cancelEdit = () => {
  router.push('/');
};
</script>

<style scoped>
/* Add CSS styles for the edit-task component */
.edit-task {
  padding: 20px;
}

.edit-task form {
  margin-top: 20px;
}

.edit-task label {
  margin-bottom: 5px;
}

.edit-task input,
.edit-task textarea,
.edit-task select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.edit-task button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-task button[type="submit"] {
  background-color: #45a049;
}

.edit-task button[type="button"] {
  margin-right: 10px;
  background-color: #f44336;
}

.edit-task button:hover {
  background-color: #45a049;
}
</style>

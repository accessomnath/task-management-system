<template>
  <div class="create-task">
    <h2>Create Task</h2>
    <form @submit.prevent="submitTask">
      <div>
        <label>Title:</label>
        <input type="text" v-model="newTask.title" required>
      </div>
      <div>
        <label>Description:</label>
        <textarea v-model="newTask.description" required></textarea>
      </div>
      <div>
        <label>Status:</label>
        <select v-model="newTask.status" required>
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label>PDF Path:</label>
        <input type="file" @change="handleFileUpload" accept=".pdf">
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button" @click="cancelCreate">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const newTask = ref({
  title: '',
  description: '',
  status: '',
  pdf_path: null, // Reference to the uploaded PDF file
});

// Function to handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  newTask.value.pdf_path = file; // Set the uploaded file to the newTask object
};

// Function to submit new task
const submitTask = async () => {
  try {
    const formData = new FormData();
    formData.append('title', newTask.value.title);
    formData.append('description', newTask.value.description);
    formData.append('status', newTask.value.status);
    formData.append('pdf_path', newTask.value.pdf_path);

    const response = await fetch('http://localhost:5001/tasks', {
      method: 'PATCH',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    newTask.value = {
      title: '',
      description: '',
      status: '',
      pdf_path: null,
    };
    alert('Task created successfully!');
    router.push('/');
  } catch (error) {
    console.error('Error creating task:', error);
    alert('Failed to create task. Please try again.');
  }
};

// Function to cancel creating a task
const cancelCreate = () => {
  newTask.value = {
    title: '',
    description: '',
    status: '',
    pdf_path: null,
  };
  router.push('/');
};
</script>

<style scoped>
.create-task {
  padding: 20px;
}

.create-task form {
  margin-top: 20px;
}

.create-task label {
  margin-bottom: 5px;
}

.create-task input,
.create-task textarea,
.create-task select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.create-task button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.create-task button[type="submit"] {
  background-color: #45a049;
}

.create-task button[type="button"] {
  margin-right: 10px;
  background-color: #f44336;
}

.create-task button:hover {
  background-color: #45a049;
}
</style>

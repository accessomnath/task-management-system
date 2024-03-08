

<template>
  <div class="create-task">
    <h2>Create bulk Task</h2>
    <form @submit.prevent="submitTask">
      <div>
        <label>Excel File Path:</label>
        <input type="file" @change="handleFileUpload" accept=".xlsx">
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
  excel_path: null, // Reference to the uploaded Excel file
});

// Function to handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  newTask.value.excel_path = file; // Set the uploaded file to the newTask object
};

// Function to submit new task
const submitTask = async () => {
  try {
    const formData = new FormData();
    formData.append('excel_path', newTask.value.excel_path);

    const response = await fetch('http://localhost:5001/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    newTask.value = {
      excel_path: null,
    };
    alert('Tasks created successfully!');
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
    excel_path: null,
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

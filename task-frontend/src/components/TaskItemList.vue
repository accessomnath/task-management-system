<template>
  <div class="TaskItemList">
    <ul>
      <li v-for="(task, index) in taskList" :key="index">
        <div>{{ task.title }}</div>
        <div>{{ task.description }}</div>
        <div>Status: {{ task.status }}</div>
        <div>
          <button @click="downloadFile(task.pdf_path, 'PDF')">Download PDF</button>
          <button v-if="task.excel_path" @click="downloadFile(task.excel_path, 'Excel')">Download Excel</button>
          <button @click="editTask(task)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const taskList = ref([]); 


const fetchTasks = async () => {
  try {
    const response = await fetch('http://localhost:5001/tasks'); 
    if (!response.ok) {
      throw new Error('Failed to fetch task data');
    }
    const data = await response.json();
    taskList.value = data.taskList; 
  } catch (error) {
    console.error('Error fetching task data:', error);
  }
};

// Function to edit a task
const editTask = (task) => {
  router.push('/edit-task/'+task.id);
};

// Function to delete a task
const deleteTask = async (taskId) => {
  try {
    const confirmed = confirm('Are you sure you want to delete this task permanently?');
    if (!confirmed) return; 

    const response = await fetch(`http://localhost:5001/tasks/${taskId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
   
    taskList.value = taskList.value.filter(task => task.id !== taskId);
    alert('Task deleted successfully!');
  } catch (error) {
    console.error('Error deleting task:', error);
  }

};

const downloadFile = async(filePath, fileType) =>{
      // Check if filePath is not null or empty
      if (filePath) {
        // Construct the URL for downloading the file
        const downloadUrl = filePath;
        // Open the file in a new tab
        window.open(downloadUrl, '_blank');
      } else {
        // File path is not available
        alert(`${fileType} file not available for this task.`);
      }
}

// Fetch task data when component is mounted
onMounted(() => {
  fetchTasks();
});

</script>

<style scoped>
/* Add CSS styles for the TaskItemList component */

.TaskItemList {
  font-family: Arial, sans-serif;
}

.TaskItemList ul {
  list-style-type: none;
  padding: 0;
}

.TaskItemList li {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.TaskItemList li div {
  margin-bottom: 10px;
}

.TaskItemList li div:first-child {
  font-size: 18px;
  font-weight: bold;
}

.TaskItemList li div:nth-child(2) {
  color: #666;
}

.TaskItemList li div:nth-child(3) {
  font-style: italic;
}

.TaskItemList button {
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
  background-color: #2e4967;
  color: #fff;
}

.TaskItemList button:hover {
  background-color: #0056b3;
}
</style>

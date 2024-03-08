import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task',
      component: () => import('../views/TaskManagementView.vue')
    },
    {
      path: '/create-task',
      name: 'create-task',
      component: () => import('../views/CreateTaskView.vue')
    },
    {
      path: '/edit-task/:id',
      name: 'edit-task',
      component: () => import('../views/EditTaskView.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadTaskView.vue')
    }
  ]
})

export default router

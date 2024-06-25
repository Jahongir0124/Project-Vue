// Routers
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Login from './app/Login.vue';
import Dashboard from './app/Dashboard.vue';
import Logout from './app/Logout.vue';
import Profile from './app/Profile.vue';
import Admin from './app/Admin.vue';
import Task from './app/Task.vue';
import TaskDetail from './app/TasksDetail.vue';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout, name: 'logout' },
    {path: '/profile-teacher', component: Profile, name: 'profile'},
    {path: '/admin', component: Admin},
    {path: '/task-create', component: Task, name: 'task-create'},
    {path: '/task-detail/:id', component: TaskDetail, name: 'task-detail'}
    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
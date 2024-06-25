<!-- Login.vue || path: /login -->

<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button @click="login" type="submit">Login</button>
      </form>
      <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '../router.js';
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: '',
       
      };
    },
    methods: {
    
      async login() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login/', {
            username: this.username,
            password: this.password
          });
          
          
          const accessToken = response.data.access;
          localStorage.setItem('accessToken', accessToken);
          if (response.data.teacher) {
            router.push('/profile-teacher');
          }
          else if (response.data.student) {
            router.push("/");
          }
          else if (response.data.is_staff) {
            router.push('/admin');
          }
          else {
            console.log("Nothing");
          }

          
        } catch (error) {
          this.error = 'Login failed. Please check your credentials.';
          
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"],
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    margin-top: 10px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
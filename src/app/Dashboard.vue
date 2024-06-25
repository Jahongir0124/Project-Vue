<!-- Dashboard Students -->

<template>
    <div v-if="isLoggedIn">
      <div class="dashboard">
        <h1>Fullname: {{  apiData.fullName }}</h1>
        
        <div class="widget">
          <h2>Group: {{  apiData.group  }}</h2>
        </div>
     
        

        <router-link :to="{name: 'logout'}" class="btn btn-primary">Logout</router-link>
        <table class="table caption-top">
                <thead>
                    <tr>
                    <th scope="col">Course</th>
                    <th scope="col">Group</th>
                    <th scope="col">Tasks</th>
                    </tr>
                </thead>
                <tbody v-for="item in apiData.courses" :key="item.id">


                    <tr>
                    <td>{{ item.name }}</td>
                    <td>{{ item.group }}</td>
                    <td><button @click="seeTask(item.id)" class="btn btn-primary">See Task</button></td>
                    </tr>
                </tbody>
                </table>
      </div>
    </div>
    <div v-else>
      <p>Please log in to access the dashboard.</p>
      
    </div>
  
     
    </template>
    <script>
  import router from '../router.js';
  
    export default {
      data() {
        return {
          isLoggedIn: false,
          dataLoaded: false,
          apiData: []
        };
      },
      created() {
        this.checkLoginStatus();
        this.fetchData();
      },
      methods: {
        async checkLoginStatus() {
          try {
           
            const response = await fetch('http://localhost:8000/api/dashboard-student/', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            });
            if (response.ok) {
              this.isLoggedIn = true;
            } else {
              this.isLoggedIn = false;
              router.push('/login');
            }
          } catch (error) {
            console.error('Error checking login status:', error);
            this.isLoggedIn = false;
          }
        },
        async fetchData() {
          try {
            const response = await fetch('http://localhost:8000/api/dashboard-student/', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            });
            if (response.ok) {
              const data = await response.json();
              this.apiData = data;
              this.dataLoaded = true;
            } else {
              console.error('Failed to fetch data:', response.status);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        seeTask(id) {
          this.$router.push(`/task-detail/${id}`);
        }
      }
    };
    </script>

    
    <style scoped>
    .dashboard {
      padding: 20px;
    }
    
    .widget {
      margin-bottom: 20px;
      padding: 10px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    .chart {
      margin-bottom: 20px;
      padding: 20px;
      background-color: #f8f8f8;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    .data-table {
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    </style>
    
<!-- Profile Teacher -->

<template>
   
    <div class="container">
        <div class="team-single">
        <div class="row">
            <div class="col-lg-4 col-md-5 xs-margin-30px-bottom">
                <div class="team-single-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="">
                </div>     
            </div>
            <div class="col-lg-8 col-md-7">
                <div class="team-single-text padding-50px-left sm-no-padding-left">
                    <h4 class="font-size38 sm-font-size32 xs-font-size30">{{data.fullName }}</h4>
                   
                    
                    <div class="contact-info-section margin-40px-tb">
                        <ul class="list-style9 no-margin">
                            <li>

                                <div class="row">
                                    <div class="col-md-5 col-5">
                                        <i class="fas fa-graduation-cap text-orange"></i>
                                        <strong class="margin-10px-left text-orange">Degree:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                        <p>{{ data.degree }}</p>
                                    </div>
                                </div>

                            </li>
                            <li>

                                <div class="row">
                                    <div class="col-md-5 col-5">
                                        <i class="far fa-gem text-yellow"></i>
                                        <strong class="margin-10px-left text-yellow">Exp.:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                        <p>4 Year in Education</p>
                                    </div>
                                </div>

                            </li>
                           
                            <li>

                                <div class="row">
                                    <div class="col-md-5 col-5">
                                        <i class="fas fa-map-marker-alt text-green"></i>
                                        <strong class="margin-10px-left text-green">Address:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                        <p>Regina ST, London, SK.</p>
                                    </div>
                                </div>

                            </li>
                            <li>

                                <div class="row">
                                    <div class="col-md-5 col-5">
                                        <i class="fas fa-mobile-alt text-purple"></i>
                                        <strong class="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                        <p>(+44) 123 456 789</p>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="row">
                                    <div class="col-md-5 col-5">
                                        <i class="fas fa-envelope text-pink"></i>
                                        <strong class="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                        <p><a href="javascript:void(0)">addyour@emailhere</a></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <router-link :to="{name: 'task-create'}" class="btn btn-primary">Add Task</router-link>
                    <router-link :to="{name: 'logout'}" class="btn btn-primary">Logout</router-link>
                    <h5 class="font-size24 sm-font-size22 xs-font-size20">Courses</h5> 
                    
            <table class="table caption-top">
                <thead>
                    <tr>
                    <th scope="col">Course</th>
                    <th scope="col">Group</th>
                    <th scope="col">Tasks</th>
                    </tr>
                </thead>
                <tbody v-for="item in data.course" :key="item.id">

                    <tr>
                    <td>{{ item.name }}</td>
                    <td>{{ item.group }}</td>
                    <td><button @click="fetchData(123)" class="btn btn-primary">Add Task</button></td>
                    </tr>
                </tbody>
                </table>
                    </div>
                </div>
            </div>
         
        </div>
    </div>
  
</template>


<script>
import router from '../router.js';
import axios from 'axios';
  export default {
    data() {
      return {
        data: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/dashboard-teacher/', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          });
          if (response.ok) {
            this.data = await response.json();

          }
         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  };
  </script>
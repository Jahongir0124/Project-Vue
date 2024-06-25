<!-- Task.vue -->

<template>
      <div class="col-md-7 col-lg-8">
        
        <h4 class="mb-3">Task Create</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" v-model="name">     
            </div>
            
            <div class="col-6">
              <label for="score" class="form-label">Score</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="score" placeholder="Score" v-model="score">  
              </div>
            </div>
            <div class="col-6">
              <label for="deadline" class="form-label">Deadline</label>
              <input type="date" class="form-control" id="deadline" placeholder="deadline" v-model="deadline">
            </div>
            <div class="col-md-5">
              <label for="country" class="form-label">Course</label>
              <select  class="form-select" id="country" v-model="course">
                <option v-for="(item) in data" :key="item.id":value="item.id">{{ item.name }}</option>
      
              </select>
            
            </div>    
          </div>
          <button @click="createTaskFunc()" class="w-100 btn btn-primary btn-lg mt-5" type="submit">Save</button>
        </form>
   
</div>

</template>

<script>
import axios from 'axios';
export default {

  data() {
    return {
      data: [],
      name: '',
      score: '',
      deadline: '',
      course: ''


    }
  },
  created() {
    this.getData()
  },
  methods: {
      async getData() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/task/create/');
            this.data = response.data;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        
      },
      createTaskFunc() {
        try {
          const response =  axios.post('http://127.0.0.1:8000/task/create/', {
            name: this.name,
            score: this.score,
            deadline: this.deadline,
            course: this.course
          });
          console.log(response.data);
          this.$router.push("/profile-teacher");
        }
        catch(error) {
          console.error(error)
        }
      }
  }
  
}

</script>
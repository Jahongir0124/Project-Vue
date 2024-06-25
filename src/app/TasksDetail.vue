<!-- TasksList.vue -->
<template>
  <div class="tasks-list">
    <h2>Tasks List</h2>
    <table class="table caption-top">
                <thead>
                    <tr>
                    <th>№</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                    <th scope="col">Deadline</th>
                    </tr>
                </thead>
                <tbody v-for="task in tasks" :key="task.id">

                    <tr>
                    <td>1</td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.score }}</td>
                    <td>{{ new Date(task.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</td>
                    </tr>
                </tbody>
                </table>
   </div>
</template>



<script>
import axios from 'axios';
export default {
  props: ['id'],
  data() {
    return {
      tasks: [],
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.fetchTaskDetails();
    
  },
  methods: {
    fetchTaskDetails() {
      
      const response = axios.get(`http://127.0.0.1:8000/task/detail/${this.id}/`)
        .then(response => {
          this.tasks = response.data;
          
        })
        .catch(error => {
          console.error('Error fetching task details:', error);
        });
      
      const id = parseInt(this.$route.params.id);
      this.task = {
        id: id,
        name: `Task ${id}`,
        description: `Description of Task ${id}`
      };
    }
  }
};
</script>


<style scoped>
.tasks-list {
  margin-top: 20px;
}
</style>
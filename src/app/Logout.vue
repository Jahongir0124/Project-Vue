<!-- Logout.vue -->

<template>
</template>


<script>
  export default {
      data() {
        return {
          data: []
        }
        },
        created() {
        this.logout();
        
      },
        methods: {
            logout() {
            localStorage.removeItem('accessToken'); // Replace with your token key
            this.$router.push('/login'); // Replace with your login route
            }
        }
}
</script>
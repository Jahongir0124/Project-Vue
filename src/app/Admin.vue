<!-- Rediract to django admin -->

<template>
    <h1>Admin Panel:<a href="http://127.0.0.1:8000/admin/"></a></h1>
    <router-link :to="{name: 'logout'}" class="btn btn-primary">Logout</router-link>
</template>
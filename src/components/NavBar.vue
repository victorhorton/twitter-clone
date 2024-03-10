<script setup lang="ts">
import router from '@/router'
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()

function logout() {
  localStorage.removeItem('token')
  usersStore.isLoggedIn = false
  router.push('/login')
}
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button type="button" class="btn btn-outline-primary" @click="logout()">Logout</button>
    </div>
  </nav>
</template>

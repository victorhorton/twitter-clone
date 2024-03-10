<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import { useUsersStore } from './stores/users'

const usersStore = useUsersStore()
</script>

<template>
  <NavBar v-if="usersStore.isLoggedIn" />
  <RouterView />
</template>

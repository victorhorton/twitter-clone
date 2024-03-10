import { onMounted, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import { usersData } from '../../data'
import type { User } from '@/types/dataTypes'

export const useUsersStore = defineStore('users', () => {
  const users = ref(usersData)
  const currentUser: Ref<User | undefined> = ref()
  const isLoggedIn = ref(false)

  onMounted(() => {
    if (localStorage.getItem('token') == undefined) {
      isLoggedIn.value = false
    } else {
      isLoggedIn.value = true
    }
  })

  function setCurrentUser(user: User): void {
    currentUser.value = user
    const foundUser = users.value.find((existingUser) => {
      existingUser.firstName === user.firstName && existingUser.lastName === user.lastName
    })

    if (foundUser === undefined) {
      users.value.push(user)
    }
  }

  return { users, currentUser, isLoggedIn, setCurrentUser }
})

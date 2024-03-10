import { ref } from 'vue'
import { defineStore } from 'pinia'

import { usersData } from '../../data'
import type { User } from '@/types/dataTypes'

export const useUsersStore = defineStore('users', () => {
  const users = ref(usersData)
  const currentUser = ref({
    firstName: '',
    lastName: '',
    username: ''
  })

  function setCurrentUser(user: User): void {
    currentUser.value = user
    const foundUser = users.value.find((existingUser) => {
      existingUser.id === user.id
    })

    if (foundUser === undefined) {
      users.value.push(user)
    }
  }

  return { users, currentUser, setCurrentUser }
})

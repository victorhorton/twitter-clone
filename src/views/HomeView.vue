<script setup lang="ts">
import { ref } from 'vue'
import { tweetsData, usersData } from './../../data'
import TweetComponent from './../components/TweetComponent.vue'
import type { Tweet, User } from '@/types/dataTypes'

const tweets = ref(tweetsData)
const users = ref(usersData)

function userFromTweet(tweet: Tweet): User {
  const foundUser = users.value.find((user) => user.id === tweet.userId)
  if (foundUser) {
    return foundUser
  } else {
    return {
      id: 0,
      firstName: '',
      lastName: '',
      username: 'unknown',
      gender: undefined,
      bio: ''
    }
  }
}
</script>

<template>
  <div class="container">
    <TweetComponent
      v-for="tweet in tweets"
      :key="tweet.id"
      :tweet="tweet"
      :user="userFromTweet(tweet)"
    />
  </div>
</template>

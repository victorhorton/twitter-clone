<template>
  <div class="container">
    <div v-if="user" class="row my-5">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              {{ user.username }}
            </h5>
            <p>{{ user.firstName }} {{ user.lastName }}</p>
            <p>{{ user.bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <TweetComponent v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { tweetsData } from '../../data'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TweetComponent from '@/components/TweetComponent.vue'

const userStore = useUsersStore()
const route = useRoute()
const user = ref(userStore.users.find((user) => `${user.id}` === route.params.id))
const tweets = ref(tweetsData.filter((tweet) => `${tweet.userId}` === route.params.id))
</script>

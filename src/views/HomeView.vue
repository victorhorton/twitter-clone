<script setup lang="ts">
import { ref } from 'vue'
import { tweetsData } from './../../data'

const tweets = ref(tweetsData)
</script>

<template>
  <div v-for="tweet in tweets" :key="tweet.id">{{ tweet }}</div>
</template>

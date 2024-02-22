<script setup lang="ts">
import type { Tweet, User } from '@/types/dataTypes'
import { defineProps, type PropType } from 'vue'

const props = defineProps({
  tweet: { type: Object as PropType<Tweet>, required: true },
  user: { type: Object as PropType<User>, required: true }
})
</script>

<template>
  <div class="row my-5">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            {{ props.user.username }}
          </h5>
          <p class="card-text">
            {{ props.tweet.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

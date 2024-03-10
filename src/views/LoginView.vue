<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="row align-items-center justify-content-center vh-100">
        <div class="col-8">
          <div class="card p-5">
            <div class="card-body">
              <div class="row row-cols-1 g-3">
                <div class="col">
                  <h5 class="card-title">Login</h5>
                </div>
                <div class="col">
                  <label for="firstName" class="form-label">First Name</label>
                  <input
                    v-model="firstName"
                    type="text"
                    id="firstName"
                    class="form-control"
                    required
                  />
                  <label for="lastName" class="form-label">Last Name</label>
                  <input
                    v-model="lastName"
                    type="text"
                    id="lastName"
                    class="form-control"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    :value="username"
                    type="text"
                    id="username"
                    class="form-control disabled"
                    disabled
                  />
                </div>
                <div class="col">
                  <button class="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { faker } from '@faker-js/faker'
import { computed, ref } from 'vue'

const firstName = ref('')
const lastName = ref('')

const username = computed(() => {
  return faker.internet.displayName({ firstName: firstName.value, lastName: lastName.value })
})

function login() {
  localStorage.setItem('token', `${new Date().getTime()}`) // Replace with your actual token
  router.push('/')
}
</script>

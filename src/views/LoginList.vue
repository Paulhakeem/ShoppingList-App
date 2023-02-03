<script setup>
import { ref } from "vue"
import { RouterLink, useRouter} from 'vue-router'
import { auth } from '../firebaseConfig'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

  
 const router = useRouter()
  
  const formDetails = ref({
    email: '',
    password: ''
  })

  const loginUser = () => {
    signInWithEmailAndPassword(getAuth(), formDetails.value.email, formDetails.value.password)
    .then(() => {
      formDetails.value = {
        email: '',
        password: ''
      }
      router.push({
        path: '/shopping'
      })
    })
    .catch(err => {
      alert(err.message)
    })
  }
  

</script>
<template>
  <section class="items-center justify-center  max-auto max-w-xl my-16 p-3">
    <div class="text-center">
      <h1 class="text-xl sm:text-2xl text-bold text-center">
      Login to your account
      </h1>
      <p class="my-2">Or
      <RouterLink to="/signup">
        <button class="text-blue-500">create to an account</button>
      </RouterLink>
      </p>
    </div>
    <form @submit.prevent="loginUser"  class="max-auto max-w-sm p-3 justify-center items-center" >
      <div class="space-y-2 my-2">
        <label class="block">Email</label>
        <input v-model="formDetails.email" type="email" class="w-full focus:outline-none p-2 border brder-gray-400 rounded-md focus:ring-1 focus:border-0">
      </div>
      <div class="space-y-2 my-2">
      <label class="block">Password</label>
       <input v-model="formDetails.password" type="password" class="w-full focus:outline-none p-2 border brder-gray-400 rounded-md focus:ring-1 focus:border-0">
    </div>

      <button class="w-full bg-blue-500 text-white px-3 py-2 rounded-md my-4">Login</button>
      <div class="flex items-center justify-center space-x-2 my-4">
      </div>
    </form>
  </section>
</template>
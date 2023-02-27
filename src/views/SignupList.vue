<script setup>

import { ref, computed } from "vue"
import {RouterLink, useRouter} from "vue-router"
import { auth } from '../firebaseConfig'
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,FacebookAuthProvider, signInWithPopup} from "firebase/auth"

const provider = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const router = useRouter()
  
  const user = computed(() => {
    return auth.currentUser
  })

  const formDetails = ref({
    email: '',
    password: ''
  })

  const hundleSubmit = () => {
    createUserWithEmailAndPassword(getAuth(), formDetails.value.email, formDetails.value.password)
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
const googleLogin = () => {
    signInWithPopup(getAuth(), provider)
     .then(() => {
       router.push({
         path: '/shopping'
       })
     })
    .catch(err => {
      alert(err.message)
    })
  }

  const facebookLogin = () => {
      signInWithPopup(getAuth(), facebook)
     .then(() => {
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
  <section class="mx-auto max-w-md rounded-lg place-items-center justify-center grid my-12 bg-gray-200 box-shadow-white shadow-2xl" >
    <div class="text-center">
      <h1 class="text-xl sm:text-2xl text-bold text-center">
      Create your own free account
      </h1>
      <p class="my-2">Or
      <RouterLink to="/login">
        <button class="text-blue-500">login to your account</button>
      </RouterLink>
      </p>
    </div>
    <form @submit.prevent="hundleSubmit" class="max-auto max-w-sm p-3 border border-t-2 border border-t-blue-500" >
      <div class="space-y-2 my-2">
        <label class="block">Email</label>
        <input v-model="formDetails.email" type="email" class="w-full focus:outline-none p-2 border brder-gray-400 rounded-md focus:ring-1 focus:border-0">
      </div>
      <div class="space-y-2 my-2">
      <label class="block">Password</label>
       <input v-model="formDetails.password" type="password" class="w-full focus:outline-none p-2 border brder-gray-400 rounded-md focus:ring-1 focus:border-0">
    </div>

      <button  class="w-full bg-blue-500 text-white px-3 py-2 rounded-md my-4">Sign in</button>
        
     <div class="flex items-center justify-center space-x-2 my-4">
      <div class="w-full h-[2px] bg-gray-300"></div>
        <p class="shrink-0">Or login with</p>
      <div class="w-full h-[2px] bg-gray-300 "></div>
      </div>
      <div class="flex items-center justify-evenly gap-2 " >
        <div @click="googleLogin" class="flex items-center space-x-2 border border-gray-300 p-3 sm:p-3 rounded-md justify-center cursor-pointer">
          <font-awesome-icon icon="fa-brands fa-google" />
          <p>Google</p>
        </div>
                <div @click="facebookLogin" class="flex items-center space-x-2 border border-gray-300 p-3 rounded-md justify-center cursor-pointer">
                  <font-awesome-icon icon="fa-brands fa-facebook" />
          <p>Facebook</p>
        </div>
      </div>
      
    </form>
  </section>
</template>
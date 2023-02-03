<script setup></script>
<template>

<section class="grid md:grid-cols-2 my-6 gap-2">
  <img class="w-full pl-10" src="../assets/shopping.png">
  <div class="p-3">
    <h1 class=" text-3xl font-bold px-3 pt-25rem pl-6">Make your own Shopping List with ShoppingList <span class="text-blue-500">App</span></h1>

    <div class="p-2 space-y-3 ">
    <p class="p-2 pl-6">Welcome to our app, oursome app to create your sopping list before going shopping.</p>
    <div class="grid grid-cols-2  px-2">
    <div class="p-3 space-y-2">
     <RouterLink to="login">
     <button class="bg-blue-500 p-3 rounded-md text-white md:max-w-full">GET STARTED</button>
     </RouterLink>
    </div>
    </div>
    </div>
  </div>
  </section>
  
</template>
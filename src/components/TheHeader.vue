<script setup></script>
<template>

<section class=" border-w-60 border-2 grid md:grid-cols-2 my-6 gap-2">
  <img class="w-full pl-10 animate-bounce duration-75 ease-in" src="../assets/shopping.png">
  <div class="p-3">
    <h1 class="  text-3xl font-bold px-3 pt-25rem pl-7">Make your own Shopping List with ShoppingList
      <span class="text-blue-500">App</span>
    </h1>

    <div class="p-2 space-y-3 ">
    <p class="p-2 pl-5">Welcome to our app, awesome app to create your shopping list before going shopping.</p>
    <div class="grid grid-cols-2  px-2">
    <div class="p-3 space-y-2">
     <RouterLink to="login">
     <button 
  class="bg-blue-500 p-3 rounded-md text-white md:max-w-ful animate-bounce drop-shadow-2xl">GET STARTED</button>
     </RouterLink>
    </div>
    </div>
    </div>
  </div>
  </section>
  
</template>
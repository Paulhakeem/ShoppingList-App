 <script setup>
  import { ref, watch, onMounted } from "vue"

const items = ref([])
   
const newItem = ref("")
const hideCompleteItems = ref(false)
function addItem() {
 items.value.push({id: items.value.length + 1, label: newItem.value})
  
  newItem.value = ""
}
function removeItem(index) {
 items.value.splice(index, 1)
}

watch(items, newItem => {
    localStorage.setItem('items', JSON.stringify(newItem))
  }, {deep: true})

  watch(items, newItem => {
    localStorage.setItem('items', newItem)
  })



  onMounted(() => {
    newItem.value = localStorage.getItem('newItem') || ''
    items.value = JSON.parse(localStorage.getItem('items')) || []
  })

   
</script>

<template>
  <div class="mx-auto max-w-md rounded-lg place-items-center justify-center grid my-12 bg-gray-200 box-shadow-white shadow-2xl max-h-full">
    
 <img class="w-full" src="../assets/shopping-1.png">
    
  <div class=" text-center justify-center p-4 mt-20 ">
    <h1 class="text-2xl font-bold">Create your shopping list with <br><span class="text-blue-500 ">shopping List App</span></h1>
  </div>

    <form @submit.prevent="addItem" class="flex place-items-center gap-3 justify-center bg-gray h-full border-t-2 border-blue-500 border-0 p-4">
    <input v-model="newItem" class="w-full focus:outline-none p-2 border brder-gray-400 rounded-md focus:ring-1 focus:border-0" placeholder="Add item..">
      
    <button :disabled="newItem.length === 0" class="bg-blue-500 text-white rounded-lg p-2 w-56"> <font-awesome-icon icon="fa-solid fa-circle-plus" /> ADD ITEM</button> 
      
  </form>
  <ul class="p-4 m-4 gap-2">
    <li 
      v-for="({id, label}, index) in items" 
      :key="id" 
      class="p-2 font-base m-auto border border-4 bg-white text-xl divide-y-2">
       <font-awesome-icon icon="fa-regular fa-circle-check" class="mr-2 text-blue-500" />
      {{label}}
      <button @click="removeItem"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-blue-500"/></button>
    </li>
  </ul>
   <p v-if="!items.length" class="italic font-bold text-blue-500">You have empty List!</p>
  </div>
  
</template>
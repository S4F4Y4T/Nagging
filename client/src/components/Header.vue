<script setup>
import {state} from '@/services/socket.js'


</script>

<template>

  <header class="text-white text-xl font-bold pb-5 border-gray-900 border-b-2 border-opacity-20 justify-start flex">

    <div class="relative flex items-center space-x-4">
      <div class="relative">
        <span class="absolute text-green-500 right-0 bottom-0">
           <svg width="20" height="20">
              <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
           </svg>
        </span>
        <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-14 w-14 flex items-center justify-center">{{ state?.username[0]?.toUpperCase() }}</span>
      </div>
      <div class="flex flex-col leading-tight">
        <div class="text-xl mt-1 flex items-center">
          <span class="text-white mr-3">{{ state.username }}</span>
        </div>
      </div>
    </div>

  </header>

</template>

<style scoped>

</style>
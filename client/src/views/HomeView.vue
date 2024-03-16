<script setup>
  import Header from '@/components/Header.vue'
  import MessageAction from '@/components/MessageAction.vue'
  import MessageHistory from '@/components/MessageHistory.vue'
  import { onMounted } from 'vue'
  import {state} from '@/services/socket.js'

  //take username input on page load
  onMounted(() => {
    do{
      state.username = prompt('Please type your username here!')

    }while (state.username === null || state.username === '')

  })
</script>

<template>
  <section id="wrapper" class="lg:w-3/6 md:5/6 sm:w-full mx-auto bg-gray-700">
    <div class="flex-1 p:2 sm:p-6 pt-0 !important justify-between flex flex-col h-screen">
      <Header />
      <MessageHistory />
      <MessageAction />
    </div>
  </section>
</template>

<style lang="scss">
</style>

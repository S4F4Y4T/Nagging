<script setup>
  import Header from '@/components/Header.vue'
  import MessageAction from '@/components/MessageAction.vue'
  import MessageHistory from '@/components/MessageHistory.vue'
  import { onMounted, ref } from 'vue'
  import {state, socket} from '@/services/socket.js'

  onMounted(() => {
    state.username = prompt('Give username');
    socket.emit('joined', `${state.username}`);

    socket.on('joined', (message) => {
      state.messages.push({
        'type': 'joined',
        'message': message
      })

      console.log(state.messages[0].message)
    });

  })
</script>

<template>
  <section id="wrapper" class="w-3/6 mx-auto bg-gray-700">
    <div class="flex-1 p:2 sm:p-6 pt-0 !important justify-between flex flex-col h-screen">
      <Header />
      <MessageHistory />
      <MessageAction />
    </div>
  </section>
</template>

<style lang="scss">
</style>

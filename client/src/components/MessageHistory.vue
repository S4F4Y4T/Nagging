<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import {state} from '@/services/socket.js'

const chatBox = ref(null)

onMounted(() => {
  scrollToBottom()
})

const scrollToBottom = async () => {
  await nextTick()

  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight;
  }
}

watch(state.messages, () => {
  scrollToBottom()
})

</script>

<template>
  <div ref="chatBox" id="messages" class="flex flex-col h-full space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

    <template v-for="data in state.messages">
      <span v-if="data.type === 'notify'" class="text-gray-300 font-bold my-5 text-center">---{{ data.message }}---</span>

      <div v-if="data.type === 'message' && data.id !== state.id" class="chat-message">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <span class="text-gray-300  text-sm">{{ data.username }} </span>

            <template v-if="Array.isArray(data.message)">
              <template v-for="message in data.message">
                <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">{{ message }}</span></div>
              </template>
            </template>
            <template v-else>
              <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{{ data.message }}</span></div>
            </template>

          </div>
          <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-10 w-10 flex items-center justify-center">{{ data.username[0].toUpperCase() }}</span>
        </div>
      </div>

      <div v-if="data.type === 'message' && data.id === state.id" class="chat-message">
        <div class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
<!--            <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span></div>-->
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{{ data.message }}</span></div>
          </div>
        </div>
      </div>

    </template>
  </div>

<!--  <span class="text-gray-300 font-bold my-1">Rohsin, Parvez, Someone and Safayat is typing...</span>-->
  <span class="text-gray-300 font-bold my-1">Several People is typing...</span>
</template>

<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: rgb(55 65 81);
  border: 1px solid rgb(17 24 39 / 0.2);
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: rgb(17 24 39);
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>
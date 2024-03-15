<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import {state} from '@/services/socket.js'

const chatBox = ref(null)

//call scroll to bottom function on load
onMounted(() => {
  scrollToBottom()
})

//scroll to bottom
const scrollToBottom = async () => {
  //wait for the dom to load
  await nextTick()

  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight;
  }
}
//scroll to bottom on new message
watch(state.messages, () => {
  scrollToBottom()
})

</script>

<template>
  <div ref="chatBox" id="messages" class="flex flex-col h-full space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
<!--Show Message History Here-->
    <template v-for="(data,index) in state.messages" :key="index">
<!--      Notification Show Here-->
      <span v-if="data.type === 'notify'" class="text-gray-300 font-bold my-5 text-center">---{{ data.message }}---</span>
<!--      Receiver Message show Here-->
      <div v-if="data.type === 'message' && data.id !== state.id" class="receiver chat-message">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <span class="text-gray-300  text-sm">{{ data.username }} </span>

            <template v-for="(message, index) in data.message" :key="index">
              <span :class="{'rounded-bl-none' : (index === data.message.length -1)}" class="px-4 break-all w-full py-2 rounded-lg inline-block bg-gray-300 text-gray-600">{{ message }}</span>
            </template>

          </div>
          <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-10 w-10 flex items-center justify-center">{{ data.username[0].toUpperCase() }}</span>
        </div>
      </div>
<!--      Sender Message show Here-->
      <div v-if="data.type === 'message' && data.id === state.id" class="sender chat-message">
        <div class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <template v-for="(message, index) in data.message" :key="index">
              <span :class="{'rounded-br-none' : (index === data.message.length -1)}" class="px-4 break-all py-2 rounded-lg inline-block bg-blue-600 text-white ">{{ message }}</span>
            </template>
          </div>
        </div>
      </div>

    </template>
  </div>

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
<script setup>
import { nextTick, onMounted, ref } from 'vue'
import {state, socket} from '@/services/socket.js'

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
</script>

<template>
  <div ref="chatBox" id="messages" class="flex flex-col h-full space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
    <div id="sender" class="chat-message">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Run this command sudo chown -R `whoami` /Users/{{your_user_profile}}/.npm-global/ then install the package globally without using sudo</span></div>
        </div>
      </div>
    </div>
     
    <div id="receiver" class="chat-message">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-start">
          <span class="text-gray-300  text-sm">Safayat Mahmud</span>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div>
        </div>
        <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-10 w-10 flex items-center justify-center">S</span>
      </div>
    </div>

    <div class="chat-message">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Run this command sudo chown -R `whoami` /Users/{{your_user_profile}}/.npm-global/ then install the package globally without using sudo</span></div>
        </div>
      </div>
    </div>
    <div class="chat-message">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <span class="text-gray-300  text-sm">Safayat Mahmud</span>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div>
        </div>
        <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-10 w-10 flex items-center justify-center">S</span>
      </div>
    </div>
    <div class="chat-message">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Run this command sudo chown -R `whoami` /Users/{{your_user_profile}}/.npm-global/ then install the package globally without using sudo</span></div>
        </div>
      </div>
    </div>
    <div class="chat-message">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <span class="text-gray-300  text-sm">Safayat Mahmud</span>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div>
        </div>
        <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-10 w-10 flex items-center justify-center">S</span>
      </div>
    </div>
    <div class="chat-message">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Run this command sudo chown -R `whoami` /Users/{{your_user_profile}}/.npm-global/ then install the package globally without using sudo</span></div>
        </div>
      </div>
    </div>
    <div class="chat-message">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <span class="text-gray-300  text-sm">Safayat Mahmud</span>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div>
        </div>
        <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-10 w-10 flex items-center justify-center">S</span>
      </div>
    </div>
    <div class="chat-message">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Run this command sudo chown -R `whoami` /Users/{{your_user_profile}}/.npm-global/ then install the package globally without using sudo</span></div>
        </div>
      </div>
    </div>
    <div class="chat-message">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <span class="text-gray-300  text-sm">Parvez Mosharrof</span>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div>
        </div>
        <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-10 w-10 flex items-center justify-center">P</span>
      </div>
    </div>

    <span class="text-gray-300 font-bold my-5 text-center">---Al Razi Joined The Chat---</span>
    <span class="text-gray-300 font-bold my-5 text-center">---Someone Joined The Chat---</span>

    <div class="chat-message">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Run this command sudo chown -R `whoami` /Users/{{your_user_profile}}/.npm-global/ then install the package globally without using sudo</span></div>
        </div>
      </div>
    </div>
    <div class="chat-message">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <span class="text-gray-300  text-sm">Rohsin Al Razi</span>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div>
        </div>
        <span class="text-white text-2xl p-2 font-bold border border-white rounded-full h-10 w-10 flex items-center justify-center">R</span>
      </div>
    </div>

    <template v-for="message in state.messages">
      <span v-if="message.type === 'joined'" class="text-gray-300 font-bold my-5 text-center">---{{ message.message}}---</span>
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
import { reactive, ref } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  lastSender: ref(""),
  id: ref(""),
  username: ref(""),
  messages: []
});

const URL = "http://localhost:3000";

export const socket = io(URL);

socket.on('connect', () => {
  state.id = socket.id
  socket.emit('message', {
    type: 'notify',
    username: state.username,
    id: state.id,
    message: `${state.username} Joined The Chat`
  })
})

socket.on('message', (messageData) => {
  const lastMsg = state.messages[state.messages.length - 1];

  if (lastMsg && lastMsg.id === messageData.id) {
    if (Array.isArray(lastMsg.message)) {
      lastMsg.message.push(messageData.message)
    } else {
      lastMsg.message = [lastMsg.message, messageData.message];
    }
  } else {
    state.messages.push(messageData)
  }

  if (messageData.type === 'message') {
    state.lastSender = messageData.id;
  }

  console.log(state.messages)
});


// socket.on("disconnect", () => {
//   state.connected = false;
// });
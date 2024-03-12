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
});

socket.on('message', (messageData) => {

  if(messageData.type === 'message') { state.lastSender = messageData.id }

  state.messages.push(messageData)
})

// socket.on("disconnect", () => {
//   state.connected = false;
// });
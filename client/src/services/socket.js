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

//handle new user connect
socket.on('connect', () => {
  state.id = socket.id

  const notifyData = {
    type: 'notify',
    username: state.username,
    id: state.id,
    message: `${state.username} Joined The Chat`
  }
  //fire event to notify everyone of new user connection
  socket.emit('message', notifyData)

  notifyData.message = 'You Joined The Chat'
  broadcastMessage(notifyData)
})

socket.on('message', (messageData) => {
  broadcastMessage(messageData)
})

//process data for new message
export function broadcastMessage(messageData)
{
  //get the last message to validate and merge
  const lastMessage = state.messages[state.messages.length - 1];

  // when notification or last sender send message again then array merge otherwise create new block
  if(messageData.type === 'notify' || !lastMessage || lastMessage.type === 'notify' || state.lastSender !== messageData.id)
  {
    state.messages.push(messageData)
  }
  else
  {
    lastMessage.message.push(...messageData.message)
  }
  // set new last sender
  state.lastSender = messageData.id
}
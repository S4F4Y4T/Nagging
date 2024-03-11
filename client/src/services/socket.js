import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  username: "",
  messages: []
});

const URL = "http://localhost:3000";

export const socket = io(URL);

socket.on("connect", (msg) => {
  state.connected = true
  state.joinedMsg = msg
});

// socket.on("disconnect", () => {
//   state.connected = false;
// });
//
// socket.on("foo", (...args) => {
//   state.fooEvents.push(args);
// });
//
// socket.on("bar", (...args) => {
//   state.barEvents.push(args);
// });
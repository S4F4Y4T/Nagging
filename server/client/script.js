const user = {}
const socket = io();

const chatBox = document.getElementById("chat");
const messageInput = document.getElementById("messageInput");
const messageForm = document.getElementById("message");


function showModal() {
    document.getElementById('modal').classList.remove('hidden');
}

function hideModal() {
    document.getElementById('modal').classList.add('hidden');
}

function userSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const userName = nameInput.value;

    if (userName.trim() !== '') {
        // Save the username (you can use this value in your chat)
        user.name = userName;
        hideModal();
        socket.emit('joined', `${userName} has joined the chat`)
    } else {
        // Handle empty username case
        alert('Please enter your name.')
    }
}

socket.on('joined', (msg) => {
    let alertBox = document.createElement("p")
    alertBox.classList.add("p-2", "bg-gray-400", "text-gray-600", "text-center", "m-2")
    alertBox.textContent = msg
    chatBox.appendChild(alertBox)
})

socket.on('typing', (msg) => {
    const typingBox = document.getElementById("typing")
    typingBox.classList.remove('hidden')
    typingBox.textContent = msg
})

socket.on('message', (msg) => {
    const messages = document.createElement("div")
    messages.classList.add("p-2", "mb-2", "rounded-md", "shadow", "bg-white", "text-gray-800", "self-start", "max-w-xs");
    messages.textContent = msg
    chatBox.appendChild(messages)
})

let typingTimeout;

function handleInputEvent() {
    // Clear any existing timeout
    clearTimeout(typingTimeout);

    // Set a new timeout
    typingTimeout = setTimeout(function() {
        // Send typing notification only if user hasn't typed again within the last 2 seconds
        socket.emit('typing', `${user.name} is typing now...`)
    }, 3000);
}

function handleMessageSend(e) {
    e.preventDefault()
    socket.emit('message', messageInput.value)
}

// Input event listener
messageForm.addEventListener("submit", handleMessageSend)
messageInput.addEventListener("input", handleInputEvent)

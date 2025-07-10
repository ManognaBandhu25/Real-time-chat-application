class ChatApp {
    constructor() {
        // Initialize variables
        this.messages = []; // Array to store messages
        this.messagesContainer = document.getElementById('messages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.undoButton = document.getElementById('undoButton');
        this.userNameInput = document.getElementById('userName');

        // Attach event listeners to buttons
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.undoButton.addEventListener('click', () => this.undoMessage());
    }

    // Function to handle sending a message
    sendMessage() {
        const messageContent = this.messageInput.value.trim();
        const userName = this.userNameInput.value.trim();

        if (messageContent === '' || userName === '') {
            alert('Please enter your name and a message!');
            return; // Prevent sending if the name or message is empty
        }

        // Add message to messages array
        this.messages.push({
            sender: userName,
            content: messageContent,
            timestamp: new Date().toLocaleTimeString(),
        });

        // Update the message display
        this.updateMessages();

        // Clear the message input field
        this.messageInput.value = '';
    }
    // Function to update the message display
    updateMessages() {
        // Clear current messages
        this.messagesContainer.innerHTML = '';

        // Loop through all messages and append them to the container
        this.messages.forEach((message) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.innerHTML = `<strong>${message.sender}</strong> <span>${message.timestamp}</span>: ${message.content}`;

            this.messagesContainer.appendChild(messageElement);
        });
        // Scroll to the bottom of the message box
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        // Enable/disable the undo button based on message history
        this.undoButton.disabled = this.messages.length === 0;
    }
    // Function to handle undo
    undoMessage() {
        if (this.messages.length === 0) return;

        // Remove the last message from the array
        this.messages.pop();
        this.updateMessages();
    }
}
// Initialize the chat application
const chatApp = new ChatApp();
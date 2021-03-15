import TogglableView from "../utils/ToggableView.js";

let getChatView = () => {
  const chatView = document.getElementById('chatView')
  getChatView = () => chatView;
  return getChatView();
}

let getInput = () => {
  const input = document.getElementById('chatInput');
  getInput = () => input;
  return getInput();
}

let getForm = () => {
  const form = document.getElementById('chatForm');
  getForm = () => form;
  return getForm();
}

let getScrollArea = () => {
  const scrollArea = document.getElementById('scrollArea')
  getScrollArea = () => scrollArea;
  return getScrollArea();
}

let getMessageList = () => {
  const messageList = document.getElementById('messageList')
  getMessageList = () => messageList;
  return getMessageList();
}

export default class ChatView extends TogglableView{
  constructor() {
    super(getChatView())
    this.input = getInput()
    this.form = getForm()
    this.messageList = getMessageList()
    this.scrollArea = getScrollArea()
  }

  createNewMessage(message, username) {
    const isOwnMessage = message.username === username
    const template = `<li class="message-list-item ${isOwnMessage ? 'message-own' : ''}">
        ${!isOwnMessage ? `<p class="message-from">${message.username} escribió:</p>` : ''}
        <p class="message-content">${message.message}</p>
      </li>`
    this.messageList.innerHTML += template
  }

  resetForm() {
    this.form.reset()
  }

  displayNotFound() {
    this.messageList.innerHTML = `<li class="message-list-item is-warning">
        <p class="message-warning">Aun no hay mensajes</p>
      </li>`
  }

  displayMessages(messages, username) {
    if (!messages.length) {
      this.displayNotFound()
    } else {
      this.messageList.innerHTML = ''
      for (const message of messages) {
        this.createNewMessage(message, username)
      }
    }
    this.scrollArea.scrollTo(0, this.view.scrollHeight)
  }

  register(fn) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      if (this.input.value !== '') {
        fn(this.input.value.trim())
        this.resetForm()
      }
    })
  }
}

import SocketService from "../service/socket-service.js";

export default class ChatController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.socket = SocketService.getInstance()
    this.view.displayMessages(this.model.messageList, this.model.username)
    this.view.register(this.sendMessage.bind(this))
    this.socket.subscribe(this)
  }

  notify(message) {
    console.log(message)
    this.model.addMessage(message)
    this.view.displayMessages(this.model.messageList, this.model.username)
  }

  sendMessage(message) {
    const newMessage = {
      message,
      username: this.model.username
    }
    this.socket.sendMessage(newMessage)
    this.model.addMessage(newMessage)
    this.view.displayMessages(this.model.messageList, this.model.username)
  }

  setUsername(username) {
    this.model.username = username
  }

  show() {
    this.view.show()
    this.view.displayMessages(this.model.messageList, this.model.username)
  }

  hide() {
    this.view.hide()
  }
}

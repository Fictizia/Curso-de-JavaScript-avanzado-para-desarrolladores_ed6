import { get, add } from "../service/store-service.js";

export default class ChatModel {
  constructor(username) {
    this._username = username || get('username')
    this._messageList = get('messages') || []
  }

  addMessage (message) {
    this._messageList.push(message)
    add('messages', message)
  }

  get username() {
    return this._username
  }

  set username(username) {
    this._username = username
  }

  get messageList() {
    return this._messageList
  }
}

export default class SocketService {
  constructor() {
    this._socket = new WebSocket('ws://localhost:3000')
    this._observers = []
    this._socket.addEventListener('message', this.notify.bind(this))
  }

  static getInstance() {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService()
    }
    return SocketService.instance
  }

  subscribe(observer) {
    this._observers.push(observer)
  }

  notify(event) {
    this._observers.forEach(observer => observer.notify(JSON.parse(event.data)))
  }

  sendMessage(message) {
    this._socket.send(JSON.stringify(message))
  }

  close() {
    this._socket.close()
  }
}

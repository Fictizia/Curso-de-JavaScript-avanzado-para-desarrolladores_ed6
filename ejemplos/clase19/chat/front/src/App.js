export default class AppController {
  constructor(configurationController, chatController) {
    this._configurationController = configurationController;
    this._chatController = chatController

    this._configurationController.register(this)
  }

  notify(username) {
    this._configurationController.hide()
    this._chatController.setUsername(username)
    this._chatController.show()
  }
}

export default class ConfigurationController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.register(this.onUsernameChange.bind(this))
  }

  register(el) {
    this.observer = el
  }

  onUsernameChange(username) {
    console.log(this)
    this.model.username = username
    this.view.resetForm()
    this.view.hide()
    this.observer.notify(username)
  }

  show() {
    this.view.show();
  }

  hide() {
    this.view.hide()
  }
}

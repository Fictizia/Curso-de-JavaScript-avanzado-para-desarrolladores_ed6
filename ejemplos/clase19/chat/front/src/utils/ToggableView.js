export default class ToggableView {
  constructor(view) {
    this.view = view
  }

  show() {
    this.view.classList.remove('is-hidden')
  }

  hide() {
    this.view.classList.add('is-hidden')
  }
}

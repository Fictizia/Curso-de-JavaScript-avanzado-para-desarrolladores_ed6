import ToggableView from "../utils/ToggableView.js";

let getUsernameView = () => {
  const usernameView = document.getElementById('usernameView');
  getUsernameView = () => usernameView;
  return getUsernameView();
}

let getUsernameInput = () => {
  const usernameInput = getUsernameView().querySelector('#usernameInput');
  getUsernameInput = () => usernameInput;
  return getUsernameInput();
}

let getUsernameForm = () => {
  console.log(getUsernameView())
  const usernameForm = getUsernameView().querySelector('#usernameForm');
  getUsernameForm = () => usernameForm;
  return getUsernameForm();
}

export default class ConfigurationView extends ToggableView {
  constructor() {
    super(getUsernameView())
    this.form = getUsernameForm()
    this.input = getUsernameInput()
  }

  resetForm() {
    this.form.reset()
  }

  register(fn) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      if (this.input.value !== '') {
        fn(this.input.value.trim())
      }
    })
  }
}

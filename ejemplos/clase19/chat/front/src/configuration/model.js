import { get, set } from '../service/store-service.js'

export default class ConfigurationModel {
  constructor() {
    this._username = get('username')
  }

  _commit(username) {
    set('username', username)
  }

  set username(username) {
    this._username = username
    this._commit(username)
  }

  get username() {
    this._username = get('username')
    return this._username
  }
}

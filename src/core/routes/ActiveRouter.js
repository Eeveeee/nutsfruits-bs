export class ActiveRouter {
  static get path() {
    return window.location.hash.slice(1)
  }
}

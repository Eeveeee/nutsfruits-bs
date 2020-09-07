import { ActiveRouter } from './ActiveRouter'
import { Header, Footer } from '../../components'

export class Router {
  constructor(selector, routes) {
    this.template = document.querySelector(selector)
    this.routes = routes
    this.getHash = this.getHash.bind(this)
    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.getHash)
    this.getHash()
  }

  getHash() {
    const path = ActiveRouter.path
    const Page = this.routes[path || 'home']
    const page = new Page()
    this.template.innerHTML = ''

    this.template.append(page.toNode(Header))
    this.template.append(page.getRoot())
    this.template.append(page.toNode(Footer))

    page.afterRender()
  }
}

export class Nutsfruits {
  constructor(selector, options = {}) {
    this.components = options.components || []
    this.app = document.querySelector(selector)
  }

  getRoot() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    this.components.forEach((Component) => {
      const root = document.createElement(Component.tagName || 'section')
      root.classList.add(Component.className)
      const component = new Component()
      root.innerHTML = component.toHTML()
      wrapper.append(root)
    })
    return wrapper
  }

  render() {
    this.app.append(this.getRoot())
  }
}

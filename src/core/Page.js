export class Page {
  constructor(params) {
    this.params = params
  }
  getRoot() {}

  afterRender() {}

  toNode(Classes) {
    const instance = new Classes()
    const $instance = document.createElement(Classes.tagName || 'section')
    $instance.classList.add(Classes.className)
    $instance.innerHTML = instance.toHTML()

    return $instance
  }
}

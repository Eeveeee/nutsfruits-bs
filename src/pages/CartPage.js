import { Page } from '../core/Page'
import { Nutsfruits } from '../components/nutsfruits/Nutsfruits'

class CartPage extends Page {
  getRoot() {
    const nutsfruits = new Nutsfruits('#app', {
      components: [],
    })
    return nutsfruits.getRoot()
  }
}

export default CartPage

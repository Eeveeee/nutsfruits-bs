import { Page } from '../core/Page'
import { Nutsfruits } from '../components/nutsfruits/Nutsfruits'

import {
  Intro,
  Catalog,
  Discount,
  About,
  Features,
  Feedback,
} from '../components'

class HomePage extends Page {
  getRoot() {
    const nutsfruits = new Nutsfruits('#app', {
      components: [Intro, Catalog, Discount, About, Features, Feedback],
    })
    return nutsfruits.getRoot()
  }
}

export default HomePage

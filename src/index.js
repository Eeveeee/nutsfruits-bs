import './scss/index.scss'
import '../node_modules/jquery/dist/jquery'
import '../node_modules/popper.js/dist/popper'
import 'bootstrap'
import './js/burger'

import { Router } from './core/routes/router'

import { HomePage, CatalogPage, CartPage } from './pages'

new Router('#app', {
  home: HomePage,
  catalog: CatalogPage,
  cart: CartPage,
})

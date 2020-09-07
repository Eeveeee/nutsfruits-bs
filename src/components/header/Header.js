import { FruitsComponent } from '../../core/FruitsComponent'

class Header extends FruitsComponent {
  static className = 'header'
  static tagName = 'header'

  constructor() {
    super()
  }

  toHTML() {
    return `
    <div class="container">
      <div class="header-wrap">
        <div class="row">
          <div class="col-12">
            <div class="burger-button"><span></span></div>
            <div class="header-contacts">
              <div class="header__phone">
                <img src="../src/img/icons/call.svg" alt="" />
                <span>8 800 165 22 45</span>
              </div>
              <div class="header__mail">
                <img src="../src/img/icons/mail.svg" alt="" />
                <span>nutsfruits@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 col-4">
            <nav class="header-navbar">
              <a href="#home" class="navbar-selector">
                <span>Главная</span>
              </a>
              <a href="#catalog" class="navbar-selector">Каталог</a>
              <a href="#" class="navbar-selector">О нас</a>
              <a href="#" class="navbar-selector">Доставка и оплата</a>
            </nav>
          </div>

          <div class="col-md-2 col-4">
            <div class="header-logo">
              <img src="../src/img/logo/logo.svg" alt="" />
            </div>
          </div>

          <div
            class="col-md-5 col-4 d-flex align-items-end justify-content-between"
          >
            <div class="header-items">
              <div class="header-search">
                <input type="text" placeholder="Поиск товара" />
              </div>

              <a href="#cart" class="header-basket">
                <img src="../src/img/icons/basket.svg" alt="" />
                <span>Корзина</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

export default Header

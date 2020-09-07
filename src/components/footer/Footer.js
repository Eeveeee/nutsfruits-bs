import { FruitsComponent } from '../../core/FruitsComponent'
class Footer extends FruitsComponent {
  static className = 'footer'
  static tagName = 'footer'

  constructor() {
    super()
  }

  toHTML() {
    return `
    <div class="container">
      <div class="footer-wrap">
        <div class="row">
          <div class="col-md-5 col-12 order-xs-3">
            <div class="footer-navbar">
              <a href="#home">Главная</a>
              <a href="#catalog">Каталог</a>
              <a href="#">О нас</a>
              <a href="#">Доставка и оплата</a>
            </div>
          </div>
          <div
            class="col-md-2 col-12 d-md-flex justify-content-md-center order-xs-1"
          >
            <div class="footer-logo">
              <img src="../src/img/logo/logo.svg" alt="" />
            </div>
          </div>
          <div class="col-md-5 col-12 order-xs-2">
            <div class="footer-contacts">
              <div class="footer-hotline">
                <div class="contacts-phone">
                  <img src="../src/img/icons/call.svg" alt="" />
                  <span>8 800 165 22 45</span>
                </div>
                <div class="contacts-mail">
                  <img src="../src/img/icons/mail.svg" alt="" />
                  <span>nutsfruits@gmail.com</span>
                </div>
              </div>
              <div class="footer-social">
                <span>Расскажите о нас в соцсетях</span>
                <a href="#"><img src="../src/img/icons/vk.svg" alt="" /></a>
                <a href="#">
                  <img src="../src/img/icons/facebook.svg" alt="" />
                </a>
                <a href="#">
                  <img src="../src/img/icons/twitter.svg" alt="" />
                </a>
                <a href="#">
                  <img src="../src/img/icons/instagram-sketched.svg" alt="" />
                </a>
                <a href="#">
                  <img src="../src/img/icons/whatsapp.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

export default Footer

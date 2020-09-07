import { FruitsComponent } from '../../core/FruitsComponent'

class About extends FruitsComponent {
  static className = 'about'

  constructor() {
    super()
  }

  toHTML() {
    return `
  
    <div class="container">
      <div class="about-wrap">
        <h2 class="about__header">О нас</h2>
        <div class="row align-items-center">
          <div class="col-md-7 col-12 d-flex justify-content-md-end">
            <p class="about-text">
              <span>
                В течение нескольких лет наша команда наладила контакт по
                всему миру и получила возможность доставлять свежие
                <br />
                и качественные орехи, сухофрукты, цукаты. Заказывая у нас, вы
                можете получить натуральную продукцию с максимально быстрой
                доставкой!
              </span>
              <span>
                Мы гордимся нашей ценовой политикой. Работая без посредников,
                мы предлагаем действительно выгодные цены. У нас современный
                функциональный склад. Мы соблюдаем условия хранения,
                установленные законодательством
                <br />
                в отношении продуктов. Вся продукция сертифицирована
                <br />
                и проверяется на соответствие качеству не только на этапе
                закупки, но и при сборе заказа!
              </span>
            </p>
          </div>
          <div class="col-md-5 col-12">
            <img src="../src/img/about/nuts1.png" alt="" />
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-5 col-12 d-flex justify-content-md-end">
            <img src="../src/img/about/nuts2.png" alt="" />
          </div>
          <div class="col-md-7 col-12">
            <p class="about-text">
              При получении продукции вы можете визуально проверить качество
              товара до его оплаты. К товару прилагается инструкция по
              хранению. Для постоянных покупателей предусмотрена система
              скидок.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-free free-nuts">
      <img src="../src/img/catalog/leaves-and-nuts.svg" alt="" />
    </div>
    `
  }
}

export default About

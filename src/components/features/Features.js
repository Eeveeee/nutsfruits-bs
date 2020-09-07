import { FruitsComponent } from '../../core/FruitsComponent'

class Features extends FruitsComponent {
  static className = 'features'
  constructor() {
    super()
  }

  toHTML() {
    return `
    <div class="container">
      <div class="features-wrap">
        <div class="row">
          <div class="col-12">
            <h2 class="features__header">Выбирая нас вы:</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="features__card">
              <img src="../src/img/features/medal.svg" alt="" />
              <h3>Получаете гарантию</h3>
              <p>
                Возврата товара и денежных средств. Все в соответствии с
                законом о защите прав потребителей.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="features__card">
              <img src="../src/img/features/delivery.svg" alt="" />
              <h3>Выбираете способ доставки</h3>
              <p>
                У нас различные удобные способы доставки по России и
                республике Беларусь!
              </p>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="features__card">
              <img src="../src/img/features/coins.svg" alt="" />
              <h3>Экономите деньги</h3>
              <p>
                Мы напрямую работаем
                <br />
                с поставщиками — без
                <br />
                посредников!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

export default Features

import { FruitsComponent } from '../../core/FruitsComponent'

class Discount extends FruitsComponent {
  static className = 'discount'
  constructor() {
    super()
  }

  toHTML() {
    return `
      <div class="container">
        <div class="discount-wrap">
          <div class="row">
            <div class="col-12">
              <h2 class="discount__header">Больше — дешевле!</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="discount-info">
                <p class="info-rules">
                  Заказывайте вместе с друзьями, родственниками, коллегами и
                  экономьте! При оформлении товара введите промокод:
                  <b>vmeste.</b>
                  Скидки при единовременном заказе:
                </p>
                <ul class="info-list">
                  <li>
                    <span
                      style="
                        font-family: Nunito;
                        font-size: 20px;
                        color: #5bd912;
                      "
                    >
                      5
                    </span>
                    <img
                      src="../src/../src/img/icons/percent-green.svg"
                      alt=""
                    />
                    от 20 000 рублей
                  </li>
                  <li>
                    <span
                      style="
                        font-family: Nunito;
                        font-size: 20px;
                        color: #f4f139;
                      "
                    >
                      6
                    </span>
                    <img
                      src="../src/../src/img/icons/percent-yellow.svg"
                      alt=""
                    />
                    от 50 000 рублей
                  </li>
                  <li>
                    <span
                      style="
                        font-family: Nunito;
                        font-size: 20px;
                        color: #e8bd29;
                      "
                    >
                      7
                    </span>
                    <img
                      src="../src/../src/img/icons/percent-orange.svg"
                      alt=""
                    />
                    от 70 000 рублей
                  </li>
                  <li>
                    <span
                      style="
                        font-family: Nunito;
                        font-size: 20px;
                        color: #d61717;
                      "
                    >
                      8
                    </span>
                    <img src="../src/../src/img/icons/percent-red.svg" alt="" />
                    от 100 000 рублей
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <img
                class="discount__img"
                src="../src/img/discount/nuts.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    `
  }
}
export default Discount

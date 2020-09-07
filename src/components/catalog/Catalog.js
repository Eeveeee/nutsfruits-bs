import { FruitsComponent } from '../../core/FruitsComponent'

class Catalog extends FruitsComponent {
  static className = 'catalog'
  constructor() {
    super()
  }

  toHTML() {
    return `
  
    <div class="container">
      <div class="catalog-wrap">
        <div class="row">
          <div class="col-12"><h2 class="catalog__header">Каталог</h2></div>
        </div>
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="catalog-card card-nuts"><a href="#catalog">Орехи</a></div>
          </div>
          <div class="col-md-4 col-12">
            <div class="catalog-card card-fruits">
              <a href="#catalog">Сухофрукты</a>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="catalog-card card-seeds"><a href="#catalog">Семечки</a></div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="catalog-card card-big">
              <a href="#catalog">Смотреть всё!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog-free free-nuts">
      <img src="../src/img/catalog/leaves-and-nuts.svg" alt="" />
    </div>

    `
  }
}

export default Catalog

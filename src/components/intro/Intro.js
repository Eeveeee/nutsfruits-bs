import { FruitsComponent } from '../../core/FruitsComponent'
class Intro extends FruitsComponent {
  static className = 'intro'
  constructor() {
    super()
  }

  toHTML() {
    return `
   
    <div class="container">
      <div class="intro-wrap">
        <div class="row">
          <div class="col-12">
            <h1 class="intro__header">Орехи и сухофрукты по низким ценам!</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="intro-arrow">
              <img src="../src/" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    `
  }
}

export default Intro

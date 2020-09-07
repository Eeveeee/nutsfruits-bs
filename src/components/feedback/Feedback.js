import { FruitsComponent } from '../../core/FruitsComponent'

class Feedback extends FruitsComponent {
  static className = 'feedback'
  constructor() {
    super()
  }

  toHTML() {
    return `
   
    <div class="container">
      <div class="feedback-wrap">
        <div class="row">
          <div class="col-12">
            <h2 class="feedback__header">Есть вопросы или предложения?</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex align-items-center flex-column">
            <form action="#" class="feedback__form">
              <input
                type="text"
                placeholder="Ваше имя*"
                class="feedback__input"
              />
              <input
                type="tel"
                placeholder="Телефон"
                class="feedback__input"
              />
              <input
                type="email"
                placeholder="E-mail*"
                class="feedback__input"
              />
              <textarea
                name="message"
                placeholder="Сообщение*"
                id=""
                cols="15"
                rows="8"
              ></textarea>
              <button href="#" type="submit" class="button button-submit">
                Отправить
              </button>
            </form>
            <small>*Ваши данные не будут переданы третьим лицам</small>
          </div>
        </div>
      </div>
    </div>
 
    `
  }
}
export default Feedback

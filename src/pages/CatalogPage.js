import { Page } from '../core/Page'
class CatalogPage extends Page {
  getRoot() {
    const nameSort = [
      { name: 'Сухофрукты', type: '' },
      { name: 'Семечки', type: '' },
      { name: 'Орехи', type: '' },
      { name: 'По возрастанию цены', type: '+' },
      { name: 'По убыванию цены', type: '-' },
    ]

    function render() {
      const node = nameSort.map((obj) => {
        return `
        <div class="filter__type">
        <label>
          <input
            data-checkbox-type="${obj.type || obj.name.toLowerCase()}"
            class="filter-checkbox"
            type="checkbox"
          />
          <span>${obj.name}</span>
        </label>
      </div>
        `
      })

      return node.join('')
    }

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    wrapper.innerHTML = `

    <section class="catalog">
      <div class="container">
        <div class="catalog-wrap">
          <div class="row catalog-row">
            <div class="col-lg-3">
              <div class="catalog-filter-wrapper">
                <form class="catalog-filter">
                  <div class="filter-types">
                   ${render()}
                  </div>
                  <div class="filter-buttons">
                    <button class="button button-sort">Сортировать</button>
                    <button class="button button-reset">
                      Сбросить все
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-9 catalog-cards"></div>
          </div>
        </div>
      </div>
    </section>
  `

    return wrapper
  }

  afterRender() {
    const cardsContainer = document.querySelector('.catalog-cards')

    function init(items) {
      const weightMinusBtn = document.querySelectorAll('.button-minus')
      const weightPlusBtn = document.querySelectorAll('.button-plus')
      weightMinusBtn.forEach((btn) =>
        btn.addEventListener('click', btnClick('-'))
      )
      weightPlusBtn.forEach((btn) =>
        btn.addEventListener('click', btnClick('+'))
      )
      function btnClick(state) {
        return function (e) {
          const currentBtn = e.target
          const currentCard = currentBtn.closest('.catalog__card')
          const currentCardId = currentCard.dataset.cardId
          const price = currentCard.querySelector('.card-price')

          const weight = currentCard.querySelector('.card-weight')
          let diff = 0
          let currentWeight = parseInt(weight.textContent)

          switch (state) {
            case '-':
              if (currentWeight <= 100) break
              weight.textContent = currentWeight - 50
              break
            case '+':
              if (currentWeight >= 950) break
              weight.textContent = currentWeight + 50
              break
          }
          items.forEach((el) => {
            if (el.id == currentCardId) {
              diff = el.price / 100
            }
          })
          price.textContent = Math.round(weight.textContent * diff)
        }
      }
    }

    function createTemplate(el) {
      return `
        <div data-card-id="${el.id}" data-card-type="${el.type}" class="catalog__card">
        <div class="card-img"><img src="../src/img/catalog/${el.imgSrc}" alt="" /></div>
        <title class="card-name">${el.name}</title>
        <div class="card-price-wrap"><span class="card-price">${el.price}</span>₽</div>
        <div class="card-weight-selector">
        <button class="button button-minus"><span></span></button>
        <div class="card-weight-wrap"><span class="card-weight">100</span>гр.</div>
        <button class="button button-plus"><span></span></button>
        </div>
          <button class="button button-basket">В корзину</button>
        </div>
        `
    }

    function toHTML(arr) {
      let card = ''
      arr.forEach((el) => {
        card = createTemplate(el)
        cardsContainer.insertAdjacentHTML('beforeend', card)
      })
    }

    toHTML(items)
    init(items)

    const checkboxes = document.querySelectorAll('.filter-checkbox')
    const sortButton = document.querySelector('.button-sort')

    const resetButton = document.querySelector('.button-reset')

    function filter(types, result) {
      switch (types) {
        case '-':
          result.sort((a, b) => {
            if (a.price >= b.price) return -1
            if (a.price <= b.price) return 1
          })
          break
        case '+':
          result.sort((a, b) => {
            if (a.price >= b.price) return 1
            if (a.price <= b.price) return -1
          })
          break
        default:
          break
      }
      toHTML(result)
      init(result)
      return
    }

    resetButton.addEventListener('click', (e) => {
      e.preventDefault()
      clear()
      toHTML(items)
      init(items)
      checkboxes.forEach((el) => {
        el.checked = false
      })
    })

    sortButton.addEventListener('click', (e) => {
      e.preventDefault()

      let type = null
      const types = []
      const sortTypes = ['+', '-']

      checkboxes.forEach((el) => {
        if (el.checked) {
          type = el.dataset.checkboxType
          types.push(type)
        }
      })

      if (!types.length) return
      clear()

      const result = items.reduce((acc, item) => {
        if (types.includes(item.type)) addItem(acc, item)
        else if (checkState(types)) addItem(acc, item)
        return acc
      }, [])

      type = sortTypes.includes(type) ? type : '__INIT__'
      filter(type, result)
    })

    function clear() {
      cardsContainer.innerHTML = ''
    }

    function addItem(acc, item) {
      acc.push(item)
    }

    function checkState(types) {
      const check = types.map((type) => {
        if (
          (type === '+' || type === '-') &&
          !types.includes('орехи') &&
          !types.includes('сухофрукты') &&
          !types.includes('семечки')
        ) {
          return true
        }
      })
      return check.join('')
    }
  }
}

export default CatalogPage

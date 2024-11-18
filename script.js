const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMaAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFillAll = document.querySelector('.fill-all')

function currencyValue(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return newValue
}
function showAll(arrayProduct) {
    let myLi = ""
    arrayProduct.forEach(product => {
        myLi += `
    
        <li>
            <img src= ${product.src}>
            <p> ${product.name}</p>
            <p class="price">${currencyValue(product.price)}</p>
        </li>
    `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrice = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9

    })
    )
    showAll(newPrice)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, value) => acc + value.price, 0)

    list.innerHTML = `
    
    <li>
        <p>Total dos itens foi de:${currencyValue(totalValue)}</p>
    </li>
`
}

function fillAllItems() {
    const newItems = menuOptions.filter((product) => product.vegan)

    showAll(newItems)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMaAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFillAll.addEventListener('click', fillAllItems)
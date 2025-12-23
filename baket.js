function updateCounter() {
    let countEl = document.getElementById('count');
    let baketCards = JSON.parse(localStorage.getItem('baketCards') || '[]');
    if (countEl) countEl.innerText = baketCards.length;
}

updateCounter();

function removeFromStorage(title) {
    let cards = JSON.parse(localStorage.getItem('baketCards')) || [];
    cards = cards.filter(item => item.title !== title);
    localStorage.setItem('baketCards', JSON.stringify(cards));
}

let cards = JSON.parse(localStorage.getItem('baketCards')) || [];
let mainEl = document.querySelector('main');
let totalPrice = 0;
let price = document.querySelector('#price');

price.innerText = `разом: 0`

for (let el of cards) {
    let div = document.createElement('div');

    price.innerText = `разом: ${totalPrice += parseInt(el.price)}`;
    div.classList.add('baket-card');

    div.innerHTML = `<img src="${el.img}">
        <h3>${el.title}</h3>
        <h2>${el.price}</h2>
        <p>${el.description}</p>

        <button class="plus">+</button>
        <span class="count">1</span>
        <button class="minus">-</button>`;

    let btnPlus = div.querySelector('.plus');
    let btnMinus = div.querySelector('.minus');
    let countProp = div.querySelector('.count');
    let count = 1;

    btnPlus.addEventListener('click', () => {
        count++;
        countProp.innerText = count;
    });

    btnMinus.addEventListener('click', () => {
        if (count > 1) {
            count--;
            countProp.innerText = count;
        } else {
            div.remove();
            removeFromStorage(el.title);
            updateCounter();
        }
    });

    mainEl.appendChild(div);
}























































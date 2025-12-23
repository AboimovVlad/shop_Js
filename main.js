fetch('./cards.json') // зчитуємо файл json який я вирішив додати як БД
    .then(response => {
        if (!response.ok) { // Перевірка на помилки
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Перетворює відповідь в об'ект JS
    })
    .then(jsonData => {
        console.log(jsonData); // Весь об'ект з JSON

        let mainEl = document.querySelector('main');
        let count = 1;

        for(let el of jsonData.card){
            let div = document.createElement('div');

            div.innerHTML = `<img src="${el.img}" alt="0">
            <hr>
            <h3>${el.title}</h3>
            <h2>${el.price}</h2>
            <p>${el.description}</p>
            <button>додати у кошик</button>`;

            div.classList.add('main-card');

            let btn = div.querySelector('button');
            btn.addEventListener('click', () => addToBaket(btn))

            mainEl.appendChild(div)
        }
    })
    .catch(error => {
        console.error('помилка при загрузці файлу:', error);
    });

function updateCounter() {
    let countEl = document.getElementById('count');
    let baketCards = JSON.parse(localStorage.getItem('baketCards') || '[]');
    if (countEl) countEl.innerText = baketCards.length;
}

updateCounter();

function addToBaket(button) {
    let card = button.closest('.main-card');
    let countEl = document.getElementById('count');

    console.log(card.querySelector('h3').innerText)

    let item = {
        img: card.querySelector('img').src,
        title: card.querySelector('h3').innerText,
        price: card.querySelector('h2').innerText,
        description: card.querySelector('p').innerText
    };

    let baketCards = JSON.parse(localStorage.getItem('baketCards') || '[]');

    baketCards.push(item);

    localStorage.setItem('baketCards', JSON.stringify(baketCards));

    countEl.innerText = baketCards.length;
}
    



























































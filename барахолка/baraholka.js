

const TITLES = ['Hi!', 'Прывiтанне!', 'Hola!', 'Ehi!', 'He!', 'Привет', 'Салам алейкум', '	Ahlan wa sahlan', 'Marhaba', 'Здравейте', 'Jo napot', 'Chao', 'Aloha', 'Geia sou', 'Гамарджоба', 'Shalom', 'Selamat', 'Godan daginn', 'Buenas dias', 'Ave', 'Lab dien', 'Sveikas', 'Guten Tag', 'Goddag', 'Dzien dobry', 'Ola', 'Namaste', 'Zdravo', 'Dobry den', 'God dag', 'Saluton', 'Tervist', 'Konnichi wa']
const TITLES2 = ['Goodbye!', 'Adiós!', 'Auf Wiedersehen', 'Arrivederci', 'Au revoir. !', 'Пока']

const LS_KEY = 'cards';
const LS_KEY2 = 'cards2';

const del = document.querySelector('.del');

const container = document.querySelector('.container');
const addBtn = document.querySelector('.add-card');

const container2 = document.querySelector('.container2');
const addBtn2 = document.querySelector('.add-card2');


// блок перменных с HTML-элементами
const dataContainer2  = document.querySelector('.data');

const generateWordsBtn = document.querySelector('.words');
const generateBgBtn = document.querySelector('.bg');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

const delayBtn = document.querySelector('.delay');
const cancelBtn = document.querySelector('.cancel');
const generateButton = document.querySelector('.button');

const PHRASES = [
    'Привет!',
    'Сегодня прекрасная погода',
    'Изучаем JavaScript',
    'Хочу пиццу',
    'Котики',
    'Шо тут происходит?',
    'Школа, отпусти...'
];
const FONTS = ['Caveat', 'Comfortaa', 'Merriweather', 'PT Mono', 'Roboto'];

// блок перменных с HTML-элементами
const dataContainer = document.querySelector('.data')

addBtn.addEventListener('click', () => {
    container.append(createCard({ shouldSave: true, type: 'hello' }))
});


del.addEventListener('click', deleteC)


addBtn2.addEventListener('click', () => {
    container2.append(createCard({ shouldSave: true, type: 'bye' }))
});




function getRandomFromArray(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]
}
function createCard(params = {}) {
    const { title, shouldSave = false, type } = params;

    const div = document.createElement('div');
    div.textContent = title || getRandomFromArray(type === 'hello' ? TITLES : TITLES2);

    if (shouldSave) {
        const key = type === 'hello' ? LS_KEY : LS_KEY2;
        const oldData = JSON.parse(localStorage.getItem(key)) || [];
        oldData.push({ title: div.textContent, })
        localStorage.setItem(key, JSON.stringify(
            oldData
        ))
    }

    return div;
}
function deleteC() {
    localStorage.clear()
    container.innerHTML = ''
}
const URL = 'https://raw.githubusercontent.com/PolinaShneider/kids-web/main/data/goods.json';



const contain = document.querySelector('.contain');
const cardTemplate = document.querySelector('#item-card');
function makeCard({title, description,  price, id}) {
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector('.item').setAttribute('data-id', id);
    card.querySelector('h1').textContent = title;
    card.querySelector('p').textContent = description;
   
    card.querySelector('.price').textContent = price;
   

    container.append(card);
}

// таймеры
let timerId;
let delayTimerId;


// получить случайный элемент из переданного массива
const getRandomEl = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

// сгенерировать случайный цвет
const getRandomColor = () => {
    const chars = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

// установить случайного цвета фон
const generateBg = () => {
    document.body.style.background = getRandomColor();
}


// добавить обработчики на кнопки ручной генерации
generateBgBtn.addEventListener('click', generateBg)













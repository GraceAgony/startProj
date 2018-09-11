const defaultState = {};
const initialState = {
    country:  {label: 'Греция', value: 44},
    transport:{ label: "Блоки / Чартеры", value: "1"},
    city: {label: 'Киев', value: 1069},
    price: {label: 'Все', value: 0},
    type: {label: 'Все', value: 0},
    firstDate: Date.now(),
    secondDate: Date.now(),
    people: {label: '2', value: '2'},
    nightFrom: {label: '1', value: 1},
    nightTo: {label: '1', value: 1},
    currency: 'грн',
    priceFrom: '1',
    priceTo: '1',
    children : [],
    "2*": false,
    "3*": false,
    "BB": false,
    "Must Have": false,
    "RO": false,
     "Авиа/Автобус": false,
     "Не отображать Promo туры": false,
     "Не отображать stop-sale": false,
     "Отель": false,
     "Отображать выбранные": false,
     "Раннее бронирование": false,
     "Только ориентированы на европейский рынок": false,
     "Только рекомендованные отели": false,
     "Туры принимающие участие в «Country Week»": false,
     "Туры принимающие участие в «Ночной охоте»": false,
    "Только эксклюзивные отели": false,
};

Object.assign(defaultState,initialState);

export default function form(state = initialState, action) {
    switch (action.type) {
        case 'SET_FORM':
            return  Object.assign(state,action.payload) ;
        case('CLEAN_FILTER'):
            console.log(defaultState);
            return Object.assign(state,defaultState);
        default:
            return state;
    }
}

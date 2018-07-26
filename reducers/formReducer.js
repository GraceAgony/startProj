
const initialState = {
    country: 'Австралия',
    transport: 'Блоки / Чартеры',
    city: 'Баку',
    price: 'Все',
    type: 'Все',
    firstDate: Date.now(),
    secondDate: Date.now(),
    people: 1,
    nightFrom: 1,
    nightTo: 1,
    currency: 'грн',
    priceFrom: '1',
    priceTo: '1',
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
};

export default function form(state = initialState, action) {
    switch (action.type) {
        case 'SET_FORM':
            return  Object.assign(state,action.payload) ;

        default:
            return state;
    }
}

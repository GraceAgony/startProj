
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
    priceTo: '1'
};

export default function form(state = initialState, action) {
    switch (action.type) {
        case 'SET_FORM':
            return  action.payload ;

        default:
            return state;
    }
}

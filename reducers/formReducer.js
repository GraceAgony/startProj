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
    currency: {label: 'EUR', value: 3},
    priceFrom: '1',
    priceTo: '1',
    children : [],
    step11 : {},
    step8: {
        'food':{},
        'tourType': {}
    },
    "2*": false,
    "3*": false,
   // "BB": false,
/*    "Must Have": false,
 //   "RO": false,
     "Авиа/Автобус": false,
     "Не отображать Promo туры": false,
     "Не отображать stop-sale": false,
     "Отель": false,
     "Отображать выбранные": false,
  //   "Раннее бронирование": false,
     "Только ориентированы на европейский рынок": false,
     "Только рекомендованные отели": false,
     "Туры принимающие участие в «Country Week»": false,
     "Туры принимающие участие в «Ночной охоте»": false,
    "Только эксклюзивные отели": false,*/
};

Object.assign(defaultState,initialState);

export default function form(state = initialState, action) {
    switch (action.type) {
        case 'SET_FORM':
            return  Object.assign(state,action.payload) ;
        case('CLEAN_FILTER'):
            return Object.assign(state,defaultState);
        case 'GET_NEWFORM':
            return {
                    'data[cv]' : state.country.value,
                    'data[adult]' : state.people.value,
                    'data[child]': state.children.length,
                    'data[childage][]':	state.children,
                    'data[ct]':	 state.city.value,
                    'data[currency]': state.currency.value,
                    'data[date_from]'	: state.firstDate.toString(),
                    'data[date_to]':	state.secondDate.toString(),
                    'data[nights_from]':	state.nightFrom,
                    'data[nights_to]':	state.nightTo,
                    'data[wavia]':	(state.transport.value===1) ? 1 : 0,
                    'data[woavia]':	(state.transport.value===1) ? 0 : 1,
                    'data[maxChildAge]':	0,
                    'data[minChildAge]':	0,
                    'data[spo]':	state.price.value,
                    'data[type]': state.type.value,
                    'data[eat][]' : Object.values(state.step8.food).map((item) => item.value),
                    'data[hoteltype][]' : Object.values(state.step8.hotel).map((item) => item.value),
                    'data[price_from]': state.priceFrom,
                    'data[price_to]':	state.priceTo,
                    'data[planeext]' : state["Авиа/Автобус"] ? 1 : 0,
                    'data[hotelext]' : state["Отель"] ? 1 : 0,
                    'data[stopsale]' : state["Не отображать stop-sale"] ? 1 : 0,

                /*
                'data[baggage]' :	0,
                 data[checkHotel]	1
                data[coefficient]	1
                 data[coefficientPerChild]	0
                 data[coefficientPerPerson]	0
                data[date_from2]	0
                 data[finishTourDate]	00.00.0000
                 data[flyData][]	[…]
                 data[psevdparam]	0
                 data[startTourDate]	00.00.0000
                 data[stopsale]	1
                 data[this_price]	1
                 data[transfers]	0
                 data[yura]	{yura}
                 is_ajax	true
                 module	choosetour
                 nightsList[]	[…]
                 page	1*/
            }
        default:
            return state;
    }
}

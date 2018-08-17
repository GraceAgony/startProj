
const initialState = {
    step1Data: new Array(),

};

export default function data(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return  action.payload ;

        default:
            return state;
    }
}
